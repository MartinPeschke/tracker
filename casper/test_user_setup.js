var casper = require('casper').create(
    {
         pageSettings: {
            loadImages:  false,        // The WebPage instance used by Casper will
            loadPlugins: false         // use these settings
        }
        , logLevel: "info"              // Only "info" level messages will be logged
        , verbose: true                 // log messages will be printed out to the console
    })
    , links = []
    , randomElement = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
    , cities = ['al', 'aloh', 'aro', 'bad', 'bat', 'ben', 'bor', 'bun', 'cot', 'dres', 'dus', 'fra', 'fre', 'fus', 'har', 'ham', 'hub', 'jen', 'kar', 'mos', 'por', 'rio', 'san', 'ula']
    , editCities = function(_casper, edit_city_link){

        _casper.waitForSelector(edit_city_link, function() {

            _casper.click(edit_city_link);
            var $input = '#edit_hometown .uiTypeahead input.textInput';
            _casper.waitForSelector($input, function() {

                var ownerId = _casper.getElementAttribute("#edit_hometown .uiTypeahead", 'id')
                    , typeahead = 'ul#typeahead_list_'+ownerId + ' li.page.selected';

                _casper.sendKeys($input, randomElement(cities), {keepFocus:true});

                _casper.waitForSelector(typeahead, function() {
                    _casper.page.sendEvent('keypress', _casper.page.event.key.Enter, null, null, 0 );
                    _casper.click("#edit_hometown + .clearfix button[type=submit]");
                    _casper.waitForSelector("#current_city", function() {});
                });
            });
        });
    }
    , adjectives = ['Numerous','Outrageous','Outstanding','Auspicious','Dark', 'Breakable', 'Adorable', 'Heartbreaking', 'Friendly', 'Powerful', 'Agonizing', 'Colossal', 'Hesitant', 'Untidy', 'Mixed', 'Adaptable', 'Exotic', 'Cheerful', 'Lowly', 'Hypnotic', 'Berserk', 'Ancient', 'Delightful', 'Warlike', 'Round', 'Profuse', 'Impartial', 'Tame', 'Makeshift', 'Alike', 'Knowing', 'Erratic', 'Clean', 'Groovy', 'Fragile', 'Strange', 'Lopsided', 'Repulsive', 'Harsh', 'Lumpy', 'Terrific', 'Left', 'Keen', 'Unequaled', 'Oafish', 'Nervous', 'Abstracted', 'Bawdy', 'Responsible', 'Quack', 'Descriptive', 'Tricky', 'Insidious', 'Decisive', 'Limping', 'Bright', 'Equable', 'Craven', 'Good', 'Spotless', 'Vengeful', 'Resolute', 'Teeny-tiny', 'Tan', 'Three', 'Resonant', 'Ahead', 'Vast', 'Defective', 'Precious', 'Aloof', 'Vacuous', 'Obeisant', 'Unique', 'Capricious', 'Giant', 'Lean', 'Brief', 'Fumbling', 'Hanging', 'Sloppy', 'Hissing', 'Adhesive', 'Squealing', 'Wry', 'Bustling', 'Ubiquitous', 'Spotty', 'Petite', 'Right', 'Thundering', 'Stale', 'Grateful', 'Minor', 'Womanly', 'Abrupt', 'Soft', 'Stereotyped', 'Wandering', 'Ripe', 'Piquant', 'Necessary', 'Black', 'Uppity', 'Political', 'Ambitious', 'Obese', 'Freezing', 'Maddening', 'Hideous', 'Lively', 'Solid', 'Taboo', 'Fallacious', 'Hysterical', 'Magenta', 'Gullible', 'Abortive', 'Permissible', 'Successful', 'Crazy', 'Joyous', 'Legal', 'Flawless', 'Boorish', 'Eatable', 'Literate', 'Fantastic', 'Gusty', 'Faded', 'Possible', 'Rare', 'Labored', 'Equal', 'Feeble', 'Sparkling', 'Thoughtless', 'Green', 'Even', 'Cultured', 'Used', 'Condemned', 'Married', 'Debonair', 'Striped', 'Spooky', 'Remarkable', 'Stormy', 'Amazing', 'Quixotic', 'Certain', 'Stingy', 'Apathetic', 'Stereotyped', 'Wandering', 'Ripe', 'Piquant', 'Necessary', 'Black', 'Uppity', 'Near', 'Unwieldy', 'Easy', 'Wrong', 'Efficacious', 'Crooked', 'Guarded', 'Courageous', 'Moldy', 'Young', 'Talented', 'Sore', 'Steep', 'Bouncy', 'Pumped', 'Lavish', 'Curved', 'Two', 'Heavenly', 'Relieved', 'Low', 'Spiteful', 'Naive', 'False', 'Redundant', 'Loud', 'Possessive', 'Silly', 'Voracious', 'Angry', 'Weary', 'Abounding', 'Needless', 'Few', 'Psychedelic', 'Bewildered', 'Flat', 'Squalid', 'Truculent', 'Economic', 'Unwritten', 'Noiseless']
    , generateName = function (name){
        return "The " + randomElement(adjectives) + " " + name;
    }
    , create_brand_page_and_like = function(_casper){
        _casper.thenClick("#userNavigationLabel");
        _casper.thenClick('a.navSubmenu[href^="/pages/create/"]', function FacebookGoToPageCreationWizard(){
            _casper.capture("screen1.png");
            _casper.click("#product");
            _casper.waitForSelector("#product form", function SelectPageTypeProduct() {
                _casper.fill("#product form", {"category":'2209', 'page_name': product_name, "official_check":true});
                _casper.capture("screen2.png");
                _casper.click("#product form input[type=submit]", function SubmitProductPageDescription(){});

                // fill in page details
                _casper.waitForUrl(/pages\/getting_started/
                    , function then(){

                        _casper.fill("#content form", {
                            'blurb':"A great resource for anything related to " +product_name+"!"
                            ,is_community:"no"
                        });
                        _casper.capture("wizard_step_1.png");
                        _casper.click("#content form input[type=submit]");
                        _casper.waitForUrl(/step=profile_pic$/
                            , function then(){
                                _casper.capture("wizard_step_2.png");
                                _casper.click("#content .UIFullPage_Container .uiButton.uiButtonLarge:last-child");
                                _casper.waitForUrl(/step=favorite$/
                                    , function then(){
                                        _casper.capture("wizard_step_3.png");
                                        _casper.click("#content .UIFullPage_Container .rfloat a:last-child");
                                        _casper.waitForUrl(/step=funding_source$/
                                            , function then(){
                                                _casper.capture("wizard_step_4.png");
                                                _casper.waitForSelector("#content .UIFullPage_Container .rfloat a:last-child", function then(){
                                                    _casper.click("#content .UIFullPage_Container .rfloat a:last-child");

                                                    _casper.waitForSelector(".PageLikeButton input[value=Like]", function then(){
                                                        _casper.click(".PageLikeButton input[value=Like]");
                                                        _casper.wait(1000, function then(){
                                                            _casper.capture("wizard_step_done.png");
                                                        });
                                                    })
                                                });
                                            });
                                    });
                            });
                    }
                    , function timeout(){
                        _casper.capture("screen3_err.png");
                    }
                    , 10000
                )
            });
        });
    }

    ;

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

    for(var i=0;i<links.length;i++){
        var link = links[i];

        var edit_url = 'https://www.facebook.com/profile.php?id='+link['id']+'&sk=info&edit=eduwork&ref=update_info_button';

//        var product_name = "";
//        casper.thenOpen("http://www.ykombinator.com/", function getBrandName(){
//            product_name = generateName(this.fetchText('#name cufontext'));
//            casper.echo("PAGE NAME: "+ product_name);
//        });

        casper.thenOpen(link.href, function LogUserIntoFacebook(){
            casper.echo('----->' + this.getTitle());
        });

        casper.thenOpen(edit_url, function(){
            editCities(casper, ".experienceImageBlock .experienceContentLarge a[href*=current_city]");
            editCities(casper, ".experienceImageBlock .experienceContentLarge a[href*=hometown]");
        });

//        create_brand_page_and_like(casper, product_name);
    }
});

casper.run();