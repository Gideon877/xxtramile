'use strict';

$(document).ready(function() {
  $(".ui.accordion").accordion();

  const card = document.getElementById('card');
  const showCardScript = document.getElementById('showCardScript');
  const accordion = document.getElementById('accordion');
  const statements = document.getElementById('statementsScript');
  const showArtists = document.getElementById('showArtists');
  const artistScript = document.getElementById('artistScript');
  const footer = document.getElementById('footer');
  const footerScript = document.getElementById('footerScript');


  let cardTemplate, accordionTemplate, cardTemplateTag, accordionTemplateTag, artistsTemplate, artistsTag, footerTemplate, footerTag;

  if (artistScript) {
    artistsTemplate = Handlebars.compile(artistScript.innerHTML);
    artistsTag = artistsTemplate({
      data: Artists || [{}]
    });
    if(showArtists) showArtists.innerHTML = artistsTag;
  } 

  if (showCardScript) {
    cardTemplate = Handlebars.compile(showCardScript.innerHTML);
    cardTemplateTag = cardTemplate({
      data: Founders || [{}]
    });
    if(card) card.innerHTML = cardTemplateTag;
  } 

  if (footerScript) {
    footerTemplate = Handlebars.compile(footerScript.innerHTML);
    footerTag = footerTemplate({
      data: Footer
    });
    if(footer) footer.innerHTML = footerTag;
  }

  if (statements) {
    accordionTemplate = Handlebars.compile(statements.innerHTML);
    accordionTemplateTag = accordionTemplate({
      data: About || [{}],
      Overview
    });
    if(accordion) accordion.innerHTML = accordionTemplateTag;
  }

});

// $(document).ready(function() {
//     $('.nav-tabs > li > a').click(function(event){
//     event.preventDefault();//stop browser to take action for clicked anchor

//     //get displaying tab content jQuery selector
//     var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');

//     //find actived navigation and remove 'active' css
//     var actived_nav = $('.nav-tabs > li.active');
//     actived_nav.removeClass('active');

//     //add 'active' css into clicked navigation
//     $(this).parents('li').addClass('active');

//     //hide displaying tab content
//     $(active_tab_selector).removeClass('active');
//     $(active_tab_selector).addClass('hide');

//     //show target tab content
//     var target_tab_selector = $(this).attr('href');
//     $(target_tab_selector).removeClass('hide');
//     $(target_tab_selector).addClass('active');
//      });
//   });
