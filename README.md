# Vuetify Confirm Box
## Installation
Install the package through `npm`
```
npm install vuetify-confirm-box
```
After the package installation is done inside plugins/vuetify.js add the following code. <br>

```
Vue.use(VuetifyConfirmBox, { vuetify }); // Where vuetify is an instance of imported Vuetify vuetify.js file
```
**Note:** **Do NOT** forget to add the `vuetify-confirm-box` inside vue.config.js under `transpileDependencies`.
## Usage
Now from every vue component in your app, you can open the `confirmation box` with the following codes.
```
this.$confirm.info("a message", "a title {optional}"); //shows an info box
this.$confirm.warning("a message", "a title {optional}"); //shows a warning box
this.$confirm.success("a message", "a title {optional}"); //shows a success box
this.$confirm.error("a message", "a title {optional}"); //shows an error box
```
To check whether the user confirmed or rejected you will do as follow:
```
this.$confirm
    .warning("Some message")
    .then(() => { alert("Confirmed") })
    .catch(() => { alert("Rejected") }); // This also may throw if something inside your "then" implementation goes wrong.
```
**Hint:** To all the above methods, there is a third parameter that you can pass which will give you the ability to do more customizations. `options` are described in below section.
### Options
* **actionsNegativeToPositive:** You can set this option in two places either on each invoke or when configuring the vuetify plugin and adding this component to vuetify. **This option**  will let you to have the negative action button on the left side of the positive action button if any texts exist.
* **allowHtml:** This options lets you to render html inside your message content. Take care about harmful content though ;)
* **buttonFalseColor:** Set the color for the negative action button. `default: secondary`
* **buttonTrueColor:** Set the color for the positive action button. `default: primary`
* **buttonFalseFlat:** Give the negative action button a `flat` style. `default: true`
* **buttonTrueFlat:** Give the positive action button a `flat` style. `default: false`
* **buttonFalseText:** Set the text for the negative action button.
* **buttonTrueText:** Set the text for the positive action button.
* **cancelWithEscape:** If true the user can exit with pressing `ESC`. `default: true`
* **color:** Will set the `background-color` of the whole box.
* **confirmWithEnter:** If true the user can confirm the box by pressing `Enter`. `default: false`
* **persistent:** This will prevent the user to exit the confirmation box by clicking outside of the box. `default: false`
* **showIcon:** This will toggle the toolbar icon visibility `default: true`
* **showToolbar:** This will toggle the toolbar it self `default: true`
* **smartActions:** Setting `smartActions` is possible globaly and per component call like `actionsNegativeToPositive` option. **This option** will order the action buttons based on the first alphabet. so for example it will render **['Cancel', 'Ok']** like `Cancel` and `Ok` but **['Yes', 'No']** like `No` then `Yes`.
* **theme:** Set the confirmation box theme to `dark` or `light`. `default: light`
* **width:** Set then maximum width for the box. `default: 450`