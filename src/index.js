import VuetifyConfirmBox from './VuetifyConfirmBox.vue';

export default function install(Vue, options = {}) {
    const property = '$confirm';
    const vuetify = options.vuetify;
    delete options.vuetify;
    if(!vuetify) {
        console.warn("The module VuetifyConfirmBox needs vuetify instance. Use Vue.use(VuetifyConfirmBox, { vuetify })");
        return;
    }
    const Ctor = Vue.extend(Object.assign({ vuetify }, VuetifyConfirmBox));
    function createDialogComponent(options) {
        const container = document.querySelector('[data-app=true]') || document.body;
        return new Promise((resolve, reject) => {
            const component = new Ctor(Object.assign({}, {
                propsData: Object.assign({}, Vue.prototype[property].options, options),
                destroyed: () => {
                    container.removeChild(component.$el);
                    if(component.value === true) 
                        resolve();
                    else
                        reject();
                }
            }));
            container.appendChild(component.$mount().$el);
        });
    }

    function show(message, title = null, options = {}) {
        options.message = message;
        options.title = title;
        return createDialogComponent(options);
    }

    const messageTypes = {
        info(message, title, options = {}) {
            options.type = 'info';
            return show(message, title , options);
        },
        warning(message, title, options = {}) {
            options.type = 'warning';
            return show(message, title , options);
        },
        success(message, title, options = {}) {
            options.type = 'success';
            return show(message, title , options);
        },
        error(message, title, options = {}) {
            options.type = 'error';
            return show(message, title , options);
        }
    }

    Vue.prototype[property] = messageTypes;
    Vue.prototype[property].options = options || {};
}

if(typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install);
}