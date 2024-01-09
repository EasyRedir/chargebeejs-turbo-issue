var cbInstance = Chargebee.init({
  site: process.env.CB_SITE || 'easyredir-test',
  publishableKey: process.env.CB_PUBLISHABLE_KEY || 'test_hAWaJwxhrYUPDR1QxzL6UsHS2jYzcuryQ'
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
