var casper = require('casper').create(
    {
         pageSettings: {
            loadImages:  false,        // The WebPage instance used by Casper will
            loadPlugins: false         // use these settings
        }
        , logLevel: "info"              // Only "info" level messages will be logged
        , verbose: true                 // log messages will be printed out to the console
        , timeout: 600000
    })
    , links = []
    , randomElement = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
    , cities = ['al', 'aloh', 'aro', 'bad', 'bat', 'ben', 'bor', 'bun', 'cot', 'dres', 'dus', 'fra', 'fre', 'fus', 'har', 'ham', 'hub', 'jen', 'kar', 'mos', 'por', 'rio', 'san', 'ula']

    , editLocations = function(_casper, selector, fields){

        _casper.waitForSelector(selector, function WaitForEditableSectionToOpen() {
            var addLocation = function(selectors){
                if(selectors.length){

                    var section = selectors[0]
                        , $input = section + ' input.textInput'
                        , ownerId = _casper.getElementAttribute(section + " .uiTypeahead", 'id')
                        , typeahead = 'ul#typeahead_list_'+section.substr(1) + ' li.page.selected'
                        , confirm = section + ' .fbProfileEditExperiences input[name="save"]'
                        , keys = randomElement(cities);

                    _casper.capture("screen1.png");
                    _casper.sendKeys($input, keys, {keepFocus:true});
                    _casper.echo('----->INPUT ' + keys +' ------- into ----> ' + section + ' ---- ' + typeahead);

                    _casper.waitForSelector(typeahead
                        , function WaitForTypeAheadToOpen() {
                            _casper.capture("screen2.png");

                            _casper.page.sendEvent( 'keypress', _casper.page.event.key.Enter, null, null, 0 );

                            _casper.waitForSelector(confirm, function WaitForSpecificationToOpen() {
                                _casper.click(confirm);
                                _casper.capture("screen3.png");
                                addLocation(selectors.slice(1));
                            }
                            , function onTimeout(){
                                _casper.capture("screen_timeout3.png");
                            }
                            , 45000
                            );
                        }
                        , function onTimeout(){
                            _casper.capture("screen_timeout2.png");
                        }
                    );

                } else {
                    _casper.click("#pagelet_eduwork #pagelet_eduwork a.profileEditButton");
                    _casper.waitForSelector("#current_city", function SubmitAllChangedEntries() {});
                }
            };

            addLocation(fields);
        }
        , function onTimeout(){
            _casper.capture("screen_timeout1.png");
        });
    };

function getOwnerIdTA(query) {
    return function() {
        return document.querySelector(query).id;
    }
}
function getLinks() {
    var links = document.querySelectorAll('.fb-test-user');
    return  Array.prototype.map.call(links, function(el){
        return {
            id: el.getAttribute('data-entity-id')
            , href: el.querySelector("a").getAttribute("href")
        };
    });
}



casper.start('http://www.facebook.com', function LoadFacebookSoTestUsersCanLogin(){});

casper.thenOpen('http://local.trackerdev.azurewebsites.net/', function getFacebookLoginLinks() {
    links = this.evaluate(getLinks);

    for(var i=0;i<1;i++){
        var link = links[i];

        var edit_url = 'https://www.facebook.com/profile.php?id='+link['id']+'&sk=info&edit=eduwork&ref=update_info_button';

        casper.thenOpen(link.href, function LogUserIntoFacebook(){
            casper.echo('----->' + this.getTitle());
        });
        casper.thenOpen(edit_url, function EditLocationsStep(){
            editLocations(casper, "#pagelet_edit_eduwork", ["#add_college", "#add_work", "#add_high_school"]);
        });
    }
});

casper.run();