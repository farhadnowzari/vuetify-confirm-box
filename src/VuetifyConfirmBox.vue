<template>
    <v-dialog 
        @keydown.enter="escapePressed()"
        @keydown.esc="enterPressed"
        :max-width="width" 
        :persistent="persistent" 
        value="true"
        eager>
        <v-card 
            :color="color" 
            :dark="themeDark"
            :light="themeLight"
            class="pa-2"
            tile>
            <v-toolbar 
                :color="toolbarColor"
                :dark="themeDark"
                :light="themeLight"
                class="pa-1"
                dense
                flat
                v-if="showToolbar">
                <v-icon left :color="themeDark ? 'white' : type" v-if="showIcon">{{ icon }}</v-icon>
                <v-toolbar-title :class="{ 'white--text': themeDark }" v-if="Boolean(title)">{{ title }}</v-toolbar-title>
                <v-spacer/>
                <v-btn @click="choose(false)" small icon right text><v-icon>mdi-close</v-icon></v-btn>
            </v-toolbar>
            <v-card-text class="body-1 text-body-1 py-3" v-if="!allowHtml">{{ message }}</v-card-text>
            <v-card-text class="body-1 text-body-1 py-3" v-else v-html="message"></v-card-text>
            <v-card-actions v-if="actionsPositiveToNegative">
                <v-spacer/>
                <v-btn
                    v-if="Boolean(buttonTrueText)"
                    :color="buttonTrueColor"
                    :text="buttonTrueFlat"
                    @click="choose(true)">{{ buttonTrueText }}</v-btn>
                <v-btn
                    v-if="Boolean(buttonFalseText)"
                    :color="buttonFalseColor"
                    :text="buttonFalseFlat"
                    @click="choose(false)">{{ buttonFalseText }}</v-btn>
            </v-card-actions>
            <v-card-actions v-else>
                <v-spacer/>
                <v-btn
                    v-if="Boolean(buttonFalseText)"
                    :color="buttonFalseColor"
                    :text="buttonFalseFlat"
                    @click="choose(false)">{{ buttonFalseText }}</v-btn>
                <v-btn
                    v-if="Boolean(buttonTrueText)"
                    :color="buttonTrueColor"
                    :text="buttonTrueFlat"
                    @click="choose(true)">{{ buttonTrueText }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { VCard, VCardActions, VCardText, VDialog, VIcon, VToolbar, VToolbarTitle, VSpacer, VBtn } from 'vuetify/lib'
export default {
    components: {
        VCard,
        VCardActions,
        VCardText,
        VDialog,
        VIcon,
        VToolbar,
        VToolbarTitle,
        VSpacer,
        VBtn
    },
    computed: {
        actionsPositiveToNegative() {
            if(this.actionsNegativeToPositive) return false;
            if(!this.smartActions) return true;
            if(!this.buttonTrueText || !this.buttonFalseText) return true;
            return this.buttonTrueText[0] <= this.buttonFalseText[0];
        },
        icon() {
            if(this.type === 'info') {
                return 'mdi-alert-circle-outline';
            }
            if(this.type === 'warning') {
                return 'mdi-alert-outline';
            }
            if(this.type === 'success') {
                return 'mdi-check-circle-outline';
            }
            if(this.type === 'error') {
                return 'mdi-close-octagon-outline';
            }
            return null;
        },
        themeDark() { return this.theme === 'dark' },
        themeLight() { return this.theme === 'light' },
        toolbarColor() {
            if(this.color !== null) {
                return this.color;
            }
            if(this.themeDark)
                return 'text--white';
            return 'text--black';
        },
    },
    data() {
        return {
            toggler: false,
            value: false
        }
    },
    methods: {
        choose(value) {
            this.$emit('result', value);
            this.value = value;
            this.$destroy();
        },
        enterPressed(e) {
            if(this.confirmWithEnter) {
                e.stopPropagation();
                this.choose(false);
            }
        },
        escapePressed() {
            if(this.cancelWithEscape)
                this.choose(true);
        },
    },
    name: 'vuetify-confirm-box',
    props: {
        actionsNegativeToPositive: Boolean,
        allowHtml: Boolean,
        buttonFalseColor: {
            type: String,
            default: 'secondary'
        },
        buttonTrueColor: {
            type: String,
            default: 'primary'
        },
        buttonFalseFlat: {
            type: Boolean,
            default: true
        },
        buttonTrueFlat: {
            type: Boolean,
            default: false
        },
        buttonFalseText: String,
        buttonTrueText: String,
        cancelWithEscape: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
            default: null
        },
        confirmWithEnter: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            required: true
        },
        persistent: Boolean,
        showIcon: {
            type: Boolean,
            default: true
        },
        showToolbar: {
            type: Boolean,
            default: true
        },
        smartActions: Boolean,
        theme: {
            type: String, // dark | light
            default: 'light'
        },
        title: String,
        type: {
            type: String, // info | warning | success | error
            required: true
        },
        width: {
            type: Number,
            default: 450
        }
    }
}
</script>

<style scoped>
.border-bottom {
    border-bottom: 1px solid #eee !important;
}
</style>