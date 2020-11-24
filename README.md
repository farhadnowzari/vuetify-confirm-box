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
Now overall your app you can open the `confirmation box` with the following code from withing other `vue components`.
```
this.$confirm.info("a message", "a title {optional}"); //shows an info box
this.$confirm.warning("a message", "a title {optional}"); //shows a warning box
this.$confirm.success("a message", "a title {optional}"); //shows a success box
this.$confirm.error("a message", "a title {optional}"); //shows an error box
```
**Hint:** To all the above methods, there is a third parameter that you can pass which will give you the ability to do more customizations. `options` are described in below section.
### Options

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
* **showIcon:** This will toggle the toolbar icon visibility.
* **theme:** Set the confirmation box theme to `dark` or `light`. `default: light`
* **width:** Set then maximum width for the box. `default: 450`