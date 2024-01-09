var cbInstance = Chargebee.init({
  site: "chargebee-site-id",
  publishableKey: "chargebee-publishable-key"
})

var options = {
  icon: true,
  classes: {
    focus: 'focus',
    invalid: 'invalid',
    empty: 'empty',
    complete: 'complete',
  }
}

var mountPoint = document.getElementById('card-combined');
if (mountPoint) {
  cbInstance.load("components").then(() => {
    var cardComponent = cbInstance.createComponent("card", options).at("#card-combined");
    cardComponent.mount();
  });
}

document.addEventListener("turbo:load", function() {
  console.log('page turbo loaded');
})

document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM content loaded');
});
