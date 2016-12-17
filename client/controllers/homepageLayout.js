Template.homepageLayout.rendered = function () {
  $(".button-collapse").sideNav();
};

Template.homepageLayout.events({
    "click ul#mobile-nav.side-nav li a": function(event){
      $(".button-collapse").sideNav("hide");
    }
});
// @import "{poetic:materialize-scss}/sass/components/_color.scss";
// $primary-color: color("grey", "darken-4");
// @import "{poetic:materialize-scss}/sass/materialize.scss";
// @import "./stylesheets/_stickyfooter.scss";
// @import "./stylesheets/_loading.scss";
// @import "./stylesheets/_navbar.scss";
// @import "./stylesheets/_camera.scss";