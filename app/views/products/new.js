import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function () {
    $("#productForm").validate({
      rules: {
        productName: 'required',
        productDesc: 'required',
        productMadeIn: 'required'
      },
      messages: {
        productName: "Please enter the product name",
        productDesc: "Please add some bried description",
        productMadeIn: 'Please select the country'
      }
    });
  },
  // click: function (event) {
  //   console.warn("DOM Click event");
  //   if (event.target.name === "saveBtn") {
  //     if ($("#productForm").valid()) {
  //       this.get("controller").send("save");
  //     }
  //   }
  // }
});
