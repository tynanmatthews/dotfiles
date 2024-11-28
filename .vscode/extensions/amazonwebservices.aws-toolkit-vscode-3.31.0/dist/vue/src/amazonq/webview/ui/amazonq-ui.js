var rt=Object.defineProperty;var it=(Me,ve,Ce)=>ve in Me?rt(Me,ve,{enumerable:!0,configurable:!0,writable:!0,value:Ce}):Me[ve]=Ce;var be=(Me,ve,Ce)=>(it(Me,typeof ve!="symbol"?ve+"":ve,Ce),Ce),ot=(Me,ve,Ce)=>{if(!ve.has(Me))throw TypeError("Cannot "+Ce)};var _e=(Me,ve,Ce)=>{if(ve.has(Me))throw TypeError("Cannot add the same private member more than once");ve instanceof WeakSet?ve.add(Me):ve.set(Me,Ce)};var Re=(Me,ve,Ce)=>(ot(Me,ve,"access private method"),Ce);(()=>{var Me={9714:X=>{(function(ke,Te){X.exports=Te()})(self,()=>(()=>{var ke={7703:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,':root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: calc(var(--mynah-sizing-base) * 1);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-chat-wrapper-spacing: var(--mynah-sizing-4);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-alternate: var(--mynah-color-button-reverse);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-toggle: var(--vscode-sideBar-background);--mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit));--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: #0971d3;--mynah-color-status-success: #037f03;--mynah-color-status-warning: #b2911c;--mynah-color-status-error: #d91515;--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-card-bg: var(--vscode-editor-background);--mynah-card-bg-alternate: var(--mynah-color-button);--mynah-shadow-button: none;--mynah-shadow-card: none;--mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);--mynah-font-size-xxsmall: 0.8rem;--mynah-font-size-xsmall: 0.9rem;--mynah-font-size-small: 1rem;--mynah-font-size-medium: 1.125rem;--mynah-font-size-large: 1.25rem;--mynah-line-height: 1.5rem;--mynah-syntax-code-line-height: 1.5rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-input-radius: var(--mynah-sizing-1);--mynah-card-radius-corner: 0;--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);--mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1)}.mynah-button{border:none;min-width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);border-radius:var(--mynah-button-radius);background-color:var(--mynah-color-button);color:var(--mynah-color-button-reverse);box-shadow:var(--mynah-shadow-button);cursor:pointer;transition:var(--mynah-very-short-transition);display:inline-flex;justify-content:center;align-items:center;outline:none;overflow:hidden;position:relative;transform:translate3d(0, 0, 0) scale(1.00001);padding-left:var(--mynah-sizing-2);padding-right:var(--mynah-sizing-2);gap:var(--mynah-sizing-1);filter:brightness(0.925);opacity:1;line-height:var(--mynah-line-height);margin-top:var(--mynah-border-width);margin-bottom:var(--mynah-border-width)}.mynah-button:after{content:"";pointer-events:none;transition:var(--mynah-very-short-transition);opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;filter:brightness(1.35) saturate(0.75);opacity:0;border-radius:inherit;background-color:currentColor;transform:translate3d(-7%, 0, 0) scale(0.93)}.mynah-button[disabled=disabled]{opacity:.25 !important;pointer-events:none}.mynah-button.mynah-button-secondary{background-color:rgba(0,0,0,0);color:currentColor;box-sizing:border-box;box-shadow:none}.mynah-button.mynah-button-secondary.mynah-button-border{border:var(--mynah-border-width) solid currentColor !important}.mynah-button.mynah-button-secondary.status-success{color:var(--mynah-color-status-success) !important}.mynah-button.mynah-button-secondary.status-error{color:var(--mynah-color-status-error) !important}.mynah-button.mynah-button-secondary.status-warning{color:var(--mynah-color-status-warning) !important}.mynah-button.mynah-button-secondary.status-info{color:var(--mynah-color-status-info) !important}.mynah-button:active,.mynah-button:focus-visible,.mynah-button:hover{filter:brightness(1)}.mynah-button:active:after,.mynah-button:focus-visible:after,.mynah-button:hover:after{transform:translate3d(0%, 0, 0);opacity:.15}.mynah-button.mynah-icon-button{width:var(--mynah-sizing-10);height:var(--mynah-sizing-10);border-radius:0}.mynah-button>span{white-space:nowrap;transition:var(--mynah-very-long-transition);overflow:hidden;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis}',"",{version:3,sources:["webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/components/_button.scss"],names:[],mappings:"AA6JA,MACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CAMI,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAGJ,mDAAA,CACA,gCAAA,CACA,yBAAA,CAGI,oDAAA,CAAA,+DAAA,CAAA,yDAAA,CAAA,yDAAA,CAAA,0DAAA,CAAA,wDAAA,CAGJ,kDAAA,CACA,mHAAA,CACA,wCAAA,CAEA,sGAAA,CAEA,gDAAA,CACA,qCAAA,CAEA,sDAAA,CACA,gDAAA,CAGI,8DAAA,CAAA,sEAAA,CAAA,qFAAA,CAAA,sEAAA,CAAA,2EAAA,CAAA,oEAAA,CAAA,8DAAA,CAAA,yEAAA,CAAA,oGAAA,CAGJ,iEAAA,CACA,4FAAA,CAII,kCAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,mCAAA,CAGJ,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,gDAAA,CACA,oDAAA,CAEA,2BAAA,CACA,yBAAA,CACA,0DAAA,CAGI,iCAAA,CAAA,gCAAA,CAAA,6BAAA,CAAA,kCAAA,CAAA,gCAAA,CAGJ,2BAAA,CACA,uCAAA,CAEA,0CAAA,CACA,2CAAA,CACA,6BAAA,CACA,4CAAA,CCrKA,sEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,kEAAA,CAAA,mEAAA,CDsLA,oEAAA,CACA,oEAAA,CACA,kEAAA,CACA,mEAAA,CACA,+EAAA,CACA,oHAAA,CEzPJ,cACI,WAAA,CACA,+BAAA,CACA,4BAAA,CACA,wCAAA,CACA,0CAAA,CACA,uCAAA,CACA,qCAAA,CACA,cAAA,CACA,6CAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,6CAAA,CACA,kCAAA,CACA,mCAAA,CACA,yBAAA,CACA,wBAAA,CACA,SAAA,CACA,oCAAA,CACA,oCAAA,CACA,uCAAA,CACA,oBACI,UAAA,CACA,mBAAA,CACA,6CAAA,CACA,SAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,sCAAA,CACA,SAAA,CACA,qBAAA,CACA,6BAAA,CACA,4CAAA,CAEJ,iCACI,sBAAA,CACA,mBAAA,CAEJ,qCACI,8BAAA,CACA,kBAAA,CACA,qBAAA,CASA,eAAA,CARA,yDACI,8DAAA,CAGA,oDACI,kDAAA,CADJ,kDACI,gDAAA,CADJ,oDACI,kDAAA,CADJ,iDACI,+CAAA,CAKZ,qEAGI,oBAAA,CACA,uFACI,+BAAA,CACA,WAAA,CAGR,gCACI,4BAAA,CACA,6BAAA,CACA,eAAA,CAEJ,mBACI,kBAAA,CACA,4CAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA,CACA,sBAAA",sourcesContent:[`@import './mixins';
/**
 * Flatten a map or list into a string
 * @param {any} $value - The value to flatten
 * @returns {string} The flattened value
 */
@function flatten($value) {
    @if type-of($value) == 'map' {
        $result: "";
        @each $key, $val in $value {
            $flattened-val: flatten($val);
            $result: "#{$result}#{$key}: #{$flattened-val}; ";
        }
        @return $result;
    } @else if type-of($value) == 'list' {
        $result: "";
        @each $item in $value {
            $flattened-item: flatten($item);
            $result: "#{$result}#{$flattened-item}, ";
        }
        @return $result;
    } @else {
        @return $value;
    }
}

/**
 * Export a map as CSS variables
 * @param {map} $map - The map to export
 * @param {string} $name - The name of the export
 */
@mixin export-map($map, $name) {
    :export {
        #{$name}: "#{flatten($map)}";
    }
}

/**
 * Color variables
 */
$mynah-color-text: (
    'default': var(--vscode-foreground),
    'alternate': var(--mynah-color-button-reverse),
    'strong': var(--vscode-input-foreground),
    'weak': var(--vscode-disabledForeground),
    'link': var(--vscode-textLink-foreground),
    'input': var(--vscode-input-foreground)
);

/**
 * Statuses
 */
$mynah-statuses: ("success", "error", "warning", "info");

/**
 * Status variables
 */
$mynah-status-colors: (
    'info': #0971d3,
    'success': #037f03,
    'warning': #b2911c,
    'error': #d91515
);

/**
 * Font variables
 */
$mynah-font-sizes: (
    'xxsmall': 0.8rem,
    'xsmall': 0.9rem,
    'small': 1rem,
    'medium': 1.125rem,
    'large': 1.25rem
);

/**
 * Padding sizes
 */
$mynah-padding-sizes: (
  'none': 0,
  'small': 1,
  'medium': 3,
  'large': 5,
);

/**
 * Transition variables
 */
$mynah-transitions: (
    'bottom-panel': (850, cubic-bezier(0.25, 1, 0, 1)),
    'very-short': (600, cubic-bezier(0.25, 1, 0, 1)),
    'very-long': (1650, cubic-bezier(0.25, 1, 0, 1)),
    'short': (550, cubic-bezier(0.85, 0.15, 0, 1)),
    'short-rev': (580, cubic-bezier(0.35, 1, 0, 1))
);

/**
 * Syntax highlighting variables
 */
 $mynah-syntax-colors: (
    'bg': var(--vscode-terminal-dropBackground),
    'variable': var(--vscode-debugTokenExpression-name),
    'function': var(--vscode-gitDecoration-modifiedResourceForeground),
    'operator': var(--vscode-debugTokenExpression-name),
    'attr-value': var(--vscode-debugIcon-stepBackForeground),
    'attr': var(--vscode-debugTokenExpression-string),
    'property': var(--vscode-terminal-ansiCyan),
    'comment': var(--vscode-debugConsole-sourceForeground),
    'code': var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit))
);

/**
 * Token styles
 */
 $mynah-token-styles: (
    'comments': (color: var(--mynah-color-syntax-comment)),
    'punctuation': (color: currentColor),
    'namespace': (opacity: 0.7),
    'properties': (color: var(--mynah-color-syntax-property)),
    'attributes': (color: var(--mynah-color-syntax-attr)),
    'operators': (color: var(--mynah-color-syntax-operator)),
    'attr-values': (color: var(--mynah-color-syntax-attr-value)),
    'functions': (color: var(--mynah-color-syntax-function), font-weight: 500),
    'variables': (color: var(--mynah-color-syntax-variable), font-weight: 500),
    'bold': (font-weight: bold),
    'italic': (font-style: italic),
    'entity': (cursor: help)
);

/**
 * Syntax token styles
 */
$mynah-syntax-token-styles: (
    'comments': (comment, prolog, doctype, cdata),
    'punctuation': (punctuation),
    'namespace': (namespace),
    'properties': (property, tag, boolean, number, constant, symbol, inserted),
    'attributes': (selector, attr-name, string, char, builtin, deleted),
    'operators': (operator, entity, url),
    'attr-values': (atrule, attr-value, class-name, keyword),
    'functions': (function),
    'variables': (regex, important, variable),
    'bold': (important, bold),
    'italic': (italic),
    'entity': (entity)
);

@include export-map($mynah-color-text, 'mynah-color-text');
@include export-map($mynah-statuses, 'mynah-statuses');
@include export-map($mynah-syntax-colors, 'mynah-syntax-colors');
@include export-map($mynah-status-colors, 'mynah-status-colors');
@include export-map($mynah-font-sizes, 'mynah-font-sizes');
@include export-map($mynah-padding-sizes, 'mynah-padding-sizes');
@include export-map($mynah-transitions, 'mynah-transitions');
@include export-map($mynah-syntax-token-styles, 'mynah-syntax-token-styles');


:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);

    /**
     * Sizing variables
     */
    @for $i from 1 through 18 {
        --mynah-sizing-#{$i}: calc(var(--mynah-sizing-base) * #{$i});
    }

    --mynah-chat-wrapper-spacing: var(--mynah-sizing-4);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    @each $name, $value in $mynah-color-text {
        --mynah-color-text-#{$name}: #{$value};
    }

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    --mynah-color-toggle: var(--vscode-sideBar-background);
    --mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);

    @each $name, $value in $mynah-syntax-colors {
        --mynah-color-syntax-#{$name}: #{$value};
    }

    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));


    @each $name, $value in $mynah-status-colors {
        --mynah-color-status-#{$name}: #{$value};
    }

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-card-bg: var(--vscode-editor-background);
    --mynah-card-bg-alternate: var(--mynah-color-button);

    --mynah-shadow-button: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);

    @each $name, $value in $mynah-font-sizes {
        --mynah-font-size-#{$name}: #{$value};
    }

    --mynah-line-height: 1.5rem;
    --mynah-syntax-code-line-height: 1.5rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-input-radius: var(--mynah-sizing-1);
    --mynah-card-radius-corner: 0;
    --mynah-button-radius: var(--mynah-sizing-1);

    /* Transition variables */
    // TODO this block doesn't give the transition animations we originally have
    /* Output from this is as follows which is not matching the ones we need to have down below
    --mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);
    */
    @each $name, $values in $mynah-transitions {
        @include mynah-transition($name, nth($values, 1), nth($values, 2));
    }


    /* Hand added transitions */
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1);
}
`,`@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

/**
 * @param {string} $size - The size of the font.
 * @param {string} $weight - The weight of the font.
 * @param {string} $family - The family of the font.
 */
@mixin mynah-font($size, $weight: normal, $family: var(--mynah-font-family)) {
    font-size: $size;
    font-weight: $weight;
    font-family: $family;
}

/**
 * @param {string} $text-color - The color of the text.
 * @param {string} $bg-color - The background color.
 */
@mixin mynah-color($text-color, $bg-color) {
    color: $text-color;
    background-color: $bg-color;
}

/**
 * @param {string} $margin - The margin of the element.
 * @param {string} $padding - The padding of the element.
 */
@mixin mynah-spacing($margin: 0, $padding: 0) {
    margin: $margin;
    padding: $padding;
}

/**
 * @param {string} $radius - The radius of the border.
 */
@mixin mynah-border-radius($radius) {
    border-radius: $radius;
}

/**
 * @param {string} $shadow - The shadow of the element.
 */
 @mixin mynah-box-shadow($shadow) {
    box-shadow: $shadow;
}

/**
 * @param {string} $name - The name of the transition.
 * @param {number} $duration - The duration of the transition in milliseconds.
 * @param {string} $timing-function - The timing function of the transition.
 */
@mixin mynah-transition($name, $duration, $timing-function) {
    --mynah-#{$name}-transition: all #{$duration}ms #{$timing-function};
}
`,`@import '../variables';
.mynah-button {
    border: none;
    min-width: var(--mynah-sizing-8);
    height: var(--mynah-sizing-8);
    border-radius: var(--mynah-button-radius);
    background-color: var(--mynah-color-button);
    color: var(--mynah-color-button-reverse);
    box-shadow: var(--mynah-shadow-button);
    cursor: pointer;
    transition: var(--mynah-very-short-transition);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    overflow: hidden;
    position: relative;
    transform: translate3d(0, 0, 0) scale(1.00001);
    padding-left: var(--mynah-sizing-2);
    padding-right: var(--mynah-sizing-2);
    gap: var(--mynah-sizing-1);
    filter: brightness(0.925);
    opacity: 1;
    line-height: var(--mynah-line-height);
    margin-top: var(--mynah-border-width);
    margin-bottom: var(--mynah-border-width);
    &:after {
        content: '';
        pointer-events: none;
        transition: var(--mynah-very-short-transition);
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: brightness(1.35) saturate(0.75);
        opacity: 0;
        border-radius: inherit;
        background-color: currentColor;
        transform: translate3d(-7%, 0, 0) scale(0.93);
    }
    &[disabled='disabled'] {
        opacity: 0.25 !important;
        pointer-events: none;
    }
    &.mynah-button-secondary {
        background-color: rgba(0, 0, 0, 0);
        color: currentColor;
        box-sizing: border-box;
        &.mynah-button-border {
            border: var(--mynah-border-width) solid currentColor !important;
        }
        @each $status in $mynah-statuses {
            &.status-#{$status} {
                color: var(--mynah-color-status-#{$status}) !important;
            }
        }
        box-shadow: none;
    }
    &:active,
    &:focus-visible,
    &:hover {
        filter: brightness(1);
        &:after {
            transform: translate3d(0%, 0, 0);
            opacity: 0.15;
        }
    }
    &.mynah-icon-button {
        width: var(--mynah-sizing-10);
        height: var(--mynah-sizing-10);
        border-radius: 0;
    }
    > span {
        white-space: nowrap;
        transition: var(--mynah-very-long-transition);
        overflow: hidden;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
`],sourceRoot:""}]),a.locals={"mynah-color-text":'"default: var(--vscode-foreground); alternate: var(--mynah-color-button-reverse); strong: var(--vscode-input-foreground); weak: var(--vscode-disabledForeground); link: var(--vscode-textLink-foreground); input: var(--vscode-input-foreground); "',"mynah-statuses":'"success, error, warning, info, "',"mynah-syntax-colors":'"bg: var(--vscode-terminal-dropBackground); variable: var(--vscode-debugTokenExpression-name); function: var(--vscode-gitDecoration-modifiedResourceForeground); operator: var(--vscode-debugTokenExpression-name); attr-value: var(--vscode-debugIcon-stepBackForeground); attr: var(--vscode-debugTokenExpression-string); property: var(--vscode-terminal-ansiCyan); comment: var(--vscode-debugConsole-sourceForeground); code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit)); "',"mynah-status-colors":'"info: #0971d3; success: #037f03; warning: #b2911c; error: #d91515; "',"mynah-font-sizes":'"xxsmall: 0.8rem; xsmall: 0.9rem; small: 1rem; medium: 1.125rem; large: 1.25rem; "',"mynah-padding-sizes":'"none: 0; small: 1; medium: 3; large: 5; "',"mynah-transitions":'"bottom-panel: 850, cubic-bezier(0.25, 1, 0, 1), ; very-short: 600, cubic-bezier(0.25, 1, 0, 1), ; very-long: 1650, cubic-bezier(0.25, 1, 0, 1), ; short: 550, cubic-bezier(0.85, 0.15, 0, 1), ; short-rev: 580, cubic-bezier(0.35, 1, 0, 1), ; "',"mynah-syntax-token-styles":'"comments: comment, prolog, doctype, cdata, ; punctuation: punctuation; namespace: namespace; properties: property, tag, boolean, number, constant, symbol, inserted, ; attributes: selector, attr-name, string, char, builtin, deleted, ; operators: operator, entity, url, ; attr-values: atrule, attr-value, class-name, keyword, ; functions: function; variables: regex, important, variable, ; bold: important, bold, ; italic: italic; entity: entity; "'};const m=a},9733:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,".mynah-collapsible-content-wrapper{display:block;box-sizing:border-box;width:100%;overflow:hidden;position:relative}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox{display:none}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label{box-sizing:border-box;display:flex;flex-flow:column nowrap;overflow:hidden;align-items:flex-start;justify-content:stretch;padding:var(--mynah-sizing-2);gap:var(--mynah-sizing-2)}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-title-wrapper{gap:var(--mynah-sizing-2);display:flex;flex-flow:row nowrap;box-sizing:border-box;width:100%;overflow:hidden;justify-content:flex-start;align-items:flex-start;pointer-events:all;cursor:pointer;user-select:none}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-title-wrapper>.mynah-collapsible-content-label-title-text{flex:1;overflow:hidden}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-content-wrapper{overflow:hidden;box-sizing:border-box;width:100%}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox:checked+.mynah-collapsible-content-label>.mynah-collapsible-content-label-content-wrapper{display:none}","",{version:3,sources:["webpack://./src/styles/components/_collapsible-content.scss"],names:[],mappings:"AAAA,mCACI,aAAA,CACA,qBAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,uEACI,YAAA,CACA,wGACI,qBAAA,CACA,YAAA,CACA,uBAAA,CACA,eAAA,CACA,sBAAA,CACA,uBAAA,CACA,6BAAA,CACA,yBAAA,CACA,uJACI,yBAAA,CACA,YAAA,CACA,oBAAA,CACA,qBAAA,CACA,UAAA,CACA,eAAA,CACA,0BAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,mMACI,MAAA,CACA,eAAA,CAGR,yJACI,eAAA,CACA,qBAAA,CACA,UAAA,CAKJ,iKACI,YAAA",sourcesContent:[`.mynah-collapsible-content-wrapper {
    display: block;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    position: relative;
    > .mynah-collapsible-content-checkbox {
        display: none;
        & + .mynah-collapsible-content-label {
            box-sizing: border-box;
            display: flex;
            flex-flow: column nowrap;
            overflow: hidden;
            align-items: flex-start;
            justify-content: stretch;
            padding: var(--mynah-sizing-2);
            gap: var(--mynah-sizing-2);
            > .mynah-collapsible-content-label-title-wrapper {
                gap: var(--mynah-sizing-2);
                display: flex;
                flex-flow: row nowrap;
                box-sizing: border-box;
                width: 100%;
                overflow: hidden;
                justify-content: flex-start;
                align-items: flex-start;
                pointer-events: all;
                cursor: pointer;
                user-select: none;
                > .mynah-collapsible-content-label-title-text {
                    flex: 1;
                    overflow: hidden;
                }
            }
            > .mynah-collapsible-content-label-content-wrapper {
                overflow: hidden;
                box-sizing: border-box;
                width: 100%;
            }
        }

        &:checked + .mynah-collapsible-content-label {
            > .mynah-collapsible-content-label-content-wrapper {
                display: none;
            }
        }
    }
}
`],sourceRoot:""}]),a.locals={};const m=a},1177:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,'#mynah-feedback-form-wrapper{display:flex;flex-flow:column nowrap;position:absolute;bottom:0;left:var(--mynah-sizing-2);right:var(--mynah-sizing-2);width:auto;box-sizing:border-box;z-index:9999999;opacity:0;transform:translate3d(0, 5vh, 0);transition:var(--mynah-bottom-panel-transition);overflow:visible}#mynah-feedback-form-wrapper:before{transition:all 400ms cubic-bezier(0.25, 0, 0, 1);content:"";position:absolute;right:calc(-1*var(--mynah-sizing-2));bottom:0;left:0;width:100vw;height:100vh;background-color:#000;opacity:0;pointer-events:none;transform:translate3d(0, 0, 0) scale(2);transform-origin:center center;z-index:-1}#mynah-feedback-form-wrapper+#mynah-wrapper{transition:var(--mynah-bottom-panel-transition)}#mynah-feedback-form-wrapper:not(.mynah-feedback-form-show),#mynah-feedback-form-wrapper:not(.mynah-feedback-form-show) *{pointer-events:none !important}#mynah-feedback-form-wrapper.mynah-feedback-form-show{opacity:1;transform:translate3d(0, 0, 0)}#mynah-feedback-form-wrapper.mynah-feedback-form-show:before{opacity:.15}#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper{transform:translate3d(0, 0px, 0) scale(0.95);transform-origin:top center;opacity:.25}#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper,#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper *{pointer-events:none !important}.mynah-feedback-form{pointer-events:all;box-sizing:border-box;transition:var(--mynah-short-transition-rev);transform:translate3d(0, 0, 0);display:flex;flex-flow:column;gap:var(--mynah-sizing-4);align-items:stretch;transform-origin:right bottom;z-index:10;position:relative;border:var(--mynah-button-border-width) solid var(--mynah-color-border-default);border-top-right-radius:var(--mynah-card-radius);border-top-left-radius:var(--mynah-card-radius);border-bottom:none;box-shadow:0px -25px 20px -25px rgba(0,0,0,.15);background-color:var(--mynah-color-bg);padding:var(--mynah-sizing-4);min-height:20vh}.mynah-feedback-form>.mynah-card-body{flex:initial}.mynah-feedback-form>.mynah-feedback-form-header{display:flex;box-sizing:border-box;align-items:center}.mynah-feedback-form>.mynah-feedback-form-header>h4{flex:1;margin:0}.mynah-feedback-form>.mynah-feedback-form-comment{background-color:transparent;padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);resize:none;width:100%;height:100px;max-height:25vh;border-radius:var(--mynah-input-radius);font-size:var(--mynah-font-size-small);outline:none;color:var(--mynah-color-text-input);background-color:var(--mynah-card-bg);box-sizing:border-box;font-family:inherit}.mynah-feedback-form>.mynah-feedback-form-select-wrapper{position:relative;display:flex;box-sizing:border-box;padding:var(--mynah-sizing-3);justify-content:flex-end;align-items:center}.mynah-feedback-form>.mynah-feedback-form-select-wrapper>.mynah-feedback-form-select{position:absolute;width:100%;left:0;color:var(--mynah-color-text-default);border-radius:var(--mynah-input-radius);padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);-webkit-appearance:none;appearance:none;text-indent:1px;text-overflow:clip;outline:none}.mynah-feedback-form>.mynah-feedback-form-select-wrapper>.mynah-feedback-form-select-handle{color:var(--mynah-color-text-weak);pointer-events:none}.mynah-feedback-form>.mynah-feedback-form-buttons-container{display:flex;justify-content:flex-end;align-items:center;gap:var(--mynah-sizing-1);box-sizing:border-box}',"",{version:3,sources:["webpack://./src/styles/components/_feedback-form.scss"],names:[],mappings:"AAAA,6BACI,YAAA,CACA,uBAAA,CACA,iBAAA,CACA,QAAA,CACA,0BAAA,CACA,2BAAA,CACA,UAAA,CACA,qBAAA,CACA,eAAA,CACA,SAAA,CACA,gCAAA,CACA,+CAAA,CACA,gBAAA,CACA,oCACI,gDAAA,CACA,UAAA,CACA,iBAAA,CACA,oCAAA,CACA,QAAA,CACA,MAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,SAAA,CACA,mBAAA,CACA,uCAAA,CACA,8BAAA,CACA,UAAA,CAEJ,4CACI,+CAAA,CAGA,0HAEI,8BAAA,CAGR,sDACI,SAAA,CACA,8BAAA,CACA,6DACI,WAAA,CAEJ,qEACI,4CAAA,CACA,2BAAA,CACA,WAAA,CACA,4IAEI,8BAAA,CAMhB,qBACI,kBAAA,CACA,qBAAA,CACA,4CAAA,CACA,8BAAA,CACA,YAAA,CACA,gBAAA,CACA,yBAAA,CACA,mBAAA,CACA,6BAAA,CACA,UAAA,CACA,iBAAA,CACA,+EAAA,CACA,gDAAA,CACA,+CAAA,CACA,kBAAA,CACA,+CAAA,CACA,sCAAA,CACA,6BAAA,CACA,eAAA,CACA,sCACI,YAAA,CAEJ,iDACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,oDACI,MAAA,CACA,QAAA,CAIR,kDACI,4BAAA,CACA,6BAAA,CACA,wEAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CACA,eAAA,CACA,uCAAA,CACA,sCAAA,CACA,YAAA,CACA,mCAAA,CACA,qCAAA,CACA,qBAAA,CACA,mBAAA,CAGJ,yDACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,wBAAA,CACA,kBAAA,CACA,qFACI,iBAAA,CACA,UAAA,CACA,MAAA,CACA,qCAAA,CACA,uCAAA,CACA,6BAAA,CACA,wEAAA,CACA,qCAAA,CACA,uBAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,YAAA,CAEJ,4FACI,kCAAA,CACA,mBAAA,CAIR,4DACI,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,yBAAA,CACA,qBAAA",sourcesContent:[`#mynah-feedback-form-wrapper {
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    bottom: 0;
    left: var(--mynah-sizing-2);
    right: var(--mynah-sizing-2);
    width: auto;
    box-sizing: border-box;
    z-index: 9999999;
    opacity: 0;
    transform: translate3d(0, 5vh, 0);
    transition: var(--mynah-bottom-panel-transition);
    overflow: visible;
    &:before {
        transition: all 400ms cubic-bezier(0.25, 0, 0, 1);
        content: "";
        position: absolute;
        right: calc(-1 * var(--mynah-sizing-2));
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0;
        pointer-events: none;
        transform: translate3d(0, 0, 0) scale(2);
        transform-origin: center center;
        z-index: -1;
    }
    & + #mynah-wrapper {
        transition: var(--mynah-bottom-panel-transition);
    }
    &:not(.mynah-feedback-form-show) {
        &,
        & * {
            pointer-events: none !important;
        }
    }
    &.mynah-feedback-form-show {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        &:before {
            opacity: 0.15;
        }
        & + #mynah-wrapper {
            transform: translate3d(0, 0px, 0) scale(0.95);
            transform-origin: top center;
            opacity: 0.25;
            &,
            & * {
                pointer-events: none !important;
            }
        }
    }
}

.mynah-feedback-form {
    pointer-events: all;
    box-sizing: border-box;
    transition: var(--mynah-short-transition-rev);
    transform: translate3d(0, 0, 0);
    display: flex;
    flex-flow: column;
    gap: var(--mynah-sizing-4);
    align-items: stretch;
    transform-origin: right bottom;
    z-index: 10;
    position: relative;
    border: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
    border-top-right-radius: var(--mynah-card-radius);
    border-top-left-radius: var(--mynah-card-radius);
    border-bottom: none;
    box-shadow: 0px -25px 20px -25px rgba(0, 0, 0, 0.15);
    background-color: var(--mynah-color-bg);
    padding: var(--mynah-sizing-4);
    min-height: 20vh;
    > .mynah-card-body {
        flex: initial;
    }
    > .mynah-feedback-form-header {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        > h4 {
            flex: 1;
            margin: 0;
        }
    }

    > .mynah-feedback-form-comment {
        background-color: transparent;
        padding: var(--mynah-sizing-3);
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        resize: none;
        width: 100%;
        height: 100px;
        max-height: 25vh;
        border-radius: var(--mynah-input-radius);
        font-size: var(--mynah-font-size-small);
        outline: none;
        color: var(--mynah-color-text-input);
        background-color: var(--mynah-card-bg);
        box-sizing: border-box;
        font-family: inherit;
    }

    > .mynah-feedback-form-select-wrapper {
        position: relative;
        display: flex;
        box-sizing: border-box;
        padding: var(--mynah-sizing-3);
        justify-content: flex-end;
        align-items: center;
        > .mynah-feedback-form-select {
            position: absolute;
            width: 100%;
            left: 0;
            color: var(--mynah-color-text-default);
            border-radius: var(--mynah-input-radius);
            padding: var(--mynah-sizing-3);
            border: var(--mynah-border-width) solid var(--mynah-color-border-default);
            background-color: var(--mynah-card-bg);
            -webkit-appearance: none;
            appearance: none;
            text-indent: 1px;
            text-overflow: clip;
            outline: none;
        }
        > .mynah-feedback-form-select-handle {
            color: var(--mynah-color-text-weak);
            pointer-events: none;
        }
    }

    > .mynah-feedback-form-buttons-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: var(--mynah-sizing-1);
        box-sizing: border-box;
    }
}
`],sourceRoot:""}]),a.locals={};const m=a},4820:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,'.mynah-form-input-wrapper{position:relative;display:flex;box-sizing:border-box;gap:var(--mynah-sizing-2);flex-flow:column nowrap}.mynah-form-input-wrapper[disabled] .mynah-form-input{opacity:.5 !important}.mynah-form-input-wrapper[disabled],.mynah-form-input-wrapper[disabled] *{pointer-events:none !important}.mynah-form-input-wrapper>.mynah-form-input-label>.mynah-ui-form-item-mandatory-title{display:inline-flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;gap:var(--mynah-sizing-1)}.mynah-form-input-wrapper>.mynah-form-input-label>.mynah-ui-form-item-mandatory-title>.mynah-ui-icon{color:var(--mynah-color-status-warning);opacity:.75;font-size:75%}.mynah-form-input-wrapper .mynah-form-input-container{position:relative;display:flex;box-sizing:border-box;justify-content:flex-end;align-items:center}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input{width:100%;left:0;color:var(--mynah-color-text-default);border-radius:var(--mynah-input-radius);-webkit-appearance:none;appearance:none;text-indent:1px;text-overflow:clip;outline:none}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input::placeholder{color:var(--mynah-color-text-weak);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input option.empty-option{font-style:italic;opacity:.5}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input:not(.no-border){padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper{display:inline-flex;flex-flow:row nowrap;justify-content:center;align-items:center}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper:not(:last-child){margin-right:var(--mynah-sizing-4)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label{display:inline-flex;flex-flow:row nowrap;justify-content:center;align-items:center;position:relative;gap:var(--mynah-sizing-1);cursor:pointer}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input:checked+.mynah-form-input-radio-check{border-color:var(--mynah-color-button)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input:checked+.mynah-form-input-radio-check>.mynah-ui-icon{transform:scale(0.75);color:var(--mynah-card-bg);opacity:1}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input:checked+.mynah-form-input-radio-check::after{transform:scale(1);background-color:var(--mynah-color-button);opacity:1}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>.mynah-form-input-radio-check{position:relative;transition:var(--mynah-bottom-panel-transition);width:var(--mynah-sizing-6);height:var(--mynah-sizing-6);border-radius:var(--mynah-sizing-3);overflow:hidden;box-sizing:border-box;border:var(--mynah-border-width) solid var(--mynah-color-border-default);display:inline-flex;flex-flow:row nowrap;justify-content:center;align-items:center}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>.mynah-form-input-radio-check>.mynah-ui-icon{position:relative;transition:inherit;transform:scale(0);transform-origin:center center;color:var(--mynah-color-button);z-index:10}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>.mynah-form-input-radio-check::after{content:"";transition:inherit;position:absolute;top:calc(0*var(--mynah-border-width));right:calc(0*var(--mynah-border-width));bottom:calc(0*var(--mynah-border-width));left:calc(0*var(--mynah-border-width));background-color:var(--mynah-color-border-default);transform:scale(0.5);transform-origin:center center;opacity:0;border-radius:inherit;z-index:5}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container{transition:var(--mynah-short-transition-rev);transform-origin:right bottom;display:inline-flex;flex-flow:row nowrap}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container>.mynah-feedback-form-star{cursor:pointer;padding-right:var(--mynah-sizing-1);color:var(--mynah-color-button);font-size:1.5rem;transition:var(--mynah-very-short-transition)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container>.mynah-feedback-form-star>.mynah-ui-icon{transition:var(--mynah-very-short-transition);opacity:.4;transform:translate3d(0, 0, 0) scale(0.6)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container[selected-star]:not(:hover)>:not(.mynah-feedback-form-star.selected~.mynah-feedback-form-star)>.mynah-ui-icon,.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container:hover>:not(.mynah-feedback-form-star:hover~.mynah-feedback-form-star)>.mynah-ui-icon{opacity:1;transform:translate3d(0, 0, 0) scale(1)}.mynah-form-input-wrapper .mynah-form-input-container>textarea.mynah-form-input{font-family:var(--mynah-font-family);resize:none;font-size:var(--mynah-font-size-medium);color:var(--mynah-color-text-input);outline:none}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-select-handle{position:absolute;color:var(--mynah-color-text-weak);pointer-events:none;transform:translateX(-100%)}.mynah-chat-item-form-items-container{display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-5);overflow:hidden;padding-bottom:var(--mynah-sizing-1)}.mynah-chat-item-buttons-container{display:flex;flex-flow:row-reverse wrap;gap:var(--mynah-sizing-2);overflow:hidden;padding-top:var(--mynah-sizing-1);padding-bottom:var(--mynah-sizing-1);justify-content:flex-end;align-items:center}',"",{version:3,sources:["webpack://./src/styles/components/_form-input.scss"],names:[],mappings:"AAAA,0BACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,uBAAA,CAEI,sDACI,qBAAA,CAEJ,0EAEI,8BAAA,CAIJ,sFACI,mBAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,yBAAA,CACA,qGACI,uCAAA,CACA,WAAA,CACA,aAAA,CAIZ,sDACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,wBAAA,CACA,kBAAA,CACA,wEACI,UAAA,CACA,MAAA,CACA,qCAAA,CACA,uCAAA,CAgBA,uBAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,YAAA,CAnBA,qFACI,kCAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAEJ,4FACI,iBAAA,CACA,UAAA,CAEJ,wFACI,6BAAA,CACA,wEAAA,CACA,qCAAA,CAOJ,wGACI,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,yHACI,kCAAA,CAEJ,sIACI,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,yBAAA,CACA,cAAA,CACA,4IACI,iBAAA,CACA,SAAA,CACA,cAAA,CACA,QAAA,CACA,OAAA,CACA,kLACI,sCAAA,CACA,iMACI,qBAAA,CACA,0BAAA,CACA,SAAA,CAEJ,yLACI,kBAAA,CACA,0CAAA,CACA,SAAA,CAIZ,oKACI,iBAAA,CACA,+CAAA,CACA,2BAAA,CACA,4BAAA,CACA,mCAAA,CACA,eAAA,CACA,qBAAA,CACA,wEAAA,CACA,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,mLACI,iBAAA,CACA,kBAAA,CACA,kBAAA,CACA,8BAAA,CACA,+BAAA,CACA,UAAA,CAEJ,2KAEI,UAAA,CACA,kBAAA,CACA,iBAAA,CACA,qCAJY,CAKZ,uCALY,CAMZ,wCANY,CAOZ,sCAPY,CAQZ,kDAAA,CACA,oBAAA,CACA,8BAAA,CACA,SAAA,CACA,qBAAA,CACA,SAAA,CAMhB,6GACI,4CAAA,CACA,6BAAA,CACA,mBAAA,CACA,oBAAA,CACA,uIACI,cAAA,CACA,mCAAA,CACA,+BAAA,CACA,gBAAA,CACA,6CAAA,CACA,sJACI,6CAAA,CACA,UAAA,CACA,yCAAA,CAKJ,4ZACI,SAAA,CACA,uCAAA,CAKhB,gFACI,oCAAA,CACA,WAAA,CACA,uCAAA,CACA,mCAAA,CACA,YAAA,CAEJ,2EACI,iBAAA,CACA,kCAAA,CACA,mBAAA,CACA,2BAAA,CAKZ,sCACI,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,eAAA,CACA,oCAAA,CAEJ,mCACI,YAAA,CACA,0BAAA,CACA,yBAAA,CACA,eAAA,CACA,iCAAA,CACA,oCAAA,CACA,wBAAA,CACA,kBAAA",sourcesContent:[`.mynah-form-input-wrapper {
    position: relative;
    display: flex;
    box-sizing: border-box;
    gap: var(--mynah-sizing-2);
    flex-flow: column nowrap;
    &[disabled] {
        .mynah-form-input {
            opacity: 0.5 !important;
        }
        &,
        & * {
            pointer-events: none !important;
        }
    }
    > .mynah-form-input-label {
        > .mynah-ui-form-item-mandatory-title {
            display: inline-flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            gap: var(--mynah-sizing-1);
            > .mynah-ui-icon {
                color: var(--mynah-color-status-warning);
                opacity: 0.75;
                font-size: 75%;
            }
        }
    }
    .mynah-form-input-container {
        position: relative;
        display: flex;
        box-sizing: border-box;
        justify-content: flex-end;
        align-items: center;
        > .mynah-form-input {
            width: 100%;
            left: 0;
            color: var(--mynah-color-text-default);
            border-radius: var(--mynah-input-radius);
            &::placeholder {
                color: var(--mynah-color-text-weak);
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            option.empty-option {
                font-style: italic;
                opacity: 0.5;
            }
            &:not(.no-border) {
                padding: var(--mynah-sizing-3);
                border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                background-color: var(--mynah-card-bg);
            }
            -webkit-appearance: none;
            appearance: none;
            text-indent: 1px;
            text-overflow: clip;
            outline: none;
            > .mynah-form-input-radio-wrapper {
                display: inline-flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
                &:not(:last-child) {
                    margin-right: var(--mynah-sizing-4);
                }
                > .mynah-form-input-radio-label {
                    display: inline-flex;
                    flex-flow: row nowrap;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    gap: var(--mynah-sizing-1);
                    cursor: pointer;
                    > input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                        &:checked + .mynah-form-input-radio-check {
                            border-color: var(--mynah-color-button);
                            > .mynah-ui-icon {
                                transform: scale(0.75);
                                color: var(--mynah-card-bg);
                                opacity: 1;
                            }
                            &::after {
                                transform: scale(1);
                                background-color: var(--mynah-color-button);
                                opacity: 1;
                            }
                        }
                    }
                    > .mynah-form-input-radio-check {
                        position: relative;
                        transition: var(--mynah-bottom-panel-transition);
                        width: var(--mynah-sizing-6);
                        height: var(--mynah-sizing-6);
                        border-radius: var(--mynah-sizing-3);
                        overflow: hidden;
                        box-sizing: border-box;
                        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                        display: inline-flex;
                        flex-flow: row nowrap;
                        justify-content: center;
                        align-items: center;
                        > .mynah-ui-icon {
                            position: relative;
                            transition: inherit;
                            transform: scale(0);
                            transform-origin: center center;
                            color: var(--mynah-color-button);
                            z-index: 10;
                        }
                        &::after {
                            $edgeSpace: calc(0 * var(--mynah-border-width));
                            content: '';
                            transition: inherit;
                            position: absolute;
                            top: $edgeSpace;
                            right: $edgeSpace;
                            bottom: $edgeSpace;
                            left: $edgeSpace;
                            background-color: var(--mynah-color-border-default);
                            transform: scale(0.5);
                            transform-origin: center center;
                            opacity: 0;
                            border-radius: inherit;
                            z-index: 5;
                        }
                    }
                }
            }

            > .mynah-feedback-form-stars-container {
                transition: var(--mynah-short-transition-rev);
                transform-origin: right bottom;
                display: inline-flex;
                flex-flow: row nowrap;
                > .mynah-feedback-form-star {
                    cursor: pointer;
                    padding-right: var(--mynah-sizing-1);
                    color: var(--mynah-color-button);
                    font-size: 1.5rem;
                    transition: var(--mynah-very-short-transition);
                    > .mynah-ui-icon {
                        transition: var(--mynah-very-short-transition);
                        opacity: 0.4;
                        transform: translate3d(0, 0, 0) scale(0.6);
                    }
                }
                &[selected-star]:not(:hover) > :not(.mynah-feedback-form-star.selected ~ .mynah-feedback-form-star),
                &:hover > :not(.mynah-feedback-form-star:hover ~ .mynah-feedback-form-star) {
                    > .mynah-ui-icon {
                        opacity: 1;
                        transform: translate3d(0, 0, 0) scale(1);
                    }
                }
            }
        }
        > textarea.mynah-form-input {
            font-family: var(--mynah-font-family);
            resize: none;
            font-size: var(--mynah-font-size-medium);
            color: var(--mynah-color-text-input);
            outline: none;
        }
        > .mynah-select-handle {
            position: absolute;
            color: var(--mynah-color-text-weak);
            pointer-events: none;
            transform: translateX(-100%);
        }
    }
}

.mynah-chat-item-form-items-container {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-5);
    overflow: hidden;
    padding-bottom: var(--mynah-sizing-1);
}
.mynah-chat-item-buttons-container {
    display: flex;
    flex-flow: row-reverse wrap;
    gap: var(--mynah-sizing-2);
    overflow: hidden;
    padding-top: var(--mynah-sizing-1);
    padding-bottom: var(--mynah-sizing-1);
    justify-content: flex-end;
    align-items: center;
}
`],sourceRoot:""}]),a.locals={};const m=a},8750:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,".mynah-ui-icon{font-style:normal;font-weight:normal;display:inline-flex;width:1em;height:1em;font-variant:normal;text-transform:none;-webkit-mask:center/100% no-repeat;mask:center/100% no-repeat;color:inherit;background-color:currentColor}.mynah-ui-icon>span{display:none}","",{version:3,sources:["webpack://./src/styles/components/_icon.scss"],names:[],mappings:"AAAA,eACI,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,SAAA,CACA,UAAA,CACA,mBAAA,CACA,mBAAA,CACA,kCAAA,CACA,0BAAA,CACA,aAAA,CACA,6BAAA,CAEA,oBACI,YAAA",sourcesContent:[`.mynah-ui-icon {
    font-style: normal;
    font-weight: normal;
    display: inline-flex;
    width: 1em;
    height: 1em;
    font-variant: normal;
    text-transform: none;
    -webkit-mask: center/100% no-repeat;
    mask: center/100% no-repeat;
    color: inherit;
    background-color: currentColor;

    > span {
        display: none;
    }
}
`],sourceRoot:""}]),a.locals={};const m=a},3355:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,'.mynah-nav-tabs-wrapper{border-top:var(--mynah-button-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-color-bg);display:flex;align-items:center;overflow:hidden;z-index:100;min-height:var(--mynah-sizing-9);max-height:var(--mynah-sizing-9);position:relative}.mynah-nav-tabs-wrapper:after{content:"";position:absolute;left:0;right:0;bottom:0;width:auto;height:var(--mynah-button-border-width);background-color:var(--mynah-color-border-default)}.mynah-nav-tabs-wrapper>.mynah-toggle-container{height:100%;background:none;box-sizing:border-box}.mynah-nav-tabs-wrapper>.mynah-toggle-container>span{white-space:nowrap}.mynah-nav-tabs-wrapper:empty{display:none}.mynah-nav-tabs-wrapper.mynah-nav-tabs-loading,.mynah-nav-tabs-wrapper.mynah-nav-tabs-loading *{pointer-events:none}.mynah-nav-tabs-wrapper .mynah-button{margin:var(--mynah-sizing-half)}.mynah-nav-tabs-bar-buttons-wrapper{border-left:var(--mynah-button-border-width) solid var(--mynah-color-border-default);display:inline-flex;align-items:center;overflow:hidden;z-index:100;min-height:var(--mynah-sizing-10);max-height:var(--mynah-sizing-10);position:relative;flex-shrink:0;flex-grow:1;justify-content:flex-end}.mynah-nav-tabs-bar-buttons-wrapper:empty{display:none}.mynah-nav-tabs-bar-buttons-wrapper-overlay{display:inline-flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;gap:var(--mynah-sizing-1);overflow:hidden;position:relative;pointer-events:all;padding:var(--mynah-sizing-4);border-radius:inherit}.mynah-nav-tabs-bar-buttons-wrapper-overlay button{pointer-events:all}.mynah-nav-tabs-bar-buttons-wrapper-overlay button>.mynah-button-label{padding:0}.mynah-nav-tabs-bar-buttons-wrapper-overlay button>i+.mynah-button-label{padding-left:var(--mynah-sizing-1)}.mynah-nav-tabs-max-reached-overlay{min-width:max(20vw,100px);max-width:90vw}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper{display:inline-flex;flex-flow:row nowrap;max-width:max-content;gap:var(--mynah-sizing-3)}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper>.mynah-button{pointer-events:all !important}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper>.mynah-button.mynah-nav-tabs-close-confirmation-close-button{border:var(--mynah-border-width) solid var(--mynah-color-border-default);color:var(--mynah-color-text-default);background-color:transparent}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper>.mynah-button.mynah-nav-tabs-close-confirmation-close-button:hover{border-color:var(--mynah-color-text-default)}',"",{version:3,sources:["webpack://./src/styles/components/_nav-tabs.scss","webpack://./src/styles/components/_nav-tabs-buttons-wrapper.scss"],names:[],mappings:"AAAA,wBACE,mFAAA,CACA,sCAAA,CACA,YAAA,CACA,kBAAA,CACA,eAAA,CACA,WAAA,CACA,gCAAA,CACA,gCAAA,CACA,iBAAA,CACA,8BACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,uCAAA,CACA,kDAAA,CAGF,gDACE,WAAA,CACA,eAAA,CACA,qBAAA,CACA,qDACE,kBAAA,CAGJ,8BACE,YAAA,CAGF,gGAEE,mBAAA,CAEF,sCACE,+BAAA,CCtCJ,oCACE,oFAAA,CACA,mBAAA,CACA,kBAAA,CACA,eAAA,CACA,WAAA,CACA,iCAAA,CACA,iCAAA,CACA,iBAAA,CACA,aAAA,CACA,WAAA,CACA,wBAAA,CACA,0CACE,YAAA,CAGJ,4CACE,mBAAA,CACA,uBAAA,CACA,sBAAA,CACA,0BAAA,CACA,yBAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CACA,6BAAA,CACA,qBAAA,CACA,mDACE,kBAAA,CACA,uEACE,SAAA,CAGA,yEACE,kCAAA,CDUR,oCACE,yBAAA,CACA,cAAA,CAIA,iJACE,mBAAA,CACA,oBAAA,CACA,qBAAA,CACA,yBAAA,CACA,+JACE,6BAAA,CACA,8MACE,wEAAA,CACA,qCAAA,CACA,4BAAA,CACA,oNACE,4CAAA",sourcesContent:[`.mynah-nav-tabs-wrapper {
  border-top: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
  background-color: var(--mynah-color-bg);
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 100;
  min-height: var(--mynah-sizing-9);
  max-height: var(--mynah-sizing-9);
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: var(--mynah-button-border-width);
    background-color: var(--mynah-color-border-default);
  }

  > .mynah-toggle-container {
    height: 100%;
    background: none;
    box-sizing: border-box;
    > span {
      white-space: nowrap;
    }
  }
  &:empty {
    display: none;
  }

  &.mynah-nav-tabs-loading,
  &.mynah-nav-tabs-loading * {
    pointer-events: none;
  }
  .mynah-button{
    margin: var(--mynah-sizing-half);
  }
}

@import 'nav-tabs-buttons-wrapper';

.mynah-nav-tabs-max-reached-overlay {
  min-width: max(20vw, 100px);
  max-width: 90vw;
}

.mynah-overlay > .mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay {
  > .mynah-nav-tabs-close-confirmation-buttons-wrapper {
    display: inline-flex;
    flex-flow: row nowrap;
    max-width: max-content;
    gap: var(--mynah-sizing-3);
    > .mynah-button {
      pointer-events: all !important;
      &.mynah-nav-tabs-close-confirmation-close-button {
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        color: var(--mynah-color-text-default);
        background-color: transparent;
        &:hover {
          border-color: var(--mynah-color-text-default);
        }
      }
    }
  }
}
`,`.mynah-nav-tabs-bar-buttons-wrapper {
  border-left: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  z-index: 100;
  min-height: var(--mynah-sizing-10);
  max-height: var(--mynah-sizing-10);
  position: relative;
  flex-shrink: 0;
  flex-grow: 1;
  justify-content: flex-end;
  &:empty {
    display: none;
  }
}
.mynah-nav-tabs-bar-buttons-wrapper-overlay {
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--mynah-sizing-1);
  overflow: hidden;
  position: relative;
  pointer-events: all;
  padding: var(--mynah-sizing-4);
  border-radius: inherit;
  button {
    pointer-events: all;
    > .mynah-button-label {
      padding: 0;
    }
    > i {
      & + .mynah-button-label {
        padding-left: var(--mynah-sizing-1);
      }
    }
  }
}
`],sourceRoot:""}]),a.locals={};const m=a},9275:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,".mynah-no-tabs-wrapper{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;gap:var(--mynah-sizing-6);flex:1}.mynah-no-tabs-wrapper.hidden{display:none}.mynah-no-tabs-wrapper:not(.hidden)+.mynah-ui-tab-contents-wrapper{display:none}.mynah-no-tabs-wrapper>.mynah-no-tabs-icon-wrapper>.mynah-ui-icon{font-size:calc(2*var(--mynah-sizing-18));color:var(--mynah-color-text-weak);opacity:.15}.mynah-no-tabs-wrapper>.mynah-no-tabs-info{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-large);opacity:.75;text-align:center}.mynah-no-tabs-wrapper>.mynah-no-tabs-info>*{margin:1rem}.mynah-no-tabs-wrapper>.mynah-no-tabs-buttons-wrapper>.mynah-button{padding:var(--mynah-sizing-2) var(--mynah-sizing-3);max-height:initial;max-width:initial;height:auto;width:auto}","",{version:3,sources:["webpack://./src/styles/components/_no-tabs.scss"],names:[],mappings:"AAAA,uBACE,YAAA,CACA,uBAAA,CACA,sBAAA,CACA,kBAAA,CACA,yBAAA,CACA,MAAA,CACA,8BACE,YAAA,CAEF,mEACE,YAAA,CAGA,kEACE,wCAAA,CACA,kCAAA,CACA,WAAA,CAGJ,2CAIE,kCAAA,CACA,sCAAA,CACA,WAAA,CACA,iBAAA,CANA,6CACE,WAAA,CAQF,oEACE,mDAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA",sourcesContent:[`.mynah-no-tabs-wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: var(--mynah-sizing-6);
  flex: 1;
  &.hidden {
    display: none;
  }
  &:not(.hidden) + .mynah-ui-tab-contents-wrapper {
    display: none;
  }
  > .mynah-no-tabs-icon-wrapper {
    > .mynah-ui-icon {
      font-size: calc(2 * var(--mynah-sizing-18));
      color: var(--mynah-color-text-weak);
      opacity: 0.15;
    }
  }
  > .mynah-no-tabs-info {
    > * {
      margin: 1rem;
    }
    color: var(--mynah-color-text-weak);
    font-size: var(--mynah-font-size-large);
    opacity: 0.75;
    text-align: center;
  }
  > .mynah-no-tabs-buttons-wrapper {
    > .mynah-button {
      padding: var(--mynah-sizing-2) var(--mynah-sizing-3);
      max-height: initial;
      max-width: initial;
      height: auto;
      width: auto;
    }
  }
}`],sourceRoot:""}]),a.locals={};const m=a},7280:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,".mynah-notification{display:inline-flex;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-start;gap:var(--mynah-sizing-3);padding:var(--mynah-sizing-5);overflow:hidden;position:relative}.mynah-notification.mynah-notification-clickable{pointer-events:all;cursor:pointer}.mynah-notification>.mynah-ui-icon{font-size:var(--mynah-sizing-6)}.mynah-notification>.mynah-ui-icon-ok-circled{color:var(--mynah-color-status-success)}.mynah-notification>.mynah-ui-icon-info{color:var(--mynah-color-status-info)}.mynah-notification>.mynah-ui-icon-warning{color:var(--mynah-color-status-warning)}.mynah-notification>.mynah-ui-icon-error{color:var(--mynah-color-status-error)}.mynah-notification>.mynah-notification-container{flex:1;max-width:50vw;min-width:200px;display:inline-flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;gap:var(--mynah-sizing-3);overflow:hidden;position:relative}.mynah-notification>.mynah-notification-container>.mynah-notification-title{margin:0}.mynah-notification>.mynah-notification-container>.mynah-notification-title:empty{display:none}.mynah-notification>.mynah-notification-container>.mynah-notification-content{font-size:var(--mynah-font-size-small);display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start;gap:var(--mynah-sizing-2)}.mynah-notification>.mynah-notification-container>.mynah-notification-content>.mynah-button{align-self:stretch;background-color:var(--mynah-color-alternate);color:var(--mynah-color-alternate-reverse)}","",{version:3,sources:["webpack://./src/styles/components/_notification.scss"],names:[],mappings:"AAAA,oBACI,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,0BAAA,CACA,yBAAA,CACA,6BAAA,CACA,eAAA,CACA,iBAAA,CACA,iDACI,kBAAA,CACA,cAAA,CAEJ,mCACI,+BAAA,CAEI,8CACI,uCAAA,CAGA,wCACI,oCAAA,CADJ,2CACI,uCAAA,CADJ,yCACI,qCAAA,CAKhB,kDACI,MAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,uBAAA,CACA,sBAAA,CACA,0BAAA,CACA,yBAAA,CACA,eAAA,CACA,iBAAA,CACA,4EACI,QAAA,CACA,kFACI,YAAA,CAGR,8EACI,sCAAA,CACA,YAAA,CACA,uBAAA,CACA,0BAAA,CACA,sBAAA,CACA,yBAAA,CACA,4FACI,kBAAA,CACA,6CAAA,CACA,0CAAA",sourcesContent:[`.mynah-notification {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--mynah-sizing-3);
    padding: var(--mynah-sizing-5);
    overflow: hidden;
    position: relative;
    &.mynah-notification-clickable {
        pointer-events: all;
        cursor: pointer;
    }
    > .mynah-ui-icon {
        font-size: var(--mynah-sizing-6);
        &- {
            &ok-circled {
                color: var(--mynah-color-status-success);
            }
            @each $status in info warning error {
                &#{$status} {
                    color: var(--mynah-color-status-#{$status});
                }
            }
        }
    }
    > .mynah-notification-container {
        flex: 1;
        max-width: 50vw;
        min-width: 200px;
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--mynah-sizing-3);
        overflow: hidden;
        position: relative;
        > .mynah-notification-title {
            margin: 0;
            &:empty {
                display: none;
            }
        }
        > .mynah-notification-content {
            font-size: var(--mynah-font-size-small);
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            gap: var(--mynah-sizing-2);
            > .mynah-button {
                align-self: stretch;
                background-color: var(--mynah-color-alternate);
                color: var(--mynah-color-alternate-reverse);
            }
        }
    }
}
`],sourceRoot:""}]),a.locals={};const m=a},9221:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,'.mynah-overlay{position:fixed;left:0;top:0;width:100%;height:100%;overflow:hidden;box-sizing:border-box;pointer-events:none;z-index:1000000}.mynah-overlay.mynah-overlay-dim-outside:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-bg);transition:var(--mynah-short-transition-rev-opacity);opacity:.45}.mynah-overlay>.mynah-overlay-container{--overlayLeftPos: calc(-1 * var(--mynah-sizing-1));--overlayTopPos: 0;--overlayInnerHorizontalOrigin: left;--overlayInnerVerticalOrigin: top;position:absolute;display:block;overflow:hidden;border-radius:var(--mynah-card-radius);width:max-content;height:max-content;max-width:calc(100vw - var(--mynah-sizing-16)) !important;max-height:calc(100vh - var(--mynah-sizing-16)) !important;transform:translate3d(var(--overlayLeftPos), var(--overlayTopPos), 0)}.mynah-overlay>.mynah-overlay-container .mynah-card,.mynah-overlay>.mynah-overlay-container .mynah-card *{pointer-events:none !important}.mynah-overlay>.mynah-overlay-container .mynah-card .mynah-syntax-highlighter-copy-buttons,.mynah-overlay>.mynah-overlay-container .mynah-card * .mynah-syntax-highlighter-copy-buttons{display:none}.mynah-overlay>.mynah-overlay-container .mynah-card .mynah-syntax-highlighter-copy-buttons~*:last-child,.mynah-overlay>.mynah-overlay-container .mynah-card * .mynah-syntax-highlighter-copy-buttons~*:last-child{margin-bottom:0 !important}.mynah-overlay>.mynah-overlay-container.background:before{content:"";background-color:transparent;transition:var(--mynah-short-transition-rev);position:absolute;top:0;left:0;right:0;bottom:0;width:auto;height:auto;pointer-events:none;box-sizing:border-box;opacity:0;border:var(--mynah-button-border-width) solid var(--mynah-color-border-default);z-index:100;box-shadow:var(--mynah-shadow-overlay);transform-origin:left bottom;border-radius:inherit}.mynah-overlay>.mynah-overlay-container.background:after{content:"";position:absolute;width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);left:0;top:0;opacity:0;border:var(--mynah-sizing-4);background-color:var(--mynah-card-bg);border-radius:inherit;transition:var(--mynah-short-transition-rev);transition-delay:20ms}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left{--overlayLeftPos: -100%;--overlayInnerHorizontalOrigin: right}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left:before,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left:before{transform-origin:right center}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left:after,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left:after{left:calc(100% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.horizontal-direction-at-center{--overlayInnerHorizontalOrigin: center;--overlayLeftPos: -50%}.mynah-overlay>.mynah-overlay-container.horizontal-direction-at-center:after{left:calc(50% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.vertical-direction-to-top,.mynah-overlay>.mynah-overlay-container.vertical-direction-from-end-to-top{--overlayTopPos: -100%;--overlayInnerVerticalOrigin: bottom}.mynah-overlay>.mynah-overlay-container.vertical-direction-to-top:after,.mynah-overlay>.mynah-overlay-container.vertical-direction-from-end-to-top:after{top:calc(100% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.vertical-direction-at-center{--overlayInnerVerticalOrigin: center;--overlayTopPos: -50%}.mynah-overlay>.mynah-overlay-container.vertical-direction-at-center:after{top:calc(50% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container>.mynah-overlay-inner-container{display:inline-block;overflow:hidden;z-index:10;position:relative;transform:translate3d(0, 0, 0) scale(0.85);transform-origin:var(--overlayInnerHorizontalOrigin) var(--overlayInnerVerticalOrigin);transition:var(--mynah-short-transition-rev);width:100%}.mynah-overlay>.mynah-overlay-container:before{transform:translate3d(0, 0, 0) scale(0.85);transition:var(--mynah-short-transition-rev)}.mynah-overlay>.mynah-overlay-container>.mynah-overlay-inner-container,.mynah-overlay>.mynah-overlay-container:before{opacity:0;transition-delay:0ms}.mynah-overlay:not(.mynah-overlay-open),.mynah-overlay:not(.mynah-overlay-open) *{pointer-events:none !important}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{transform:translate3d(0, 0, 0) scale(1)}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container:before{transform:translate3d(0, 0, 0) scale(1);transition-delay:50ms;opacity:1}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{transition-delay:20ms}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{opacity:1}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container:after{transition-delay:0ms;left:0;top:0;width:100%;height:100%;opacity:1}.mynah-overlay.mynah-overlay-open.mynah-overlay-close-on-outside-click{pointer-events:all}',"",{version:3,sources:["webpack://./src/styles/components/_overlay.scss"],names:[],mappings:"AAAA,eACI,cAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CAEI,gDACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,sCAAA,CACA,oDAAA,CACA,WAAA,CAGR,wCACI,kDAAA,CACA,kBAAA,CACA,oCAAA,CACA,iCAAA,CACA,iBAAA,CACA,aAAA,CACA,eAAA,CACA,sCAAA,CACA,iBAAA,CACA,kBAAA,CACA,yDAAA,CACA,0DAAA,CA6GA,qEAAA,CA3GA,0GAEI,8BAAA,CACA,wLACI,YAAA,CACA,kNACI,0BAAA,CAMR,0DACI,UAAA,CACA,4BAAA,CACA,4CAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,qBAAA,CACA,SAAA,CACA,+EAAA,CACA,WAAA,CACA,sCAAA,CACA,4BAAA,CACA,qBAAA,CAGJ,yDACI,UAAA,CACA,iBAAA,CACA,2BAAA,CACA,4BAAA,CACA,MAAA,CACA,KAAA,CACA,SAAA,CACA,4BAAA,CACA,qCAAA,CACA,qBAAA,CACA,4CAAA,CACA,qBAAA,CAKJ,mJAEI,uBAAA,CACA,qCAAA,CACA,iKACI,6BAAA,CAEJ,+JACI,uCAAA,CAGR,uEACI,sCAAA,CACA,sBAAA,CACA,6EACI,sCAAA,CAKR,6IAEI,sBAAA,CACA,oCAAA,CACA,yJACI,sCAAA,CAGR,qEACI,oCAAA,CACA,qBAAA,CACA,2EACI,qCAAA,CAKZ,uEACI,oBAAA,CACA,eAAA,CACA,UAAA,CACA,iBAAA,CACA,0CAAA,CACA,sFAAA,CACA,4CAAA,CACA,UAAA,CAEJ,+CACI,0CAAA,CACA,4CAAA,CAEJ,sHAEI,SAAA,CACA,oBAAA,CAMJ,kFAEI,8BAAA,CAMA,0FACI,uCAAA,CAEJ,kEACI,uCAAA,CACA,qBAAA,CACA,SAAA,CAEJ,0FACI,qBAAA,CAEJ,0FACI,SAAA,CAEJ,iEACI,oBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CAGR,uEACI,kBAAA",sourcesContent:[`.mynah-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 1000000;
    &.mynah-overlay-dim-outside {
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--mynah-color-bg);
            transition: var(--mynah-short-transition-rev-opacity);
            opacity: 0.45;
        }
    }
    > .mynah-overlay-container {
        --overlayLeftPos: calc(-1 * var(--mynah-sizing-1));
        --overlayTopPos: 0;
        --overlayInnerHorizontalOrigin: left;
        --overlayInnerVerticalOrigin: top;
        position: absolute;
        display: block;
        overflow: hidden;
        border-radius: var(--mynah-card-radius);
        width: max-content;
        height: max-content;
        max-width: calc(100vw - var(--mynah-sizing-16))!important;
        max-height: calc(100vh - var(--mynah-sizing-16))!important;

        .mynah-card,
        .mynah-card * {
            pointer-events: none !important;
            .mynah-syntax-highlighter-copy-buttons {
                display: none;
                & ~ *:last-child {
                    margin-bottom: 0 !important;
                }
            }
        }

        &.background {
            &:before {
                content: "";
                background-color: transparent;
                transition: var(--mynah-short-transition-rev);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: auto;
                height: auto;
                pointer-events: none;
                box-sizing: border-box;
                opacity: 0;
                border: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
                z-index: 100;
                box-shadow: var(--mynah-shadow-overlay);
                transform-origin: left bottom;
                border-radius: inherit;
            }

            &:after {
                content: "";
                position: absolute;
                width: var(--mynah-sizing-8);
                height: var(--mynah-sizing-8);
                left: 0;
                top: 0;
                opacity: 0;
                border: var(--mynah-sizing-4);
                background-color: var(--mynah-card-bg);
                border-radius: inherit;
                transition: var(--mynah-short-transition-rev);
                transition-delay: 20ms;
            }
        }

        &.horizontal-direction {
            &-to-left,
            &-from-end-to-left {
                --overlayLeftPos: -100%;
                --overlayInnerHorizontalOrigin: right;
                &:before{
                    transform-origin: right center;
                }
                &:after {
                    left: calc(100% - var(--mynah-sizing-4));
                }
            }
            &-at-center {
                --overlayInnerHorizontalOrigin: center;
                --overlayLeftPos: -50%;
                &:after {
                    left: calc(50% - var(--mynah-sizing-4));
                }
            }
        }
        &.vertical-direction {
            &-to-top,
            &-from-end-to-top {
                --overlayTopPos: -100%;
                --overlayInnerVerticalOrigin: bottom;
                &:after {
                    top: calc(100% - var(--mynah-sizing-4));
                }
            }
            &-at-center {
                --overlayInnerVerticalOrigin: center;
                --overlayTopPos: -50%;
                &:after {
                    top: calc(50% - var(--mynah-sizing-4));
                }
            }
        }

        > .mynah-overlay-inner-container {
            display: inline-block;
            overflow: hidden;
            z-index: 10;
            position: relative;
            transform: translate3d(0, 0, 0) scale(0.85);
            transform-origin: var(--overlayInnerHorizontalOrigin) var(--overlayInnerVerticalOrigin);
            transition: var(--mynah-short-transition-rev);
            width: 100%;
        }
        &:before {
            transform: translate3d(0, 0, 0) scale(0.85);
            transition: var(--mynah-short-transition-rev);
        }
        > .mynah-overlay-inner-container,
        &:before {
            opacity: 0;
            transition-delay: 0ms;
        }

        transform: translate3d(var(--overlayLeftPos), var(--overlayTopPos), 0);
    }
    &:not(.mynah-overlay-open) {
        &,
        & * {
            pointer-events: none !important;
        }
    }

    &.mynah-overlay-open {
        > .mynah-overlay-container {
            > .mynah-overlay-inner-container {
                transform: translate3d(0, 0, 0) scale(1);
            }
            &:before {
                transform: translate3d(0, 0, 0) scale(1);
                transition-delay: 50ms;
                opacity: 1;
            }
            > .mynah-overlay-inner-container {
                transition-delay: 20ms;
            }
            > .mynah-overlay-inner-container {
                opacity: 1;
            }
            &:after {
                transition-delay: 0ms;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                opacity: 1;
            }
        }
        &.mynah-overlay-close-on-outside-click {
            pointer-events: all;
        }
    }
}
`],sourceRoot:""}]),a.locals={};const m=a},4762:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,':root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: calc(var(--mynah-sizing-base) * 1);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-chat-wrapper-spacing: var(--mynah-sizing-4);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-alternate: var(--mynah-color-button-reverse);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-toggle: var(--vscode-sideBar-background);--mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit));--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: #0971d3;--mynah-color-status-success: #037f03;--mynah-color-status-warning: #b2911c;--mynah-color-status-error: #d91515;--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-card-bg: var(--vscode-editor-background);--mynah-card-bg-alternate: var(--mynah-color-button);--mynah-shadow-button: none;--mynah-shadow-card: none;--mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);--mynah-font-size-xxsmall: 0.8rem;--mynah-font-size-xsmall: 0.9rem;--mynah-font-size-small: 1rem;--mynah-font-size-medium: 1.125rem;--mynah-font-size-large: 1.25rem;--mynah-line-height: 1.5rem;--mynah-syntax-code-line-height: 1.5rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-input-radius: var(--mynah-sizing-1);--mynah-card-radius-corner: 0;--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);--mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1)}pre.diff-highlight>code .token.deleted:not(.prefix),pre>code.diff-highlight .token.deleted:not(.prefix){background-color:rgba(255,0,0,.1);color:inherit;display:block}pre.diff-highlight>code .token.inserted:not(.prefix),pre>code.diff-highlight .token.inserted:not(.prefix){background-color:rgba(0,255,128,.1);color:inherit;display:block}.mynah-syntax-highlighter{display:flex;flex-flow:column nowrap;box-sizing:border-box;overflow:hidden;background-color:var(--mynah-card-bg);max-width:100%;border:var(--mynah-border-width) solid var(--mynah-color-border-default);position:relative;border-radius:var(--mynah-input-radius);line-height:var(--mynah-syntax-code-line-height);color:var(--mynah-color-text-default)}.mynah-syntax-highlighter+*:not(:empty){margin-top:var(--mynah-sizing-2)}.mynah-syntax-highlighter:before,.mynah-syntax-highlighter>.line-numbers-rows:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-syntax-bg);opacity:.2;pointer-events:none;user-select:none}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:flex;flex-flow:row-reverse nowrap;align-items:center;justify-content:flex-end;padding:var(--mynah-sizing-half);padding-left:var(--mynah-sizing-3);order:256000;box-sizing:border-box;margin:0;margin-block:0 !important;position:relative;border-top:1px solid var(--mynah-color-border-default)}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-border-default);opacity:.25}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons>.mynah-syntax-highlighter-language{flex:1;font-size:var(--mynah-font-size-xsmall);display:inline-block;opacity:.65;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons .mynah-button{min-width:var(--mynah-sizing-6);height:calc(var(--mynah-sizing-6) + var(--mynah-sizing-half))}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons .mynah-button *{font-size:var(--mynah-font-size-xsmall);color:var(--mynah-color-text-strong)}.mynah-syntax-highlighter.mynah-inline-code{display:inline-block;max-width:100%;line-height:inherit;padding:0 !important;margin:0;margin-block-start:0;margin-block-end:0;overflow:visible;border:none;color:var(--mynah-color-syntax-attr);margin-left:2px;margin-right:2px;margin-top:-2px;background-color:transparent !important;vertical-align:middle}.mynah-syntax-highlighter.mynah-inline-code,.mynah-syntax-highlighter.mynah-inline-code>pre,.mynah-syntax-highlighter.mynah-inline-code>pre>code{padding:0;user-select:text;display:inline-block;position:relative;vertical-align:middle}.mynah-syntax-highlighter.mynah-inline-code:after,.mynah-syntax-highlighter.mynah-inline-code:before{content:"";position:absolute;top:50%;height:var(--mynah-line-height);left:-4px;width:calc(100% + 8px);border-radius:var(--mynah-input-radius);box-sizing:border-box;transform:translateY(-50%)}.mynah-syntax-highlighter.mynah-inline-code:after{border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);z-index:-1}.mynah-syntax-highlighter.mynah-inline-code:before{background-color:var(--mynah-color-syntax-bg)}.mynah-syntax-highlighter>pre{padding:var(--mynah-sizing-2);margin:0;overflow-x:auto;overflow-y:hidden;position:relative}.mynah-syntax-highlighter>pre *,.mynah-syntax-highlighter>pre{font-size:var(--mynah-syntax-code-font-size) !important;font-family:var(--mynah-syntax-code-font-family) !important}.mynah-syntax-highlighter>pre code{color:var(--mynah-color-syntax-code);filter:brightness(0.95);white-space:pre;background-color:inherit}.mynah-syntax-highlighter>pre>code,.mynah-syntax-highlighter>pre{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;tab-size:4;hyphens:none}.mynah-syntax-highlighter>pre>code::selection,.mynah-syntax-highlighter>pre::selection{text-shadow:none;background:#b3d4fc}.mynah-syntax-highlighter>pre .token.comment{color:var(--mynah-color-syntax-comment)}.mynah-syntax-highlighter>pre .token.prolog{color:var(--mynah-color-syntax-comment)}.mynah-syntax-highlighter>pre .token.doctype{color:var(--mynah-color-syntax-comment)}.mynah-syntax-highlighter>pre .token.cdata{color:var(--mynah-color-syntax-comment)}.mynah-syntax-highlighter>pre .token.punctuation{color:currentColor}.mynah-syntax-highlighter>pre .token.namespace{opacity:0.7}.mynah-syntax-highlighter>pre .token.property{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.tag{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.boolean{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.number{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.constant{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.symbol{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.inserted{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.selector{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.attr-name{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.string{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.char{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.builtin{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.deleted{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.operator{color:var(--mynah-color-syntax-operator)}.mynah-syntax-highlighter>pre .token.entity{color:var(--mynah-color-syntax-operator)}.mynah-syntax-highlighter>pre .token.url{color:var(--mynah-color-syntax-operator)}.mynah-syntax-highlighter>pre .token.atrule{color:var(--mynah-color-syntax-attr-value)}.mynah-syntax-highlighter>pre .token.attr-value{color:var(--mynah-color-syntax-attr-value)}.mynah-syntax-highlighter>pre .token.class-name{color:var(--mynah-color-syntax-attr-value)}.mynah-syntax-highlighter>pre .token.keyword{color:var(--mynah-color-syntax-attr-value)}.mynah-syntax-highlighter>pre .token.function{color:var(--mynah-color-syntax-function);font-weight:500}.mynah-syntax-highlighter>pre .token.regex{color:var(--mynah-color-syntax-variable);font-weight:500}.mynah-syntax-highlighter>pre .token.important{color:var(--mynah-color-syntax-variable);font-weight:500}.mynah-syntax-highlighter>pre .token.variable{color:var(--mynah-color-syntax-variable);font-weight:500}.mynah-syntax-highlighter>pre .token.important{font-weight:bold}.mynah-syntax-highlighter>pre .token.bold{font-weight:bold}.mynah-syntax-highlighter>pre .token.italic{font-style:italic}.mynah-syntax-highlighter>pre .token.entity{cursor:help}.mynah-syntax-highlighter>pre.line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber;position:relative}.mynah-syntax-highlighter>.line-numbers-rows{position:absolute;background-color:inherit;top:var(--mynah-sizing-2);font-size:100%;left:0;width:var(--mynah-sizing-12);overflow:hidden;text-overflow:clip;letter-spacing:-1px;border-right:1px solid var(--mynah-color-border-default)}.mynah-syntax-highlighter>.line-numbers-rows>span,.mynah-syntax-highlighter>.line-numbers-rows{pointer-events:none;user-select:none}.mynah-syntax-highlighter>.line-numbers-rows>span{display:block;color:var(--mynah-color-border-default);padding-right:.8em;text-align:right}.mynah-ui-syntax-highlighter-highlight-tooltip{max-width:80vw;min-width:10vw;max-height:80vh;background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);border:var(--mynah-border-width) solid var(--mynah-color-border-default);padding:var(--mynah-sizing-5)}.mynah-ui-syntax-highlighter-highlight-tooltip .mynah-card-body>p:first-child:last-of-type,.mynah-ui-syntax-highlighter-highlight-tooltip .mynah-card-body>p p:first-child{margin:0}',"",{version:3,sources:["webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/components/_syntax-highlighter.scss"],names:[],mappings:"AA6JA,MACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CAMI,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAGJ,mDAAA,CACA,gCAAA,CACA,yBAAA,CAGI,oDAAA,CAAA,+DAAA,CAAA,yDAAA,CAAA,yDAAA,CAAA,0DAAA,CAAA,wDAAA,CAGJ,kDAAA,CACA,mHAAA,CACA,wCAAA,CAEA,sGAAA,CAEA,gDAAA,CACA,qCAAA,CAEA,sDAAA,CACA,gDAAA,CAGI,8DAAA,CAAA,sEAAA,CAAA,qFAAA,CAAA,sEAAA,CAAA,2EAAA,CAAA,oEAAA,CAAA,8DAAA,CAAA,yEAAA,CAAA,oGAAA,CAGJ,iEAAA,CACA,4FAAA,CAII,kCAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,mCAAA,CAGJ,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,gDAAA,CACA,oDAAA,CAEA,2BAAA,CACA,yBAAA,CACA,0DAAA,CAGI,iCAAA,CAAA,gCAAA,CAAA,6BAAA,CAAA,kCAAA,CAAA,gCAAA,CAGJ,2BAAA,CACA,uCAAA,CAEA,0CAAA,CACA,2CAAA,CACA,6BAAA,CACA,4CAAA,CCrKA,sEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,kEAAA,CAAA,mEAAA,CDsLA,oEAAA,CACA,oEAAA,CACA,kEAAA,CACA,mEAAA,CACA,+EAAA,CACA,oHAAA,CEvPJ,wGAEI,iCAAA,CACA,aAAA,CACA,aAAA,CAEJ,0GAEI,mCAAA,CACA,aAAA,CACA,aAAA,CAGJ,0BACI,YAAA,CACA,uBAAA,CACA,qBAAA,CACA,eAAA,CACA,qCAAA,CACA,cAAA,CAIA,wEAAA,CACA,iBAAA,CACA,uCAAA,CACA,gDAAA,CACA,qCAAA,CAPA,wCACI,gCAAA,CAOJ,qFAEI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,6CAAA,CACA,UAAA,CACA,mBAAA,CACA,gBAAA,CAEJ,iEACI,YAAA,CACA,4BAAA,CACA,kBAAA,CACA,wBAAA,CACA,gCAAA,CACA,kCAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CACA,yBAAA,CACA,iBAAA,CACA,sDAAA,CACA,wEACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,kDAAA,CACA,WAAA,CAEJ,oGACI,MAAA,CACA,uCAAA,CACA,oBAAA,CACA,WAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CAEJ,+EACI,+BAAA,CACA,6DAAA,CACA,iFACI,uCAAA,CACA,oCAAA,CAIZ,4CACI,oBAAA,CACA,cAAA,CACA,mBAAA,CACA,oBAAA,CACA,QAAA,CACA,oBAAA,CACA,kBAAA,CACA,gBAAA,CACA,WAAA,CACA,oCAAA,CACA,eAAA,CACA,gBAAA,CACA,eAAA,CACA,uCAAA,CACA,qBAAA,CACA,iJAGI,SAAA,CACA,gBAAA,CACA,oBAAA,CACA,iBAAA,CACA,qBAAA,CAGJ,qGAEI,UAAA,CACA,iBAAA,CACA,OAAA,CACA,+BAAA,CACA,SAAA,CACA,sBAAA,CACA,uCAAA,CACA,qBAAA,CACA,0BAAA,CAEJ,kDACI,wEAAA,CACA,qCAAA,CACA,UAAA,CAEJ,mDACI,6CAAA,CAGR,8BACI,6BAAA,CACA,QAAA,CACA,eAAA,CACA,iBAAA,CACA,iBAAA,CAEA,8DAEI,uDAAA,CACA,2DAAA,CAGJ,mCACI,oCAAA,CACA,uBAAA,CACA,eAAA,CACA,wBAAA,CAGJ,iEAEI,eAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,YAAA,CAGJ,uFAEI,gBAAA,CACA,kBAAA,CAUI,6CAEQ,uCAAA,CAFR,4CAEQ,uCAAA,CAFR,6CAEQ,uCAAA,CAFR,2CAEQ,uCAAA,CAFR,iDAEQ,kBAAA,CAFR,+CAEQ,WAAA,CAFR,8CAEQ,wCAAA,CAFR,yCAEQ,wCAAA,CAFR,6CAEQ,wCAAA,CAFR,4CAEQ,wCAAA,CAFR,8CAEQ,wCAAA,CAFR,4CAEQ,wCAAA,CAFR,8CAEQ,wCAAA,CAFR,8CAEQ,oCAAA,CAFR,+CAEQ,oCAAA,CAFR,4CAEQ,oCAAA,CAFR,0CAEQ,oCAAA,CAFR,6CAEQ,oCAAA,CAFR,6CAEQ,oCAAA,CAFR,8CAEQ,wCAAA,CAFR,4CAEQ,wCAAA,CAFR,yCAEQ,wCAAA,CAFR,4CAEQ,0CAAA,CAFR,gDAEQ,0CAAA,CAFR,gDAEQ,0CAAA,CAFR,6CAEQ,0CAAA,CAFR,8CAEQ,wCAAA,CAAA,eAAA,CAFR,2CAEQ,wCAAA,CAAA,eAAA,CAFR,+CAEQ,wCAAA,CAAA,eAAA,CAFR,8CAEQ,wCAAA,CAAA,eAAA,CAFR,+CAEQ,gBAAA,CAFR,0CAEQ,gBAAA,CAFR,4CAEQ,iBAAA,CAFR,4CAEQ,WAAA,CAMhB,2CACI,iBAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAGR,6CACI,iBAAA,CACA,wBAAA,CAMA,yBAAA,CACA,cAAA,CACA,MAAA,CACA,4BAAA,CACA,eAAA,CACA,kBAAA,CACA,mBAAA,CACA,wDAAA,CAZA,+FAEI,mBAAA,CACA,gBAAA,CAWJ,kDACI,aAAA,CACA,uCAAA,CACA,kBAAA,CACA,gBAAA,CAKZ,+CACI,cAAA,CACA,cAAA,CACA,eAAA,CACA,qCAAA,CACA,sCAAA,CACA,wEAAA,CACA,6BAAA,CAEI,2KAEI,QAAA",sourcesContent:[`@import './mixins';
/**
 * Flatten a map or list into a string
 * @param {any} $value - The value to flatten
 * @returns {string} The flattened value
 */
@function flatten($value) {
    @if type-of($value) == 'map' {
        $result: "";
        @each $key, $val in $value {
            $flattened-val: flatten($val);
            $result: "#{$result}#{$key}: #{$flattened-val}; ";
        }
        @return $result;
    } @else if type-of($value) == 'list' {
        $result: "";
        @each $item in $value {
            $flattened-item: flatten($item);
            $result: "#{$result}#{$flattened-item}, ";
        }
        @return $result;
    } @else {
        @return $value;
    }
}

/**
 * Export a map as CSS variables
 * @param {map} $map - The map to export
 * @param {string} $name - The name of the export
 */
@mixin export-map($map, $name) {
    :export {
        #{$name}: "#{flatten($map)}";
    }
}

/**
 * Color variables
 */
$mynah-color-text: (
    'default': var(--vscode-foreground),
    'alternate': var(--mynah-color-button-reverse),
    'strong': var(--vscode-input-foreground),
    'weak': var(--vscode-disabledForeground),
    'link': var(--vscode-textLink-foreground),
    'input': var(--vscode-input-foreground)
);

/**
 * Statuses
 */
$mynah-statuses: ("success", "error", "warning", "info");

/**
 * Status variables
 */
$mynah-status-colors: (
    'info': #0971d3,
    'success': #037f03,
    'warning': #b2911c,
    'error': #d91515
);

/**
 * Font variables
 */
$mynah-font-sizes: (
    'xxsmall': 0.8rem,
    'xsmall': 0.9rem,
    'small': 1rem,
    'medium': 1.125rem,
    'large': 1.25rem
);

/**
 * Padding sizes
 */
$mynah-padding-sizes: (
  'none': 0,
  'small': 1,
  'medium': 3,
  'large': 5,
);

/**
 * Transition variables
 */
$mynah-transitions: (
    'bottom-panel': (850, cubic-bezier(0.25, 1, 0, 1)),
    'very-short': (600, cubic-bezier(0.25, 1, 0, 1)),
    'very-long': (1650, cubic-bezier(0.25, 1, 0, 1)),
    'short': (550, cubic-bezier(0.85, 0.15, 0, 1)),
    'short-rev': (580, cubic-bezier(0.35, 1, 0, 1))
);

/**
 * Syntax highlighting variables
 */
 $mynah-syntax-colors: (
    'bg': var(--vscode-terminal-dropBackground),
    'variable': var(--vscode-debugTokenExpression-name),
    'function': var(--vscode-gitDecoration-modifiedResourceForeground),
    'operator': var(--vscode-debugTokenExpression-name),
    'attr-value': var(--vscode-debugIcon-stepBackForeground),
    'attr': var(--vscode-debugTokenExpression-string),
    'property': var(--vscode-terminal-ansiCyan),
    'comment': var(--vscode-debugConsole-sourceForeground),
    'code': var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit))
);

/**
 * Token styles
 */
 $mynah-token-styles: (
    'comments': (color: var(--mynah-color-syntax-comment)),
    'punctuation': (color: currentColor),
    'namespace': (opacity: 0.7),
    'properties': (color: var(--mynah-color-syntax-property)),
    'attributes': (color: var(--mynah-color-syntax-attr)),
    'operators': (color: var(--mynah-color-syntax-operator)),
    'attr-values': (color: var(--mynah-color-syntax-attr-value)),
    'functions': (color: var(--mynah-color-syntax-function), font-weight: 500),
    'variables': (color: var(--mynah-color-syntax-variable), font-weight: 500),
    'bold': (font-weight: bold),
    'italic': (font-style: italic),
    'entity': (cursor: help)
);

/**
 * Syntax token styles
 */
$mynah-syntax-token-styles: (
    'comments': (comment, prolog, doctype, cdata),
    'punctuation': (punctuation),
    'namespace': (namespace),
    'properties': (property, tag, boolean, number, constant, symbol, inserted),
    'attributes': (selector, attr-name, string, char, builtin, deleted),
    'operators': (operator, entity, url),
    'attr-values': (atrule, attr-value, class-name, keyword),
    'functions': (function),
    'variables': (regex, important, variable),
    'bold': (important, bold),
    'italic': (italic),
    'entity': (entity)
);

@include export-map($mynah-color-text, 'mynah-color-text');
@include export-map($mynah-statuses, 'mynah-statuses');
@include export-map($mynah-syntax-colors, 'mynah-syntax-colors');
@include export-map($mynah-status-colors, 'mynah-status-colors');
@include export-map($mynah-font-sizes, 'mynah-font-sizes');
@include export-map($mynah-padding-sizes, 'mynah-padding-sizes');
@include export-map($mynah-transitions, 'mynah-transitions');
@include export-map($mynah-syntax-token-styles, 'mynah-syntax-token-styles');


:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);

    /**
     * Sizing variables
     */
    @for $i from 1 through 18 {
        --mynah-sizing-#{$i}: calc(var(--mynah-sizing-base) * #{$i});
    }

    --mynah-chat-wrapper-spacing: var(--mynah-sizing-4);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    @each $name, $value in $mynah-color-text {
        --mynah-color-text-#{$name}: #{$value};
    }

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    --mynah-color-toggle: var(--vscode-sideBar-background);
    --mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);

    @each $name, $value in $mynah-syntax-colors {
        --mynah-color-syntax-#{$name}: #{$value};
    }

    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));


    @each $name, $value in $mynah-status-colors {
        --mynah-color-status-#{$name}: #{$value};
    }

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-card-bg: var(--vscode-editor-background);
    --mynah-card-bg-alternate: var(--mynah-color-button);

    --mynah-shadow-button: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);

    @each $name, $value in $mynah-font-sizes {
        --mynah-font-size-#{$name}: #{$value};
    }

    --mynah-line-height: 1.5rem;
    --mynah-syntax-code-line-height: 1.5rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-input-radius: var(--mynah-sizing-1);
    --mynah-card-radius-corner: 0;
    --mynah-button-radius: var(--mynah-sizing-1);

    /* Transition variables */
    // TODO this block doesn't give the transition animations we originally have
    /* Output from this is as follows which is not matching the ones we need to have down below
    --mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);
    */
    @each $name, $values in $mynah-transitions {
        @include mynah-transition($name, nth($values, 1), nth($values, 2));
    }


    /* Hand added transitions */
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1);
}
`,`@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

/**
 * @param {string} $size - The size of the font.
 * @param {string} $weight - The weight of the font.
 * @param {string} $family - The family of the font.
 */
@mixin mynah-font($size, $weight: normal, $family: var(--mynah-font-family)) {
    font-size: $size;
    font-weight: $weight;
    font-family: $family;
}

/**
 * @param {string} $text-color - The color of the text.
 * @param {string} $bg-color - The background color.
 */
@mixin mynah-color($text-color, $bg-color) {
    color: $text-color;
    background-color: $bg-color;
}

/**
 * @param {string} $margin - The margin of the element.
 * @param {string} $padding - The padding of the element.
 */
@mixin mynah-spacing($margin: 0, $padding: 0) {
    margin: $margin;
    padding: $padding;
}

/**
 * @param {string} $radius - The radius of the border.
 */
@mixin mynah-border-radius($radius) {
    border-radius: $radius;
}

/**
 * @param {string} $shadow - The shadow of the element.
 */
 @mixin mynah-box-shadow($shadow) {
    box-shadow: $shadow;
}

/**
 * @param {string} $name - The name of the transition.
 * @param {number} $duration - The duration of the transition in milliseconds.
 * @param {string} $timing-function - The timing function of the transition.
 */
@mixin mynah-transition($name, $duration, $timing-function) {
    --mynah-#{$name}-transition: all #{$duration}ms #{$timing-function};
}
`,`@import '../variables';
@import '../mixins';

pre.diff-highlight > code .token.deleted:not(.prefix),
pre > code.diff-highlight .token.deleted:not(.prefix) {
    background-color: rgba(255, 0, 0, 0.1);
    color: inherit;
    display: block;
}
pre.diff-highlight > code .token.inserted:not(.prefix),
pre > code.diff-highlight .token.inserted:not(.prefix) {
    background-color: rgba(0, 255, 128, 0.1);
    color: inherit;
    display: block;
}

.mynah-syntax-highlighter {
    display: flex;
    flex-flow: column nowrap;
    box-sizing: border-box;
    overflow: hidden;
    background-color: var(--mynah-card-bg);
    max-width: 100%;
    & + *:not(:empty) {
        margin-top: var(--mynah-sizing-2);
    }
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    position: relative;
    border-radius: var(--mynah-input-radius);
    line-height: var(--mynah-syntax-code-line-height);
    color: var(--mynah-color-text-default);
    &:before,
    & > .line-numbers-rows:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--mynah-color-syntax-bg);
        opacity: 0.2;
        pointer-events: none;
        user-select: none;
    }
    > .mynah-syntax-highlighter-copy-buttons {
        display: flex;
        flex-flow: row-reverse nowrap;
        align-items: center;
        justify-content: flex-end;
        padding: var(--mynah-sizing-half);
        padding-left: var(--mynah-sizing-3);
        order: 256000;
        box-sizing: border-box;
        margin: 0;
        margin-block: 0 !important;
        position: relative;
        border-top: 1px solid var(--mynah-color-border-default);
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--mynah-color-border-default);
            opacity: 0.25;
        }
        > .mynah-syntax-highlighter-language {
            flex: 1;
            font-size: var(--mynah-font-size-xsmall);
            display: inline-block;
            opacity: 0.65;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .mynah-button {
            min-width: var(--mynah-sizing-6);
            height: calc(var(--mynah-sizing-6) + var(--mynah-sizing-half));
            * {
                font-size: var(--mynah-font-size-xsmall);
                color: var(--mynah-color-text-strong);
            }
        }
    }
    &.mynah-inline-code {
        display: inline-block;
        max-width: 100%;
        line-height: inherit;
        padding: 0 !important;
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        overflow: visible;
        border: none;
        color: var(--mynah-color-syntax-attr);
        margin-left: 2px;
        margin-right: 2px;
        margin-top: -2px;
        background-color: transparent !important;
        vertical-align: middle;
        &,
        & > pre,
        & > pre > code {
            padding: 0;
            user-select: text;
            display: inline-block;
            position: relative;
            vertical-align: middle;
        }

        &:after,
        &:before {
            content: '';
            position: absolute;
            top: 50%;
            height: var(--mynah-line-height);
            left: -4px;
            width: calc(100% + 8px);
            border-radius: var(--mynah-input-radius);
            box-sizing: border-box;
            transform: translateY(-50%);
        }
        &:after {
            border: var(--mynah-border-width) solid var(--mynah-color-border-default);
            background-color: var(--mynah-card-bg);
            z-index: -1;
        }
        &:before {
            background-color: var(--mynah-color-syntax-bg);
        }
    }
    > pre {
        padding: var(--mynah-sizing-2);
        margin: 0;
        overflow-x: auto;
        overflow-y: hidden;
        position: relative;

        *,
        & {
            font-size: var(--mynah-syntax-code-font-size) !important;
            font-family: var(--mynah-syntax-code-font-family) !important;
        }

        code {
            color: var(--mynah-color-syntax-code);
            filter: brightness(0.95);
            white-space: pre;
            background-color: inherit;
        }

        > code,
        & {
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            tab-size: 4;
            hyphens: none;
        }

        > code::selection,
        &::selection {
            text-shadow: none;
            background: #b3d4fc;
        }

        /**
        * Loop through each style category and its corresponding tokens in $mynah-syntax-token-styles.
        * For each token, apply the styles defined in $mynah-token-styles based on the style category.
        * This replaces individual style definitions for each token class and makes the SCSS more maintainable.
        */
        @each $style, $tokens in $mynah-syntax-token-styles {
            @each $token in $tokens {
                .token.#{$token} {
                    @each $property, $value in map-get($mynah-token-styles, $style) {
                        #{$property}: #{$value};
                    }
                }
            }
        }

        &.line-numbers {
            position: relative;
            padding-left: 3.8em;
            counter-reset: linenumber;
            position: relative;
        }
    }
    > .line-numbers-rows {
        position: absolute;
        background-color: inherit;
        > span,
        & {
            pointer-events: none;
            user-select: none;
        }
        top: var(--mynah-sizing-2);
        font-size: 100%;
        left: 0;
        width: var(--mynah-sizing-12);
        overflow: hidden;
        text-overflow: clip;
        letter-spacing: -1px;
        border-right: 1px solid var(--mynah-color-border-default);

        > span {
            display: block;
            color: var(--mynah-color-border-default);
            padding-right: 0.8em;
            text-align: right;
        }
    }
}

.mynah-ui-syntax-highlighter-highlight-tooltip {
    max-width: 80vw;
    min-width: 10vw;
    max-height: 80vh;
    background-color: var(--mynah-card-bg);
    border-radius: var(--mynah-card-radius);
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    padding: var(--mynah-sizing-5);
    .mynah-card-body {
        > p:first-child:last-of-type,
        > p p:first-child {
            margin: 0;
        }
    }
}
`],sourceRoot:""}]),a.locals={"mynah-color-text":'"default: var(--vscode-foreground); alternate: var(--mynah-color-button-reverse); strong: var(--vscode-input-foreground); weak: var(--vscode-disabledForeground); link: var(--vscode-textLink-foreground); input: var(--vscode-input-foreground); "',"mynah-statuses":'"success, error, warning, info, "',"mynah-syntax-colors":'"bg: var(--vscode-terminal-dropBackground); variable: var(--vscode-debugTokenExpression-name); function: var(--vscode-gitDecoration-modifiedResourceForeground); operator: var(--vscode-debugTokenExpression-name); attr-value: var(--vscode-debugIcon-stepBackForeground); attr: var(--vscode-debugTokenExpression-string); property: var(--vscode-terminal-ansiCyan); comment: var(--vscode-debugConsole-sourceForeground); code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit)); "',"mynah-status-colors":'"info: #0971d3; success: #037f03; warning: #b2911c; error: #d91515; "',"mynah-font-sizes":'"xxsmall: 0.8rem; xsmall: 0.9rem; small: 1rem; medium: 1.125rem; large: 1.25rem; "',"mynah-padding-sizes":'"none: 0; small: 1; medium: 3; large: 5; "',"mynah-transitions":'"bottom-panel: 850, cubic-bezier(0.25, 1, 0, 1), ; very-short: 600, cubic-bezier(0.25, 1, 0, 1), ; very-long: 1650, cubic-bezier(0.25, 1, 0, 1), ; short: 550, cubic-bezier(0.85, 0.15, 0, 1), ; short-rev: 580, cubic-bezier(0.35, 1, 0, 1), ; "',"mynah-syntax-token-styles":'"comments: comment, prolog, doctype, cdata, ; punctuation: punctuation; namespace: namespace; properties: property, tag, boolean, number, constant, symbol, inserted, ; attributes: selector, attr-name, string, char, builtin, deleted, ; operators: operator, entity, url, ; attr-values: atrule, attr-value, class-name, keyword, ; functions: function; variables: regex, important, variable, ; bold: important, bold, ; italic: italic; entity: entity; "'};const m=a},9547:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,'.mynah-toggle-container{flex-flow:row nowrap;max-width:100%;overflow:hidden;align-items:center;position:relative;background:var(--mynah-color-toggle);color:var(--mynah-color-toggle-reverse);justify-content:flex-start;overflow-y:hidden;overflow-x:auto;scrollbar-color:transparent transparent;scrollbar-width:none;display:flex}.mynah-toggle-container>span{overflow:hidden;height:100%;min-width:var(--mynah-sizing-8);max-width:calc(3*var(--mynah-sizing-15));flex-shrink:0}.mynah-toggle-container>span>.mynah-toggle-option{display:none}.mynah-toggle-container>span>.mynah-toggle-option:not(:first-child)+.mynah-toggle-option-label{margin-left:calc(-1*var(--mynah-sizing-1))}.mynah-toggle-container>span>.mynah-toggle-option:not(:checked)+.mynah-toggle-option-label.indication:after{content:"";position:absolute;top:50%;margin-top:calc(-1*var(--mynah-sizing-half));left:var(--mynah-sizing-2);height:var(--mynah-sizing-1);width:var(--mynah-sizing-1);background-color:var(--mynah-color-status-success);border-radius:var(--mynah-sizing-1);border:1px solid var(--mynah-color-text-weak);opacity:.75}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label{cursor:pointer;pointer-events:all;position:relative;z-index:100;padding:0 var(--mynah-sizing-1) 0 var(--mynah-sizing-5);height:100%;box-sizing:border-box;display:inline-flex;overflow:hidden;justify-content:stretch;align-items:center;color:var(--mynah-color-text-weak);border-right:1px solid var(--mynah-color-border-default);border-top:1px solid transparent;background-color:var(--mynah-color-bg);opacity:.75;max-width:100%}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label,.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label *{user-select:none}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label>span{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:block}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label>.mynah-toggle-close-button{margin-left:var(--mynah-sizing-4);min-width:var(--mynah-sizing-5);max-width:var(--mynah-sizing-5);min-height:var(--mynah-sizing-5);max-height:var(--mynah-sizing-5);padding:0}.mynah-toggle-container>span>.mynah-toggle-option:checked+.mynah-toggle-option-label{border-top-color:var(--mynah-color-button);color:var(--mynah-color-text-default);opacity:1;background-color:var(--mynah-color-tab-active)}.mynah-toggle-container>span>.mynah-toggle-option[disabled=disabled]{pointer-events:none !important}.mynah-toggle-container>span>.mynah-toggle-option[disabled=disabled]+.mynah-toggle-option-label{pointer-events:none !important;opacity:.25}.mynah-toggle-container.mynah-toggle-direction-vertical{flex-flow:column nowrap;gap:var(--mynah-sizing-3)}.mynah-toggle-disabled-tooltip-container{max-width:30vw;display:inline-block;padding:var(--mynah-sizing-3);font-size:80%;opacity:.85}',"",{version:3,sources:["webpack://./src/styles/components/_toggle.scss"],names:[],mappings:"AAAA,wBACI,oBAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,oCAAA,CACA,uCAAA,CACA,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,uCAAA,CACA,oBAAA,CACA,YAAA,CACA,6BACI,eAAA,CACA,WAAA,CACA,+BAAA,CACA,wCAAA,CACA,aAAA,CACA,kDACI,YAAA,CACA,+FACI,0CAAA,CAGA,4GACI,UAAA,CACA,iBAAA,CACA,OAAA,CACA,4CAAA,CACA,0BAAA,CACA,4BAAA,CACA,2BAAA,CACA,kDAAA,CACA,mCAAA,CACA,6CAAA,CACA,WAAA,CAGR,6EACI,cAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,uDAAA,CACA,WAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CACA,uBAAA,CACA,kBAAA,CACA,kCAAA,CACA,wDAAA,CACA,gCAAA,CACA,sCAAA,CACA,WAAA,CACA,cAAA,CACA,4JAEI,gBAAA,CAEJ,kFACI,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CACA,aAAA,CAEJ,wGACI,iCAAA,CAEA,+BADe,CAEf,+BAFe,CAGf,gCAHe,CAIf,gCAJe,CAKf,SAAA,CAGR,qFACI,0CAAA,CACA,qCAAA,CACA,SAAA,CACA,8CAAA,CAEJ,qEACI,8BAAA,CACA,gGACI,8BAAA,CACA,WAAA,CAMhB,wDACI,uBAAA,CACA,yBAAA,CAIR,yCACI,cAAA,CACA,oBAAA,CACA,6BAAA,CACA,aAAA,CACA,WAAA",sourcesContent:[`.mynah-toggle-container {
    flex-flow: row nowrap;
    max-width: 100%;
    overflow: hidden;
    align-items: center;
    position: relative;
    background: var(--mynah-color-toggle);
    color: var(--mynah-color-toggle-reverse);
    justify-content: flex-start;
    overflow-y: hidden;
    overflow-x: auto;
    scrollbar-color: transparent transparent;
    scrollbar-width: none;
    display: flex;
    > span {
        overflow: hidden;
        height: 100%;
        min-width: var(--mynah-sizing-8);
        max-width: calc(3 * var(--mynah-sizing-15));
        flex-shrink: 0;
        > .mynah-toggle-option {
            display: none;
            &:not(:first-child) + .mynah-toggle-option-label {
                margin-left: calc(-1 * var(--mynah-sizing-1));
            }
            &:not(:checked) + .mynah-toggle-option-label {
                &.indication:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    margin-top: calc(-1 * var(--mynah-sizing-half));
                    left: var(--mynah-sizing-2);
                    height: var(--mynah-sizing-1);
                    width: var(--mynah-sizing-1);
                    background-color: var(--mynah-color-status-success);
                    border-radius: var(--mynah-sizing-1);
                    border: 1px solid var(--mynah-color-text-weak);
                    opacity: 0.75;
                }
            }
            & + .mynah-toggle-option-label {
                cursor: pointer;
                pointer-events: all;
                position: relative;
                z-index: 100;
                padding: 0 var(--mynah-sizing-1) 0 var(--mynah-sizing-5);
                height: 100%;
                box-sizing: border-box;
                display: inline-flex;
                overflow: hidden;
                justify-content: stretch;
                align-items: center;
                color: var(--mynah-color-text-weak);
                border-right: 1px solid var(--mynah-color-border-default);
                border-top: 1px solid transparent;
                background-color: var(--mynah-color-bg);
                opacity: 0.75;
                max-width: 100%;
                &,
                & * {
                    user-select: none;
                }
                > span {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    max-width: 100%;
                    display: block;
                }
                > .mynah-toggle-close-button {
                    margin-left: var(--mynah-sizing-4);
                    $closeBtnSize: var(--mynah-sizing-5);
                    min-width: $closeBtnSize;
                    max-width: $closeBtnSize;
                    min-height: $closeBtnSize;
                    max-height: $closeBtnSize;
                    padding: 0;
                }
            }
            &:checked + .mynah-toggle-option-label {
                border-top-color: var(--mynah-color-button);
                color: var(--mynah-color-text-default);
                opacity: 1;
                background-color: var(--mynah-color-tab-active);
            }
            &[disabled='disabled'] {
                pointer-events: none !important;
                & + .mynah-toggle-option-label {
                    pointer-events: none !important;
                    opacity: 0.25;
                }
            }
        }
    }

    &.mynah-toggle-direction-vertical {
        flex-flow: column nowrap;
        gap: var(--mynah-sizing-3);
    }
}

.mynah-toggle-disabled-tooltip-container {
    max-width: 30vw;
    display: inline-block;
    padding: var(--mynah-sizing-3);
    font-size: 80%;
    opacity: 0.85;
}
`],sourceRoot:""}]),a.locals={};const m=a},3948:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,':root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: calc(var(--mynah-sizing-base) * 1);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-chat-wrapper-spacing: var(--mynah-sizing-4);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-alternate: var(--mynah-color-button-reverse);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-toggle: var(--vscode-sideBar-background);--mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit));--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: #0971d3;--mynah-color-status-success: #037f03;--mynah-color-status-warning: #b2911c;--mynah-color-status-error: #d91515;--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-card-bg: var(--vscode-editor-background);--mynah-card-bg-alternate: var(--mynah-color-button);--mynah-shadow-button: none;--mynah-shadow-card: none;--mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);--mynah-font-size-xxsmall: 0.8rem;--mynah-font-size-xsmall: 0.9rem;--mynah-font-size-small: 1rem;--mynah-font-size-medium: 1.125rem;--mynah-font-size-large: 1.25rem;--mynah-line-height: 1.5rem;--mynah-syntax-code-line-height: 1.5rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-input-radius: var(--mynah-sizing-1);--mynah-card-radius-corner: 0;--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);--mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1)}.mynah-card{text-decoration:none;outline:none;position:relative;transition:var(--mynah-short-transition-rev);box-sizing:border-box;display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-3);transform:translate3d(0, 0, 0);flex:auto 0 0;width:100%;overflow:hidden;border-radius:var(--mynah-card-radius);box-shadow:var(--mynah-shadow-card)}.mynah-card>.mynah-card-inner-order-0{order:0}.mynah-card>.mynah-card-inner-order-10{order:10}.mynah-card>.mynah-card-inner-order-20{order:20}.mynah-card>.mynah-card-inner-order-30{order:30}.mynah-card>.mynah-card-inner-order-40{order:40}.mynah-card>.mynah-card-inner-order-50{order:50}.mynah-card>.mynah-card-inner-order-60{order:60}.mynah-card>.mynah-card-inner-order-70{order:70}.mynah-card>.mynah-card-inner-order-80{order:80}.mynah-card>.mynah-card-inner-order-90{order:90}.mynah-card>.mynah-card-inner-order-100{order:100}.mynah-card .mynah-ui-clickable-item{cursor:pointer}.mynah-card.padding-none{padding:var(--mynah-sizing-0);border-radius:0;gap:var(--mynah-sizing-1)}.mynah-card.padding-small{padding:var(--mynah-sizing-1)}.mynah-card.padding-medium{padding:var(--mynah-sizing-3)}.mynah-card.padding-large{padding:var(--mynah-sizing-5)}.mynah-card.background{background-color:var(--mynah-card-bg)}.mynah-card:not(.background){box-shadow:none}.mynah-card.border{border:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-card>*{z-index:10;position:relative}.mynah-card>.mynah-source-link-header{display:flex;justify-content:space-between;align-items:center;opacity:1;gap:var(--mynah-sizing-2);transition:var(--mynah-very-short-transition)}.mynah-card>.mynah-source-link-header>.mynah-source-thumbnail{font-style:normal;font-weight:normal;display:none;width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);font-variant:normal;text-transform:none;border:var(--mynah-border-width) solid var(--mynah-color-border-default);border-radius:100%;background-size:85%;background-clip:content-box;background-position:center center;background-repeat:no-repeat;align-self:flex-start;box-sizing:border-box;background-color:var(--mynah-card-bg);position:relative;overflow:hidden}.mynah-card>.mynah-source-link-header>.mynah-source-thumbnail:after{content:"";pointer-events:none;box-sizing:border-box;position:absolute;top:0;left:0;right:0;bottom:0;width:auto;height:auto;border:2px solid var(--mynah-card-bg);border-radius:100%}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper{flex:1 1 0;display:flex;flex-flow:column nowrap;align-items:flex-start;gap:var(--mynah-sizing-half);max-width:100%;overflow:hidden;cursor:pointer}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper:hover>.mynah-source-link-title>.mynah-source-link-expand-icon{opacity:.75;align-self:baseline}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-title{font-size:var(--mynah-font-size-medium);font-weight:500;color:var(--mynah-color-text-strong);width:100%;display:inline-flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-2);white-space:normal;text-overflow:ellipsis;text-decoration:none;outline:none;overflow:hidden}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-title>.mynah-source-link-expand-icon{transition:var(--mynah-short-transition-rev);opacity:0;color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);display:inline;padding:var(--mynah-sizing-1)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url{font-size:var(--mynah-font-size-xsmall);font-weight:300;color:var(--mynah-color-text-link);white-space:nowrap;text-overflow:ellipsis;text-decoration:none;outline:none;overflow:hidden;max-width:100%;position:relative;padding-bottom:var(--mynah-sizing-1);display:inline-block;transition:var(--mynah-short-transition-rev)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url:after{content:"";position:relative;display:block;bottom:0;left:0;width:100%;height:1px;border-radius:var(--mynah-sizing-half);background-color:currentColor;transform:translate3d(-30%, 0, 0);transition:var(--mynah-short-transition-rev);opacity:0}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url:hover:after{transform:translate3d(0, 0, 0);opacity:1}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:not(:last-child):after{content:">";margin:0 var(--mynah-sizing-1)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:nth-child(3)~span:not(:last-child){display:none}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:last-child{font-weight:bold}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:nth-child(3):not(:last-child):after{content:"> ... >"}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block{display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-1);margin-bottom:var(--mynah-sizing-half)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block:empty{display:none}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item{display:inline-flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-1);padding:calc(var(--mynah-sizing-half)*3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);border-radius:var(--mynah-button-radius);opacity:.75}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-icon{opacity:.5;font-size:var(--mynah-font-size-medium);color:var(--mynah-color-text-weak)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-title-meta-block-item-text{font-size:var(--mynah-font-size-xxsmall);color:var(--mynah-color-text-weak)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-title-meta-block-item-text::first-letter{text-transform:capitalize}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer{border-color:green;position:relative}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer:before{content:"";border-radius:var(--mynah-button-radius);position:absolute;top:0;left:0;right:0;bottom:0;background-color:green;opacity:.04}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer>.mynah-icon{opacity:1;color:green;border-radius:var(--mynah-button-radius);width:var(--mynah-sizing-3);height:var(--mynah-sizing-3)}.mynah-card .mynah-card-votes-wrapper{align-items:center;gap:var(--mynah-sizing-2);display:flex;align-items:center;justify-content:flex-end;font-size:var(--mynah-font-size-small);flex:1}.mynah-card .mynah-card-votes-wrapper>span.mynah-feedback-thanks{overflow:hidden}.mynah-card .mynah-card-votes-wrapper>.mynah-button>span{padding:0;font-size:var(--mynah-font-size-small);color:var(--mynah-color-text-link)}.mynah-card .mynah-card-votes-wrapper>.mynah-vote-text{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-small)}.mynah-card .mynah-card-votes-wrapper>.mynah-card-vote{position:relative;overflow:visible;display:inline-flex;align-items:center;box-sizing:border-box;gap:var(--mynah-sizing-1)}.mynah-card .mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-radio{display:none}.mynah-card .mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label{z-index:10;cursor:pointer;font-size:var(--mynah-font-size-small);transition:var(--mynah-very-short-transition);width:var(--mynah-sizing-5);height:var(--mynah-sizing-5);display:inline-flex;justify-content:center;align-items:center;color:var(--mynah-color-text-weak);opacity:.5;padding:var(--mynah-sizing-1);border:var(--mynah-border-width) solid transparent;border-radius:var(--mynah-button-radius)}.mynah-card .mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label:hover{opacity:1;border-color:currentColor}.mynah-card .mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label>*{pointer-events:none}.mynah-card .mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label>i{height:calc(var(--mynah-sizing-6) + var(--mynah-sizing-half))}.mynah-card .mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-up-radio:checked~.mynah-vote-up{color:var(--mynah-color-text-default);opacity:1}.mynah-card .mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-down-radio:checked~.mynah-vote-down{color:var(--mynah-color-text-default);opacity:1}.mynah-card-body{flex-shrink:0;overflow:hidden;position:relative;display:block;line-height:var(--mynah-line-height);font-size:var(--mynah-font-size-medium)}.mynah-card-body:empty{display:none}.mynah-card-body img{max-width:100%;vertical-align:middle;object-fit:cover}.mynah-card-body a{pointer-events:bounding-box;color:var(--mynah-color-text-link)}.mynah-card-body span[start][end]{display:none}.mynah-card-body>p:first-child,.mynah-card-body>p:first-child h1:first-child,.mynah-card-body>p:first-child h2:first-child,.mynah-card-body>p:first-child h3:first-child,.mynah-card-body>p:first-child h4:first-child,.mynah-card-body>p:first-child h5:first-child,.mynah-card-body>p:first-child h6:first-child{margin-top:0}.mynah-card-body>p:first-child:last-of-type,.mynah-card-body>p p:first-child{margin:0}.mynah-card-body>p,.mynah-card-body h1,.mynah-card-body h2,.mynah-card-body h3,.mynah-card-body h4,.mynah-card-body h5,.mynah-card-body h6,.mynah-card-body>div>p,.mynah-card-body>div h1,.mynah-card-body>div h2,.mynah-card-body>div h3,.mynah-card-body>div h4,.mynah-card-body>div h5,.mynah-card-body>div h6{word-break:normal;overflow-wrap:break-word;line-height:calc(var(--mynah-line-height)*1.25);margin-block-start:.75em;margin-block-end:.75em;padding-bottom:1px !important;user-select:text}.mynah-card-body>p:first-child,.mynah-card-body h1:first-child,.mynah-card-body h2:first-child,.mynah-card-body h3:first-child,.mynah-card-body h4:first-child,.mynah-card-body h5:first-child,.mynah-card-body h6:first-child,.mynah-card-body>div>p:first-child,.mynah-card-body>div h1:first-child,.mynah-card-body>div h2:first-child,.mynah-card-body>div h3:first-child,.mynah-card-body>div h4:first-child,.mynah-card-body>div h5:first-child,.mynah-card-body>div h6:first-child{margin-block-start:.1em}.mynah-card-body>p:empty,.mynah-card-body h1:empty,.mynah-card-body h2:empty,.mynah-card-body h3:empty,.mynah-card-body h4:empty,.mynah-card-body h5:empty,.mynah-card-body h6:empty,.mynah-card-body>div>p:empty,.mynah-card-body>div h1:empty,.mynah-card-body>div h2:empty,.mynah-card-body>div h3:empty,.mynah-card-body>div h4:empty,.mynah-card-body>div h5:empty,.mynah-card-body>div h6:empty{display:none}.mynah-card-body table,.mynah-card-body hr,.mynah-card-body video,.mynah-card-body audio,.mynah-card-body iframe,.mynah-card-body object,.mynah-card-body embed,.mynah-card-body blockquote,.mynah-card-body>div table,.mynah-card-body>div hr,.mynah-card-body>div video,.mynah-card-body>div audio,.mynah-card-body>div iframe,.mynah-card-body>div object,.mynah-card-body>div embed,.mynah-card-body>div blockquote{max-width:100%;width:100%;box-sizing:border-box;border:none;font-size:inherit}.mynah-card-body table,.mynah-card-body>div table{table-layout:fixed}.mynah-card-body video,.mynah-card-body>div video{background-color:var(--mynah-color-bg)}.mynah-card-body video,.mynah-card-body audio,.mynah-card-body iframe,.mynah-card-body object,.mynah-card-body embed,.mynah-card-body img,.mynah-card-body blockquote,.mynah-card-body>div video,.mynah-card-body>div audio,.mynah-card-body>div iframe,.mynah-card-body>div object,.mynah-card-body>div embed,.mynah-card-body>div img,.mynah-card-body>div blockquote{border-radius:var(--mynah-input-radius)}.mynah-card-body video[aspect-ratio],.mynah-card-body audio[aspect-ratio],.mynah-card-body iframe[aspect-ratio],.mynah-card-body object[aspect-ratio],.mynah-card-body embed[aspect-ratio],.mynah-card-body img[aspect-ratio],.mynah-card-body blockquote[aspect-ratio],.mynah-card-body>div video[aspect-ratio],.mynah-card-body>div audio[aspect-ratio],.mynah-card-body>div iframe[aspect-ratio],.mynah-card-body>div object[aspect-ratio],.mynah-card-body>div embed[aspect-ratio],.mynah-card-body>div img[aspect-ratio],.mynah-card-body>div blockquote[aspect-ratio]{max-width:100%;min-width:100%;width:100%;box-sizing:border-box}.mynah-card-body video[aspect-ratio="16:9"],.mynah-card-body audio[aspect-ratio="16:9"],.mynah-card-body iframe[aspect-ratio="16:9"],.mynah-card-body object[aspect-ratio="16:9"],.mynah-card-body embed[aspect-ratio="16:9"],.mynah-card-body img[aspect-ratio="16:9"],.mynah-card-body blockquote[aspect-ratio="16:9"],.mynah-card-body>div video[aspect-ratio="16:9"],.mynah-card-body>div audio[aspect-ratio="16:9"],.mynah-card-body>div iframe[aspect-ratio="16:9"],.mynah-card-body>div object[aspect-ratio="16:9"],.mynah-card-body>div embed[aspect-ratio="16:9"],.mynah-card-body>div img[aspect-ratio="16:9"],.mynah-card-body>div blockquote[aspect-ratio="16:9"]{aspect-ratio:16/9}.mynah-card-body video[aspect-ratio="9:16"],.mynah-card-body audio[aspect-ratio="9:16"],.mynah-card-body iframe[aspect-ratio="9:16"],.mynah-card-body object[aspect-ratio="9:16"],.mynah-card-body embed[aspect-ratio="9:16"],.mynah-card-body img[aspect-ratio="9:16"],.mynah-card-body blockquote[aspect-ratio="9:16"],.mynah-card-body>div video[aspect-ratio="9:16"],.mynah-card-body>div audio[aspect-ratio="9:16"],.mynah-card-body>div iframe[aspect-ratio="9:16"],.mynah-card-body>div object[aspect-ratio="9:16"],.mynah-card-body>div embed[aspect-ratio="9:16"],.mynah-card-body>div img[aspect-ratio="9:16"],.mynah-card-body>div blockquote[aspect-ratio="9:16"]{aspect-ratio:9/16}.mynah-card-body video[aspect-ratio="21:9"],.mynah-card-body audio[aspect-ratio="21:9"],.mynah-card-body iframe[aspect-ratio="21:9"],.mynah-card-body object[aspect-ratio="21:9"],.mynah-card-body embed[aspect-ratio="21:9"],.mynah-card-body img[aspect-ratio="21:9"],.mynah-card-body blockquote[aspect-ratio="21:9"],.mynah-card-body>div video[aspect-ratio="21:9"],.mynah-card-body>div audio[aspect-ratio="21:9"],.mynah-card-body>div iframe[aspect-ratio="21:9"],.mynah-card-body>div object[aspect-ratio="21:9"],.mynah-card-body>div embed[aspect-ratio="21:9"],.mynah-card-body>div img[aspect-ratio="21:9"],.mynah-card-body>div blockquote[aspect-ratio="21:9"]{aspect-ratio:21/9}.mynah-card-body video[aspect-ratio="9:21"],.mynah-card-body audio[aspect-ratio="9:21"],.mynah-card-body iframe[aspect-ratio="9:21"],.mynah-card-body object[aspect-ratio="9:21"],.mynah-card-body embed[aspect-ratio="9:21"],.mynah-card-body img[aspect-ratio="9:21"],.mynah-card-body blockquote[aspect-ratio="9:21"],.mynah-card-body>div video[aspect-ratio="9:21"],.mynah-card-body>div audio[aspect-ratio="9:21"],.mynah-card-body>div iframe[aspect-ratio="9:21"],.mynah-card-body>div object[aspect-ratio="9:21"],.mynah-card-body>div embed[aspect-ratio="9:21"],.mynah-card-body>div img[aspect-ratio="9:21"],.mynah-card-body>div blockquote[aspect-ratio="9:21"]{aspect-ratio:9/21}.mynah-card-body video[aspect-ratio="4:3"],.mynah-card-body audio[aspect-ratio="4:3"],.mynah-card-body iframe[aspect-ratio="4:3"],.mynah-card-body object[aspect-ratio="4:3"],.mynah-card-body embed[aspect-ratio="4:3"],.mynah-card-body img[aspect-ratio="4:3"],.mynah-card-body blockquote[aspect-ratio="4:3"],.mynah-card-body>div video[aspect-ratio="4:3"],.mynah-card-body>div audio[aspect-ratio="4:3"],.mynah-card-body>div iframe[aspect-ratio="4:3"],.mynah-card-body>div object[aspect-ratio="4:3"],.mynah-card-body>div embed[aspect-ratio="4:3"],.mynah-card-body>div img[aspect-ratio="4:3"],.mynah-card-body>div blockquote[aspect-ratio="4:3"]{aspect-ratio:4/3}.mynah-card-body video[aspect-ratio="3:4"],.mynah-card-body audio[aspect-ratio="3:4"],.mynah-card-body iframe[aspect-ratio="3:4"],.mynah-card-body object[aspect-ratio="3:4"],.mynah-card-body embed[aspect-ratio="3:4"],.mynah-card-body img[aspect-ratio="3:4"],.mynah-card-body blockquote[aspect-ratio="3:4"],.mynah-card-body>div video[aspect-ratio="3:4"],.mynah-card-body>div audio[aspect-ratio="3:4"],.mynah-card-body>div iframe[aspect-ratio="3:4"],.mynah-card-body>div object[aspect-ratio="3:4"],.mynah-card-body>div embed[aspect-ratio="3:4"],.mynah-card-body>div img[aspect-ratio="3:4"],.mynah-card-body>div blockquote[aspect-ratio="3:4"]{aspect-ratio:3/4}.mynah-card-body video[aspect-ratio="3:2"],.mynah-card-body audio[aspect-ratio="3:2"],.mynah-card-body iframe[aspect-ratio="3:2"],.mynah-card-body object[aspect-ratio="3:2"],.mynah-card-body embed[aspect-ratio="3:2"],.mynah-card-body img[aspect-ratio="3:2"],.mynah-card-body blockquote[aspect-ratio="3:2"],.mynah-card-body>div video[aspect-ratio="3:2"],.mynah-card-body>div audio[aspect-ratio="3:2"],.mynah-card-body>div iframe[aspect-ratio="3:2"],.mynah-card-body>div object[aspect-ratio="3:2"],.mynah-card-body>div embed[aspect-ratio="3:2"],.mynah-card-body>div img[aspect-ratio="3:2"],.mynah-card-body>div blockquote[aspect-ratio="3:2"]{aspect-ratio:3/2}.mynah-card-body video[aspect-ratio="2:3"],.mynah-card-body audio[aspect-ratio="2:3"],.mynah-card-body iframe[aspect-ratio="2:3"],.mynah-card-body object[aspect-ratio="2:3"],.mynah-card-body embed[aspect-ratio="2:3"],.mynah-card-body img[aspect-ratio="2:3"],.mynah-card-body blockquote[aspect-ratio="2:3"],.mynah-card-body>div video[aspect-ratio="2:3"],.mynah-card-body>div audio[aspect-ratio="2:3"],.mynah-card-body>div iframe[aspect-ratio="2:3"],.mynah-card-body>div object[aspect-ratio="2:3"],.mynah-card-body>div embed[aspect-ratio="2:3"],.mynah-card-body>div img[aspect-ratio="2:3"],.mynah-card-body>div blockquote[aspect-ratio="2:3"]{aspect-ratio:3/2}.mynah-card-body video[aspect-ratio="1:1"],.mynah-card-body audio[aspect-ratio="1:1"],.mynah-card-body iframe[aspect-ratio="1:1"],.mynah-card-body object[aspect-ratio="1:1"],.mynah-card-body embed[aspect-ratio="1:1"],.mynah-card-body img[aspect-ratio="1:1"],.mynah-card-body blockquote[aspect-ratio="1:1"],.mynah-card-body>div video[aspect-ratio="1:1"],.mynah-card-body>div audio[aspect-ratio="1:1"],.mynah-card-body>div iframe[aspect-ratio="1:1"],.mynah-card-body>div object[aspect-ratio="1:1"],.mynah-card-body>div embed[aspect-ratio="1:1"],.mynah-card-body>div img[aspect-ratio="1:1"],.mynah-card-body>div blockquote[aspect-ratio="1:1"]{aspect-ratio:1/1}.mynah-card-body hr,.mynah-card-body>div hr{display:block;box-sizing:border-box;height:var(--mynah-border-width);margin-top:var(--mynah-sizing-2);margin-bottom:var(--mynah-sizing-2);background-color:var(--mynah-color-border-default);border:none}.mynah-card-body blockquote,.mynah-card-body>div blockquote{border:var(--mynah-border-width) solid var(--mynah-color-border-default);margin:0;padding:var(--mynah-sizing-2);box-sizing:border-box}.mynah-card-body>blockquote>p:last-of-type,.mynah-card-body>div>blockquote>p:last-of-type{margin-block-end:0}.mynah-card-body>blockquote>p:first-of-type,.mynah-card-body>div>blockquote>p:first-of-type{margin-block-start:0}.mynah-card-body>p:last-of-type,.mynah-card-body>div>p:last-of-type{margin-block-end:0}.mynah-card-body mark[reference-tracker],.mynah-card-body>div mark[reference-tracker]{background-color:var(--mynah-color-highlight);color:inherit;cursor:help}.mynah-card-body .amzn-mynah-search-result-highlight,.mynah-card-body>div .amzn-mynah-search-result-highlight{background-color:var(--mynah-color-highlight);color:var(--mynah-color-highlight-text)}.mynah-card-body .amzn-mynah-search-result-ellipsis,.mynah-card-body>div .amzn-mynah-search-result-ellipsis{display:inline-block;position:relative;padding-left:var(--mynah-sizing-2);margin-top:var(--mynah-sizing-1);margin-bottom:var(--mynah-sizing-1);font-size:calc(1em + var(--mynah-sizing-1)) !important;user-select:none;cursor:default;height:var(--mynah-sizing-7)}.mynah-card-body .amzn-mynah-search-result-ellipsis:before,.mynah-card-body>div .amzn-mynah-search-result-ellipsis:before{pointer-events:none;content:"";width:calc(1em + var(--mynah-sizing-2));height:calc(1em + var(--mynah-sizing-2));position:absolute;left:0;top:0;background-color:currentColor;opacity:.1;border-radius:var(--mynah-sizing-1)}',"",{version:3,sources:["webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/components/card/_card.scss","webpack://./src/styles/components/_source-link-header.scss","webpack://./src/styles/components/_votes-wrapper.scss","webpack://./src/styles/components/card/_card-body.scss"],names:[],mappings:"AA6JA,MACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CAMI,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAGJ,mDAAA,CACA,gCAAA,CACA,yBAAA,CAGI,oDAAA,CAAA,+DAAA,CAAA,yDAAA,CAAA,yDAAA,CAAA,0DAAA,CAAA,wDAAA,CAGJ,kDAAA,CACA,mHAAA,CACA,wCAAA,CAEA,sGAAA,CAEA,gDAAA,CACA,qCAAA,CAEA,sDAAA,CACA,gDAAA,CAGI,8DAAA,CAAA,sEAAA,CAAA,qFAAA,CAAA,sEAAA,CAAA,2EAAA,CAAA,oEAAA,CAAA,8DAAA,CAAA,yEAAA,CAAA,oGAAA,CAGJ,iEAAA,CACA,4FAAA,CAII,kCAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,mCAAA,CAGJ,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,gDAAA,CACA,oDAAA,CAEA,2BAAA,CACA,yBAAA,CACA,0DAAA,CAGI,iCAAA,CAAA,gCAAA,CAAA,6BAAA,CAAA,kCAAA,CAAA,gCAAA,CAGJ,2BAAA,CACA,uCAAA,CAEA,0CAAA,CACA,2CAAA,CACA,6BAAA,CACA,4CAAA,CCrKA,sEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,kEAAA,CAAA,mEAAA,CDsLA,oEAAA,CACA,oEAAA,CACA,kEAAA,CACA,mEAAA,CACA,+EAAA,CACA,oHAAA,CExPJ,YACI,oBAAA,CACA,YAAA,CACA,iBAAA,CACA,4CAAA,CACA,qBAAA,CACA,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,8BAAA,CACA,aAAA,CACA,UAAA,CACA,eAAA,CACA,sCAAA,CACA,mCAAA,CAGI,sCACI,OAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,uCACI,QAAA,CADJ,wCACI,SAAA,CAIR,qCACI,cAAA,CAKI,yBACI,6BAAA,CAEI,eAAA,CACA,yBAAA,CAJR,0BACI,6BAAA,CADJ,2BACI,6BAAA,CADJ,0BACI,6BAAA,CAQZ,uBACI,qCAAA,CAEJ,6BACI,eAAA,CAEJ,mBACI,wEAAA,CAGJ,cACI,UAAA,CACA,iBAAA,CCnDR,sCACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,SAAA,CACA,yBAAA,CACA,6CAAA,CACA,8DACI,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,mBAAA,CACA,wEAAA,CACA,kBAAA,CACA,mBAAA,CACA,2BAAA,CACA,iCAAA,CACA,2BAAA,CACA,qBAAA,CACA,qBAAA,CACA,qCAAA,CACA,iBAAA,CACA,eAAA,CACA,oEACI,UAAA,CACA,mBAAA,CACA,qBAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,qCAAA,CACA,kBAAA,CAGR,uEACI,UAAA,CACA,YAAA,CACA,uBAAA,CACA,sBAAA,CACA,4BAAA,CACA,cAAA,CACA,eAAA,CACA,cAAA,CACA,qIACI,WAAA,CACA,mBAAA,CAEJ,gGACI,uCAAA,CACA,eAAA,CACA,oCAAA,CACA,UAAA,CACA,mBAAA,CACA,oBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,kBAAA,CACA,sBAAA,CACA,oBAAA,CACA,YAAA,CACA,eAAA,CACA,+HACI,4CAAA,CACA,SAAA,CACA,kCAAA,CACA,uCAAA,CACA,cAAA,CACA,6BAAA,CAGR,8FACI,uCAAA,CACA,eAAA,CACA,kCAAA,CACA,kBAAA,CACA,sBAAA,CACA,oBAAA,CACA,YAAA,CACA,eAAA,CACA,cAAA,CACA,iBAAA,CACA,oCAAA,CACA,oBAAA,CACA,4CAAA,CACA,oGACI,UAAA,CACA,iBAAA,CACA,aAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,UAAA,CACA,sCAAA,CACA,6BAAA,CACA,iCAAA,CACA,4CAAA,CACA,SAAA,CAGA,0GACI,8BAAA,CACA,SAAA,CAKA,0HACI,WAAA,CACA,8BAAA,CAGR,sIACI,YAAA,CAEJ,8GACI,gBAAA,CAEJ,uIACI,iBAAA,CAIZ,+FACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,sCAAA,CACA,qGACI,YAAA,CAEJ,4HACI,mBAAA,CACA,oBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,wCAAA,CACA,wEAAA,CACA,wCAAA,CACA,WAAA,CACA,wIACI,UAAA,CACA,uCAAA,CACA,kCAAA,CAEJ,8JACI,wCAAA,CACA,kCAAA,CACA,4KACI,yBAAA,CAGR,4IACI,kBAAA,CACA,iBAAA,CACA,mJACI,UAAA,CACA,wCAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,sBAAA,CACA,WAAA,CAEJ,wJACI,SAAA,CACA,WAAA,CACA,wCAAA,CACA,2BAAA,CACA,4BAAA,CCrLxB,sCACI,kBAAA,CACA,yBAAA,CACA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,sCAAA,CACA,MAAA,CACA,iEACI,eAAA,CAEJ,yDACI,SAAA,CACA,sCAAA,CACA,kCAAA,CAEJ,uDACI,kCAAA,CACA,sCAAA,CAEJ,uDACI,iBAAA,CACA,gBAAA,CACA,mBAAA,CACA,kBAAA,CACA,qBAAA,CACA,yBAAA,CACA,yEACI,YAAA,CAEJ,yEACI,UAAA,CACA,cAAA,CACA,sCAAA,CACA,6CAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CACA,kCAAA,CACA,UAAA,CACA,6BAAA,CACA,kDAAA,CACA,wCAAA,CACA,+EACI,SAAA,CACA,yBAAA,CAEJ,2EACI,mBAAA,CAEJ,2EACI,6DAAA,CAIJ,mGACI,qCAAA,CACA,SAAA,CAIJ,uGACI,qCAAA,CACA,SAAA,CC/DhB,iBACE,aAAA,CACA,eAAA,CACA,iBAAA,CACA,aAAA,CACA,oCAAA,CACA,uCAAA,CAEA,uBACE,YAAA,CAGF,qBACE,cAAA,CACA,qBAAA,CACA,gBAAA,CAGF,mBACE,2BAAA,CACA,kCAAA,CAGF,kCACE,YAAA,CAIA,mTAOE,YAAA,CAIJ,6EAEE,QAAA,CAKA,kTAOE,iBAAA,CACA,wBAAA,CACA,+CAAA,CACA,wBAAA,CACA,sBAAA,CACA,6BAAA,CAMA,gBAAA,CAJA,0dACE,uBAAA,CAKF,sYACE,YAAA,CAKJ,wZAQE,cAAA,CACA,UAAA,CACA,qBAAA,CACA,WAAA,CACA,iBAAA,CAGF,kDACE,kBAAA,CAIF,kDACE,sCAAA,CAEF,wWAOE,uCAAA,CAEA,4iBACE,cAAA,CACA,cAAA,CACA,UAAA,CACA,qBAAA,CAEF,8oBACE,iBAAA,CAEF,8oBACE,iBAAA,CAEF,8oBACE,iBAAA,CAEF,8oBACE,iBAAA,CAEF,goBACE,gBAAA,CAEF,goBACE,gBAAA,CAEF,goBACE,gBAAA,CAEF,goBACE,gBAAA,CAEF,goBACE,gBAAA,CAIJ,4CACE,aAAA,CACA,qBAAA,CACA,gCAAA,CACA,gCAAA,CACA,mCAAA,CACA,kDAAA,CACA,WAAA,CAEF,4DACE,wEAAA,CACA,QAAA,CACA,6BAAA,CACA,qBAAA,CAGF,0FACE,kBAAA,CAEF,4FACE,oBAAA,CAEF,oEACE,kBAAA,CAGF,sFACE,6CAAA,CACA,aAAA,CACA,WAAA,CAGF,8GACE,6CAAA,CACA,uCAAA,CAGF,4GACE,oBAAA,CACA,iBAAA,CACA,kCAAA,CACA,gCAAA,CACA,mCAAA,CACA,sDAAA,CACA,gBAAA,CACA,cAAA,CACA,4BAAA,CAEA,0HACE,mBAAA,CACA,UAAA,CACA,uCAAA,CACA,wCAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,6BAAA,CACA,UAAA,CACA,mCAAA",sourcesContent:[`@import './mixins';
/**
 * Flatten a map or list into a string
 * @param {any} $value - The value to flatten
 * @returns {string} The flattened value
 */
@function flatten($value) {
    @if type-of($value) == 'map' {
        $result: "";
        @each $key, $val in $value {
            $flattened-val: flatten($val);
            $result: "#{$result}#{$key}: #{$flattened-val}; ";
        }
        @return $result;
    } @else if type-of($value) == 'list' {
        $result: "";
        @each $item in $value {
            $flattened-item: flatten($item);
            $result: "#{$result}#{$flattened-item}, ";
        }
        @return $result;
    } @else {
        @return $value;
    }
}

/**
 * Export a map as CSS variables
 * @param {map} $map - The map to export
 * @param {string} $name - The name of the export
 */
@mixin export-map($map, $name) {
    :export {
        #{$name}: "#{flatten($map)}";
    }
}

/**
 * Color variables
 */
$mynah-color-text: (
    'default': var(--vscode-foreground),
    'alternate': var(--mynah-color-button-reverse),
    'strong': var(--vscode-input-foreground),
    'weak': var(--vscode-disabledForeground),
    'link': var(--vscode-textLink-foreground),
    'input': var(--vscode-input-foreground)
);

/**
 * Statuses
 */
$mynah-statuses: ("success", "error", "warning", "info");

/**
 * Status variables
 */
$mynah-status-colors: (
    'info': #0971d3,
    'success': #037f03,
    'warning': #b2911c,
    'error': #d91515
);

/**
 * Font variables
 */
$mynah-font-sizes: (
    'xxsmall': 0.8rem,
    'xsmall': 0.9rem,
    'small': 1rem,
    'medium': 1.125rem,
    'large': 1.25rem
);

/**
 * Padding sizes
 */
$mynah-padding-sizes: (
  'none': 0,
  'small': 1,
  'medium': 3,
  'large': 5,
);

/**
 * Transition variables
 */
$mynah-transitions: (
    'bottom-panel': (850, cubic-bezier(0.25, 1, 0, 1)),
    'very-short': (600, cubic-bezier(0.25, 1, 0, 1)),
    'very-long': (1650, cubic-bezier(0.25, 1, 0, 1)),
    'short': (550, cubic-bezier(0.85, 0.15, 0, 1)),
    'short-rev': (580, cubic-bezier(0.35, 1, 0, 1))
);

/**
 * Syntax highlighting variables
 */
 $mynah-syntax-colors: (
    'bg': var(--vscode-terminal-dropBackground),
    'variable': var(--vscode-debugTokenExpression-name),
    'function': var(--vscode-gitDecoration-modifiedResourceForeground),
    'operator': var(--vscode-debugTokenExpression-name),
    'attr-value': var(--vscode-debugIcon-stepBackForeground),
    'attr': var(--vscode-debugTokenExpression-string),
    'property': var(--vscode-terminal-ansiCyan),
    'comment': var(--vscode-debugConsole-sourceForeground),
    'code': var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit))
);

/**
 * Token styles
 */
 $mynah-token-styles: (
    'comments': (color: var(--mynah-color-syntax-comment)),
    'punctuation': (color: currentColor),
    'namespace': (opacity: 0.7),
    'properties': (color: var(--mynah-color-syntax-property)),
    'attributes': (color: var(--mynah-color-syntax-attr)),
    'operators': (color: var(--mynah-color-syntax-operator)),
    'attr-values': (color: var(--mynah-color-syntax-attr-value)),
    'functions': (color: var(--mynah-color-syntax-function), font-weight: 500),
    'variables': (color: var(--mynah-color-syntax-variable), font-weight: 500),
    'bold': (font-weight: bold),
    'italic': (font-style: italic),
    'entity': (cursor: help)
);

/**
 * Syntax token styles
 */
$mynah-syntax-token-styles: (
    'comments': (comment, prolog, doctype, cdata),
    'punctuation': (punctuation),
    'namespace': (namespace),
    'properties': (property, tag, boolean, number, constant, symbol, inserted),
    'attributes': (selector, attr-name, string, char, builtin, deleted),
    'operators': (operator, entity, url),
    'attr-values': (atrule, attr-value, class-name, keyword),
    'functions': (function),
    'variables': (regex, important, variable),
    'bold': (important, bold),
    'italic': (italic),
    'entity': (entity)
);

@include export-map($mynah-color-text, 'mynah-color-text');
@include export-map($mynah-statuses, 'mynah-statuses');
@include export-map($mynah-syntax-colors, 'mynah-syntax-colors');
@include export-map($mynah-status-colors, 'mynah-status-colors');
@include export-map($mynah-font-sizes, 'mynah-font-sizes');
@include export-map($mynah-padding-sizes, 'mynah-padding-sizes');
@include export-map($mynah-transitions, 'mynah-transitions');
@include export-map($mynah-syntax-token-styles, 'mynah-syntax-token-styles');


:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);

    /**
     * Sizing variables
     */
    @for $i from 1 through 18 {
        --mynah-sizing-#{$i}: calc(var(--mynah-sizing-base) * #{$i});
    }

    --mynah-chat-wrapper-spacing: var(--mynah-sizing-4);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    @each $name, $value in $mynah-color-text {
        --mynah-color-text-#{$name}: #{$value};
    }

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    --mynah-color-toggle: var(--vscode-sideBar-background);
    --mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);

    @each $name, $value in $mynah-syntax-colors {
        --mynah-color-syntax-#{$name}: #{$value};
    }

    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));


    @each $name, $value in $mynah-status-colors {
        --mynah-color-status-#{$name}: #{$value};
    }

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-card-bg: var(--vscode-editor-background);
    --mynah-card-bg-alternate: var(--mynah-color-button);

    --mynah-shadow-button: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);

    @each $name, $value in $mynah-font-sizes {
        --mynah-font-size-#{$name}: #{$value};
    }

    --mynah-line-height: 1.5rem;
    --mynah-syntax-code-line-height: 1.5rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-input-radius: var(--mynah-sizing-1);
    --mynah-card-radius-corner: 0;
    --mynah-button-radius: var(--mynah-sizing-1);

    /* Transition variables */
    // TODO this block doesn't give the transition animations we originally have
    /* Output from this is as follows which is not matching the ones we need to have down below
    --mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);
    */
    @each $name, $values in $mynah-transitions {
        @include mynah-transition($name, nth($values, 1), nth($values, 2));
    }


    /* Hand added transitions */
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1);
}
`,`@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

/**
 * @param {string} $size - The size of the font.
 * @param {string} $weight - The weight of the font.
 * @param {string} $family - The family of the font.
 */
@mixin mynah-font($size, $weight: normal, $family: var(--mynah-font-family)) {
    font-size: $size;
    font-weight: $weight;
    font-family: $family;
}

/**
 * @param {string} $text-color - The color of the text.
 * @param {string} $bg-color - The background color.
 */
@mixin mynah-color($text-color, $bg-color) {
    color: $text-color;
    background-color: $bg-color;
}

/**
 * @param {string} $margin - The margin of the element.
 * @param {string} $padding - The padding of the element.
 */
@mixin mynah-spacing($margin: 0, $padding: 0) {
    margin: $margin;
    padding: $padding;
}

/**
 * @param {string} $radius - The radius of the border.
 */
@mixin mynah-border-radius($radius) {
    border-radius: $radius;
}

/**
 * @param {string} $shadow - The shadow of the element.
 */
 @mixin mynah-box-shadow($shadow) {
    box-shadow: $shadow;
}

/**
 * @param {string} $name - The name of the transition.
 * @param {number} $duration - The duration of the transition in milliseconds.
 * @param {string} $timing-function - The timing function of the transition.
 */
@mixin mynah-transition($name, $duration, $timing-function) {
    --mynah-#{$name}-transition: all #{$duration}ms #{$timing-function};
}
`,`@import '../../variables';

.mynah-card {
    text-decoration: none;
    outline: none;
    position: relative;
    transition: var(--mynah-short-transition-rev);
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-3);
    transform: translate3d(0, 0, 0);
    flex: auto 0 0;
    width: 100%;
    overflow: hidden;
    border-radius: var(--mynah-card-radius);
    box-shadow: var(--mynah-shadow-card);

    @for $i from 0 through 10 {
        > .mynah-card-inner-order-#{$i * 10} {
            order: $i * 10;
        }
    }

    .mynah-ui-clickable-item {
        cursor: pointer;
    }

    &.padding {
        @each $size, $padding in $mynah-padding-sizes {
            &-#{$size} {
                padding: var(--mynah-sizing-#{$padding});
                @if $size == 'none' {
                    border-radius: 0;
                    gap: var(--mynah-sizing-1);
                }
            }
        }
    }
    &.background {
        background-color: var(--mynah-card-bg);
    }
    &:not(.background){
        box-shadow: none;
    }
    &.border {
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    }

    > * {
        z-index: 10;
        position: relative;
    }

    @import '../source-link-header';
    @import '../votes-wrapper';
}

@import 'card-body';
`,`> .mynah-source-link-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 1;
    gap: var(--mynah-sizing-2);
    transition: var(--mynah-very-short-transition);
    > .mynah-source-thumbnail {
        font-style: normal;
        font-weight: normal;
        display: none;
        width: var(--mynah-sizing-8);
        height: var(--mynah-sizing-8);
        font-variant: normal;
        text-transform: none;
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        border-radius: 100%;
        background-size: 85%;
        background-clip: content-box;
        background-position: center center;
        background-repeat: no-repeat;
        align-self: flex-start;
        box-sizing: border-box;
        background-color: var(--mynah-card-bg);
        position: relative;
        overflow: hidden;
        &:after {
            content: "";
            pointer-events: none;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: auto;
            height: auto;
            border: 2px solid var(--mynah-card-bg);
            border-radius: 100%;
        }
    }
    > .mynah-source-link-title-wrapper {
        flex: 1 1 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        gap: var(--mynah-sizing-half);
        max-width: 100%;
        overflow: hidden;
        cursor: pointer;
        &:hover > .mynah-source-link-title > .mynah-source-link-expand-icon {
            opacity: 0.75;
            align-self: baseline;
        }
        > .mynah-source-link-title {
            font-size: var(--mynah-font-size-medium);
            font-weight: 500;
            color: var(--mynah-color-text-strong);
            width: 100%;
            display: inline-flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: flex-start;
            gap: var(--mynah-sizing-2);
            white-space: normal;
            text-overflow: ellipsis;
            text-decoration: none;
            outline: none;
            overflow: hidden;
            > .mynah-source-link-expand-icon {
                transition: var(--mynah-short-transition-rev);
                opacity: 0;
                color: var(--mynah-color-text-weak);
                font-size: var(--mynah-font-size-xsmall);
                display: inline;
                padding: var(--mynah-sizing-1);
            }
        }
        > .mynah-source-link-url {
            font-size: var(--mynah-font-size-xsmall);
            font-weight: 300;
            color: var(--mynah-color-text-link);
            white-space: nowrap;
            text-overflow: ellipsis;
            text-decoration: none;
            outline: none;
            overflow: hidden;
            max-width: 100%;
            position: relative;
            padding-bottom: var(--mynah-sizing-1);
            display: inline-block;
            transition: var(--mynah-short-transition-rev);
            &:after {
                content: "";
                position: relative;
                display: block;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                border-radius: var(--mynah-sizing-half);
                background-color: currentColor;
                transform: translate3d(-30%, 0, 0);
                transition: var(--mynah-short-transition-rev);
                opacity: 0;
            }
            &:hover {
                &:after {
                    transform: translate3d(0, 0, 0);
                    opacity: 1;
                }
            }
            > span {
                &:not(:last-child) {
                    &:after {
                        content: ">";
                        margin: 0 var(--mynah-sizing-1);
                    }
                }
                &:nth-child(3) ~ span:not(:last-child) {
                    display: none;
                }
                &:last-child {
                    font-weight: bold;
                }
                &:nth-child(3):not(:last-child):after {
                    content: "> ... >";
                }
            }
        }
        > .mynah-title-meta-block {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: flex-start;
            gap: var(--mynah-sizing-1);
            margin-bottom: var(--mynah-sizing-half);
            &:empty {
                display: none;
            }
            > .mynah-title-meta-block-item {
                display: inline-flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: flex-start;
                gap: var(--mynah-sizing-1);
                padding: calc(var(--mynah-sizing-half) * 3);
                border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                border-radius: var(--mynah-button-radius);
                opacity: 0.75;
                > .mynah-icon {
                    opacity: 0.5;
                    font-size: var(--mynah-font-size-medium);
                    color: var(--mynah-color-text-weak);
                }
                > .mynah-title-meta-block-item-text {
                    font-size: var(--mynah-font-size-xxsmall);
                    color: var(--mynah-color-text-weak);
                    &::first-letter {
                        text-transform: capitalize;
                    }
                }
                &.approved-answer {
                    border-color: green;
                    position: relative;
                    &:before {
                        content: "";
                        border-radius: var(--mynah-button-radius);
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: green;
                        opacity: 0.04;
                    }
                    > .mynah-icon {
                        opacity: 1;
                        color: green;
                        border-radius: var(--mynah-button-radius);
                        width: var(--mynah-sizing-3);
                        height: var(--mynah-sizing-3);
                    }
                }
            }
        }
    }
}
`,`.mynah-card-votes-wrapper {
    align-items: center;
    gap: var(--mynah-sizing-2);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: var(--mynah-font-size-small);
    flex: 1;
    > span.mynah-feedback-thanks {
        overflow: hidden;
    }
    > .mynah-button > span {
        padding: 0;
        font-size: var(--mynah-font-size-small);
        color: var(--mynah-color-text-link);
    }
    > .mynah-vote-text {
        color: var(--mynah-color-text-weak);
        font-size: var(--mynah-font-size-small);
    }
    > .mynah-card-vote {
        position: relative;
        overflow: visible;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        gap: var(--mynah-sizing-1);
        > .mynah-vote-radio {
            display: none;
        }
        > .mynah-vote-label {
            z-index: 10;
            cursor: pointer;
            font-size: var(--mynah-font-size-small);
            transition: var(--mynah-very-short-transition);
            width: var(--mynah-sizing-5);
            height: var(--mynah-sizing-5);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: var(--mynah-color-text-weak);
            opacity: 0.5;
            padding: var(--mynah-sizing-1);
            border: var(--mynah-border-width) solid transparent;
            border-radius: var(--mynah-button-radius);
            &:hover{
                opacity: 1;
                border-color: currentColor;
            }
            > * {
                pointer-events: none;
            }
            > i {
                height: calc(var(--mynah-sizing-6) + var(--mynah-sizing-half));
            }
        }
        > .mynah-vote-up-radio:checked {
            & ~ .mynah-vote-up {
                color: var(--mynah-color-text-default);
                opacity: 1;
            }
        }
        > .mynah-vote-down-radio:checked {
            & ~ .mynah-vote-down {
                color: var(--mynah-color-text-default);
                opacity: 1;
            }
        }
    }
}
`,`@use 'sass:color';

.mynah-card-body {
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  display: block;
  line-height: var(--mynah-line-height);
  font-size: var(--mynah-font-size-medium);

  &:empty {
    display: none;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    object-fit: cover;
  }

  a {
    pointer-events: bounding-box;
    color: var(--mynah-color-text-link);
  }

  span[start][end] {
    display: none;
  }

  > p:first-child {
    &,
    & h1:first-child,
    & h2:first-child,
    & h3:first-child,
    & h4:first-child,
    & h5:first-child,
    & h6:first-child {
      margin-top: 0;
    }
  }

  > p:first-child:last-of-type,
  > p p:first-child {
    margin: 0;
  }

  &,
  & > div {
    > p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      word-break: normal;
      overflow-wrap: break-word;
      line-height: calc(var(--mynah-line-height) * 1.25);
      margin-block-start: 0.75em;
      margin-block-end: 0.75em;
      padding-bottom: 1px !important;

      &:first-child {
        margin-block-start: 0.1em;
      }

      user-select: text;

      &:empty {
        display: none;
      }
    }

    // FULL WIDTH ITEMS
    table,
    hr,
    video,
    audio,
    iframe,
    object,
    embed,
    blockquote {
      max-width: 100%;
      width: 100%;
      box-sizing: border-box;
      border: none;
      font-size: inherit;
    }

    table {
      table-layout: fixed;
    }

    // BLOCKS
    video {
      background-color: var(--mynah-color-bg);
    }
    video,
    audio,
    iframe,
    object,
    embed,
    img,
    blockquote {
      border-radius: var(--mynah-input-radius);

      &[aspect-ratio] {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        box-sizing: border-box;
      }
      &[aspect-ratio='16:9'] {
        aspect-ratio: 16 / 9;
      }
      &[aspect-ratio='9:16'] {
        aspect-ratio: 9 / 16;
      }
      &[aspect-ratio='21:9'] {
        aspect-ratio: 21 / 9;
      }
      &[aspect-ratio='9:21'] {
        aspect-ratio: 9 / 21;
      }
      &[aspect-ratio='4:3'] {
        aspect-ratio: 4 / 3;
      }
      &[aspect-ratio='3:4'] {
        aspect-ratio: 3 / 4;
      }
      &[aspect-ratio='3:2'] {
        aspect-ratio: 3 / 2;
      }
      &[aspect-ratio='2:3'] {
        aspect-ratio: 3 / 2;
      }
      &[aspect-ratio='1:1'] {
        aspect-ratio: 1 / 1;
      }
    }

    hr {
      display: block;
      box-sizing: border-box;
      height: var(--mynah-border-width);
      margin-top: var(--mynah-sizing-2);
      margin-bottom: var(--mynah-sizing-2);
      background-color: var(--mynah-color-border-default);
      border: none;
    }
    blockquote {
      border: var(--mynah-border-width) solid var(--mynah-color-border-default);
      margin: 0;
      padding: var(--mynah-sizing-2);
      box-sizing: border-box;
    }

    > blockquote > p:last-of-type{
      margin-block-end: 0;
    }
    > blockquote > p:first-of-type{
      margin-block-start: 0;
    }
    > p:last-of-type {
      margin-block-end: 0;
    }

    mark[reference-tracker] {
      background-color: var(--mynah-color-highlight);
      color: inherit;
      cursor: help;
    }

    .amzn-mynah-search-result-highlight {
      background-color: var(--mynah-color-highlight);
      color: var(--mynah-color-highlight-text);
    }

    .amzn-mynah-search-result-ellipsis {
      display: inline-block;
      position: relative;
      padding-left: var(--mynah-sizing-2);
      margin-top: var(--mynah-sizing-1);
      margin-bottom: var(--mynah-sizing-1);
      font-size: calc(1em + var(--mynah-sizing-1)) !important;
      user-select: none;
      cursor: default;
      height: var(--mynah-sizing-7);

      &:before {
        pointer-events: none;
        content: '';
        width: calc(1em + var(--mynah-sizing-2));
        height: calc(1em + var(--mynah-sizing-2));
        position: absolute;
        left: 0;
        top: 0;
        background-color: currentColor;
        opacity: 0.1;
        border-radius: var(--mynah-sizing-1);
      }
    }
  }
}
`],sourceRoot:""}]),a.locals={"mynah-color-text":'"default: var(--vscode-foreground); alternate: var(--mynah-color-button-reverse); strong: var(--vscode-input-foreground); weak: var(--vscode-disabledForeground); link: var(--vscode-textLink-foreground); input: var(--vscode-input-foreground); "',"mynah-statuses":'"success, error, warning, info, "',"mynah-syntax-colors":'"bg: var(--vscode-terminal-dropBackground); variable: var(--vscode-debugTokenExpression-name); function: var(--vscode-gitDecoration-modifiedResourceForeground); operator: var(--vscode-debugTokenExpression-name); attr-value: var(--vscode-debugIcon-stepBackForeground); attr: var(--vscode-debugTokenExpression-string); property: var(--vscode-terminal-ansiCyan); comment: var(--vscode-debugConsole-sourceForeground); code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit)); "',"mynah-status-colors":'"info: #0971d3; success: #037f03; warning: #b2911c; error: #d91515; "',"mynah-font-sizes":'"xxsmall: 0.8rem; xsmall: 0.9rem; small: 1rem; medium: 1.125rem; large: 1.25rem; "',"mynah-padding-sizes":'"none: 0; small: 1; medium: 3; large: 5; "',"mynah-transitions":'"bottom-panel: 850, cubic-bezier(0.25, 1, 0, 1), ; very-short: 600, cubic-bezier(0.25, 1, 0, 1), ; very-long: 1650, cubic-bezier(0.25, 1, 0, 1), ; short: 550, cubic-bezier(0.85, 0.15, 0, 1), ; short-rev: 580, cubic-bezier(0.35, 1, 0, 1), ; "',"mynah-syntax-token-styles":'"comments: comment, prolog, doctype, cdata, ; punctuation: punctuation; namespace: namespace; properties: property, tag, boolean, number, constant, symbol, inserted, ; attributes: selector, attr-name, string, char, builtin, deleted, ; operators: operator, entity, url, ; attr-values: atrule, attr-value, class-name, keyword, ; functions: function; variables: regex, important, variable, ; bold: important, bold, ; italic: italic; entity: entity; "'};const m=a},7562:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,'.mynah-chat-prompt-overlay-buttons-container{display:inline-flex;flex-flow:column nowrap;gap:var(--mynah-sizing-2);justify-content:flex-start;align-items:flex-start}.mynah-chat-wrapper{transition:all 10ms 10ms linear;position:relative;width:inherit;min-width:inherit;max-width:inherit;height:100%;flex:1 0 100%;flex-flow:column nowrap;overflow:hidden;justify-content:space-around;align-items:stretch;display:none}.mynah-chat-wrapper>div[class^=mynah-chat]{width:inherit;min-width:inherit;max-width:inherit;box-sizing:border-box;padding-left:var(--mynah-sizing-4);padding-right:var(--mynah-sizing-4)}.mynah-chat-wrapper:after{transition:var(--mynah-very-short-transition);content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:auto;height:auto;background-color:#000;z-index:1000;opacity:0;pointer-events:none;transform:translate3d(0, 0, 0) scale(2);transform-origin:center center}.mynah-chat-wrapper>.mynah-chat-items-container{position:relative;display:flex;flex:1 1 0;overflow-x:hidden;overflow-y:auto;flex-flow:column-reverse nowrap;align-items:flex-start;padding:var(--mynah-chat-wrapper-spacing);gap:var(--mynah-chat-wrapper-spacing)}.mynah-chat-wrapper.loading>.mynah-chat-items-container{padding-bottom:var(--mynah-sizing-14)}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child>.mynah-card{min-width:100px;min-height:var(--mynah-sizing-14)}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child>.mynah-card>.mynah-chat-item-card-footer{display:none}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child.mynah-chat-item-empty .mynah-chat-items-spinner{display:inline-flex}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child.mynah-chat-item-empty .mynah-chat-items-spinner>span{flex:0 0 auto}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child:not(.mynah-chat-item-empty):before{content:"";pointer-events:none;position:absolute;overflow:hidden;border-bottom-right-radius:var(--mynah-card-radius);border-bottom-left-radius:var(--mynah-card-radius-corner);bottom:0;left:0;right:0;width:auto;height:100%;box-sizing:border-box;z-index:10;background-image:linear-gradient(90deg, var(--mynah-color-button) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, var(--mynah-color-button) 100%);background-position:0% bottom;background-size:200% var(--mynah-sizing-1);background-repeat:repeat-x;animation:horizontal-roll 1250ms linear infinite both}.mynah-chat-wrapper.loading>.mynah-chat-overflowing-intermediate-block{display:flex;flex-flow:column nowrap;max-height:0;overflow:visible;justify-content:flex-end}.mynah-chat-wrapper.loading>.mynah-chat-overflowing-intermediate-block:not(.hidden)>.mynah-chat-stop-chat-response-button{display:inline-flex}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block{display:flex;flex-flow:column nowrap;max-height:0;overflow:visible;justify-content:flex-end;align-items:center;border-bottom:1px solid var(--mynah-color-border-default)}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block.hidden>*{display:none !important}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button{margin-bottom:var(--mynah-sizing-2);display:none;min-height:var(--mynah-sizing-8)}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button:active{box-shadow:none;filter:none}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button *{font-size:var(--mynah-font-size-xsmall)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper{display:block;padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt{display:flex;flex-flow:column nowrap;overflow:hidden;box-sizing:border-box;border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper{display:flex;flex-flow:row nowrap;overflow:visible;box-sizing:border-box;gap:var(--mynah-sizing-2);align-items:flex-start;position:relative;color:var(--mynah-color-text-weak)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper{align-self:flex-start;box-sizing:border-box;flex-shrink:0;line-height:var(--mynah-line-height);display:flex;flex-flow:row nowrap;align-items:center}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper.hidden{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper>.mynah-chat-prompt-input-command-text{user-select:none;cursor:pointer;font-family:var(--mynah-font-family);font-size:var(--mynah-font-size-large);color:var(--mynah-color-text-input);font-weight:bold;white-space:nowrap;max-width:calc(10*var(--mynah-font-size-large));overflow:hidden;text-overflow:ellipsis}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper{display:block;width:100%;position:relative;align-self:center}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input{font-family:var(--mynah-font-family);border:none;resize:none;background-color:rgba(0,0,0,0);font-size:var(--mynah-font-size-large);color:var(--mynah-color-text-input);caret-color:var(--mynah-color-text-input);outline:none;width:100%;max-height:20vh;line-height:var(--mynah-line-height);white-space:pre-wrap;word-break:normal;overflow-wrap:break-word}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input:placeholder-shown{text-overflow:ellipsis}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input::placeholder{color:var(--mynah-color-text-weak);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input:not(.mynah-chat-prompt-input-sizer){position:absolute;height:auto;width:auto;top:0;right:0;bottom:0;left:0;padding:0;z-index:100}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input-sizer{display:inline-block;width:100%;opacity:1;pointer-events:none;overflow:auto;color:rgba(0,0,0,0);position:relative;z-index:150}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input-sizer>span.context{position:relative;color:var(--mynah-color-button-reverse);border-radius:calc(var(--mynah-input-radius)/2);display:inline;white-space:nowrap;overflow-wrap:break-word;z-index:1000}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input-sizer>span.context:before{content:"";position:absolute;left:-1px;right:-1px;width:auto;height:100%;background-color:var(--mynah-color-button);border-radius:inherit;z-index:-1}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button-wrapper{display:inline-flex;width:var(--mynah-sizing-8);height:var(--mynah-line-height);flex-flow:row nowrap;align-items:center;overflow:visible}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button-wrapper>.mynah-chat-prompt-button{background-color:transparent;width:var(--mynah-sizing-9);height:var(--mynah-sizing-9);min-width:var(--mynah-sizing-9);min-height:var(--mynah-sizing-9)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button-wrapper>.mynah-chat-prompt-button i{color:var(--mynah-color-button);height:var(--mynah-sizing-5);width:var(--mynah-sizing-5);padding-left:0}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper.no-text~.mynah-chat-prompt-button-wrapper>.mynah-chat-prompt-button:not([disabled]),.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button-wrapper>.mynah-chat-prompt-button[disabled]{pointer-events:none;opacity:.25}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper.no-text~.mynah-chat-prompt-button-wrapper>.mynah-chat-prompt-button:not([disabled]) i,.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button-wrapper>.mynah-chat-prompt-button[disabled] i{color:var(--mynah-color-text-weak)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper:empty{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item{position:relative;display:inline-block;max-width:250px;cursor:pointer}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;border-radius:var(--mynah-card-radius);opacity:0;transition:var(--mynah-short-transition-rev);z-index:8000;background-color:var(--mynah-color-alternate)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-chat-attachment-delete-icon{color:var(--mynah-color-alternate-reverse);opacity:0;transition:var(--mynah-short-transition-rev);position:absolute;left:50%;top:50%;width:30px;height:30px;margin-left:-15px;margin-top:-15px;z-index:9000}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-chat-attachment-delete-icon>i{width:30px;height:30px}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:hover:after{opacity:.75}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:hover>.mynah-chat-attachment-delete-icon{opacity:1}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card{pointer-events:none !important}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card *{pointer-events:none !important}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card>.mynah-card-body{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper.input-has-focus>.mynah-chat-prompt{border:var(--mynah-border-width) solid var(--mynah-color-button)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt-chars-indicator{width:100%;font-size:var(--mynah-font-size-xsmall);padding-top:var(--mynah-sizing-2);opacity:.5;display:flex;align-items:center;justify-content:flex-end;font-style:italic}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper+.mynah-chat-prompt-input-info{padding-top:0;margin-top:calc(-1*var(--mynah-sizing-2));flex-basis:fit-content}.mynah-chat-wrapper>.mynah-chat-prompt-input-sticky-card:not(:empty){padding-top:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-input-sticky-card>.mynah-chat-item-card{max-width:100%;width:100%}.mynah-chat-wrapper>.mynah-chat-prompt-input-sticky-card>.mynah-chat-item-card>.mynah-card{border-bottom-left-radius:var(--mynah-card-radius) !important}.mynah-chat-wrapper>.mynah-chat-prompt-input-info{display:flex;flex-flow:row nowrap;box-sizing:border-box;overflow:hidden;padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-input-info,.mynah-chat-wrapper>.mynah-chat-prompt-input-info *{font-size:var(--mynah-font-size-xsmall)}.mynah-chat-wrapper>.mynah-chat-prompt-input-info:empty{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-input-info>*{margin:0;margin-block-start:0;margin-block-end:0;margin-top:0;margin-bottom:0}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-color-text:"default: var(--vscode-foreground); alternate: var(--mynah-color-button-reverse); strong: var(--vscode-input-foreground); weak: var(--vscode-disabledForeground); link: var(--vscode-textLink-foreground); input: var(--vscode-input-foreground); "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-statuses:"success, error, warning, info, "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-syntax-colors:"bg: var(--vscode-terminal-dropBackground); variable: var(--vscode-debugTokenExpression-name); function: var(--vscode-gitDecoration-modifiedResourceForeground); operator: var(--vscode-debugTokenExpression-name); attr-value: var(--vscode-debugIcon-stepBackForeground); attr: var(--vscode-debugTokenExpression-string); property: var(--vscode-terminal-ansiCyan); comment: var(--vscode-debugConsole-sourceForeground); code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit)); "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-status-colors:"info: #0971d3; success: #037f03; warning: #b2911c; error: #d91515; "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-font-sizes:"xxsmall: 0.8rem; xsmall: 0.9rem; small: 1rem; medium: 1.125rem; large: 1.25rem; "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-padding-sizes:"none: 0; small: 1; medium: 3; large: 5; "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-transitions:"bottom-panel: 850, cubic-bezier(0.25, 1, 0, 1), ; very-short: 600, cubic-bezier(0.25, 1, 0, 1), ; very-long: 1650, cubic-bezier(0.25, 1, 0, 1), ; short: 550, cubic-bezier(0.85, 0.15, 0, 1), ; short-rev: 580, cubic-bezier(0.35, 1, 0, 1), ; "}.mynah-chat-items-container :export,.mynah-chat-prompt-input-sticky-card :export{mynah-syntax-token-styles:"comments: comment, prolog, doctype, cdata, ; punctuation: punctuation; namespace: namespace; properties: property, tag, boolean, number, constant, symbol, inserted, ; attributes: selector, attr-name, string, char, builtin, deleted, ; operators: operator, entity, url, ; attr-values: atrule, attr-value, class-name, keyword, ; functions: function; variables: regex, important, variable, ; bold: important, bold, ; italic: italic; entity: entity; "}.mynah-chat-items-container :root,.mynah-chat-prompt-input-sticky-card :root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: calc(var(--mynah-sizing-base) * 1);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-chat-wrapper-spacing: var(--mynah-sizing-4);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-alternate: var(--mynah-color-button-reverse);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-toggle: var(--vscode-sideBar-background);--mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit));--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: #0971d3;--mynah-color-status-success: #037f03;--mynah-color-status-warning: #b2911c;--mynah-color-status-error: #d91515;--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-card-bg: var(--vscode-editor-background);--mynah-card-bg-alternate: var(--mynah-color-button);--mynah-shadow-button: none;--mynah-shadow-card: none;--mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);--mynah-font-size-xxsmall: 0.8rem;--mynah-font-size-xsmall: 0.9rem;--mynah-font-size-small: 1rem;--mynah-font-size-medium: 1.125rem;--mynah-font-size-large: 1.25rem;--mynah-line-height: 1.5rem;--mynah-syntax-code-line-height: 1.5rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-input-radius: var(--mynah-sizing-1);--mynah-card-radius-corner: 0;--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);--mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1)}.mynah-chat-items-container .mynah-chat-item-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card{display:inline-flex;flex-flow:column nowrap;position:relative;max-width:90%;transition:var(--mynah-text-flow-transition);transform:translate3d(0, min(50%, 25vh), 0) scale(0.95, 1.25);opacity:0;transform-origin:center bottom;gap:var(--mynah-sizing-4)}.mynah-chat-items-container .mynah-chat-item-card-status-success>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-success>.mynah-card{border-color:var(--mynah-color-status-success)}.mynah-chat-items-container .mynah-chat-item-card-status-success>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-success>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-success)}.mynah-chat-items-container .mynah-chat-item-card-status-error>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-error>.mynah-card{border-color:var(--mynah-color-status-error)}.mynah-chat-items-container .mynah-chat-item-card-status-error>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-error>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-error)}.mynah-chat-items-container .mynah-chat-item-card-status-warning>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-warning>.mynah-card{border-color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card-status-warning>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-warning>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card-status-info>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-info>.mynah-card{border-color:var(--mynah-color-status-info)}.mynah-chat-items-container .mynah-chat-item-card-status-info>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-info>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-info)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card{padding-left:var(--mynah-sizing-10)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card>.mynah-chat-item-card-icon{position:absolute;left:var(--mynah-sizing-4)}.mynah-chat-items-container .mynah-chat-item-card.reveal,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.reveal{opacity:1;transform:translate3d(0, 0, 0) scale(1, 1)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream.typewriter-animating:before,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream.typewriter-animating:before{content:"";pointer-events:none;position:absolute;overflow:hidden;border-bottom-right-radius:var(--mynah-card-radius);border-bottom-left-radius:var(--mynah-card-radius-corner);bottom:0;left:0;right:0;width:auto;height:100%;box-sizing:border-box;z-index:10;background-image:linear-gradient(90deg, var(--mynah-color-button) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, var(--mynah-color-button) 100%);background-position:0% bottom;background-size:200% var(--mynah-sizing-1);background-repeat:repeat-x;animation:horizontal-roll 1250ms linear infinite both}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card{max-width:100%;width:100%;padding:var(--mynah-sizing-3) 0 var(--mynah-sizing-3) 0;border-top:1px solid var(--mynah-color-border-default);margin-top:var(--mynah-sizing-3);padding-bottom:0}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title{font-size:var(--mynah-font-size-large)}.mynah-chat-items-container .mynah-chat-item-card>span.invisible,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>span.invisible{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-code-result,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-code-result{min-width:70%}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-card-icon-wrapper{background-color:var(--mynah-card-bg);border:var(--mynah-border-width) solid var(--mynah-color-border-default);color:var(--mynah-color-text-default);padding:var(--mynah-sizing-2);border-radius:100%}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner{overflow:visible;z-index:10000;gap:var(--mynah-sizing-2);justify-content:flex-start;align-items:center;transition:var(--mynah-very-short-transition);display:flex}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span{position:relative;display:inline-block;width:var(--mynah-sizing-5);height:var(--mynah-sizing-5);border:var(--mynah-sizing-half) solid rgba(0,0,0,0);border-radius:50%;border-top-color:var(--mynah-color-button);animation:spinner-spin 1s ease-in-out infinite;transform-origin:center center;overflow:visible}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span:before,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span:before{position:absolute;content:"";top:calc(-1*var(--mynah-sizing-half));left:calc(-1*var(--mynah-sizing-half));right:calc(-1*var(--mynah-sizing-half));bottom:calc(-1*var(--mynah-sizing-half));width:auto;height:auto;aspect-ratio:1;border:var(--mynah-sizing-half) solid var(--mynah-color-button);border-radius:50%;opacity:.15;box-sizing:border-box}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>div,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>div{opacity:1}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body{padding:calc(2*var(--mynah-border-width))}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>.mynah-syntax-highlighter,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>.mynah-syntax-highlighter{filter:contrast(1.15) brightness(0.85)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h1:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h1:first-child{margin-top:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h2:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h2:first-child{margin-top:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h3:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h3:first-child{margin-top:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h4:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div h4:first-child{margin-top:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content{margin-top:var(--mynah-sizing-3);padding-top:var(--mynah-sizing-4);border-top:var(--mynah-button-border-width) solid var(--mynah-color-border-default)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);margin:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content .mynah-source-link-title,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content .mynah-source-link-title{font-size:var(--mynah-font-size-small);font-weight:400}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-item-card-footer,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-item-card-footer{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;padding-top:var(--mynah-sizing-3);border-top:1px solid var(--mynah-color-border-default)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-item-card-footer>.mynah-ui-chat-item-small-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-item-card-footer>.mynah-ui-chat-item-small-card{padding:0;margin:0;border:none;flex:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question{display:inline-flex;flex-flow:column nowrap;position:relative;gap:var(--mynah-sizing-2)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-text,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-text{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);font-style:italic}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper{display:inline-flex;flex-flow:row wrap;max-width:100%;gap:var(--mynah-sizing-1)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option{color:var(--mynah-color-text-default)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option:not(:hover),.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option:not(:hover){opacity:.75}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content{display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-2);overflow:hidden;position:relative}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item{max-width:100%}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card{padding:0;border-radius:0;box-shadow:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item .amzn-mynah-search-result-highlight,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item .amzn-mynah-search-result-highlight{background-color:inherit;color:inherit}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:not(:nth-of-type(1)),.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:not(:nth-of-type(1)){display:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(1),.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(1){margin-bottom:calc(-1*var(--mynah-sizing-4));pointer-events:none;position:relative;-webkit-mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-12)), transparent 100%);-webkit-mask-size:100% 100%;mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-12)), transparent 100%);mask-size:100% 100%;mask-image:linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%);-webkit-mask-image:linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(2)~.mynah-chat-item-card-related-content-show-more,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(2)~.mynah-chat-item-card-related-content-show-more{display:flex}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more{display:none;max-width:80%;z-index:10000;margin-block-start:0;margin-block-end:0;align-self:center;height:var(--mynah-sizing-8);filter:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>span,.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>i,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>span,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>i{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--mynah-font-size-xsmall)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt{align-self:flex-end}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-chat-item-card-icon-wrapper{align-self:flex-end;margin-bottom:calc(-2*var(--mynah-sizing-1));background-color:var(--mynah-card-bg-alternate);color:var(--mynah-color-text-alternate)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-followup-question,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-followup-question,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-followup-question,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-followup-question,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content{align-items:flex-end}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card{padding:var(--mynah-sizing-4);background-color:var(--mynah-card-bg-alternate);border-bottom-right-radius:var(--mynah-card-radius-corner)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card>.mynah-card-body,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card>.mynah-card-body{color:var(--mynah-color-text-alternate);overflow-wrap:break-word}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card{border:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card{background-color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-empty>.mynah-card:empty,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-empty>.mynah-card:empty{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-code-result>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-code-result>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-card{border-bottom-left-radius:var(--mynah-card-radius-corner);max-height:100%;flex:1}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-icon-wrapper,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-icon-wrapper{align-self:flex-start;margin-bottom:calc(-2*var(--mynah-sizing-1));background-color:var(--mynah-card-bg);border:var(--mynah-border-width) solid var(--mynah-color-border-default);color:var(--mynah-color-text-default)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact{opacity:1}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header{opacity:1}.mynah-chat-items-container .mynah-chat-item-card.mynah-ui-chat-item-inline-card.mynah-chat-item-card-has-icon>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-ui-chat-item-inline-card.mynah-chat-item-card-has-icon>.mynah-card{padding-left:var(--mynah-sizing-3)}.mynah-chat-items-container .mynah-chat-item-card.mynah-ui-chat-item-inline-card.mynah-chat-item-card-has-icon>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-ui-chat-item-inline-card.mynah-chat-item-card-has-icon>.mynah-card>.mynah-chat-item-card-icon{left:0}.mynah-chat-items-container .mynah-chat-item-card.mynah-ui-chat-item-small-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-ui-chat-item-small-card *,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-ui-chat-item-small-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-ui-chat-item-small-card *{font-size:var(--mynah-font-size-xsmall)}.mynah-chat-command-selector{display:flex;box-sizing:border-box;background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);width:100%;pointer-events:all;flex-flow:column nowrap;align-items:stretch;justify-content:flex-start;max-height:80vh;overflow-x:hidden;padding:var(--mynah-sizing-4);overflow-y:auto;position:relative;-webkit-mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-6)), transparent 100%);-webkit-mask-size:100% 100%;mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-6)), transparent 100%);mask-size:100% 100%}.mynah-chat-command-selector>.mynah-chat-command-selector-group{display:flex;box-sizing:border-box;width:100%;flex-flow:column nowrap;align-items:stretch;justify-content:flex-start;gap:var(--mynah-sizing-1)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-group-title{margin:0;color:var(--mynah-color-text-strong);padding:0 var(--mynah-sizing-3);margin-bottom:var(--mynah-sizing-1);font-size:var(--mynah-font-size-large);position:relative;border-radius:var(--mynah-input-radius);overflow:hidden}.mynah-chat-command-selector>.mynah-chat-command-selector-group+.mynah-chat-command-selector-group{margin-top:var(--mynah-sizing-2);padding-top:var(--mynah-sizing-4);border-top:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command{display:flex;position:relative;box-sizing:border-box;width:100%;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;overflow:hidden;cursor:pointer;padding:var(--mynah-sizing-2) var(--mynah-sizing-3);color:var(--mynah-color-text-default);border-radius:var(--mynah-input-radius);transition:var(--mynah-short-transition-rev);gap:var(--mynah-sizing-1)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command[disabled=true]{opacity:.5}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command[disabled=true]::before{border-color:transparent !important}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command[disabled=true],.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command[disabled=true] *{pointer-events:none}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover:not([disabled=true]),.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command:not([disabled=true]){background-color:var(--mynah-color-button)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover:not([disabled=true]),.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover:not([disabled=true]) *,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command:not([disabled=true]),.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command:not([disabled=true]) *{color:var(--mynah-color-button-reverse)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover:not([disabled=true]) .mynah-chat-command-selector-command-description,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover:not([disabled=true]) * .mynah-chat-command-selector-command-description,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command:not([disabled=true]) .mynah-chat-command-selector-command-description,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command:not([disabled=true]) * .mynah-chat-command-selector-command-description{color:var(--mynah-color-button-reverse);opacity:.65}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command>.mynah-chat-command-selector-command-name{font-family:var(--mynah-font-family);font-size:var(--mynah-font-size-medium);font-weight:bold;flex:0 1 0%}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command>.mynah-chat-command-selector-command-description{font-size:var(--mynah-font-size-small);color:var(--mynah-color-text-weak);flex:1 0 100%}.mynah-chat-command-selector:not(.has-target-item)>.mynah-chat-command-selector-group:first-child>.mynah-chat-command-selector-command:first-of-type:before{content:"";z-index:-1;border:calc(2*var(--mynah-border-width)) solid var(--mynah-color-button);box-sizing:border-box;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit}.mynah-chat-item-tree-view-wrapper{margin:0;margin-block-end:0 !important;margin-block-start:0 !important;padding:var(--mynah-sizing-half)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container{background-color:var(--mynah-card-bg);color:var(--mynah-color-text-default);margin-block-start:0 !important;margin-block-end:0 !important;position:relative;border-radius:var(--mynah-input-radius);border:var(--mynah-border-width) solid var(--mynah-color-border-default);overflow:hidden}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;position:relative;padding:var(--mynah-sizing-3);gap:var(--mynah-sizing-2);border-bottom:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title>h4{margin:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-border-default);opacity:.25;pointer-events:none}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view{padding:var(--mynah-sizing-1)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view{overflow:hidden;box-sizing:border-box;width:100%;overflow-y:hidden;overflow-x:auto;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view>.mynah-chat-item-tree-view-button{gap:var(--mynah-sizing-1)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-button-title{display:inline-flex;gap:var(--mynah-sizing-1);align-items:center}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-button-weak-title{opacity:.65}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-pull-request-item{width:100%;box-sizing:border-box}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view{padding-left:var(--mynah-sizing-5)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;gap:var(--mynah-sizing-2);overflow:hidden;cursor:pointer;width:calc(100% - var(--mynah-sizing-4));padding:calc(3*var(--mynah-sizing-half));position:relative;box-sizing:content-box;min-height:auto;height:auto;margin:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item>.mynah-chat-item-tree-view-file-item-actions{z-index:150}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item:not(:hover)>.mynah-chat-item-tree-view-file-item-actions{opacity:0;pointer-events:none}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item:before{content:"";position:absolute;z-index:0;opacity:.1;width:100%;height:100%;left:0;top:0;border-radius:inherit;z-index:100;pointer-events:all}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-info:before{background-color:var(--mynah-color-status-info)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-info>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-info)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-success:before{background-color:var(--mynah-color-status-success)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-success>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-success)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-warning:before{background-color:var(--mynah-color-status-warning)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-warning>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-warning)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-error:before{background-color:var(--mynah-color-status-error)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-status-error>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-error)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-details{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;gap:var(--mynah-sizing-1);font-size:90%;z-index:10;flex:1;flex-shrink:2;overflow:hidden}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-details>.mynah-chat-item-tree-view-file-item-details-text{overflow:hidden;flex:1;white-space:nowrap;text-overflow:ellipsis}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions{display:flex;flex-flow:row-reverse nowrap;justify-content:flex-end;align-items:center;font-size:90%;z-index:10;padding-right:var(--mynah-sizing-1);flex-shrink:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions>.mynah-button{width:auto;height:auto;min-width:auto;padding:var(--mynah-sizing-half);border-radius:var(--mynah-button-radius);margin:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions>.mynah-button.info{color:var(--mynah-color-status-info)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions>.mynah-button.success{color:var(--mynah-color-status-success)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions>.mynah-button.warning{color:var(--mynah-color-status-warning)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-actions>.mynah-button.error{color:var(--mynah-color-status-error)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-deleted{text-decoration:line-through}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-title{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;gap:var(--mynah-sizing-1);max-width:100%;overflow:hidden;z-index:10;flex-shrink:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-title>i{opacity:.75}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item-title>span{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item>.mynah-chat-single-file-icon{position:relative;padding:var(--mynah-sizing-2);display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;border-radius:var(--mynah-input-radius);color:var(--mynah-card-bg)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view-file-item>.mynah-chat-single-file-icon:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-text-default);opacity:.5;pointer-events:none;border-radius:inherit}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-file-item{padding:var(--mynah-sizing-2);box-sizing:border-box;width:100%;border-radius:inherit}.mynah-chat-item-tree-view-wrapper-label{border-top-left-radius:var(--mynah-card-radius);border-top-right-radius:var(--mynah-card-radius);background-color:var(--mynah-color-alternate);margin-bottom:0px;padding:var(--mynah-sizing-4)}.mynah-chat-item-tree-view-wrapper-feedback-label{padding-left:var(--mynah-sizing-4)}.mynah-chat-item-tree-view-wrapper-feedback-div{float:right}.mynah-chat-item-tree-view-wrapper-feedback-div button:first-child{margin-right:var(--mynah-sizing-2)}.mynah-chat-item-tree-view-license{color:var(--mynah-color-text-weak)}.mynah-chat-item-tree-view-license:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background-color:var(--mynah-card-bg-alternate);opacity:.07;pointer-events:none}.mynah-chat-item-tree-view-license ul{margin:0;padding-left:var(--mynah-sizing-8)}.mynah-chat-item-tree-view-license ul>li:not(:first-child){margin-top:var(--mynah-sizing-2)}.mynah-chat-item-tree-view-license ul>li .mynah-card-body p{margin:0}.mynah-chat-item-tree-view-license .mynah-chat-item-tree-view-license-dropdown-button>span{max-width:unset}.outer-container{display:flex}.outer-container:not(:empty){margin-top:var(--mynah-sizing-3)}.mynah-prompt-attachment-container.vertical-overflow pre{position:relative;-webkit-mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-16)), transparent 100%);-webkit-mask-size:100% 100%;mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-16)), transparent 100%);mask-size:100% 100%}.mynah-prompt-attachment-container{box-sizing:border-box;max-width:100%;max-height:calc(2*var(--mynah-sizing-12))}.mynah-prompt-attachment-container>.mynah-button{position:absolute;background-color:var(--mynah-card-bg) !important;width:var(--mynah-sizing-7) !important;min-width:var(--mynah-sizing-7) !important;max-width:var(--mynah-sizing-7) !important;height:var(--mynah-sizing-7) !important;border-radius:100%;right:calc(-1*var(--mynah-sizing-2));top:calc(-1*var(--mynah-sizing-2));border:var(--mynah-border-width) solid var(--mynah-color-border-default);opacity:1 !important;filter:brightness(0.95)}.mynah-prompt-attachment-container:not(:hover)>.mynah-button{display:none}.mynah-prompt-attachment-container>.mynah-card-body>.mynah-syntax-highlighter pre{text-overflow:ellipsis}.mynah-prompt-input-snippet-attachment-overlay{max-width:90vw;max-height:70vh}.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter{max-height:calc(70vh - var(--mynah-sizing-12)) !important}.mynah-prompt-attachment-container,.mynah-prompt-input-snippet-attachment-overlay{position:relative;overflow:visible;width:100%;box-sizing:border-box}.mynah-prompt-attachment-container>.mynah-card-body,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body{max-height:100%}.mynah-prompt-attachment-container>.mynah-card-body>.mynah-syntax-highlighter,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter{user-select:none;pointer-events:none;margin:0;max-height:100%;overflow:hidden}.mynah-prompt-attachment-container>.mynah-card-body>.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:none}.mynah-prompt-attachment-container pre,.mynah-prompt-input-snippet-attachment-overlay pre{text-overflow:ellipsis}',"",{version:3,sources:["webpack://./src/styles/components/chat/_chat-wrapper.scss","webpack://./src/styles/components/chat/_chat-items-container.scss","webpack://./src/styles/components/chat/_chat-items-bottom-animator.scss","webpack://./src/styles/components/chat/_chat-overflowing-intermediate-block.scss","webpack://./src/styles/components/chat/_chat-prompt-wrapper.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/components/chat/_chat-item-card.scss","webpack://./src/styles/components/chat/_chat-command-selector.scss","webpack://./src/styles/components/chat/_chat-item-tree-view.scss","webpack://./src/styles/components/chat/_chat-prompt-attachment.scss"],names:[],mappings:"AACA,6CACI,mBAAA,CACA,uBAAA,CACA,yBAAA,CACA,0BAAA,CACA,sBAAA,CAEJ,oBAEI,+BAAA,CAEA,iBAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,WAAA,CACA,aAAA,CACA,uBAAA,CACA,eAAA,CACA,4BAAA,CACA,mBAAA,CACA,YAAA,CACA,2CACI,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,qBAAA,CACA,kCAAA,CACA,mCAAA,CAEJ,0BACI,6CAAA,CACA,UAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,YAAA,CACA,SAAA,CACA,mBAAA,CACA,uCAAA,CACA,8BAAA,CC9CR,gDACI,iBAAA,CACA,YAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CACA,+BAAA,CACA,sBAAA,CACA,yCAAA,CACA,qCAAA,CAIA,wDACI,qCAAA,CAGQ,oIACI,eAAA,CACA,iCAAA,CACA,iKACI,YAAA,CAIJ,wKACI,mBAAA,CACA,6KAEI,aAAA,CC7B5B,2JACE,UAAA,CACA,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,mDAAA,CACA,yDAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,UAAA,CACA,6JAAA,CAOA,6BAAA,CACA,0CAAA,CACA,0BAAA,CACA,qDAAA,CCvBE,uEACI,YAAA,CACA,uBAAA,CACA,YAAA,CACA,gBAAA,CACA,wBAAA,CACA,0HACI,mBAAA,CAIZ,+DACI,YAAA,CACA,uBAAA,CACA,YAAA,CACA,gBAAA,CACA,wBAAA,CACA,kBAAA,CACA,yDAAA,CACA,wEACI,uBAAA,CAEJ,qGACI,mCAAA,CACA,YAAA,CACA,gCAAA,CAEA,4GACI,eAAA,CACA,WAAA,CAEJ,uGACI,uCAAA,CCjCZ,+CACI,aAAA,CACA,6BAAA,CAEA,kEACI,YAAA,CACA,uBAAA,CACA,eAAA,CACA,qBAAA,CACA,wEAAA,CACA,qCAAA,CACA,sCAAA,CACA,6BAAA,CAEA,mGACI,YAAA,CACA,oBAAA,CACA,gBAAA,CACA,qBAAA,CACA,yBAAA,CACA,sBAAA,CACA,iBAAA,CACA,kCAAA,CAEA,4IACI,qBAAA,CACA,qBAAA,CACA,aAAA,CACA,oCAAA,CACA,YAAA,CACA,oBAAA,CACA,kBAAA,CAEA,mJACI,YAAA,CAGJ,kLACI,gBAAA,CACA,cAAA,CACA,oCAAA,CACA,sCAAA,CACA,mCAAA,CACA,gBAAA,CACA,kBAAA,CACA,+CAAA,CACA,eAAA,CACA,sBAAA,CAIR,0IACI,aAAA,CACA,UAAA,CACA,iBAAA,CACA,iBAAA,CAEA,mKACI,oCAAA,CACA,WAAA,CACA,WAAA,CACA,8BAAA,CACA,sCAAA,CACA,mCAAA,CACA,yCAAA,CACA,YAAA,CACA,UAAA,CACA,eAAA,CACA,oCAAA,CACA,oBAAA,CACA,iBAAA,CACA,wBAAA,CAEA,qLACI,sBAAA,CAGJ,gLACI,kCAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAGJ,uMACI,iBAAA,CACA,WAAA,CACA,UAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,SAAA,CACA,WAAA,CAIR,yKACI,oBAAA,CACA,UAAA,CACA,SAAA,CACA,mBAAA,CACA,aAAA,CACA,mBAAA,CACA,iBAAA,CACA,WAAA,CACA,sLACI,iBAAA,CACA,uCAAA,CACA,+CAAA,CACA,cAAA,CACA,kBAAA,CACA,wBAAA,CACA,YAAA,CACA,6LACI,UAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,0CAAA,CACA,qBAAA,CACA,UAAA,CAKZ,4KACI,mBAAA,CACA,2BAAA,CACA,+BAAA,CACA,oBAAA,CACA,kBAAA,CACA,gBAAA,CACA,sMACI,4BAAA,CACA,2BAAA,CACA,4BAAA,CACA,+BAAA,CACA,gCAAA,CACA,wMACI,+BAAA,CACA,4BAAA,CACA,2BAAA,CACA,cAAA,CAKZ,8aAEI,mBAAA,CACA,WAAA,CAEA,kbACI,kCAAA,CAOZ,8GACI,YAAA,CAGJ,oIACI,iBAAA,CACA,oBAAA,CACA,eAAA,CACA,cAAA,CAEA,0IACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,sCAAA,CACA,SAAA,CACA,4CAAA,CACA,YAAA,CACA,6CAAA,CAGJ,uKACI,0CAAA,CACA,SAAA,CACA,4CAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,gBAAA,CACA,YAAA,CAEA,yKACI,UAAA,CACA,WAAA,CAKJ,gJACI,WAAA,CAGJ,6KACI,SAAA,CAIR,gJACI,8BAAA,CAEA,kJACI,8BAAA,CAGJ,iKACI,YAAA,CAOpB,kFACI,gEAAA,CAGJ,kFACI,UAAA,CACA,uCAAA,CACA,iCAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAGJ,6EACI,aAAA,CACA,yCAAA,CACA,sBAAA,CAKJ,qEACI,iCAAA,CAGJ,+EACI,cAAA,CACA,UAAA,CACA,2FACI,6DAAA,CAKZ,kDACI,YAAA,CACA,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,6BAAA,CAEA,sGAEI,uCAAA,CAGJ,wDACI,YAAA,CAGJ,oDACI,QAAA,CACA,oBAAA,CACA,kBAAA,CACA,YAAA,CACA,eAAA,CChQJ,iFACI,oQAAA,CADJ,iFACI,gDAAA,CADJ,iFACI,ogBAAA,CADJ,iFACI,yFAAA,CADJ,iFACI,mGAAA,CADJ,iFACI,8DAAA,CADJ,iFACI,mQAAA,CADJ,iFACI,ydAAA,CA4HR,6EACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CAMI,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAGJ,mDAAA,CACA,gCAAA,CACA,yBAAA,CAGI,oDAAA,CAAA,+DAAA,CAAA,yDAAA,CAAA,yDAAA,CAAA,0DAAA,CAAA,wDAAA,CAGJ,kDAAA,CACA,mHAAA,CACA,wCAAA,CAEA,sGAAA,CAEA,gDAAA,CACA,qCAAA,CAEA,sDAAA,CACA,gDAAA,CAGI,8DAAA,CAAA,sEAAA,CAAA,qFAAA,CAAA,sEAAA,CAAA,2EAAA,CAAA,oEAAA,CAAA,8DAAA,CAAA,yEAAA,CAAA,oGAAA,CAGJ,iEAAA,CACA,4FAAA,CAII,kCAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,mCAAA,CAGJ,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,gDAAA,CACA,oDAAA,CAEA,2BAAA,CACA,yBAAA,CACA,0DAAA,CAGI,iCAAA,CAAA,gCAAA,CAAA,6BAAA,CAAA,kCAAA,CAAA,gCAAA,CAGJ,2BAAA,CACA,uCAAA,CAEA,0CAAA,CACA,2CAAA,CACA,6BAAA,CACA,4CAAA,CCrKA,sEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,kEAAA,CAAA,mEAAA,CDsLA,oEAAA,CACA,oEAAA,CACA,kEAAA,CACA,mEAAA,CACA,+EAAA,CACA,oHAAA,CEzPJ,6GACI,mBAAA,CACA,uBAAA,CACA,iBAAA,CACA,aAAA,CACA,4CAAA,CACA,6DAAA,CACA,SAAA,CACA,8BAAA,CACA,yBAAA,CAKY,mKACI,8CAAA,CACA,yNACI,uCAAA,CAHR,+JACI,4CAAA,CACA,qNACI,qCAAA,CAHR,mKACI,8CAAA,CACA,yNACI,uCAAA,CAHR,6JACI,2CAAA,CACA,mNACI,oCAAA,CAQhB,iMACI,mCAAA,CACA,uPACI,iBAAA,CACA,0BAAA,CAKZ,2HACI,SAAA,CACA,0CAAA,CLrCR,iOACE,UAAA,CACA,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,mDAAA,CACA,yDAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,UAAA,CACA,6JAAA,CAOA,6BAAA,CACA,0CAAA,CACA,0BAAA,CACA,qDAAA,CKsBE,yJACI,cAAA,CACA,UAAA,CACA,uDAAA,CACA,sDAAA,CACA,gCAAA,CACA,gBAAA,CACA,6TACI,sCAAA,CAIR,2IACI,YAAA,CAGJ,qKACI,aAAA,CAEJ,mLACI,qCAAA,CACA,wEAAA,CACA,qCAAA,CACA,6BAAA,CACA,kBAAA,CAGA,yLACI,gBAAA,CACA,aAAA,CACA,yBAAA,CACA,0BAAA,CACA,kBAAA,CACA,6CAAA,CACA,YAAA,CACA,mMACI,iBAAA,CACA,oBAAA,CACA,2BAAA,CACA,4BAAA,CACA,mDAAA,CACA,iBAAA,CACA,0CAAA,CACA,8CAAA,CACA,8BAAA,CACA,gBAAA,CACA,iNACI,iBAAA,CACA,UAAA,CACA,qCAAA,CACA,sCAAA,CACA,uCAAA,CACA,wCAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,+DAAA,CACA,iBAAA,CACA,WAAA,CACA,qBAAA,CAGR,iMACI,SAAA,CAGR,uKACI,yCAAA,CAEI,mOACI,sCAAA,CAKI,6MACI,YAAA,CADJ,6MACI,YAAA,CADJ,6MACI,YAAA,CADJ,6MACI,YAAA,CAKhB,mPACI,gCAAA,CACA,iCAAA,CACA,mFAAA,CACA,2UACI,kCAAA,CACA,uCAAA,CACA,QAAA,CAEJ,qSACI,sCAAA,CACA,eAAA,CAKZ,+LACI,YAAA,CACA,oBAAA,CACA,6BAAA,CACA,kBAAA,CACA,iCAAA,CACA,sDAAA,CACA,6PACI,SAAA,CACA,QAAA,CACA,WAAA,CACA,MAAA,CAKZ,mLACI,mBAAA,CACA,uBAAA,CACA,iBAAA,CACA,yBAAA,CACA,mQACI,kCAAA,CACA,uCAAA,CACA,iBAAA,CAEJ,yRACI,mBAAA,CACA,kBAAA,CACA,cAAA,CACA,yBAAA,CACA,6WACI,qCAAA,CACA,qYACI,WAAA,CAMhB,yLACI,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,eAAA,CACA,iBAAA,CACA,+QACI,cAAA,CACA,uSACI,SAAA,CACA,eAAA,CACA,eAAA,CAEJ,uVACI,wBAAA,CACA,aAAA,CAUA,uVACI,YAAA,CAEJ,2UACI,4CAAA,CACA,mBAAA,CDpNhB,iBAAA,CAOA,qHANY,CAOZ,2BAAA,CACA,6GARY,CASZ,mBAAA,CC4MgB,gFAAA,CACA,wFAAA,CAGA,2aACI,YAAA,CAMhB,yRACI,YAAA,CACA,aAAA,CACA,aAAA,CACA,oBAAA,CACA,kBAAA,CACA,iBAAA,CACA,4BAAA,CACA,WAAA,CACA,gkBAEI,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,uCAAA,CAIZ,oUAEI,mBAAA,CACA,gdACI,mBAAA,CACA,4CAAA,CACA,+CAAA,CACA,uCAAA,CAEJ,46BAEI,oBAAA,CAIA,wkBACI,YAAA,CAIR,g4BAEI,6BAAA,CACA,+CAAA,CACA,0DAAA,CACA,w4DAEI,uCAAA,CACA,wBAAA,CAGR,4gBACI,WAAA,CAIJ,iMACI,kDAAA,CAIR,6LACI,YAAA,CAEJ,+OACI,YAAA,CAKA,ijBACI,yDAAA,CACA,eAAA,CACA,MAAA,CAMJ,urBACI,qBAAA,CACA,4CAAA,CACA,qCAAA,CACA,wEAAA,CACA,qCAAA,CAGA,mkCACI,SAAA,CACA,+tCACI,SAAA,CAQR,+PACI,kCAAA,CACA,qTACI,MAAA,CAOZ,sVAEI,uCAAA,CC7UZ,6BACE,YAAA,CACA,qBAAA,CACA,qCAAA,CACA,sCAAA,CACA,UAAA,CACA,kBAAA,CACA,uBAAA,CACA,mBAAA,CACA,0BAAA,CACA,eAAA,CACA,iBAAA,CACA,6BAAA,CACA,eAAA,CFbE,iBAAA,CAOA,oHANY,CAOZ,2BAAA,CACA,4GARY,CASZ,mBAAA,CEKF,gEACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,uBAAA,CACA,mBAAA,CACA,0BAAA,CACA,yBAAA,CACA,yGACE,QAAA,CACA,oCAAA,CACA,+BAAA,CACA,mCAAA,CACA,sCAAA,CACA,iBAAA,CACA,uCAAA,CACA,eAAA,CAGF,mGACE,gCAAA,CACA,iCAAA,CACA,4EAAA,CAGF,qGACE,YAAA,CACA,iBAAA,CACA,qBAAA,CACA,UAAA,CACA,uBAAA,CACA,sBAAA,CACA,0BAAA,CACA,eAAA,CACA,cAAA,CACA,mDAAA,CACA,qCAAA,CACA,uCAAA,CACA,4CAAA,CACA,yBAAA,CACA,oHAIE,UAAA,CAHA,4HACE,mCAAA,CAGF,0OAEE,mBAAA,CAGJ,yQAEE,0CAAA,CACA,shBAEE,uCAAA,CACA,0tBACE,uCAAA,CACA,WAAA,CAIN,+IACE,oCAAA,CACA,uCAAA,CACA,gBAAA,CACA,WAAA,CAEF,sJACE,sCAAA,CACA,kCAAA,CACA,aAAA,CAQA,4JACE,UAAA,CACA,UAAA,CACA,wEAAA,CACA,qBAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CCzGV,mCACE,QAAA,CACA,6BAAA,CACA,+BAAA,CACA,gCAAA,CAEA,gFACE,qCAAA,CACA,qCAAA,CACA,+BAAA,CACA,6BAAA,CACA,iBAAA,CACA,uCAAA,CACA,wEAAA,CACA,eAAA,CAEA,yHACE,YAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,iBAAA,CACA,6BAAA,CACA,yBAAA,CACA,+EAAA,CAEA,4HACE,QAAA,CAGF,gIACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,kDAAA,CACA,WAAA,CACA,mBAAA,CAIJ,2GACE,6BAAA,CAGF,2GACE,eAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CACA,YAAA,CACA,uBAAA,CACA,0BAAA,CACA,sBAAA,CAEA,6IACE,yBAAA,CAGF,mJACE,mBAAA,CACA,yBAAA,CACA,kBAAA,CAGF,wJACE,WAAA,CAGF,8IACE,UAAA,CACA,qBAAA,CAGF,sIACE,kCAAA,CAIJ,qHACE,YAAA,CACA,oBAAA,CACA,6BAAA,CACA,kBAAA,CACA,yBAAA,CACA,eAAA,CACA,cAAA,CACA,wCAAA,CACA,wCAAA,CACA,iBAAA,CACA,sBAAA,CACA,eAAA,CACA,WAAA,CACA,QAAA,CAEA,kKACE,WAAA,CAGA,8KACE,SAAA,CACA,mBAAA,CAGJ,4HACE,UAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,MAAA,CACA,KAAA,CACA,qBAAA,CACA,WAAA,CACA,kBAAA,CAOE,wIACE,+CAAA,CAGF,6LACE,oCAAA,CAKF,2IACE,kDAAA,CAGF,gMACE,uCAAA,CAKF,2IACE,kDAAA,CAGF,gMACE,uCAAA,CAKF,yIACE,gDAAA,CAGF,8LACE,qCAAA,CAKN,6HACE,YAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,yBAAA,CACA,aAAA,CACA,UAAA,CACA,MAAA,CACA,aAAA,CACA,eAAA,CAEA,+KACE,eAAA,CACA,MAAA,CACA,kBAAA,CACA,sBAAA,CAIJ,6HACE,YAAA,CACA,4BAAA,CACA,wBAAA,CACA,kBAAA,CACA,aAAA,CACA,UAAA,CACA,mCAAA,CACA,aAAA,CACA,2IACE,UAAA,CACA,WAAA,CACA,cAAA,CACA,gCAAA,CACA,wCAAA,CACA,QAAA,CAEA,gJACE,oCAAA,CAGF,mJACE,uCAAA,CAGF,mJACE,uCAAA,CAGF,iJACE,qCAAA,CAKN,6HACE,4BAAA,CAGF,2HACE,YAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,yBAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CACA,aAAA,CAEA,6HACE,WAAA,CAGF,gIACE,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CAIJ,kJACE,iBAAA,CACA,6BAAA,CACA,YAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,uCAAA,CACA,0BAAA,CACA,yJACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,gDAAA,CACA,UAAA,CACA,mBAAA,CACA,qBAAA,CAKN,qHACE,6BAAA,CACA,qBAAA,CACA,UAAA,CACA,qBAAA,CAKN,yCACE,+CAAA,CACA,gDAAA,CACA,6CAAA,CACA,iBAAA,CACA,6BAAA,CAGF,kDACE,kCAAA,CAGF,gDACE,WAAA,CAEA,mEACE,kCAAA,CAIJ,mCAaE,kCAAA,CAZA,0CACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,KAAA,CACA,QAAA,CACA,+CAAA,CACA,WAAA,CACA,mBAAA,CAKF,sCACE,QAAA,CACA,kCAAA,CAGE,2DACE,gCAAA,CAGF,4DACE,QAAA,CAKN,2FACE,eAAA,CC1UJ,iBACE,YAAA,CACA,6BACE,gCAAA,CAKF,yDJRE,iBAAA,CAOA,qHANY,CAOZ,2BAAA,CACA,6GARY,CASZ,mBAAA,CIIJ,mCACE,qBAAA,CACA,cAAA,CACA,yCAAA,CACA,iDACE,iBAAA,CACA,gDAAA,CACA,sCAAA,CACA,0CAAA,CACA,0CAAA,CACA,uCAAA,CACA,kBAAA,CACA,oCAAA,CACA,kCAAA,CACA,wEAAA,CACA,oBAAA,CACA,uBAAA,CAGA,6DACE,YAAA,CAIF,kFACE,sBAAA,CAKN,+CACE,cAAA,CACA,eAAA,CAEE,0FACE,yDAAA,CAIN,kFAEE,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,qBAAA,CACA,oHACE,eAAA,CACA,wKACE,gBAAA,CACA,mBAAA,CACA,QAAA,CACA,eAAA,CACA,eAAA,CACA,sPACE,YAAA,CAIN,0FACE,sBAAA",sourcesContent:[`@import '../../mixins';
.mynah-chat-prompt-overlay-buttons-container {
    display: inline-flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-2);
    justify-content: flex-start;
    align-items: flex-start;
}
.mynah-chat-wrapper {
    // This allows us to recalculate depending on the screen width went to 0 and reverted back (VSCode panel close/open)
    transition: all 10ms 10ms linear;

    position: relative;
    width: inherit;
    min-width: inherit;
    max-width: inherit;
    height: 100%;
    flex: 1 0 100%;
    flex-flow: column nowrap;
    overflow: hidden;
    justify-content: space-around;
    align-items: stretch;
    display: none;
    > div[class^='mynah-chat'] {
        width: inherit;
        min-width: inherit;
        max-width: inherit;
        box-sizing: border-box;
        padding-left: var(--mynah-sizing-4);
        padding-right: var(--mynah-sizing-4);
    }
    &:after {
        transition: var(--mynah-very-short-transition);
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: auto;
        height: auto;
        background-color: black;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transform: translate3d(0, 0, 0) scale(2);
        transform-origin: center center;
    }

    @import 'chat-items-container';
    @import 'chat-overflowing-intermediate-block';
    @import 'chat-prompt-wrapper';
}

.mynah-chat-items-container,
.mynah-chat-prompt-input-sticky-card {
    @import 'chat-item-card';
}

@import 'chat-command-selector';
@import 'chat-item-tree-view';
@import 'chat-prompt-attachment';
`,`> .mynah-chat-items-container {
    position: relative;
    display: flex;
    flex: 1 1 0;
    overflow-x: hidden;
    overflow-y: auto;
    flex-flow: column-reverse nowrap;
    align-items: flex-start;
    padding: var(--mynah-chat-wrapper-spacing);
    gap: var(--mynah-chat-wrapper-spacing);
}

&.loading {
    > .mynah-chat-items-container {
        padding-bottom: var(--mynah-sizing-14);
        > .mynah-chat-item-card.mynah-chat-item-answer-stream {
            &:first-child {
                > .mynah-card {
                    min-width: 100px;
                    min-height: var(--mynah-sizing-14);
                    > .mynah-chat-item-card-footer {
                        display: none;
                    }
                }
                &.mynah-chat-item-empty {
                    .mynah-chat-items-spinner {
                        display: inline-flex;
                        > span {
                            // Spinner's size should remain the same
                            flex: 0 0 auto;
                        }
                    }
                }
                &:not(.mynah-chat-item-empty) {
                    @import "chat-items-bottom-animator";
                }
            }
        }
    }
}
`,`&:before {
  content: '';
  pointer-events: none;
  position: absolute;
  overflow: hidden;
  border-bottom-right-radius: var(--mynah-card-radius);
  border-bottom-left-radius: var(--mynah-card-radius-corner);
  bottom: 0;
  left: 0;
  right: 0;
  width: auto;
  height: 100%;
  box-sizing: border-box;
  z-index: 10;
  background-image: linear-gradient(
    90deg,
    var(--mynah-color-button) 0%,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0) 50%,
    var(--mynah-color-button) 100%
  );
  background-position: 0% bottom;
  background-size: 200% var(--mynah-sizing-1);
  background-repeat: repeat-x;
  animation: horizontal-roll 1250ms linear infinite both;
}
`,`&.loading {
    > .mynah-chat-overflowing-intermediate-block {
        display: flex;
        flex-flow: column nowrap;
        max-height: 0;
        overflow: visible;
        justify-content: flex-end;
        &:not(.hidden) > .mynah-chat-stop-chat-response-button {
            display: inline-flex;
        }
    }
}
> .mynah-chat-overflowing-intermediate-block {
    display: flex;
    flex-flow: column nowrap;
    max-height: 0;
    overflow: visible;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid var(--mynah-color-border-default);
    &.hidden > * {
        display: none !important;
    }
    > .mynah-chat-stop-chat-response-button {
        margin-bottom: var(--mynah-sizing-2);
        display: none;
        min-height: var(--mynah-sizing-8);

        &:active {
            box-shadow: none;
            filter: none;
        }
        * {
            font-size: var(--mynah-font-size-xsmall);
        }
    }
}
`,`> .mynah-chat-prompt-wrapper {
    display: block;
    padding: var(--mynah-sizing-4);

    > .mynah-chat-prompt {
        display: flex;
        flex-flow: column nowrap;
        overflow: hidden;
        box-sizing: border-box;
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        background-color: var(--mynah-card-bg);
        border-radius: var(--mynah-card-radius);
        padding: var(--mynah-sizing-4);

        > .mynah-chat-prompt-input-wrapper {
            display: flex;
            flex-flow: row nowrap;
            overflow: visible;
            box-sizing: border-box;
            gap: var(--mynah-sizing-2);
            align-items: flex-start;
            position: relative;
            color: var(--mynah-color-text-weak);

            > .mynah-chat-prompt-input-command-wrapper {
                align-self: flex-start;
                box-sizing: border-box;
                flex-shrink: 0;
                line-height: var(--mynah-line-height);
                display: flex;
                flex-flow: row nowrap;
                align-items: center;

                &.hidden {
                    display: none;
                }

                > .mynah-chat-prompt-input-command-text {
                    user-select: none;
                    cursor: pointer;
                    font-family: var(--mynah-font-family);
                    font-size: var(--mynah-font-size-large);
                    color: var(--mynah-color-text-input);
                    font-weight: bold;
                    white-space: nowrap;
                    max-width: calc(10 * var(--mynah-font-size-large));
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            > .mynah-chat-prompt-input-inner-wrapper {
                display: block;
                width: 100%;
                position: relative;
                align-self: center;

                > .mynah-chat-prompt-input {
                    font-family: var(--mynah-font-family);
                    border: none;
                    resize: none;
                    background-color: rgba(0, 0, 0, 0);
                    font-size: var(--mynah-font-size-large);
                    color: var(--mynah-color-text-input);
                    caret-color: var(--mynah-color-text-input);
                    outline: none;
                    width: 100%;
                    max-height: 20vh;
                    line-height: var(--mynah-line-height);
                    white-space: pre-wrap;
                    word-break: normal;
                    overflow-wrap: break-word;

                    &:placeholder-shown {
                        text-overflow: ellipsis;
                    }

                    &::placeholder {
                        color: var(--mynah-color-text-weak);
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }

                    &:not(.mynah-chat-prompt-input-sizer) {
                        position: absolute;
                        height: auto;
                        width: auto;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        padding: 0;
                        z-index: 100;
                    }
                }

                > .mynah-chat-prompt-input-sizer {
                    display: inline-block;
                    width: 100%;
                    opacity: 1;
                    pointer-events: none;
                    overflow: auto;
                    color: rgba(0, 0, 0, 0);
                    position: relative;
                    z-index: 150;
                    > span.context {
                        position: relative;
                        color: var(--mynah-color-button-reverse);
                        border-radius: calc(var(--mynah-input-radius) / 2);
                        display: inline;
                        white-space: nowrap;
                        overflow-wrap: break-word;
                        z-index: 1000;
                        &:before {
                            content: '';
                            position: absolute;
                            left: -1px;
                            right: -1px;
                            width: auto;
                            height: 100%;
                            background-color: var(--mynah-color-button);
                            border-radius: inherit;
                            z-index: -1;
                        }
                    }
                }

                & ~ .mynah-chat-prompt-button-wrapper {
                    display: inline-flex;
                    width: var(--mynah-sizing-8);
                    height: var(--mynah-line-height);
                    flex-flow: row nowrap;
                    align-items: center;
                    overflow: visible;
                    > .mynah-chat-prompt-button {
                        background-color: transparent;
                        width: var(--mynah-sizing-9);
                        height: var(--mynah-sizing-9);
                        min-width: var(--mynah-sizing-9);
                        min-height: var(--mynah-sizing-9);
                        i {
                            color: var(--mynah-color-button);
                            height: var(--mynah-sizing-5);
                            width: var(--mynah-sizing-5);
                            padding-left: 0;
                        }
                    }
                }

                &.no-text ~ .mynah-chat-prompt-button-wrapper > .mynah-chat-prompt-button:not([disabled]),
                & ~ .mynah-chat-prompt-button-wrapper > .mynah-chat-prompt-button[disabled] {
                    pointer-events: none;
                    opacity: 0.25;

                    i {
                        color: var(--mynah-color-text-weak);
                    }
                }
            }
        }

        > .mynah-chat-prompt-attachment-wrapper {
            &:empty {
                display: none;
            }

            > .mynah-chat-attachment-item {
                position: relative;
                display: inline-block;
                max-width: 250px;
                cursor: pointer;

                &:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: var(--mynah-card-radius);
                    opacity: 0;
                    transition: var(--mynah-short-transition-rev);
                    z-index: 8000;
                    background-color: var(--mynah-color-alternate);
                }

                > .mynah-chat-attachment-delete-icon {
                    color: var(--mynah-color-alternate-reverse);
                    opacity: 0;
                    transition: var(--mynah-short-transition-rev);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 30px;
                    height: 30px;
                    margin-left: -15px;
                    margin-top: -15px;
                    z-index: 9000;

                    > i {
                        width: 30px;
                        height: 30px;
                    }
                }

                &:hover {
                    &:after {
                        opacity: 0.75;
                    }

                    > .mynah-chat-attachment-delete-icon {
                        opacity: 1;
                    }
                }

                > .mynah-card {
                    pointer-events: none !important;

                    * {
                        pointer-events: none !important;
                    }

                    > .mynah-card-body {
                        display: none;
                    }
                }
            }
        }
    }

    &.input-has-focus > .mynah-chat-prompt {
        border: var(--mynah-border-width) solid var(--mynah-color-button);
    }

    > .mynah-chat-prompt-chars-indicator {
        width: 100%;
        font-size: var(--mynah-font-size-xsmall);
        padding-top: var(--mynah-sizing-2);
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-style: italic;
    }

    & + .mynah-chat-prompt-input-info {
        padding-top: 0;
        margin-top: calc(-1 * var(--mynah-sizing-2));
        flex-basis: fit-content;
    }
}

> .mynah-chat-prompt-input-sticky-card {
    &:not(:empty) {
        padding-top: var(--mynah-sizing-4);
    }

    > .mynah-chat-item-card {
        max-width: 100%;
        width: 100%;
        > .mynah-card {
            border-bottom-left-radius: var(--mynah-card-radius) !important;
        }
    }
}

> .mynah-chat-prompt-input-info {
    display: flex;
    flex-flow: row nowrap;
    box-sizing: border-box;
    overflow: hidden;
    padding: var(--mynah-sizing-4);

    &,
    & * {
        font-size: var(--mynah-font-size-xsmall);
    }

    &:empty {
        display: none;
    }

    > * {
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
}
`,`@import './mixins';
/**
 * Flatten a map or list into a string
 * @param {any} $value - The value to flatten
 * @returns {string} The flattened value
 */
@function flatten($value) {
    @if type-of($value) == 'map' {
        $result: "";
        @each $key, $val in $value {
            $flattened-val: flatten($val);
            $result: "#{$result}#{$key}: #{$flattened-val}; ";
        }
        @return $result;
    } @else if type-of($value) == 'list' {
        $result: "";
        @each $item in $value {
            $flattened-item: flatten($item);
            $result: "#{$result}#{$flattened-item}, ";
        }
        @return $result;
    } @else {
        @return $value;
    }
}

/**
 * Export a map as CSS variables
 * @param {map} $map - The map to export
 * @param {string} $name - The name of the export
 */
@mixin export-map($map, $name) {
    :export {
        #{$name}: "#{flatten($map)}";
    }
}

/**
 * Color variables
 */
$mynah-color-text: (
    'default': var(--vscode-foreground),
    'alternate': var(--mynah-color-button-reverse),
    'strong': var(--vscode-input-foreground),
    'weak': var(--vscode-disabledForeground),
    'link': var(--vscode-textLink-foreground),
    'input': var(--vscode-input-foreground)
);

/**
 * Statuses
 */
$mynah-statuses: ("success", "error", "warning", "info");

/**
 * Status variables
 */
$mynah-status-colors: (
    'info': #0971d3,
    'success': #037f03,
    'warning': #b2911c,
    'error': #d91515
);

/**
 * Font variables
 */
$mynah-font-sizes: (
    'xxsmall': 0.8rem,
    'xsmall': 0.9rem,
    'small': 1rem,
    'medium': 1.125rem,
    'large': 1.25rem
);

/**
 * Padding sizes
 */
$mynah-padding-sizes: (
  'none': 0,
  'small': 1,
  'medium': 3,
  'large': 5,
);

/**
 * Transition variables
 */
$mynah-transitions: (
    'bottom-panel': (850, cubic-bezier(0.25, 1, 0, 1)),
    'very-short': (600, cubic-bezier(0.25, 1, 0, 1)),
    'very-long': (1650, cubic-bezier(0.25, 1, 0, 1)),
    'short': (550, cubic-bezier(0.85, 0.15, 0, 1)),
    'short-rev': (580, cubic-bezier(0.35, 1, 0, 1))
);

/**
 * Syntax highlighting variables
 */
 $mynah-syntax-colors: (
    'bg': var(--vscode-terminal-dropBackground),
    'variable': var(--vscode-debugTokenExpression-name),
    'function': var(--vscode-gitDecoration-modifiedResourceForeground),
    'operator': var(--vscode-debugTokenExpression-name),
    'attr-value': var(--vscode-debugIcon-stepBackForeground),
    'attr': var(--vscode-debugTokenExpression-string),
    'property': var(--vscode-terminal-ansiCyan),
    'comment': var(--vscode-debugConsole-sourceForeground),
    'code': var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit))
);

/**
 * Token styles
 */
 $mynah-token-styles: (
    'comments': (color: var(--mynah-color-syntax-comment)),
    'punctuation': (color: currentColor),
    'namespace': (opacity: 0.7),
    'properties': (color: var(--mynah-color-syntax-property)),
    'attributes': (color: var(--mynah-color-syntax-attr)),
    'operators': (color: var(--mynah-color-syntax-operator)),
    'attr-values': (color: var(--mynah-color-syntax-attr-value)),
    'functions': (color: var(--mynah-color-syntax-function), font-weight: 500),
    'variables': (color: var(--mynah-color-syntax-variable), font-weight: 500),
    'bold': (font-weight: bold),
    'italic': (font-style: italic),
    'entity': (cursor: help)
);

/**
 * Syntax token styles
 */
$mynah-syntax-token-styles: (
    'comments': (comment, prolog, doctype, cdata),
    'punctuation': (punctuation),
    'namespace': (namespace),
    'properties': (property, tag, boolean, number, constant, symbol, inserted),
    'attributes': (selector, attr-name, string, char, builtin, deleted),
    'operators': (operator, entity, url),
    'attr-values': (atrule, attr-value, class-name, keyword),
    'functions': (function),
    'variables': (regex, important, variable),
    'bold': (important, bold),
    'italic': (italic),
    'entity': (entity)
);

@include export-map($mynah-color-text, 'mynah-color-text');
@include export-map($mynah-statuses, 'mynah-statuses');
@include export-map($mynah-syntax-colors, 'mynah-syntax-colors');
@include export-map($mynah-status-colors, 'mynah-status-colors');
@include export-map($mynah-font-sizes, 'mynah-font-sizes');
@include export-map($mynah-padding-sizes, 'mynah-padding-sizes');
@include export-map($mynah-transitions, 'mynah-transitions');
@include export-map($mynah-syntax-token-styles, 'mynah-syntax-token-styles');


:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);

    /**
     * Sizing variables
     */
    @for $i from 1 through 18 {
        --mynah-sizing-#{$i}: calc(var(--mynah-sizing-base) * #{$i});
    }

    --mynah-chat-wrapper-spacing: var(--mynah-sizing-4);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    @each $name, $value in $mynah-color-text {
        --mynah-color-text-#{$name}: #{$value};
    }

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    --mynah-color-toggle: var(--vscode-sideBar-background);
    --mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);

    @each $name, $value in $mynah-syntax-colors {
        --mynah-color-syntax-#{$name}: #{$value};
    }

    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));


    @each $name, $value in $mynah-status-colors {
        --mynah-color-status-#{$name}: #{$value};
    }

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-card-bg: var(--vscode-editor-background);
    --mynah-card-bg-alternate: var(--mynah-color-button);

    --mynah-shadow-button: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);

    @each $name, $value in $mynah-font-sizes {
        --mynah-font-size-#{$name}: #{$value};
    }

    --mynah-line-height: 1.5rem;
    --mynah-syntax-code-line-height: 1.5rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-input-radius: var(--mynah-sizing-1);
    --mynah-card-radius-corner: 0;
    --mynah-button-radius: var(--mynah-sizing-1);

    /* Transition variables */
    // TODO this block doesn't give the transition animations we originally have
    /* Output from this is as follows which is not matching the ones we need to have down below
    --mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);
    */
    @each $name, $values in $mynah-transitions {
        @include mynah-transition($name, nth($values, 1), nth($values, 2));
    }


    /* Hand added transitions */
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1);
}
`,`@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

/**
 * @param {string} $size - The size of the font.
 * @param {string} $weight - The weight of the font.
 * @param {string} $family - The family of the font.
 */
@mixin mynah-font($size, $weight: normal, $family: var(--mynah-font-family)) {
    font-size: $size;
    font-weight: $weight;
    font-family: $family;
}

/**
 * @param {string} $text-color - The color of the text.
 * @param {string} $bg-color - The background color.
 */
@mixin mynah-color($text-color, $bg-color) {
    color: $text-color;
    background-color: $bg-color;
}

/**
 * @param {string} $margin - The margin of the element.
 * @param {string} $padding - The padding of the element.
 */
@mixin mynah-spacing($margin: 0, $padding: 0) {
    margin: $margin;
    padding: $padding;
}

/**
 * @param {string} $radius - The radius of the border.
 */
@mixin mynah-border-radius($radius) {
    border-radius: $radius;
}

/**
 * @param {string} $shadow - The shadow of the element.
 */
 @mixin mynah-box-shadow($shadow) {
    box-shadow: $shadow;
}

/**
 * @param {string} $name - The name of the transition.
 * @param {number} $duration - The duration of the transition in milliseconds.
 * @param {string} $timing-function - The timing function of the transition.
 */
@mixin mynah-transition($name, $duration, $timing-function) {
    --mynah-#{$name}-transition: all #{$duration}ms #{$timing-function};
}
`,`@import '../../variables';
.mynah-chat-item-card {
    display: inline-flex;
    flex-flow: column nowrap;
    position: relative;
    max-width: 90%;
    transition: var(--mynah-text-flow-transition);
    transform: translate3d(0, min(50%, 25vh), 0) scale(0.95, 1.25);
    opacity: 0;
    transform-origin: center bottom;
    gap: var(--mynah-sizing-4);

    &-status {
        @each $status in $mynah-statuses {
            &-#{$status} {
                > .mynah-card {
                    border-color: var(--mynah-color-status-#{$status});
                    > .mynah-chat-item-card-icon {
                        color: var(--mynah-color-status-#{$status});
                    }
                }
            }
        }
    }

    &.mynah-chat-item-card-has-icon {
        > .mynah-card {
            padding-left: var(--mynah-sizing-10);
            > .mynah-chat-item-card-icon {
                position: absolute;
                left: var(--mynah-sizing-4);
            }
        }
    }

    &.reveal {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1, 1);
    }

    &.mynah-chat-item-answer-stream {
        &.typewriter-animating {
            @import 'chat-items-bottom-animator';
        }
    }

    .mynah-chat-item-card {
        max-width: 100%;
        width: 100%;
        padding: var(--mynah-sizing-3) 0 var(--mynah-sizing-3) 0;
        border-top: 1px solid var(--mynah-color-border-default);
        margin-top: var(--mynah-sizing-3);
        padding-bottom: 0;
        .mynah-chat-item-card-related-content > .mynah-chat-item-card-related-content-title {
            font-size: var(--mynah-font-size-large);
        }
    }

    > span.invisible {
        display: none;
    }

    &.mynah-chat-item-code-result {
        min-width: 70%;
    }
    > .mynah-chat-item-card-icon-wrapper {
        background-color: var(--mynah-card-bg);
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        color: var(--mynah-color-text-default);
        padding: var(--mynah-sizing-2);
        border-radius: 100%;
    }
    > .mynah-card {
        > .mynah-chat-items-spinner {
            overflow: visible;
            z-index: 10000;
            gap: var(--mynah-sizing-2);
            justify-content: flex-start;
            align-items: center;
            transition: var(--mynah-very-short-transition);
            display: flex;
            > span {
                position: relative;
                display: inline-block;
                width: var(--mynah-sizing-5);
                height: var(--mynah-sizing-5);
                border: var(--mynah-sizing-half) solid rgba(0, 0, 0, 0);
                border-radius: 50%;
                border-top-color: var(--mynah-color-button);
                animation: spinner-spin 1s ease-in-out infinite;
                transform-origin: center center;
                overflow: visible;
                &:before {
                    position: absolute;
                    content: '';
                    top: calc(-1 * var(--mynah-sizing-half));
                    left: calc(-1 * var(--mynah-sizing-half));
                    right: calc(-1 * var(--mynah-sizing-half));
                    bottom: calc(-1 * var(--mynah-sizing-half));
                    width: auto;
                    height: auto;
                    aspect-ratio: 1; // Just to make sure that the spinner is a circle
                    border: var(--mynah-sizing-half) solid var(--mynah-color-button);
                    border-radius: 50%;
                    opacity: 0.15;
                    box-sizing: border-box;
                }
            }
            > div {
                opacity: 1;
            }
        }
        > .mynah-card-body {
            padding: calc(2 * var(--mynah-border-width));
            & > div {
                > .mynah-syntax-highlighter {
                    filter: contrast(1.15) brightness(0.85);
                }

                @for $i from 1 through 4 {
                    h#{$i} {
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
            }
            > .mynah-chat-item-card-related-content {
                margin-top: var(--mynah-sizing-3);
                padding-top: var(--mynah-sizing-4);
                border-top: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
                > .mynah-chat-item-card-related-content-title {
                    color: var(--mynah-color-text-weak);
                    font-size: var(--mynah-font-size-xsmall);
                    margin: 0;
                }
                .mynah-source-link-title {
                    font-size: var(--mynah-font-size-small);
                    font-weight: 400;
                }
            }
        }

        > .mynah-chat-item-card-footer {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            padding-top: var(--mynah-sizing-3);
            border-top: 1px solid var(--mynah-color-border-default);
            > .mynah-ui-chat-item-small-card {
                padding: 0;
                margin: 0;
                border: none;
                flex: 0;
            }
        }
    }

    > .mynah-chat-item-followup-question {
        display: inline-flex;
        flex-flow: column nowrap;
        position: relative;
        gap: var(--mynah-sizing-2);
        > .mynah-chat-item-followup-question-text {
            color: var(--mynah-color-text-weak);
            font-size: var(--mynah-font-size-xsmall);
            font-style: italic;
        }
        > .mynah-chat-item-followup-question-options-wrapper {
            display: inline-flex;
            flex-flow: row wrap;
            max-width: 100%;
            gap: var(--mynah-sizing-1);
            > .mynah-chat-item-followup-question-option {
                color: var(--mynah-color-text-default);
                &:not(:hover) {
                    opacity: 0.75;
                }
            }
        }
    }

    .mynah-chat-item-card-related-content {
        display: flex;
        flex-flow: column nowrap;
        gap: var(--mynah-sizing-2);
        overflow: hidden;
        position: relative;
        > .mynah-chat-item-card-related-content-item {
            max-width: 100%;
            > .mynah-card {
                padding: 0;
                border-radius: 0;
                box-shadow: none;
            }
            .amzn-mynah-search-result-highlight {
                background-color: inherit;
                color: inherit;
            }
        }
        &:not(.expanded) {
            > .mynah-chat-item-card-related-content-item {
                $maxItems: 1;
                $selector: '&';
                @for $i from 1 through $maxItems {
                    $selector: #{$selector} + ':not(:nth-of-type(' + #{$i} + '))';
                }
                #{$selector} {
                    display: none;
                }
                &:nth-of-type(#{$maxItems}) {
                    margin-bottom: calc(-1 * var(--mynah-sizing-4));
                    pointer-events: none;
                    @include list-fader-bottom(var(--mynah-sizing-12));
                    mask-image: linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%);
                    -webkit-mask-image: linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%);
                }
                &:nth-of-type(#{$maxItems + 1}) {
                    & ~ .mynah-chat-item-card-related-content-show-more {
                        display: flex;
                    }
                }
            }
        }

        > .mynah-chat-item-card-related-content-show-more {
            display: none;
            max-width: 80%;
            z-index: 10000;
            margin-block-start: 0;
            margin-block-end: 0;
            align-self: center;
            height: var(--mynah-sizing-8);
            filter: none;
            > span,
            > i {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: var(--mynah-font-size-xsmall);
            }
        }
    }
    &.mynah-chat-item-system-prompt,
    &.mynah-chat-item-prompt {
        align-self: flex-end;
        > .mynah-chat-item-card-icon-wrapper {
            align-self: flex-end;
            margin-bottom: calc(-2 * var(--mynah-sizing-1));
            background-color: var(--mynah-card-bg-alternate);
            color: var(--mynah-color-text-alternate);
        }
        .mynah-chat-item-followup-question,
        .mynah-chat-item-card-related-content {
            align-items: flex-end;
        }

        .mynah-syntax-highlighter {
            > .mynah-syntax-highlighter-copy-buttons {
                display: none;
            }
        }

        .mynah-chat-item-card-related-content > .mynah-card,
        > .mynah-card {
            padding: var(--mynah-sizing-4);
            background-color: var(--mynah-card-bg-alternate);
            border-bottom-right-radius: var(--mynah-card-radius-corner);
            &,
            > .mynah-card-body {
                color: var(--mynah-color-text-alternate);
                overflow-wrap: break-word;
            }
        }
        .mynah-chat-item-card-related-content > .mynah-card {
            border: none;
        }
    }
    &.mynah-chat-item-system-prompt {
        > .mynah-card {
            background-color: var(--mynah-color-status-warning);
        }
    }

    &.mynah-chat-item-empty > .mynah-card:empty {
        display: none;
    }
    &.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended {
        display: none;
    }
    &.mynah-chat-item-answer,
    &.mynah-chat-item-code-result,
    &.mynah-chat-item-answer-stream {
        > .mynah-card {
            border-bottom-left-radius: var(--mynah-card-radius-corner);
            max-height: 100%;
            flex: 1;
        }
    }
    &.mynah-chat-item-ai-prompt,
    &.mynah-chat-item-answer,
    &.mynah-chat-item-answer-stream {
        > .mynah-chat-item-card-icon-wrapper {
            align-self: flex-start;
            margin-bottom: calc(-2 * var(--mynah-sizing-1));
            background-color: var(--mynah-card-bg);
            border: var(--mynah-border-width) solid var(--mynah-color-border-default);
            color: var(--mynah-color-text-default);
        }
        > .mynah-chat-item-card-related-content {
            > .mynah-chat-item-card-related-content-item > .mynah-card-compact {
                opacity: 1;
                > .mynah-source-link-header {
                    opacity: 1;
                }
            }
        }
    }

    &.mynah-ui-chat-item-inline-card {
        &.mynah-chat-item-card-has-icon {
            > .mynah-card {
                padding-left: var(--mynah-sizing-3);
                > .mynah-chat-item-card-icon {
                    left: 0;
                }
            }
        }
    }

    &.mynah-ui-chat-item-small-card {
        &,
        & * {
            font-size: var(--mynah-font-size-xsmall);
        }
    }
}
`,`@import '../../mixins';
.mynah-chat-command-selector {
  display: flex;
  box-sizing: border-box;
  background-color: var(--mynah-card-bg);
  border-radius: var(--mynah-card-radius);
  width: 100%;
  pointer-events: all;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: flex-start;
  max-height: 80vh;
  overflow-x: hidden;
  padding: var(--mynah-sizing-4);
  overflow-y: auto;
  @include list-fader-bottom();
  > .mynah-chat-command-selector-group {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: flex-start;
    gap: var(--mynah-sizing-1);
    > .mynah-chat-command-selector-group-title {
      margin: 0;
      color: var(--mynah-color-text-strong);
      padding: 0 var(--mynah-sizing-3);
      margin-bottom: var(--mynah-sizing-1);
      font-size: var(--mynah-font-size-large);
      position: relative;
      border-radius: var(--mynah-input-radius);
      overflow: hidden;
    }

    & + .mynah-chat-command-selector-group {
      margin-top: var(--mynah-sizing-2);
      padding-top: var(--mynah-sizing-4);
      border-top: var(--mynah-border-width) solid var(--mynah-color-border-default);
    }

    > .mynah-chat-command-selector-command {
      display: flex;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      overflow: hidden;
      cursor: pointer;
      padding: var(--mynah-sizing-2) var(--mynah-sizing-3);
      color: var(--mynah-color-text-default);
      border-radius: var(--mynah-input-radius);
      transition: var(--mynah-short-transition-rev);
      gap: var(--mynah-sizing-1);
      &[disabled='true'] {
        &::before {
          border-color: transparent !important;
        }
        opacity: 0.5;
        &,
        & * {
          pointer-events: none;
        }
      }
      &:hover:not([disabled="true"]),
      &.target-command:not([disabled="true"]) {
        background-color: var(--mynah-color-button);
        &,
        & * {
          color: var(--mynah-color-button-reverse);
          .mynah-chat-command-selector-command-description {
            color: var(--mynah-color-button-reverse);
            opacity: 0.65;
          }
        }
      }
      > .mynah-chat-command-selector-command-name {
        font-family: var(--mynah-font-family);
        font-size: var(--mynah-font-size-medium);
        font-weight: bold;
        flex: 0 1 0%;
      }
      > .mynah-chat-command-selector-command-description {
        font-size: var(--mynah-font-size-small);
        color: var(--mynah-color-text-weak);
        flex: 1 0 100%;
      }
    }
  }

  &:not(.has-target-item) {
    > .mynah-chat-command-selector-group:first-child {
      > .mynah-chat-command-selector-command:first-of-type {
        &:before {
          content: '';
          z-index: -1;
          border: calc(2 * var(--mynah-border-width)) solid var(--mynah-color-button);
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
        }
      }
    }
  }
}
`,`.mynah-chat-item-tree-view-wrapper {
  margin: 0;
  margin-block-end: 0 !important;
  margin-block-start: 0 !important;
  padding: var(--mynah-sizing-half);

  > .mynah-chat-item-tree-view-wrapper-container {
    background-color: var(--mynah-card-bg);
    color: var(--mynah-color-text-default);
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
    position: relative;
    border-radius: var(--mynah-input-radius);
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    overflow: hidden;

    > .mynah-chat-item-tree-view-wrapper-title {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      padding: var(--mynah-sizing-3);
      gap: var(--mynah-sizing-2);
      border-bottom: var(--mynah-border-width) solid var(--mynah-color-border-default);

      > h4 {
        margin: 0;
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--mynah-color-border-default);
        opacity: 0.25;
        pointer-events: none;
      }
    }

    > .mynah-chat-item-tree-view {
      padding: var(--mynah-sizing-1);
    }

    .mynah-chat-item-tree-view {
      overflow: hidden;
      box-sizing: border-box;
      width: 100%;
      overflow-y: hidden;
      overflow-x: auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;

      > .mynah-chat-item-tree-view-button {
        gap: var(--mynah-sizing-1);
      }

      .mynah-chat-item-tree-view-button-title {
        display: inline-flex;
        gap: var(--mynah-sizing-1);
        align-items: center;
      }

      .mynah-chat-item-tree-view-button-weak-title {
        opacity: 0.65;
      }

      .mynah-chat-item-pull-request-item {
        width: 100%;
        box-sizing: border-box;
      }

      .mynah-chat-item-tree-view {
        padding-left: var(--mynah-sizing-5);
      }
    }

    .mynah-chat-item-tree-view-file-item {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      gap: var(--mynah-sizing-2);
      overflow: hidden;
      cursor: pointer;
      width: calc(100% - var(--mynah-sizing-4));
      padding: calc(3* var(--mynah-sizing-half));
      position: relative;
      box-sizing: content-box;
      min-height: auto;
      height: auto;
      margin: 0;

      > .mynah-chat-item-tree-view-file-item-actions {
        z-index: 150;
      }
      &:not(:hover) {
        > .mynah-chat-item-tree-view-file-item-actions {
          opacity: 0;
          pointer-events: none;
        }
      }
      &:before {
        content: '';
        position: absolute;
        z-index: 0;
        opacity: 0.1;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: inherit;
        z-index: 100;
        pointer-events: all;
      }

      &-status {
        

        &-info {
          &:before {
            background-color: var(--mynah-color-status-info);
          }

          > .mynah-chat-item-tree-view-file-item-details > .mynah-ui-icon {
            color: var(--mynah-color-status-info);
          }
        }

        &-success {
          &:before {
            background-color: var(--mynah-color-status-success);
          }

          > .mynah-chat-item-tree-view-file-item-details > .mynah-ui-icon {
            color: var(--mynah-color-status-success);
          }
        }

        &-warning {
          &:before {
            background-color: var(--mynah-color-status-warning);
          }

          > .mynah-chat-item-tree-view-file-item-details > .mynah-ui-icon {
            color: var(--mynah-color-status-warning);
          }
        }

        &-error {
          &:before {
            background-color: var(--mynah-color-status-error);
          }

          > .mynah-chat-item-tree-view-file-item-details > .mynah-ui-icon {
            color: var(--mynah-color-status-error);
          }
        }
      }

      &-details {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: var(--mynah-sizing-1);
        font-size: 90%;
        z-index: 10;
        flex: 1;
        flex-shrink: 2;
        overflow: hidden;

        > .mynah-chat-item-tree-view-file-item-details-text {
          overflow: hidden;
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      &-actions {
        display: flex;
        flex-flow: row-reverse nowrap;
        justify-content: flex-end;
        align-items: center;
        font-size: 90%;
        z-index: 10;
        padding-right: var(--mynah-sizing-1);
        flex-shrink: 0;
        > .mynah-button {
          width: auto;
          height: auto;
          min-width: auto;
          padding: var(--mynah-sizing-half);
          border-radius: var(--mynah-button-radius);
          margin: 0;

          &.info {
            color: var(--mynah-color-status-info);
          }

          &.success {
            color: var(--mynah-color-status-success);
          }

          &.warning {
            color: var(--mynah-color-status-warning);
          }

          &.error {
            color: var(--mynah-color-status-error);
          }
        }
      }

      &-deleted {
        text-decoration: line-through;
      }

      &-title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: var(--mynah-sizing-1);
        max-width: 100%;
        overflow: hidden;
        z-index: 10;
        flex-shrink: 0;

        > i {
          opacity: 0.75;
        }

        > span {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 100%;
        }
      }

      > .mynah-chat-single-file-icon {
        position: relative;
        padding: var(--mynah-sizing-2);
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        border-radius: var(--mynah-input-radius);
        color: var(--mynah-card-bg);
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: var(--mynah-color-text-default);
          opacity: 0.5;
          pointer-events: none;
          border-radius: inherit;
        }
      }
    }

    > .mynah-chat-item-tree-view-file-item {
      padding: var(--mynah-sizing-2);
      box-sizing: border-box;
      width: 100%;
      border-radius: inherit;
    }
  }
}

.mynah-chat-item-tree-view-wrapper-label {
  border-top-left-radius: var(--mynah-card-radius);
  border-top-right-radius: var(--mynah-card-radius);
  background-color: var(--mynah-color-alternate);
  margin-bottom: 0px;
  padding: var(--mynah-sizing-4);
}

.mynah-chat-item-tree-view-wrapper-feedback-label {
  padding-left: var(--mynah-sizing-4);
}

.mynah-chat-item-tree-view-wrapper-feedback-div {
  float: right;

  button:first-child {
    margin-right: var(--mynah-sizing-2);
  }
}

.mynah-chat-item-tree-view-license {
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: var(--mynah-card-bg-alternate);
    opacity: 0.07;
    pointer-events: none;
  }

  color: var(--mynah-color-text-weak);

  ul {
    margin: 0;
    padding-left: var(--mynah-sizing-8);

    > li {
      &:not(:first-child) {
        margin-top: var(--mynah-sizing-2);
      }

      .mynah-card-body p {
        margin: 0;
      }
    }
  }

  .mynah-chat-item-tree-view-license-dropdown-button > span {
    max-width: unset;
  }
}
`,`@import '../../mixins';
.outer-container {
  display: flex;
  &:not(:empty) {
    margin-top: var(--mynah-sizing-3);
  }
}

.mynah-prompt-attachment-container.vertical-overflow {
  & pre {
    // Show fading effect at the bottom when overflowing
    @include list-fader-bottom(var(--mynah-sizing-16));
  }
}

.mynah-prompt-attachment-container {
  box-sizing: border-box;
  max-width: 100%;
  max-height: calc(2 * var(--mynah-sizing-12));
  > .mynah-button {
    position: absolute;
    background-color: var(--mynah-card-bg) !important;
    width: var(--mynah-sizing-7) !important;
    min-width: var(--mynah-sizing-7) !important;
    max-width: var(--mynah-sizing-7) !important;
    height: var(--mynah-sizing-7) !important;
    border-radius: 100%;
    right: calc(-1 * var(--mynah-sizing-2));
    top: calc(-1 * var(--mynah-sizing-2));
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    opacity: 1 !important;
    filter: brightness(0.95);
  }
  &:not(:hover) {
    > .mynah-button {
      display: none;
    }
  }
  > .mynah-card-body > .mynah-syntax-highlighter {
    & pre {
      text-overflow: ellipsis;
    }
  }
}

.mynah-prompt-input-snippet-attachment-overlay {
  max-width: 90vw;
  max-height: 70vh;
  > .mynah-card-body {
    > .mynah-syntax-highlighter {
      max-height: calc(70vh - var(--mynah-sizing-12)) !important;
    }
  }
}
.mynah-prompt-attachment-container,
.mynah-prompt-input-snippet-attachment-overlay {
  position: relative;
  overflow: visible;
  width: 100%;
  box-sizing: border-box;
  > .mynah-card-body {
    max-height: 100%;
    > .mynah-syntax-highlighter {
      user-select: none;
      pointer-events: none;
      margin: 0;
      max-height: 100%;
      overflow: hidden;
      > .mynah-syntax-highlighter-copy-buttons {
        display: none;
      }
    }
  }
  & pre {
    text-overflow: ellipsis;
  }
}
`],sourceRoot:""}]),a.locals={};const m=a},6907:(I,t,e)=>{"use strict";e.d(t,{A:()=>m});var l=e(1354),o=e.n(l),A=e(6314),a=e.n(A)()(o());a.push([I.id,':root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: calc(var(--mynah-sizing-base) * 1);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-chat-wrapper-spacing: var(--mynah-sizing-4);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-alternate: var(--mynah-color-button-reverse);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-toggle: var(--vscode-sideBar-background);--mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit));--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: #0971d3;--mynah-color-status-success: #037f03;--mynah-color-status-warning: #b2911c;--mynah-color-status-error: #d91515;--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-card-bg: var(--vscode-editor-background);--mynah-card-bg-alternate: var(--mynah-color-button);--mynah-shadow-button: none;--mynah-shadow-card: none;--mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);--mynah-font-size-xxsmall: 0.8rem;--mynah-font-size-xsmall: 0.9rem;--mynah-font-size-small: 1rem;--mynah-font-size-medium: 1.125rem;--mynah-font-size-large: 1.25rem;--mynah-line-height: 1.5rem;--mynah-syntax-code-line-height: 1.5rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-input-radius: var(--mynah-sizing-1);--mynah-card-radius-corner: 0;--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);--mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1)}@keyframes horizontal-roll{0%{background-position:0% bottom}100%{background-position:-200% bottom}}@keyframes bounce{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(0, calc(-1 * var(--mynah-sizing-2)), 0)}}@keyframes spinner-spin{to{transform:rotate(360deg)}}*{scrollbar-gutter:unset;scrollbar-color:color-mix(in hsl, var(--mynah-color-text-default), white 90%) transparent}body.mynah-ui-root{min-width:100vw;min-height:100vh}#mynah-wrapper{container-type:size;container-name:mynah-wrapper;display:flex;flex-flow:column nowrap;margin:0 auto;width:inherit;min-width:inherit;max-width:var(--mynah-max-width);box-sizing:border-box;height:100%;position:relative;overflow:hidden;justify-content:stretch;align-items:stretch;background-color:var(--mynah-color-bg);color:var(--mynah-color-text-default)}#mynah-wrapper>.mynah-no-tabs-wrapper:not(.hidden)+.mynah-ui-tab-contents-wrapper{display:none}#mynah-wrapper>.mynah-ui-tab-contents-wrapper{position:relative;width:inherit;min-width:inherit;max-width:inherit;display:block;height:inherit;flex:1}#mynah-wrapper>.mynah-ui-tab-contents-wrapper:first-child>.mynah-chat-wrapper{display:flex}#mynah-wrapper h1{font-weight:600}#mynah-wrapper h2{font-weight:600}#mynah-wrapper h3{font-weight:600}#mynah-wrapper h4{font-weight:600}#mynah-wrapper h5{font-weight:600}#mynah-wrapper h6{font-weight:600}#mynah-wrapper ::-webkit-scrollbar{width:2px;height:2px;opacity:.25}#mynah-wrapper ::-webkit-scrollbar:horizontal{width:0px;height:0px}#mynah-wrapper *:focus{outline:none}@container mynah-wrapper (max-width: 0px){*{display:none !important;content-visibility:hidden !important}}',"",{version:3,sources:["webpack://./src/styles/_variables.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_animations.scss","webpack://./src/styles/_scrollbars.scss","webpack://./src/styles/components/_main-container.scss"],names:[],mappings:"AA6JA,MACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CAMI,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,oDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAAA,sDAAA,CAGJ,mDAAA,CACA,gCAAA,CACA,yBAAA,CAGI,oDAAA,CAAA,+DAAA,CAAA,yDAAA,CAAA,yDAAA,CAAA,0DAAA,CAAA,wDAAA,CAGJ,kDAAA,CACA,mHAAA,CACA,wCAAA,CAEA,sGAAA,CAEA,gDAAA,CACA,qCAAA,CAEA,sDAAA,CACA,gDAAA,CAGI,8DAAA,CAAA,sEAAA,CAAA,qFAAA,CAAA,sEAAA,CAAA,2EAAA,CAAA,oEAAA,CAAA,8DAAA,CAAA,yEAAA,CAAA,oGAAA,CAGJ,iEAAA,CACA,4FAAA,CAII,kCAAA,CAAA,qCAAA,CAAA,qCAAA,CAAA,mCAAA,CAGJ,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,gDAAA,CACA,oDAAA,CAEA,2BAAA,CACA,yBAAA,CACA,0DAAA,CAGI,iCAAA,CAAA,gCAAA,CAAA,6BAAA,CAAA,kCAAA,CAAA,gCAAA,CAGJ,2BAAA,CACA,uCAAA,CAEA,0CAAA,CACA,2CAAA,CACA,6BAAA,CACA,4CAAA,CCrKA,sEAAA,CAAA,oEAAA,CAAA,oEAAA,CAAA,kEAAA,CAAA,mEAAA,CDsLA,oEAAA,CACA,oEAAA,CACA,kEAAA,CACA,mEAAA,CACA,+EAAA,CACA,oHAAA,CE1PJ,2BACI,GACI,6BAAA,CAEJ,KACI,gCAAA,CAAA,CAIR,kBACI,KACI,8BAAA,CAEJ,GACI,6DAAA,CAAA,CAIR,wBACI,GACI,wBAAA,CAAA,CCpBR,EACE,sBAAA,CACA,yFAAA,CCFF,mBACI,eAAA,CACA,gBAAA,CAGJ,eACI,mBAAA,CACA,4BAAA,CACA,YAAA,CACA,uBAAA,CACA,aAAA,CACA,aAAA,CACA,iBAAA,CACA,gCAAA,CACA,qBAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,uBAAA,CACA,mBAAA,CACA,sCAAA,CACA,qCAAA,CAGI,kFACI,YAAA,CAGR,8CACI,iBAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,aAAA,CACA,cAAA,CACA,MAAA,CAGI,8EACI,YAAA,CAMR,kBACI,eAAA,CADJ,kBACI,eAAA,CADJ,kBACI,eAAA,CADJ,kBACI,eAAA,CADJ,kBACI,eAAA,CADJ,kBACI,eAAA,CAIR,mCACI,SAAA,CACA,UAAA,CACA,WAAA,CACA,8CACI,SAAA,CACA,UAAA,CAIR,uBACI,YAAA,CAIR,0CACI,EACI,uBAAA,CACA,oCAAA,CAAA",sourcesContent:[`@import './mixins';
/**
 * Flatten a map or list into a string
 * @param {any} $value - The value to flatten
 * @returns {string} The flattened value
 */
@function flatten($value) {
    @if type-of($value) == 'map' {
        $result: "";
        @each $key, $val in $value {
            $flattened-val: flatten($val);
            $result: "#{$result}#{$key}: #{$flattened-val}; ";
        }
        @return $result;
    } @else if type-of($value) == 'list' {
        $result: "";
        @each $item in $value {
            $flattened-item: flatten($item);
            $result: "#{$result}#{$flattened-item}, ";
        }
        @return $result;
    } @else {
        @return $value;
    }
}

/**
 * Export a map as CSS variables
 * @param {map} $map - The map to export
 * @param {string} $name - The name of the export
 */
@mixin export-map($map, $name) {
    :export {
        #{$name}: "#{flatten($map)}";
    }
}

/**
 * Color variables
 */
$mynah-color-text: (
    'default': var(--vscode-foreground),
    'alternate': var(--mynah-color-button-reverse),
    'strong': var(--vscode-input-foreground),
    'weak': var(--vscode-disabledForeground),
    'link': var(--vscode-textLink-foreground),
    'input': var(--vscode-input-foreground)
);

/**
 * Statuses
 */
$mynah-statuses: ("success", "error", "warning", "info");

/**
 * Status variables
 */
$mynah-status-colors: (
    'info': #0971d3,
    'success': #037f03,
    'warning': #b2911c,
    'error': #d91515
);

/**
 * Font variables
 */
$mynah-font-sizes: (
    'xxsmall': 0.8rem,
    'xsmall': 0.9rem,
    'small': 1rem,
    'medium': 1.125rem,
    'large': 1.25rem
);

/**
 * Padding sizes
 */
$mynah-padding-sizes: (
  'none': 0,
  'small': 1,
  'medium': 3,
  'large': 5,
);

/**
 * Transition variables
 */
$mynah-transitions: (
    'bottom-panel': (850, cubic-bezier(0.25, 1, 0, 1)),
    'very-short': (600, cubic-bezier(0.25, 1, 0, 1)),
    'very-long': (1650, cubic-bezier(0.25, 1, 0, 1)),
    'short': (550, cubic-bezier(0.85, 0.15, 0, 1)),
    'short-rev': (580, cubic-bezier(0.35, 1, 0, 1))
);

/**
 * Syntax highlighting variables
 */
 $mynah-syntax-colors: (
    'bg': var(--vscode-terminal-dropBackground),
    'variable': var(--vscode-debugTokenExpression-name),
    'function': var(--vscode-gitDecoration-modifiedResourceForeground),
    'operator': var(--vscode-debugTokenExpression-name),
    'attr-value': var(--vscode-debugIcon-stepBackForeground),
    'attr': var(--vscode-debugTokenExpression-string),
    'property': var(--vscode-terminal-ansiCyan),
    'comment': var(--vscode-debugConsole-sourceForeground),
    'code': var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit))
);

/**
 * Token styles
 */
 $mynah-token-styles: (
    'comments': (color: var(--mynah-color-syntax-comment)),
    'punctuation': (color: currentColor),
    'namespace': (opacity: 0.7),
    'properties': (color: var(--mynah-color-syntax-property)),
    'attributes': (color: var(--mynah-color-syntax-attr)),
    'operators': (color: var(--mynah-color-syntax-operator)),
    'attr-values': (color: var(--mynah-color-syntax-attr-value)),
    'functions': (color: var(--mynah-color-syntax-function), font-weight: 500),
    'variables': (color: var(--mynah-color-syntax-variable), font-weight: 500),
    'bold': (font-weight: bold),
    'italic': (font-style: italic),
    'entity': (cursor: help)
);

/**
 * Syntax token styles
 */
$mynah-syntax-token-styles: (
    'comments': (comment, prolog, doctype, cdata),
    'punctuation': (punctuation),
    'namespace': (namespace),
    'properties': (property, tag, boolean, number, constant, symbol, inserted),
    'attributes': (selector, attr-name, string, char, builtin, deleted),
    'operators': (operator, entity, url),
    'attr-values': (atrule, attr-value, class-name, keyword),
    'functions': (function),
    'variables': (regex, important, variable),
    'bold': (important, bold),
    'italic': (italic),
    'entity': (entity)
);

@include export-map($mynah-color-text, 'mynah-color-text');
@include export-map($mynah-statuses, 'mynah-statuses');
@include export-map($mynah-syntax-colors, 'mynah-syntax-colors');
@include export-map($mynah-status-colors, 'mynah-status-colors');
@include export-map($mynah-font-sizes, 'mynah-font-sizes');
@include export-map($mynah-padding-sizes, 'mynah-padding-sizes');
@include export-map($mynah-transitions, 'mynah-transitions');
@include export-map($mynah-syntax-token-styles, 'mynah-syntax-token-styles');


:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);

    /**
     * Sizing variables
     */
    @for $i from 1 through 18 {
        --mynah-sizing-#{$i}: calc(var(--mynah-sizing-base) * #{$i});
    }

    --mynah-chat-wrapper-spacing: var(--mynah-sizing-4);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    @each $name, $value in $mynah-color-text {
        --mynah-color-text-#{$name}: #{$value};
    }

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    --mynah-color-toggle: var(--vscode-sideBar-background);
    --mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);

    @each $name, $value in $mynah-syntax-colors {
        --mynah-color-syntax-#{$name}: #{$value};
    }

    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));


    @each $name, $value in $mynah-status-colors {
        --mynah-color-status-#{$name}: #{$value};
    }

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-card-bg: var(--vscode-editor-background);
    --mynah-card-bg-alternate: var(--mynah-color-button);

    --mynah-shadow-button: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);

    @each $name, $value in $mynah-font-sizes {
        --mynah-font-size-#{$name}: #{$value};
    }

    --mynah-line-height: 1.5rem;
    --mynah-syntax-code-line-height: 1.5rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-input-radius: var(--mynah-sizing-1);
    --mynah-card-radius-corner: 0;
    --mynah-button-radius: var(--mynah-sizing-1);

    /* Transition variables */
    // TODO this block doesn't give the transition animations we originally have
    /* Output from this is as follows which is not matching the ones we need to have down below
    --mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-rev-transition: all 580ms cubic-bezier(0.35, 1, 0, 1);
    */
    @each $name, $values in $mynah-transitions {
        @include mynah-transition($name, nth($values, 1), nth($values, 2));
    }


    /* Hand added transitions */
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1);
}
`,`@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

/**
 * @param {string} $size - The size of the font.
 * @param {string} $weight - The weight of the font.
 * @param {string} $family - The family of the font.
 */
@mixin mynah-font($size, $weight: normal, $family: var(--mynah-font-family)) {
    font-size: $size;
    font-weight: $weight;
    font-family: $family;
}

/**
 * @param {string} $text-color - The color of the text.
 * @param {string} $bg-color - The background color.
 */
@mixin mynah-color($text-color, $bg-color) {
    color: $text-color;
    background-color: $bg-color;
}

/**
 * @param {string} $margin - The margin of the element.
 * @param {string} $padding - The padding of the element.
 */
@mixin mynah-spacing($margin: 0, $padding: 0) {
    margin: $margin;
    padding: $padding;
}

/**
 * @param {string} $radius - The radius of the border.
 */
@mixin mynah-border-radius($radius) {
    border-radius: $radius;
}

/**
 * @param {string} $shadow - The shadow of the element.
 */
 @mixin mynah-box-shadow($shadow) {
    box-shadow: $shadow;
}

/**
 * @param {string} $name - The name of the transition.
 * @param {number} $duration - The duration of the transition in milliseconds.
 * @param {string} $timing-function - The timing function of the transition.
 */
@mixin mynah-transition($name, $duration, $timing-function) {
    --mynah-#{$name}-transition: all #{$duration}ms #{$timing-function};
}
`,`@keyframes horizontal-roll {
    0% {
        background-position: 0% bottom;
    }
    100% {
        background-position: -200% bottom;
    }
}

@keyframes bounce {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(0, calc(-1 * var(--mynah-sizing-2)), 0);
    }
}

@keyframes spinner-spin {
    to {
        transform: rotate(360deg);
    }
}
`,`* {
  scrollbar-gutter: unset;
  scrollbar-color: color-mix(
    in hsl,
    var(--mynah-color-text-default),
    hsl(0, 100%, 100%) 90%)
    transparent;
}
`,`body.mynah-ui-root {
    min-width: 100vw;
    min-height: 100vh;
}

#mynah-wrapper {
    container-type: size;
    container-name: mynah-wrapper;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    width: inherit;
    min-width: inherit;
    max-width: var(--mynah-max-width);
    box-sizing: border-box;
    height: 100%;
    position: relative;
    overflow: hidden;
    justify-content: stretch;
    align-items: stretch;
    background-color: var(--mynah-color-bg);
    color: var(--mynah-color-text-default);

    > .mynah-no-tabs-wrapper:not(.hidden) {
        & + .mynah-ui-tab-contents-wrapper {
            display: none;
        }
    }
    > .mynah-ui-tab-contents-wrapper {
        position: relative;
        width: inherit;
        min-width: inherit;
        max-width: inherit;
        display: block;
        height: inherit;
        flex: 1;

        &:first-child {
            > .mynah-chat-wrapper {
                display: flex;
            }
        }
    }

    @for $i from 1 through 6 {
        h#{$i} {
            font-weight: 600;
        }
    }

    ::-webkit-scrollbar {
        width: 2px;
        height: 2px;
        opacity: 0.25;
        &:horizontal {
            width: 0px;
            height: 0px;
        }
    }

    *:focus {
        outline: none;
    }
}

@container mynah-wrapper (max-width: 0px) {
    * {
        display: none !important;
        content-visibility: hidden !important;
    }
}
`],sourceRoot:""}]),a.locals={"mynah-color-text":'"default: var(--vscode-foreground); alternate: var(--mynah-color-button-reverse); strong: var(--vscode-input-foreground); weak: var(--vscode-disabledForeground); link: var(--vscode-textLink-foreground); input: var(--vscode-input-foreground); "',"mynah-statuses":'"success, error, warning, info, "',"mynah-syntax-colors":'"bg: var(--vscode-terminal-dropBackground); variable: var(--vscode-debugTokenExpression-name); function: var(--vscode-gitDecoration-modifiedResourceForeground); operator: var(--vscode-debugTokenExpression-name); attr-value: var(--vscode-debugIcon-stepBackForeground); attr: var(--vscode-debugTokenExpression-string); property: var(--vscode-terminal-ansiCyan); comment: var(--vscode-debugConsole-sourceForeground); code: var(--vscode-editor-foreground, var(--mynah-color-text-default, inherit)); "',"mynah-status-colors":'"info: #0971d3; success: #037f03; warning: #b2911c; error: #d91515; "',"mynah-font-sizes":'"xxsmall: 0.8rem; xsmall: 0.9rem; small: 1rem; medium: 1.125rem; large: 1.25rem; "',"mynah-padding-sizes":'"none: 0; small: 1; medium: 3; large: 5; "',"mynah-transitions":'"bottom-panel: 850, cubic-bezier(0.25, 1, 0, 1), ; very-short: 600, cubic-bezier(0.25, 1, 0, 1), ; very-long: 1650, cubic-bezier(0.25, 1, 0, 1), ; short: 550, cubic-bezier(0.85, 0.15, 0, 1), ; short-rev: 580, cubic-bezier(0.35, 1, 0, 1), ; "',"mynah-syntax-token-styles":'"comments: comment, prolog, doctype, cdata, ; punctuation: punctuation; namespace: namespace; properties: property, tag, boolean, number, constant, symbol, inserted, ; attributes: selector, attr-name, string, char, builtin, deleted, ; operators: operator, entity, url, ; attr-values: atrule, attr-value, class-name, keyword, ; functions: function; variables: regex, important, variable, ; bold: important, bold, ; italic: italic; entity: entity; "'};const m=a},6314:I=>{"use strict";I.exports=function(t){var e=[];return e.toString=function(){return this.map(function(l){var o="",A=l[5]!==void 0;return l[4]&&(o+="@supports (".concat(l[4],") {")),l[2]&&(o+="@media ".concat(l[2]," {")),A&&(o+="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {")),o+=t(l),A&&(o+="}"),l[2]&&(o+="}"),l[4]&&(o+="}"),o}).join("")},e.i=function(l,o,A,a,m){typeof l=="string"&&(l=[[null,l,void 0]]);var d={};if(A)for(var c=0;c<this.length;c++){var r=this[c][0];r!=null&&(d[r]=!0)}for(var i=0;i<l.length;i++){var n=[].concat(l[i]);A&&d[n[0]]||(m!==void 0&&(n[5]===void 0||(n[1]="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {").concat(n[1],"}")),n[5]=m),o&&(n[2]&&(n[1]="@media ".concat(n[2]," {").concat(n[1],"}")),n[2]=o),a&&(n[4]?(n[1]="@supports (".concat(n[4],") {").concat(n[1],"}"),n[4]=a):n[4]="".concat(a)),e.push(n))}},e}},1354:I=>{"use strict";I.exports=function(t){var e=t[1],l=t[3];if(!l)return e;if(typeof btoa=="function"){var o=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(A," */"),m=l.sources.map(function(d){return"/*# sourceURL=".concat(l.sourceRoot||"").concat(d," */")});return[e].concat(m).concat([a]).join(`
`)}return[e].join(`
`)}},4744:I=>{"use strict";var t=function(c){return function(r){return!!r&&typeof r=="object"}(c)&&!function(r){var i=Object.prototype.toString.call(r);return i==="[object RegExp]"||i==="[object Date]"||function(n){return n.$$typeof===e}(r)}(c)},e=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function l(c,r){return r.clone!==!1&&r.isMergeableObject(c)?m((i=c,Array.isArray(i)?[]:{}),c,r):c;var i}function o(c,r,i){return c.concat(r).map(function(n){return l(n,i)})}function A(c){return Object.keys(c).concat(function(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter(function(i){return Object.propertyIsEnumerable.call(r,i)}):[]}(c))}function a(c,r){try{return r in c}catch{return!1}}function m(c,r,i){(i=i||{}).arrayMerge=i.arrayMerge||o,i.isMergeableObject=i.isMergeableObject||t,i.cloneUnlessOtherwiseSpecified=l;var n=Array.isArray(r);return n===Array.isArray(c)?n?i.arrayMerge(c,r,i):function(h,u,x){var b={};return x.isMergeableObject(h)&&A(h).forEach(function(C){b[C]=l(h[C],x)}),A(u).forEach(function(C){(function(p,v){return a(p,v)&&!(Object.hasOwnProperty.call(p,v)&&Object.propertyIsEnumerable.call(p,v))})(h,C)||(a(h,C)&&x.isMergeableObject(u[C])?b[C]=function(p,v){if(!v.customMerge)return m;var M=v.customMerge(p);return typeof M=="function"?M:m}(C,x)(h[C],u[C],x):b[C]=l(u[C],x))}),b}(c,r,i):l(r,i)}m.all=function(c,r){if(!Array.isArray(c))throw new Error("first argument should be an array");return c.reduce(function(i,n){return m(i,n,r)},{})};var d=m;I.exports=d},4460:(I,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.attributeNames=t.elementNames=void 0,t.elementNames=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(function(e){return[e.toLowerCase(),e]})),t.attributeNames=new Map(["definitionURL","attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(function(e){return[e.toLowerCase(),e]}))},3806:function(I,t,e){"use strict";var l=this&&this.__assign||function(){return l=Object.assign||function(C){for(var p,v=1,M=arguments.length;v<M;v++)for(var f in p=arguments[v])Object.prototype.hasOwnProperty.call(p,f)&&(C[f]=p[f]);return C},l.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(C,p,v,M){M===void 0&&(M=v);var f=Object.getOwnPropertyDescriptor(p,v);f&&!("get"in f?!p.__esModule:f.writable||f.configurable)||(f={enumerable:!0,get:function(){return p[v]}}),Object.defineProperty(C,M,f)}:function(C,p,v,M){M===void 0&&(M=v),C[M]=p[v]}),A=this&&this.__setModuleDefault||(Object.create?function(C,p){Object.defineProperty(C,"default",{enumerable:!0,value:p})}:function(C,p){C.default=p}),a=this&&this.__importStar||function(C){if(C&&C.__esModule)return C;var p={};if(C!=null)for(var v in C)v!=="default"&&Object.prototype.hasOwnProperty.call(C,v)&&o(p,C,v);return A(p,C),p};Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var m=a(e(5413)),d=e(2730),c=e(4460),r=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]);function i(C){return C.replace(/"/g,"&quot;")}var n=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]);function h(C,p){p===void 0&&(p={});for(var v=("length"in C)?C:[C],M="",f=0;f<v.length;f++)M+=u(v[f],p);return M}function u(C,p){switch(C.type){case m.Root:return h(C.children,p);case m.Doctype:case m.Directive:return"<".concat(C.data,">");case m.Comment:return"<!--".concat(C.data,"-->");case m.CDATA:return function(v){return"<![CDATA[".concat(v.children[0].data,"]]>")}(C);case m.Script:case m.Style:case m.Tag:return function(v,M){var f;M.xmlMode==="foreign"&&(v.name=(f=c.elementNames.get(v.name))!==null&&f!==void 0?f:v.name,v.parent&&x.has(v.parent.name)&&(M=l(l({},M),{xmlMode:!1}))),!M.xmlMode&&b.has(v.name)&&(M=l(l({},M),{xmlMode:"foreign"}));var y="<".concat(v.name),s=function(g,w){var k;if(g){var S=((k=w.encodeEntities)!==null&&k!==void 0?k:w.decodeEntities)===!1?i:w.xmlMode||w.encodeEntities!=="utf8"?d.encodeXML:d.escapeAttribute;return Object.keys(g).map(function(L){var U,F,R=(U=g[L])!==null&&U!==void 0?U:"";return w.xmlMode==="foreign"&&(L=(F=c.attributeNames.get(L))!==null&&F!==void 0?F:L),w.emptyAttrs||w.xmlMode||R!==""?"".concat(L,'="').concat(S(R),'"'):L}).join(" ")}}(v.attribs,M);return s&&(y+=" ".concat(s)),v.children.length===0&&(M.xmlMode?M.selfClosingTags!==!1:M.selfClosingTags&&n.has(v.name))?(M.xmlMode||(y+=" "),y+="/>"):(y+=">",v.children.length>0&&(y+=h(v.children,M)),!M.xmlMode&&n.has(v.name)||(y+="</".concat(v.name,">"))),y}(C,p);case m.Text:return function(v,M){var f,y=v.data||"";return((f=M.encodeEntities)!==null&&f!==void 0?f:M.decodeEntities)===!1||!M.xmlMode&&v.parent&&r.has(v.parent.name)||(y=M.xmlMode||M.encodeEntities!=="utf8"?(0,d.encodeXML)(y):(0,d.escapeText)(y)),y}(C,p)}}t.render=h,t.default=h;var x=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),b=new Set(["svg","math"])},5413:(I,t)=>{"use strict";var e;Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(l){l.Root="root",l.Text="text",l.Directive="directive",l.Comment="comment",l.Script="script",l.Style="style",l.Tag="tag",l.CDATA="cdata",l.Doctype="doctype"}(e=t.ElementType||(t.ElementType={})),t.isTag=function(l){return l.type===e.Tag||l.type===e.Script||l.type===e.Style},t.Root=e.Root,t.Text=e.Text,t.Directive=e.Directive,t.Comment=e.Comment,t.Script=e.Script,t.Style=e.Style,t.Tag=e.Tag,t.CDATA=e.CDATA,t.Doctype=e.Doctype},1141:function(I,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(c,r,i,n){n===void 0&&(n=i);var h=Object.getOwnPropertyDescriptor(r,i);h&&!("get"in h?!r.__esModule:h.writable||h.configurable)||(h={enumerable:!0,get:function(){return r[i]}}),Object.defineProperty(c,n,h)}:function(c,r,i,n){n===void 0&&(n=i),c[n]=r[i]}),o=this&&this.__exportStar||function(c,r){for(var i in c)i==="default"||Object.prototype.hasOwnProperty.call(r,i)||l(r,c,i)};Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=void 0;var A=e(5413),a=e(6957);o(e(6957),t);var m={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},d=function(){function c(r,i,n){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof i=="function"&&(n=i,i=m),typeof r=="object"&&(i=r,r=void 0),this.callback=r??null,this.options=i??m,this.elementCB=n??null}return c.prototype.onparserinit=function(r){this.parser=r},c.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},c.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},c.prototype.onerror=function(r){this.handleCallback(r)},c.prototype.onclosetag=function(){this.lastNode=null;var r=this.tagStack.pop();this.options.withEndIndices&&(r.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(r)},c.prototype.onopentag=function(r,i){var n=this.options.xmlMode?A.ElementType.Tag:void 0,h=new a.Element(r,i,void 0,n);this.addNode(h),this.tagStack.push(h)},c.prototype.ontext=function(r){var i=this.lastNode;if(i&&i.type===A.ElementType.Text)i.data+=r,this.options.withEndIndices&&(i.endIndex=this.parser.endIndex);else{var n=new a.Text(r);this.addNode(n),this.lastNode=n}},c.prototype.oncomment=function(r){if(this.lastNode&&this.lastNode.type===A.ElementType.Comment)this.lastNode.data+=r;else{var i=new a.Comment(r);this.addNode(i),this.lastNode=i}},c.prototype.oncommentend=function(){this.lastNode=null},c.prototype.oncdatastart=function(){var r=new a.Text(""),i=new a.CDATA([r]);this.addNode(i),r.parent=i,this.lastNode=r},c.prototype.oncdataend=function(){this.lastNode=null},c.prototype.onprocessinginstruction=function(r,i){var n=new a.ProcessingInstruction(r,i);this.addNode(n)},c.prototype.handleCallback=function(r){if(typeof this.callback=="function")this.callback(r,this.dom);else if(r)throw r},c.prototype.addNode=function(r){var i=this.tagStack[this.tagStack.length-1],n=i.children[i.children.length-1];this.options.withStartIndices&&(r.startIndex=this.parser.startIndex),this.options.withEndIndices&&(r.endIndex=this.parser.endIndex),i.children.push(r),n&&(r.prev=n,n.next=r),r.parent=i,this.lastNode=null},c}();t.DomHandler=d,t.default=d},6957:function(I,t,e){"use strict";var l,o=this&&this.__extends||(l=function(g,w){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(k,S){k.__proto__=S}||function(k,S){for(var L in S)Object.prototype.hasOwnProperty.call(S,L)&&(k[L]=S[L])},l(g,w)},function(g,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");function k(){this.constructor=g}l(g,w),g.prototype=w===null?Object.create(w):(k.prototype=w.prototype,new k)}),A=this&&this.__assign||function(){return A=Object.assign||function(g){for(var w,k=1,S=arguments.length;k<S;k++)for(var L in w=arguments[k])Object.prototype.hasOwnProperty.call(w,L)&&(g[L]=w[L]);return g},A.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.hasChildren=t.isDocument=t.isDirective=t.isComment=t.isText=t.isCDATA=t.isTag=t.Element=t.Document=t.CDATA=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0;var a=e(5413),m=function(){function g(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(g.prototype,"parentNode",{get:function(){return this.parent},set:function(w){this.parent=w},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"previousSibling",{get:function(){return this.prev},set:function(w){this.prev=w},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"nextSibling",{get:function(){return this.next},set:function(w){this.next=w},enumerable:!1,configurable:!0}),g.prototype.cloneNode=function(w){return w===void 0&&(w=!1),y(this,w)},g}();t.Node=m;var d=function(g){function w(k){var S=g.call(this)||this;return S.data=k,S}return o(w,g),Object.defineProperty(w.prototype,"nodeValue",{get:function(){return this.data},set:function(k){this.data=k},enumerable:!1,configurable:!0}),w}(m);t.DataNode=d;var c=function(g){function w(){var k=g!==null&&g.apply(this,arguments)||this;return k.type=a.ElementType.Text,k}return o(w,g),Object.defineProperty(w.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),w}(d);t.Text=c;var r=function(g){function w(){var k=g!==null&&g.apply(this,arguments)||this;return k.type=a.ElementType.Comment,k}return o(w,g),Object.defineProperty(w.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),w}(d);t.Comment=r;var i=function(g){function w(k,S){var L=g.call(this,S)||this;return L.name=k,L.type=a.ElementType.Directive,L}return o(w,g),Object.defineProperty(w.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),w}(d);t.ProcessingInstruction=i;var n=function(g){function w(k){var S=g.call(this)||this;return S.children=k,S}return o(w,g),Object.defineProperty(w.prototype,"firstChild",{get:function(){var k;return(k=this.children[0])!==null&&k!==void 0?k:null},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"childNodes",{get:function(){return this.children},set:function(k){this.children=k},enumerable:!1,configurable:!0}),w}(m);t.NodeWithChildren=n;var h=function(g){function w(){var k=g!==null&&g.apply(this,arguments)||this;return k.type=a.ElementType.CDATA,k}return o(w,g),Object.defineProperty(w.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),w}(n);t.CDATA=h;var u=function(g){function w(){var k=g!==null&&g.apply(this,arguments)||this;return k.type=a.ElementType.Root,k}return o(w,g),Object.defineProperty(w.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),w}(n);t.Document=u;var x=function(g){function w(k,S,L,U){L===void 0&&(L=[]),U===void 0&&(U=k==="script"?a.ElementType.Script:k==="style"?a.ElementType.Style:a.ElementType.Tag);var F=g.call(this,L)||this;return F.name=k,F.attribs=S,F.type=U,F}return o(w,g),Object.defineProperty(w.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"tagName",{get:function(){return this.name},set:function(k){this.name=k},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"attributes",{get:function(){var k=this;return Object.keys(this.attribs).map(function(S){var L,U;return{name:S,value:k.attribs[S],namespace:(L=k["x-attribsNamespace"])===null||L===void 0?void 0:L[S],prefix:(U=k["x-attribsPrefix"])===null||U===void 0?void 0:U[S]}})},enumerable:!1,configurable:!0}),w}(n);function b(g){return(0,a.isTag)(g)}function C(g){return g.type===a.ElementType.CDATA}function p(g){return g.type===a.ElementType.Text}function v(g){return g.type===a.ElementType.Comment}function M(g){return g.type===a.ElementType.Directive}function f(g){return g.type===a.ElementType.Root}function y(g,w){var k;if(w===void 0&&(w=!1),p(g))k=new c(g.data);else if(v(g))k=new r(g.data);else if(b(g)){var S=w?s(g.children):[],L=new x(g.name,A({},g.attribs),S);S.forEach(function(E){return E.parent=L}),g.namespace!=null&&(L.namespace=g.namespace),g["x-attribsNamespace"]&&(L["x-attribsNamespace"]=A({},g["x-attribsNamespace"])),g["x-attribsPrefix"]&&(L["x-attribsPrefix"]=A({},g["x-attribsPrefix"])),k=L}else if(C(g)){S=w?s(g.children):[];var U=new h(S);S.forEach(function(E){return E.parent=U}),k=U}else if(f(g)){S=w?s(g.children):[];var F=new u(S);S.forEach(function(E){return E.parent=F}),g["x-mode"]&&(F["x-mode"]=g["x-mode"]),k=F}else{if(!M(g))throw new Error("Not implemented yet: ".concat(g.type));var R=new i(g.name,g.data);g["x-name"]!=null&&(R["x-name"]=g["x-name"],R["x-publicId"]=g["x-publicId"],R["x-systemId"]=g["x-systemId"]),k=R}return k.startIndex=g.startIndex,k.endIndex=g.endIndex,g.sourceCodeLocation!=null&&(k.sourceCodeLocation=g.sourceCodeLocation),k}function s(g){for(var w=g.map(function(S){return y(S,!0)}),k=1;k<w.length;k++)w[k].prev=w[k-1],w[k-1].next=w[k];return w}t.Element=x,t.isTag=b,t.isCDATA=C,t.isText=p,t.isComment=v,t.isDirective=M,t.isDocument=f,t.hasChildren=function(g){return Object.prototype.hasOwnProperty.call(g,"children")},t.cloneNode=y},4437:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFeed=void 0;var l=e(6037),o=e(3209);t.getFeed=function(n){var h=d(i,n);return h?h.name==="feed"?function(u){var x,b=u.children,C={type:"atom",items:(0,o.getElementsByTagName)("entry",b).map(function(M){var f,y=M.children,s={media:m(y)};r(s,"id","id",y),r(s,"title","title",y);var g=(f=d("link",y))===null||f===void 0?void 0:f.attribs.href;g&&(s.link=g);var w=c("summary",y)||c("content",y);w&&(s.description=w);var k=c("updated",y);return k&&(s.pubDate=new Date(k)),s})};r(C,"id","id",b),r(C,"title","title",b);var p=(x=d("link",b))===null||x===void 0?void 0:x.attribs.href;p&&(C.link=p),r(C,"description","subtitle",b);var v=c("updated",b);return v&&(C.updated=new Date(v)),r(C,"author","email",b,!0),C}(h):function(u){var x,b,C=(b=(x=d("channel",u.children))===null||x===void 0?void 0:x.children)!==null&&b!==void 0?b:[],p={type:u.name.substr(0,3),id:"",items:(0,o.getElementsByTagName)("item",u.children).map(function(M){var f=M.children,y={media:m(f)};r(y,"id","guid",f),r(y,"title","title",f),r(y,"link","link",f),r(y,"description","description",f);var s=c("pubDate",f)||c("dc:date",f);return s&&(y.pubDate=new Date(s)),y})};r(p,"title","title",C),r(p,"link","link",C),r(p,"description","description",C);var v=c("lastBuildDate",C);return v&&(p.updated=new Date(v)),r(p,"author","managingEditor",C,!0),p}(h):null};var A=["url","type","lang"],a=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"];function m(n){return(0,o.getElementsByTagName)("media:content",n).map(function(h){for(var u=h.attribs,x={medium:u.medium,isDefault:!!u.isDefault},b=0,C=A;b<C.length;b++)u[M=C[b]]&&(x[M]=u[M]);for(var p=0,v=a;p<v.length;p++){var M;u[M=v[p]]&&(x[M]=parseInt(u[M],10))}return u.expression&&(x.expression=u.expression),x})}function d(n,h){return(0,o.getElementsByTagName)(n,h,!0,1)[0]}function c(n,h,u){return u===void 0&&(u=!1),(0,l.textContent)((0,o.getElementsByTagName)(n,h,u,1)).trim()}function r(n,h,u,x,b){b===void 0&&(b=!1);var C=c(u,x,b);C&&(n[h]=C)}function i(n){return n==="rss"||n==="feed"||n==="rdf:RDF"}},5397:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uniqueSort=t.compareDocumentPosition=t.DocumentPosition=t.removeSubsets=void 0;var l,o=e(1141);function A(a,m){var d=[],c=[];if(a===m)return 0;for(var r=(0,o.hasChildren)(a)?a:a.parent;r;)d.unshift(r),r=r.parent;for(r=(0,o.hasChildren)(m)?m:m.parent;r;)c.unshift(r),r=r.parent;for(var i=Math.min(d.length,c.length),n=0;n<i&&d[n]===c[n];)n++;if(n===0)return l.DISCONNECTED;var h=d[n-1],u=h.children,x=d[n],b=c[n];return u.indexOf(x)>u.indexOf(b)?h===m?l.FOLLOWING|l.CONTAINED_BY:l.FOLLOWING:h===a?l.PRECEDING|l.CONTAINS:l.PRECEDING}t.removeSubsets=function(a){for(var m=a.length;--m>=0;){var d=a[m];if(m>0&&a.lastIndexOf(d,m-1)>=0)a.splice(m,1);else for(var c=d.parent;c;c=c.parent)if(a.includes(c)){a.splice(m,1);break}}return a},function(a){a[a.DISCONNECTED=1]="DISCONNECTED",a[a.PRECEDING=2]="PRECEDING",a[a.FOLLOWING=4]="FOLLOWING",a[a.CONTAINS=8]="CONTAINS",a[a.CONTAINED_BY=16]="CONTAINED_BY"}(l=t.DocumentPosition||(t.DocumentPosition={})),t.compareDocumentPosition=A,t.uniqueSort=function(a){return(a=a.filter(function(m,d,c){return!c.includes(m,d+1)})).sort(function(m,d){var c=A(m,d);return c&l.PRECEDING?-1:c&l.FOLLOWING?1:0}),a}},8888:function(I,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(a,m,d,c){c===void 0&&(c=d);var r=Object.getOwnPropertyDescriptor(m,d);r&&!("get"in r?!m.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return m[d]}}),Object.defineProperty(a,c,r)}:function(a,m,d,c){c===void 0&&(c=d),a[c]=m[d]}),o=this&&this.__exportStar||function(a,m){for(var d in a)d==="default"||Object.prototype.hasOwnProperty.call(m,d)||l(m,a,d)};Object.defineProperty(t,"__esModule",{value:!0}),t.hasChildren=t.isDocument=t.isComment=t.isText=t.isCDATA=t.isTag=void 0,o(e(6037),t),o(e(8938),t),o(e(3403),t),o(e(718),t),o(e(3209),t),o(e(5397),t),o(e(4437),t);var A=e(1141);Object.defineProperty(t,"isTag",{enumerable:!0,get:function(){return A.isTag}}),Object.defineProperty(t,"isCDATA",{enumerable:!0,get:function(){return A.isCDATA}}),Object.defineProperty(t,"isText",{enumerable:!0,get:function(){return A.isText}}),Object.defineProperty(t,"isComment",{enumerable:!0,get:function(){return A.isComment}}),Object.defineProperty(t,"isDocument",{enumerable:!0,get:function(){return A.isDocument}}),Object.defineProperty(t,"hasChildren",{enumerable:!0,get:function(){return A.hasChildren}})},3209:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getElementsByTagType=t.getElementsByTagName=t.getElementById=t.getElements=t.testElement=void 0;var l=e(1141),o=e(718),A={tag_name:function(c){return typeof c=="function"?function(r){return(0,l.isTag)(r)&&c(r.name)}:c==="*"?l.isTag:function(r){return(0,l.isTag)(r)&&r.name===c}},tag_type:function(c){return typeof c=="function"?function(r){return c(r.type)}:function(r){return r.type===c}},tag_contains:function(c){return typeof c=="function"?function(r){return(0,l.isText)(r)&&c(r.data)}:function(r){return(0,l.isText)(r)&&r.data===c}}};function a(c,r){return typeof r=="function"?function(i){return(0,l.isTag)(i)&&r(i.attribs[c])}:function(i){return(0,l.isTag)(i)&&i.attribs[c]===r}}function m(c,r){return function(i){return c(i)||r(i)}}function d(c){var r=Object.keys(c).map(function(i){var n=c[i];return Object.prototype.hasOwnProperty.call(A,i)?A[i](n):a(i,n)});return r.length===0?null:r.reduce(m)}t.testElement=function(c,r){var i=d(c);return!i||i(r)},t.getElements=function(c,r,i,n){n===void 0&&(n=1/0);var h=d(c);return h?(0,o.filter)(h,r,i,n):[]},t.getElementById=function(c,r,i){return i===void 0&&(i=!0),Array.isArray(r)||(r=[r]),(0,o.findOne)(a("id",c),r,i)},t.getElementsByTagName=function(c,r,i,n){return i===void 0&&(i=!0),n===void 0&&(n=1/0),(0,o.filter)(A.tag_name(c),r,i,n)},t.getElementsByTagType=function(c,r,i,n){return i===void 0&&(i=!0),n===void 0&&(n=1/0),(0,o.filter)(A.tag_type(c),r,i,n)}},3403:(I,t)=>{"use strict";function e(l){if(l.prev&&(l.prev.next=l.next),l.next&&(l.next.prev=l.prev),l.parent){var o=l.parent.children,A=o.lastIndexOf(l);A>=0&&o.splice(A,1)}l.next=null,l.prev=null,l.parent=null}Object.defineProperty(t,"__esModule",{value:!0}),t.prepend=t.prependChild=t.append=t.appendChild=t.replaceElement=t.removeElement=void 0,t.removeElement=e,t.replaceElement=function(l,o){var A=o.prev=l.prev;A&&(A.next=o);var a=o.next=l.next;a&&(a.prev=o);var m=o.parent=l.parent;if(m){var d=m.children;d[d.lastIndexOf(l)]=o,l.parent=null}},t.appendChild=function(l,o){if(e(o),o.next=null,o.parent=l,l.children.push(o)>1){var A=l.children[l.children.length-2];A.next=o,o.prev=A}else o.prev=null},t.append=function(l,o){e(o);var A=l.parent,a=l.next;if(o.next=a,o.prev=l,l.next=o,o.parent=A,a){if(a.prev=o,A){var m=A.children;m.splice(m.lastIndexOf(a),0,o)}}else A&&A.children.push(o)},t.prependChild=function(l,o){if(e(o),o.parent=l,o.prev=null,l.children.unshift(o)!==1){var A=l.children[1];A.prev=o,o.next=A}else o.next=null},t.prepend=function(l,o){e(o);var A=l.parent;if(A){var a=A.children;a.splice(a.indexOf(l),0,o)}l.prev&&(l.prev.next=o),o.parent=A,o.prev=l.prev,o.next=l,l.prev=o}},718:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findAll=t.existsOne=t.findOne=t.findOneChild=t.find=t.filter=void 0;var l=e(1141);function o(A,a,m,d){for(var c=[],r=[a],i=[0];;)if(i[0]>=r[0].length){if(i.length===1)return c;r.shift(),i.shift()}else{var n=r[0][i[0]++];if(A(n)&&(c.push(n),--d<=0))return c;m&&(0,l.hasChildren)(n)&&n.children.length>0&&(i.unshift(0),r.unshift(n.children))}}t.filter=function(A,a,m,d){return m===void 0&&(m=!0),d===void 0&&(d=1/0),o(A,Array.isArray(a)?a:[a],m,d)},t.find=o,t.findOneChild=function(A,a){return a.find(A)},t.findOne=function A(a,m,d){d===void 0&&(d=!0);for(var c=null,r=0;r<m.length&&!c;r++){var i=m[r];(0,l.isTag)(i)&&(a(i)?c=i:d&&i.children.length>0&&(c=A(a,i.children,!0)))}return c},t.existsOne=function A(a,m){return m.some(function(d){return(0,l.isTag)(d)&&(a(d)||A(a,d.children))})},t.findAll=function(A,a){for(var m=[],d=[a],c=[0];;)if(c[0]>=d[0].length){if(d.length===1)return m;d.shift(),c.shift()}else{var r=d[0][c[0]++];(0,l.isTag)(r)&&(A(r)&&m.push(r),r.children.length>0&&(c.unshift(0),d.unshift(r.children)))}}},6037:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(t,"__esModule",{value:!0}),t.innerText=t.textContent=t.getText=t.getInnerHTML=t.getOuterHTML=void 0;var o=e(1141),A=l(e(3806)),a=e(5413);function m(d,c){return(0,A.default)(d,c)}t.getOuterHTML=m,t.getInnerHTML=function(d,c){return(0,o.hasChildren)(d)?d.children.map(function(r){return m(r,c)}).join(""):""},t.getText=function d(c){return Array.isArray(c)?c.map(d).join(""):(0,o.isTag)(c)?c.name==="br"?`
`:d(c.children):(0,o.isCDATA)(c)?d(c.children):(0,o.isText)(c)?c.data:""},t.textContent=function d(c){return Array.isArray(c)?c.map(d).join(""):(0,o.hasChildren)(c)&&!(0,o.isComment)(c)?d(c.children):(0,o.isText)(c)?c.data:""},t.innerText=function d(c){return Array.isArray(c)?c.map(d).join(""):(0,o.hasChildren)(c)&&(c.type===a.ElementType.Tag||(0,o.isCDATA)(c))?d(c.children):(0,o.isText)(c)?c.data:""}},8938:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prevElementSibling=t.nextElementSibling=t.getName=t.hasAttrib=t.getAttributeValue=t.getSiblings=t.getParent=t.getChildren=void 0;var l=e(1141);function o(a){return(0,l.hasChildren)(a)?a.children:[]}function A(a){return a.parent||null}t.getChildren=o,t.getParent=A,t.getSiblings=function(a){var m=A(a);if(m!=null)return o(m);for(var d=[a],c=a.prev,r=a.next;c!=null;)d.unshift(c),c=c.prev;for(;r!=null;)d.push(r),r=r.next;return d},t.getAttributeValue=function(a,m){var d;return(d=a.attribs)===null||d===void 0?void 0:d[m]},t.hasAttrib=function(a,m){return a.attribs!=null&&Object.prototype.hasOwnProperty.call(a.attribs,m)&&a.attribs[m]!=null},t.getName=function(a){return a.name},t.nextElementSibling=function(a){for(var m=a.next;m!==null&&!(0,l.isTag)(m);)m=m.next;return m},t.prevElementSibling=function(a){for(var m=a.prev;m!==null&&!(0,l.isTag)(m);)m=m.prev;return m}},9878:function(I,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(f,y,s,g){g===void 0&&(g=s);var w=Object.getOwnPropertyDescriptor(y,s);w&&!("get"in w?!y.__esModule:w.writable||w.configurable)||(w={enumerable:!0,get:function(){return y[s]}}),Object.defineProperty(f,g,w)}:function(f,y,s,g){g===void 0&&(g=s),f[g]=y[s]}),o=this&&this.__setModuleDefault||(Object.create?function(f,y){Object.defineProperty(f,"default",{enumerable:!0,value:y})}:function(f,y){f.default=y}),A=this&&this.__importStar||function(f){if(f&&f.__esModule)return f;var y={};if(f!=null)for(var s in f)s!=="default"&&Object.prototype.hasOwnProperty.call(f,s)&&l(y,f,s);return o(y,f),y},a=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXML=t.decodeHTMLStrict=t.decodeHTMLAttribute=t.decodeHTML=t.determineBranch=t.EntityDecoder=t.DecodingMode=t.BinTrieFlags=t.fromCodePoint=t.replaceCodePoint=t.decodeCodePoint=t.xmlDecodeTree=t.htmlDecodeTree=void 0;var m=a(e(3603));t.htmlDecodeTree=m.default;var d=a(e(2517));t.xmlDecodeTree=d.default;var c=A(e(5096));t.decodeCodePoint=c.default;var r,i,n,h,u=e(5096);function x(f){return f>=r.ZERO&&f<=r.NINE}Object.defineProperty(t,"replaceCodePoint",{enumerable:!0,get:function(){return u.replaceCodePoint}}),Object.defineProperty(t,"fromCodePoint",{enumerable:!0,get:function(){return u.fromCodePoint}}),function(f){f[f.NUM=35]="NUM",f[f.SEMI=59]="SEMI",f[f.EQUALS=61]="EQUALS",f[f.ZERO=48]="ZERO",f[f.NINE=57]="NINE",f[f.LOWER_A=97]="LOWER_A",f[f.LOWER_F=102]="LOWER_F",f[f.LOWER_X=120]="LOWER_X",f[f.LOWER_Z=122]="LOWER_Z",f[f.UPPER_A=65]="UPPER_A",f[f.UPPER_F=70]="UPPER_F",f[f.UPPER_Z=90]="UPPER_Z"}(r||(r={})),function(f){f[f.VALUE_LENGTH=49152]="VALUE_LENGTH",f[f.BRANCH_LENGTH=16256]="BRANCH_LENGTH",f[f.JUMP_TABLE=127]="JUMP_TABLE"}(i=t.BinTrieFlags||(t.BinTrieFlags={})),function(f){f[f.EntityStart=0]="EntityStart",f[f.NumericStart=1]="NumericStart",f[f.NumericDecimal=2]="NumericDecimal",f[f.NumericHex=3]="NumericHex",f[f.NamedEntity=4]="NamedEntity"}(n||(n={})),function(f){f[f.Legacy=0]="Legacy",f[f.Strict=1]="Strict",f[f.Attribute=2]="Attribute"}(h=t.DecodingMode||(t.DecodingMode={}));var b=function(){function f(y,s,g){this.decodeTree=y,this.emitCodePoint=s,this.errors=g,this.state=n.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=h.Strict}return f.prototype.startEntity=function(y){this.decodeMode=y,this.state=n.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1},f.prototype.write=function(y,s){switch(this.state){case n.EntityStart:return y.charCodeAt(s)===r.NUM?(this.state=n.NumericStart,this.consumed+=1,this.stateNumericStart(y,s+1)):(this.state=n.NamedEntity,this.stateNamedEntity(y,s));case n.NumericStart:return this.stateNumericStart(y,s);case n.NumericDecimal:return this.stateNumericDecimal(y,s);case n.NumericHex:return this.stateNumericHex(y,s);case n.NamedEntity:return this.stateNamedEntity(y,s)}},f.prototype.stateNumericStart=function(y,s){return s>=y.length?-1:(32|y.charCodeAt(s))===r.LOWER_X?(this.state=n.NumericHex,this.consumed+=1,this.stateNumericHex(y,s+1)):(this.state=n.NumericDecimal,this.stateNumericDecimal(y,s))},f.prototype.addToNumericResult=function(y,s,g,w){if(s!==g){var k=g-s;this.result=this.result*Math.pow(w,k)+parseInt(y.substr(s,k),w),this.consumed+=k}},f.prototype.stateNumericHex=function(y,s){for(var g,w=s;s<y.length;){var k=y.charCodeAt(s);if(!(x(k)||(g=k,g>=r.UPPER_A&&g<=r.UPPER_F||g>=r.LOWER_A&&g<=r.LOWER_F)))return this.addToNumericResult(y,w,s,16),this.emitNumericEntity(k,3);s+=1}return this.addToNumericResult(y,w,s,16),-1},f.prototype.stateNumericDecimal=function(y,s){for(var g=s;s<y.length;){var w=y.charCodeAt(s);if(!x(w))return this.addToNumericResult(y,g,s,10),this.emitNumericEntity(w,2);s+=1}return this.addToNumericResult(y,g,s,10),-1},f.prototype.emitNumericEntity=function(y,s){var g;if(this.consumed<=s)return(g=this.errors)===null||g===void 0||g.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(y===r.SEMI)this.consumed+=1;else if(this.decodeMode===h.Strict)return 0;return this.emitCodePoint((0,c.replaceCodePoint)(this.result),this.consumed),this.errors&&(y!==r.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed},f.prototype.stateNamedEntity=function(y,s){for(var g=this.decodeTree,w=g[this.treeIndex],k=(w&i.VALUE_LENGTH)>>14;s<y.length;s++,this.excess++){var S=y.charCodeAt(s);if(this.treeIndex=p(g,w,this.treeIndex+Math.max(1,k),S),this.treeIndex<0)return this.result===0||this.decodeMode===h.Attribute&&(k===0||(L=S)===r.EQUALS||function(U){return U>=r.UPPER_A&&U<=r.UPPER_Z||U>=r.LOWER_A&&U<=r.LOWER_Z||x(U)}(L))?0:this.emitNotTerminatedNamedEntity();if((k=((w=g[this.treeIndex])&i.VALUE_LENGTH)>>14)!=0){if(S===r.SEMI)return this.emitNamedEntityData(this.treeIndex,k,this.consumed+this.excess);this.decodeMode!==h.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}var L;return-1},f.prototype.emitNotTerminatedNamedEntity=function(){var y,s=this.result,g=(this.decodeTree[s]&i.VALUE_LENGTH)>>14;return this.emitNamedEntityData(s,g,this.consumed),(y=this.errors)===null||y===void 0||y.missingSemicolonAfterCharacterReference(),this.consumed},f.prototype.emitNamedEntityData=function(y,s,g){var w=this.decodeTree;return this.emitCodePoint(s===1?w[y]&~i.VALUE_LENGTH:w[y+1],g),s===3&&this.emitCodePoint(w[y+2],g),g},f.prototype.end=function(){var y;switch(this.state){case n.NamedEntity:return this.result===0||this.decodeMode===h.Attribute&&this.result!==this.treeIndex?0:this.emitNotTerminatedNamedEntity();case n.NumericDecimal:return this.emitNumericEntity(0,2);case n.NumericHex:return this.emitNumericEntity(0,3);case n.NumericStart:return(y=this.errors)===null||y===void 0||y.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case n.EntityStart:return 0}},f}();function C(f){var y="",s=new b(f,function(g){return y+=(0,c.fromCodePoint)(g)});return function(g,w){for(var k=0,S=0;(S=g.indexOf("&",S))>=0;){y+=g.slice(k,S),s.startEntity(w);var L=s.write(g,S+1);if(L<0){k=S+s.end();break}k=S+L,S=L===0?k+1:k}var U=y+g.slice(k);return y="",U}}function p(f,y,s,g){var w=(y&i.BRANCH_LENGTH)>>7,k=y&i.JUMP_TABLE;if(w===0)return k!==0&&g===k?s:-1;if(k){var S=g-k;return S<0||S>=w?-1:f[s+S]-1}for(var L=s,U=L+w-1;L<=U;){var F=L+U>>>1,R=f[F];if(R<g)L=F+1;else{if(!(R>g))return f[F+w];U=F-1}}return-1}t.EntityDecoder=b,t.determineBranch=p;var v=C(m.default),M=C(d.default);t.decodeHTML=function(f,y){return y===void 0&&(y=h.Legacy),v(f,y)},t.decodeHTMLAttribute=function(f){return v(f,h.Attribute)},t.decodeHTMLStrict=function(f){return v(f,h.Strict)},t.decodeXML=function(f){return M(f,h.Strict)}},5096:(I,t)=>{"use strict";var e;Object.defineProperty(t,"__esModule",{value:!0}),t.replaceCodePoint=t.fromCodePoint=void 0;var l=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function o(A){var a;return A>=55296&&A<=57343||A>1114111?65533:(a=l.get(A))!==null&&a!==void 0?a:A}t.fromCodePoint=(e=String.fromCodePoint)!==null&&e!==void 0?e:function(A){var a="";return A>65535&&(A-=65536,a+=String.fromCharCode(A>>>10&1023|55296),A=56320|1023&A),a+String.fromCharCode(A)},t.replaceCodePoint=o,t.default=function(A){return(0,t.fromCodePoint)(o(A))}},1818:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(t,"__esModule",{value:!0}),t.encodeNonAsciiHTML=t.encodeHTML=void 0;var o=l(e(5504)),A=e(5987),a=/[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;function m(d,c){for(var r,i="",n=0;(r=d.exec(c))!==null;){var h=r.index;i+=c.substring(n,h);var u=c.charCodeAt(h),x=o.default.get(u);if(typeof x=="object"){if(h+1<c.length){var b=c.charCodeAt(h+1),C=typeof x.n=="number"?x.n===b?x.o:void 0:x.n.get(b);if(C!==void 0){i+=C,n=d.lastIndex+=1;continue}}x=x.v}if(x!==void 0)i+=x,n=h+1;else{var p=(0,A.getCodePoint)(c,h);i+="&#x".concat(p.toString(16),";"),n=d.lastIndex+=Number(p!==u)}}return i+c.substr(n)}t.encodeHTML=function(d){return m(a,d)},t.encodeNonAsciiHTML=function(d){return m(A.xmlReplacer,d)}},5987:(I,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.escapeText=t.escapeAttribute=t.escapeUTF8=t.escape=t.encodeXML=t.getCodePoint=t.xmlReplacer=void 0,t.xmlReplacer=/["&'<>$\x80-\uFFFF]/g;var e=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]]);function l(A){for(var a,m="",d=0;(a=t.xmlReplacer.exec(A))!==null;){var c=a.index,r=A.charCodeAt(c),i=e.get(r);i!==void 0?(m+=A.substring(d,c)+i,d=c+1):(m+="".concat(A.substring(d,c),"&#x").concat((0,t.getCodePoint)(A,c).toString(16),";"),d=t.xmlReplacer.lastIndex+=Number((64512&r)==55296))}return m+A.substr(d)}function o(A,a){return function(m){for(var d,c=0,r="";d=A.exec(m);)c!==d.index&&(r+=m.substring(c,d.index)),r+=a.get(d[0].charCodeAt(0)),c=d.index+1;return r+m.substring(c)}}t.getCodePoint=String.prototype.codePointAt!=null?function(A,a){return A.codePointAt(a)}:function(A,a){return(64512&A.charCodeAt(a))==55296?1024*(A.charCodeAt(a)-55296)+A.charCodeAt(a+1)-56320+65536:A.charCodeAt(a)},t.encodeXML=l,t.escape=l,t.escapeUTF8=o(/[&<>'"]/g,e),t.escapeAttribute=o(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),t.escapeText=o(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]]))},3603:(I,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(e){return e.charCodeAt(0)}))},2517:(I,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(e){return e.charCodeAt(0)}))},5504:(I,t)=>{"use strict";function e(l){for(var o=1;o<l.length;o++)l[o][0]+=l[o-1][0]+1;return l}Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Map(e([[9,"&Tab;"],[0,"&NewLine;"],[22,"&excl;"],[0,"&quot;"],[0,"&num;"],[0,"&dollar;"],[0,"&percnt;"],[0,"&amp;"],[0,"&apos;"],[0,"&lpar;"],[0,"&rpar;"],[0,"&ast;"],[0,"&plus;"],[0,"&comma;"],[1,"&period;"],[0,"&sol;"],[10,"&colon;"],[0,"&semi;"],[0,{v:"&lt;",n:8402,o:"&nvlt;"}],[0,{v:"&equals;",n:8421,o:"&bne;"}],[0,{v:"&gt;",n:8402,o:"&nvgt;"}],[0,"&quest;"],[0,"&commat;"],[26,"&lbrack;"],[0,"&bsol;"],[0,"&rbrack;"],[0,"&Hat;"],[0,"&lowbar;"],[0,"&DiacriticalGrave;"],[5,{n:106,o:"&fjlig;"}],[20,"&lbrace;"],[0,"&verbar;"],[0,"&rbrace;"],[34,"&nbsp;"],[0,"&iexcl;"],[0,"&cent;"],[0,"&pound;"],[0,"&curren;"],[0,"&yen;"],[0,"&brvbar;"],[0,"&sect;"],[0,"&die;"],[0,"&copy;"],[0,"&ordf;"],[0,"&laquo;"],[0,"&not;"],[0,"&shy;"],[0,"&circledR;"],[0,"&macr;"],[0,"&deg;"],[0,"&PlusMinus;"],[0,"&sup2;"],[0,"&sup3;"],[0,"&acute;"],[0,"&micro;"],[0,"&para;"],[0,"&centerdot;"],[0,"&cedil;"],[0,"&sup1;"],[0,"&ordm;"],[0,"&raquo;"],[0,"&frac14;"],[0,"&frac12;"],[0,"&frac34;"],[0,"&iquest;"],[0,"&Agrave;"],[0,"&Aacute;"],[0,"&Acirc;"],[0,"&Atilde;"],[0,"&Auml;"],[0,"&angst;"],[0,"&AElig;"],[0,"&Ccedil;"],[0,"&Egrave;"],[0,"&Eacute;"],[0,"&Ecirc;"],[0,"&Euml;"],[0,"&Igrave;"],[0,"&Iacute;"],[0,"&Icirc;"],[0,"&Iuml;"],[0,"&ETH;"],[0,"&Ntilde;"],[0,"&Ograve;"],[0,"&Oacute;"],[0,"&Ocirc;"],[0,"&Otilde;"],[0,"&Ouml;"],[0,"&times;"],[0,"&Oslash;"],[0,"&Ugrave;"],[0,"&Uacute;"],[0,"&Ucirc;"],[0,"&Uuml;"],[0,"&Yacute;"],[0,"&THORN;"],[0,"&szlig;"],[0,"&agrave;"],[0,"&aacute;"],[0,"&acirc;"],[0,"&atilde;"],[0,"&auml;"],[0,"&aring;"],[0,"&aelig;"],[0,"&ccedil;"],[0,"&egrave;"],[0,"&eacute;"],[0,"&ecirc;"],[0,"&euml;"],[0,"&igrave;"],[0,"&iacute;"],[0,"&icirc;"],[0,"&iuml;"],[0,"&eth;"],[0,"&ntilde;"],[0,"&ograve;"],[0,"&oacute;"],[0,"&ocirc;"],[0,"&otilde;"],[0,"&ouml;"],[0,"&div;"],[0,"&oslash;"],[0,"&ugrave;"],[0,"&uacute;"],[0,"&ucirc;"],[0,"&uuml;"],[0,"&yacute;"],[0,"&thorn;"],[0,"&yuml;"],[0,"&Amacr;"],[0,"&amacr;"],[0,"&Abreve;"],[0,"&abreve;"],[0,"&Aogon;"],[0,"&aogon;"],[0,"&Cacute;"],[0,"&cacute;"],[0,"&Ccirc;"],[0,"&ccirc;"],[0,"&Cdot;"],[0,"&cdot;"],[0,"&Ccaron;"],[0,"&ccaron;"],[0,"&Dcaron;"],[0,"&dcaron;"],[0,"&Dstrok;"],[0,"&dstrok;"],[0,"&Emacr;"],[0,"&emacr;"],[2,"&Edot;"],[0,"&edot;"],[0,"&Eogon;"],[0,"&eogon;"],[0,"&Ecaron;"],[0,"&ecaron;"],[0,"&Gcirc;"],[0,"&gcirc;"],[0,"&Gbreve;"],[0,"&gbreve;"],[0,"&Gdot;"],[0,"&gdot;"],[0,"&Gcedil;"],[1,"&Hcirc;"],[0,"&hcirc;"],[0,"&Hstrok;"],[0,"&hstrok;"],[0,"&Itilde;"],[0,"&itilde;"],[0,"&Imacr;"],[0,"&imacr;"],[2,"&Iogon;"],[0,"&iogon;"],[0,"&Idot;"],[0,"&imath;"],[0,"&IJlig;"],[0,"&ijlig;"],[0,"&Jcirc;"],[0,"&jcirc;"],[0,"&Kcedil;"],[0,"&kcedil;"],[0,"&kgreen;"],[0,"&Lacute;"],[0,"&lacute;"],[0,"&Lcedil;"],[0,"&lcedil;"],[0,"&Lcaron;"],[0,"&lcaron;"],[0,"&Lmidot;"],[0,"&lmidot;"],[0,"&Lstrok;"],[0,"&lstrok;"],[0,"&Nacute;"],[0,"&nacute;"],[0,"&Ncedil;"],[0,"&ncedil;"],[0,"&Ncaron;"],[0,"&ncaron;"],[0,"&napos;"],[0,"&ENG;"],[0,"&eng;"],[0,"&Omacr;"],[0,"&omacr;"],[2,"&Odblac;"],[0,"&odblac;"],[0,"&OElig;"],[0,"&oelig;"],[0,"&Racute;"],[0,"&racute;"],[0,"&Rcedil;"],[0,"&rcedil;"],[0,"&Rcaron;"],[0,"&rcaron;"],[0,"&Sacute;"],[0,"&sacute;"],[0,"&Scirc;"],[0,"&scirc;"],[0,"&Scedil;"],[0,"&scedil;"],[0,"&Scaron;"],[0,"&scaron;"],[0,"&Tcedil;"],[0,"&tcedil;"],[0,"&Tcaron;"],[0,"&tcaron;"],[0,"&Tstrok;"],[0,"&tstrok;"],[0,"&Utilde;"],[0,"&utilde;"],[0,"&Umacr;"],[0,"&umacr;"],[0,"&Ubreve;"],[0,"&ubreve;"],[0,"&Uring;"],[0,"&uring;"],[0,"&Udblac;"],[0,"&udblac;"],[0,"&Uogon;"],[0,"&uogon;"],[0,"&Wcirc;"],[0,"&wcirc;"],[0,"&Ycirc;"],[0,"&ycirc;"],[0,"&Yuml;"],[0,"&Zacute;"],[0,"&zacute;"],[0,"&Zdot;"],[0,"&zdot;"],[0,"&Zcaron;"],[0,"&zcaron;"],[19,"&fnof;"],[34,"&imped;"],[63,"&gacute;"],[65,"&jmath;"],[142,"&circ;"],[0,"&caron;"],[16,"&breve;"],[0,"&DiacriticalDot;"],[0,"&ring;"],[0,"&ogon;"],[0,"&DiacriticalTilde;"],[0,"&dblac;"],[51,"&DownBreve;"],[127,"&Alpha;"],[0,"&Beta;"],[0,"&Gamma;"],[0,"&Delta;"],[0,"&Epsilon;"],[0,"&Zeta;"],[0,"&Eta;"],[0,"&Theta;"],[0,"&Iota;"],[0,"&Kappa;"],[0,"&Lambda;"],[0,"&Mu;"],[0,"&Nu;"],[0,"&Xi;"],[0,"&Omicron;"],[0,"&Pi;"],[0,"&Rho;"],[1,"&Sigma;"],[0,"&Tau;"],[0,"&Upsilon;"],[0,"&Phi;"],[0,"&Chi;"],[0,"&Psi;"],[0,"&ohm;"],[7,"&alpha;"],[0,"&beta;"],[0,"&gamma;"],[0,"&delta;"],[0,"&epsi;"],[0,"&zeta;"],[0,"&eta;"],[0,"&theta;"],[0,"&iota;"],[0,"&kappa;"],[0,"&lambda;"],[0,"&mu;"],[0,"&nu;"],[0,"&xi;"],[0,"&omicron;"],[0,"&pi;"],[0,"&rho;"],[0,"&sigmaf;"],[0,"&sigma;"],[0,"&tau;"],[0,"&upsi;"],[0,"&phi;"],[0,"&chi;"],[0,"&psi;"],[0,"&omega;"],[7,"&thetasym;"],[0,"&Upsi;"],[2,"&phiv;"],[0,"&piv;"],[5,"&Gammad;"],[0,"&digamma;"],[18,"&kappav;"],[0,"&rhov;"],[3,"&epsiv;"],[0,"&backepsilon;"],[10,"&IOcy;"],[0,"&DJcy;"],[0,"&GJcy;"],[0,"&Jukcy;"],[0,"&DScy;"],[0,"&Iukcy;"],[0,"&YIcy;"],[0,"&Jsercy;"],[0,"&LJcy;"],[0,"&NJcy;"],[0,"&TSHcy;"],[0,"&KJcy;"],[1,"&Ubrcy;"],[0,"&DZcy;"],[0,"&Acy;"],[0,"&Bcy;"],[0,"&Vcy;"],[0,"&Gcy;"],[0,"&Dcy;"],[0,"&IEcy;"],[0,"&ZHcy;"],[0,"&Zcy;"],[0,"&Icy;"],[0,"&Jcy;"],[0,"&Kcy;"],[0,"&Lcy;"],[0,"&Mcy;"],[0,"&Ncy;"],[0,"&Ocy;"],[0,"&Pcy;"],[0,"&Rcy;"],[0,"&Scy;"],[0,"&Tcy;"],[0,"&Ucy;"],[0,"&Fcy;"],[0,"&KHcy;"],[0,"&TScy;"],[0,"&CHcy;"],[0,"&SHcy;"],[0,"&SHCHcy;"],[0,"&HARDcy;"],[0,"&Ycy;"],[0,"&SOFTcy;"],[0,"&Ecy;"],[0,"&YUcy;"],[0,"&YAcy;"],[0,"&acy;"],[0,"&bcy;"],[0,"&vcy;"],[0,"&gcy;"],[0,"&dcy;"],[0,"&iecy;"],[0,"&zhcy;"],[0,"&zcy;"],[0,"&icy;"],[0,"&jcy;"],[0,"&kcy;"],[0,"&lcy;"],[0,"&mcy;"],[0,"&ncy;"],[0,"&ocy;"],[0,"&pcy;"],[0,"&rcy;"],[0,"&scy;"],[0,"&tcy;"],[0,"&ucy;"],[0,"&fcy;"],[0,"&khcy;"],[0,"&tscy;"],[0,"&chcy;"],[0,"&shcy;"],[0,"&shchcy;"],[0,"&hardcy;"],[0,"&ycy;"],[0,"&softcy;"],[0,"&ecy;"],[0,"&yucy;"],[0,"&yacy;"],[1,"&iocy;"],[0,"&djcy;"],[0,"&gjcy;"],[0,"&jukcy;"],[0,"&dscy;"],[0,"&iukcy;"],[0,"&yicy;"],[0,"&jsercy;"],[0,"&ljcy;"],[0,"&njcy;"],[0,"&tshcy;"],[0,"&kjcy;"],[1,"&ubrcy;"],[0,"&dzcy;"],[7074,"&ensp;"],[0,"&emsp;"],[0,"&emsp13;"],[0,"&emsp14;"],[1,"&numsp;"],[0,"&puncsp;"],[0,"&ThinSpace;"],[0,"&hairsp;"],[0,"&NegativeMediumSpace;"],[0,"&zwnj;"],[0,"&zwj;"],[0,"&lrm;"],[0,"&rlm;"],[0,"&dash;"],[2,"&ndash;"],[0,"&mdash;"],[0,"&horbar;"],[0,"&Verbar;"],[1,"&lsquo;"],[0,"&CloseCurlyQuote;"],[0,"&lsquor;"],[1,"&ldquo;"],[0,"&CloseCurlyDoubleQuote;"],[0,"&bdquo;"],[1,"&dagger;"],[0,"&Dagger;"],[0,"&bull;"],[2,"&nldr;"],[0,"&hellip;"],[9,"&permil;"],[0,"&pertenk;"],[0,"&prime;"],[0,"&Prime;"],[0,"&tprime;"],[0,"&backprime;"],[3,"&lsaquo;"],[0,"&rsaquo;"],[3,"&oline;"],[2,"&caret;"],[1,"&hybull;"],[0,"&frasl;"],[10,"&bsemi;"],[7,"&qprime;"],[7,{v:"&MediumSpace;",n:8202,o:"&ThickSpace;"}],[0,"&NoBreak;"],[0,"&af;"],[0,"&InvisibleTimes;"],[0,"&ic;"],[72,"&euro;"],[46,"&tdot;"],[0,"&DotDot;"],[37,"&complexes;"],[2,"&incare;"],[4,"&gscr;"],[0,"&hamilt;"],[0,"&Hfr;"],[0,"&Hopf;"],[0,"&planckh;"],[0,"&hbar;"],[0,"&imagline;"],[0,"&Ifr;"],[0,"&lagran;"],[0,"&ell;"],[1,"&naturals;"],[0,"&numero;"],[0,"&copysr;"],[0,"&weierp;"],[0,"&Popf;"],[0,"&Qopf;"],[0,"&realine;"],[0,"&real;"],[0,"&reals;"],[0,"&rx;"],[3,"&trade;"],[1,"&integers;"],[2,"&mho;"],[0,"&zeetrf;"],[0,"&iiota;"],[2,"&bernou;"],[0,"&Cayleys;"],[1,"&escr;"],[0,"&Escr;"],[0,"&Fouriertrf;"],[1,"&Mellintrf;"],[0,"&order;"],[0,"&alefsym;"],[0,"&beth;"],[0,"&gimel;"],[0,"&daleth;"],[12,"&CapitalDifferentialD;"],[0,"&dd;"],[0,"&ee;"],[0,"&ii;"],[10,"&frac13;"],[0,"&frac23;"],[0,"&frac15;"],[0,"&frac25;"],[0,"&frac35;"],[0,"&frac45;"],[0,"&frac16;"],[0,"&frac56;"],[0,"&frac18;"],[0,"&frac38;"],[0,"&frac58;"],[0,"&frac78;"],[49,"&larr;"],[0,"&ShortUpArrow;"],[0,"&rarr;"],[0,"&darr;"],[0,"&harr;"],[0,"&updownarrow;"],[0,"&nwarr;"],[0,"&nearr;"],[0,"&LowerRightArrow;"],[0,"&LowerLeftArrow;"],[0,"&nlarr;"],[0,"&nrarr;"],[1,{v:"&rarrw;",n:824,o:"&nrarrw;"}],[0,"&Larr;"],[0,"&Uarr;"],[0,"&Rarr;"],[0,"&Darr;"],[0,"&larrtl;"],[0,"&rarrtl;"],[0,"&LeftTeeArrow;"],[0,"&mapstoup;"],[0,"&map;"],[0,"&DownTeeArrow;"],[1,"&hookleftarrow;"],[0,"&hookrightarrow;"],[0,"&larrlp;"],[0,"&looparrowright;"],[0,"&harrw;"],[0,"&nharr;"],[1,"&lsh;"],[0,"&rsh;"],[0,"&ldsh;"],[0,"&rdsh;"],[1,"&crarr;"],[0,"&cularr;"],[0,"&curarr;"],[2,"&circlearrowleft;"],[0,"&circlearrowright;"],[0,"&leftharpoonup;"],[0,"&DownLeftVector;"],[0,"&RightUpVector;"],[0,"&LeftUpVector;"],[0,"&rharu;"],[0,"&DownRightVector;"],[0,"&dharr;"],[0,"&dharl;"],[0,"&RightArrowLeftArrow;"],[0,"&udarr;"],[0,"&LeftArrowRightArrow;"],[0,"&leftleftarrows;"],[0,"&upuparrows;"],[0,"&rightrightarrows;"],[0,"&ddarr;"],[0,"&leftrightharpoons;"],[0,"&Equilibrium;"],[0,"&nlArr;"],[0,"&nhArr;"],[0,"&nrArr;"],[0,"&DoubleLeftArrow;"],[0,"&DoubleUpArrow;"],[0,"&DoubleRightArrow;"],[0,"&dArr;"],[0,"&DoubleLeftRightArrow;"],[0,"&DoubleUpDownArrow;"],[0,"&nwArr;"],[0,"&neArr;"],[0,"&seArr;"],[0,"&swArr;"],[0,"&lAarr;"],[0,"&rAarr;"],[1,"&zigrarr;"],[6,"&larrb;"],[0,"&rarrb;"],[15,"&DownArrowUpArrow;"],[7,"&loarr;"],[0,"&roarr;"],[0,"&hoarr;"],[0,"&forall;"],[0,"&comp;"],[0,{v:"&part;",n:824,o:"&npart;"}],[0,"&exist;"],[0,"&nexist;"],[0,"&empty;"],[1,"&Del;"],[0,"&Element;"],[0,"&NotElement;"],[1,"&ni;"],[0,"&notni;"],[2,"&prod;"],[0,"&coprod;"],[0,"&sum;"],[0,"&minus;"],[0,"&MinusPlus;"],[0,"&dotplus;"],[1,"&Backslash;"],[0,"&lowast;"],[0,"&compfn;"],[1,"&radic;"],[2,"&prop;"],[0,"&infin;"],[0,"&angrt;"],[0,{v:"&ang;",n:8402,o:"&nang;"}],[0,"&angmsd;"],[0,"&angsph;"],[0,"&mid;"],[0,"&nmid;"],[0,"&DoubleVerticalBar;"],[0,"&NotDoubleVerticalBar;"],[0,"&and;"],[0,"&or;"],[0,{v:"&cap;",n:65024,o:"&caps;"}],[0,{v:"&cup;",n:65024,o:"&cups;"}],[0,"&int;"],[0,"&Int;"],[0,"&iiint;"],[0,"&conint;"],[0,"&Conint;"],[0,"&Cconint;"],[0,"&cwint;"],[0,"&ClockwiseContourIntegral;"],[0,"&awconint;"],[0,"&there4;"],[0,"&becaus;"],[0,"&ratio;"],[0,"&Colon;"],[0,"&dotminus;"],[1,"&mDDot;"],[0,"&homtht;"],[0,{v:"&sim;",n:8402,o:"&nvsim;"}],[0,{v:"&backsim;",n:817,o:"&race;"}],[0,{v:"&ac;",n:819,o:"&acE;"}],[0,"&acd;"],[0,"&VerticalTilde;"],[0,"&NotTilde;"],[0,{v:"&eqsim;",n:824,o:"&nesim;"}],[0,"&sime;"],[0,"&NotTildeEqual;"],[0,"&cong;"],[0,"&simne;"],[0,"&ncong;"],[0,"&ap;"],[0,"&nap;"],[0,"&ape;"],[0,{v:"&apid;",n:824,o:"&napid;"}],[0,"&backcong;"],[0,{v:"&asympeq;",n:8402,o:"&nvap;"}],[0,{v:"&bump;",n:824,o:"&nbump;"}],[0,{v:"&bumpe;",n:824,o:"&nbumpe;"}],[0,{v:"&doteq;",n:824,o:"&nedot;"}],[0,"&doteqdot;"],[0,"&efDot;"],[0,"&erDot;"],[0,"&Assign;"],[0,"&ecolon;"],[0,"&ecir;"],[0,"&circeq;"],[1,"&wedgeq;"],[0,"&veeeq;"],[1,"&triangleq;"],[2,"&equest;"],[0,"&ne;"],[0,{v:"&Congruent;",n:8421,o:"&bnequiv;"}],[0,"&nequiv;"],[1,{v:"&le;",n:8402,o:"&nvle;"}],[0,{v:"&ge;",n:8402,o:"&nvge;"}],[0,{v:"&lE;",n:824,o:"&nlE;"}],[0,{v:"&gE;",n:824,o:"&ngE;"}],[0,{v:"&lnE;",n:65024,o:"&lvertneqq;"}],[0,{v:"&gnE;",n:65024,o:"&gvertneqq;"}],[0,{v:"&ll;",n:new Map(e([[824,"&nLtv;"],[7577,"&nLt;"]]))}],[0,{v:"&gg;",n:new Map(e([[824,"&nGtv;"],[7577,"&nGt;"]]))}],[0,"&between;"],[0,"&NotCupCap;"],[0,"&nless;"],[0,"&ngt;"],[0,"&nle;"],[0,"&nge;"],[0,"&lesssim;"],[0,"&GreaterTilde;"],[0,"&nlsim;"],[0,"&ngsim;"],[0,"&LessGreater;"],[0,"&gl;"],[0,"&NotLessGreater;"],[0,"&NotGreaterLess;"],[0,"&pr;"],[0,"&sc;"],[0,"&prcue;"],[0,"&sccue;"],[0,"&PrecedesTilde;"],[0,{v:"&scsim;",n:824,o:"&NotSucceedsTilde;"}],[0,"&NotPrecedes;"],[0,"&NotSucceeds;"],[0,{v:"&sub;",n:8402,o:"&NotSubset;"}],[0,{v:"&sup;",n:8402,o:"&NotSuperset;"}],[0,"&nsub;"],[0,"&nsup;"],[0,"&sube;"],[0,"&supe;"],[0,"&NotSubsetEqual;"],[0,"&NotSupersetEqual;"],[0,{v:"&subne;",n:65024,o:"&varsubsetneq;"}],[0,{v:"&supne;",n:65024,o:"&varsupsetneq;"}],[1,"&cupdot;"],[0,"&UnionPlus;"],[0,{v:"&sqsub;",n:824,o:"&NotSquareSubset;"}],[0,{v:"&sqsup;",n:824,o:"&NotSquareSuperset;"}],[0,"&sqsube;"],[0,"&sqsupe;"],[0,{v:"&sqcap;",n:65024,o:"&sqcaps;"}],[0,{v:"&sqcup;",n:65024,o:"&sqcups;"}],[0,"&CirclePlus;"],[0,"&CircleMinus;"],[0,"&CircleTimes;"],[0,"&osol;"],[0,"&CircleDot;"],[0,"&circledcirc;"],[0,"&circledast;"],[1,"&circleddash;"],[0,"&boxplus;"],[0,"&boxminus;"],[0,"&boxtimes;"],[0,"&dotsquare;"],[0,"&RightTee;"],[0,"&dashv;"],[0,"&DownTee;"],[0,"&bot;"],[1,"&models;"],[0,"&DoubleRightTee;"],[0,"&Vdash;"],[0,"&Vvdash;"],[0,"&VDash;"],[0,"&nvdash;"],[0,"&nvDash;"],[0,"&nVdash;"],[0,"&nVDash;"],[0,"&prurel;"],[1,"&LeftTriangle;"],[0,"&RightTriangle;"],[0,{v:"&LeftTriangleEqual;",n:8402,o:"&nvltrie;"}],[0,{v:"&RightTriangleEqual;",n:8402,o:"&nvrtrie;"}],[0,"&origof;"],[0,"&imof;"],[0,"&multimap;"],[0,"&hercon;"],[0,"&intcal;"],[0,"&veebar;"],[1,"&barvee;"],[0,"&angrtvb;"],[0,"&lrtri;"],[0,"&bigwedge;"],[0,"&bigvee;"],[0,"&bigcap;"],[0,"&bigcup;"],[0,"&diam;"],[0,"&sdot;"],[0,"&sstarf;"],[0,"&divideontimes;"],[0,"&bowtie;"],[0,"&ltimes;"],[0,"&rtimes;"],[0,"&leftthreetimes;"],[0,"&rightthreetimes;"],[0,"&backsimeq;"],[0,"&curlyvee;"],[0,"&curlywedge;"],[0,"&Sub;"],[0,"&Sup;"],[0,"&Cap;"],[0,"&Cup;"],[0,"&fork;"],[0,"&epar;"],[0,"&lessdot;"],[0,"&gtdot;"],[0,{v:"&Ll;",n:824,o:"&nLl;"}],[0,{v:"&Gg;",n:824,o:"&nGg;"}],[0,{v:"&leg;",n:65024,o:"&lesg;"}],[0,{v:"&gel;",n:65024,o:"&gesl;"}],[2,"&cuepr;"],[0,"&cuesc;"],[0,"&NotPrecedesSlantEqual;"],[0,"&NotSucceedsSlantEqual;"],[0,"&NotSquareSubsetEqual;"],[0,"&NotSquareSupersetEqual;"],[2,"&lnsim;"],[0,"&gnsim;"],[0,"&precnsim;"],[0,"&scnsim;"],[0,"&nltri;"],[0,"&NotRightTriangle;"],[0,"&nltrie;"],[0,"&NotRightTriangleEqual;"],[0,"&vellip;"],[0,"&ctdot;"],[0,"&utdot;"],[0,"&dtdot;"],[0,"&disin;"],[0,"&isinsv;"],[0,"&isins;"],[0,{v:"&isindot;",n:824,o:"&notindot;"}],[0,"&notinvc;"],[0,"&notinvb;"],[1,{v:"&isinE;",n:824,o:"&notinE;"}],[0,"&nisd;"],[0,"&xnis;"],[0,"&nis;"],[0,"&notnivc;"],[0,"&notnivb;"],[6,"&barwed;"],[0,"&Barwed;"],[1,"&lceil;"],[0,"&rceil;"],[0,"&LeftFloor;"],[0,"&rfloor;"],[0,"&drcrop;"],[0,"&dlcrop;"],[0,"&urcrop;"],[0,"&ulcrop;"],[0,"&bnot;"],[1,"&profline;"],[0,"&profsurf;"],[1,"&telrec;"],[0,"&target;"],[5,"&ulcorn;"],[0,"&urcorn;"],[0,"&dlcorn;"],[0,"&drcorn;"],[2,"&frown;"],[0,"&smile;"],[9,"&cylcty;"],[0,"&profalar;"],[7,"&topbot;"],[6,"&ovbar;"],[1,"&solbar;"],[60,"&angzarr;"],[51,"&lmoustache;"],[0,"&rmoustache;"],[2,"&OverBracket;"],[0,"&bbrk;"],[0,"&bbrktbrk;"],[37,"&OverParenthesis;"],[0,"&UnderParenthesis;"],[0,"&OverBrace;"],[0,"&UnderBrace;"],[2,"&trpezium;"],[4,"&elinters;"],[59,"&blank;"],[164,"&circledS;"],[55,"&boxh;"],[1,"&boxv;"],[9,"&boxdr;"],[3,"&boxdl;"],[3,"&boxur;"],[3,"&boxul;"],[3,"&boxvr;"],[7,"&boxvl;"],[7,"&boxhd;"],[7,"&boxhu;"],[7,"&boxvh;"],[19,"&boxH;"],[0,"&boxV;"],[0,"&boxdR;"],[0,"&boxDr;"],[0,"&boxDR;"],[0,"&boxdL;"],[0,"&boxDl;"],[0,"&boxDL;"],[0,"&boxuR;"],[0,"&boxUr;"],[0,"&boxUR;"],[0,"&boxuL;"],[0,"&boxUl;"],[0,"&boxUL;"],[0,"&boxvR;"],[0,"&boxVr;"],[0,"&boxVR;"],[0,"&boxvL;"],[0,"&boxVl;"],[0,"&boxVL;"],[0,"&boxHd;"],[0,"&boxhD;"],[0,"&boxHD;"],[0,"&boxHu;"],[0,"&boxhU;"],[0,"&boxHU;"],[0,"&boxvH;"],[0,"&boxVh;"],[0,"&boxVH;"],[19,"&uhblk;"],[3,"&lhblk;"],[3,"&block;"],[8,"&blk14;"],[0,"&blk12;"],[0,"&blk34;"],[13,"&square;"],[8,"&blacksquare;"],[0,"&EmptyVerySmallSquare;"],[1,"&rect;"],[0,"&marker;"],[2,"&fltns;"],[1,"&bigtriangleup;"],[0,"&blacktriangle;"],[0,"&triangle;"],[2,"&blacktriangleright;"],[0,"&rtri;"],[3,"&bigtriangledown;"],[0,"&blacktriangledown;"],[0,"&dtri;"],[2,"&blacktriangleleft;"],[0,"&ltri;"],[6,"&loz;"],[0,"&cir;"],[32,"&tridot;"],[2,"&bigcirc;"],[8,"&ultri;"],[0,"&urtri;"],[0,"&lltri;"],[0,"&EmptySmallSquare;"],[0,"&FilledSmallSquare;"],[8,"&bigstar;"],[0,"&star;"],[7,"&phone;"],[49,"&female;"],[1,"&male;"],[29,"&spades;"],[2,"&clubs;"],[1,"&hearts;"],[0,"&diamondsuit;"],[3,"&sung;"],[2,"&flat;"],[0,"&natural;"],[0,"&sharp;"],[163,"&check;"],[3,"&cross;"],[8,"&malt;"],[21,"&sext;"],[33,"&VerticalSeparator;"],[25,"&lbbrk;"],[0,"&rbbrk;"],[84,"&bsolhsub;"],[0,"&suphsol;"],[28,"&LeftDoubleBracket;"],[0,"&RightDoubleBracket;"],[0,"&lang;"],[0,"&rang;"],[0,"&Lang;"],[0,"&Rang;"],[0,"&loang;"],[0,"&roang;"],[7,"&longleftarrow;"],[0,"&longrightarrow;"],[0,"&longleftrightarrow;"],[0,"&DoubleLongLeftArrow;"],[0,"&DoubleLongRightArrow;"],[0,"&DoubleLongLeftRightArrow;"],[1,"&longmapsto;"],[2,"&dzigrarr;"],[258,"&nvlArr;"],[0,"&nvrArr;"],[0,"&nvHarr;"],[0,"&Map;"],[6,"&lbarr;"],[0,"&bkarow;"],[0,"&lBarr;"],[0,"&dbkarow;"],[0,"&drbkarow;"],[0,"&DDotrahd;"],[0,"&UpArrowBar;"],[0,"&DownArrowBar;"],[2,"&Rarrtl;"],[2,"&latail;"],[0,"&ratail;"],[0,"&lAtail;"],[0,"&rAtail;"],[0,"&larrfs;"],[0,"&rarrfs;"],[0,"&larrbfs;"],[0,"&rarrbfs;"],[2,"&nwarhk;"],[0,"&nearhk;"],[0,"&hksearow;"],[0,"&hkswarow;"],[0,"&nwnear;"],[0,"&nesear;"],[0,"&seswar;"],[0,"&swnwar;"],[8,{v:"&rarrc;",n:824,o:"&nrarrc;"}],[1,"&cudarrr;"],[0,"&ldca;"],[0,"&rdca;"],[0,"&cudarrl;"],[0,"&larrpl;"],[2,"&curarrm;"],[0,"&cularrp;"],[7,"&rarrpl;"],[2,"&harrcir;"],[0,"&Uarrocir;"],[0,"&lurdshar;"],[0,"&ldrushar;"],[2,"&LeftRightVector;"],[0,"&RightUpDownVector;"],[0,"&DownLeftRightVector;"],[0,"&LeftUpDownVector;"],[0,"&LeftVectorBar;"],[0,"&RightVectorBar;"],[0,"&RightUpVectorBar;"],[0,"&RightDownVectorBar;"],[0,"&DownLeftVectorBar;"],[0,"&DownRightVectorBar;"],[0,"&LeftUpVectorBar;"],[0,"&LeftDownVectorBar;"],[0,"&LeftTeeVector;"],[0,"&RightTeeVector;"],[0,"&RightUpTeeVector;"],[0,"&RightDownTeeVector;"],[0,"&DownLeftTeeVector;"],[0,"&DownRightTeeVector;"],[0,"&LeftUpTeeVector;"],[0,"&LeftDownTeeVector;"],[0,"&lHar;"],[0,"&uHar;"],[0,"&rHar;"],[0,"&dHar;"],[0,"&luruhar;"],[0,"&ldrdhar;"],[0,"&ruluhar;"],[0,"&rdldhar;"],[0,"&lharul;"],[0,"&llhard;"],[0,"&rharul;"],[0,"&lrhard;"],[0,"&udhar;"],[0,"&duhar;"],[0,"&RoundImplies;"],[0,"&erarr;"],[0,"&simrarr;"],[0,"&larrsim;"],[0,"&rarrsim;"],[0,"&rarrap;"],[0,"&ltlarr;"],[1,"&gtrarr;"],[0,"&subrarr;"],[1,"&suplarr;"],[0,"&lfisht;"],[0,"&rfisht;"],[0,"&ufisht;"],[0,"&dfisht;"],[5,"&lopar;"],[0,"&ropar;"],[4,"&lbrke;"],[0,"&rbrke;"],[0,"&lbrkslu;"],[0,"&rbrksld;"],[0,"&lbrksld;"],[0,"&rbrkslu;"],[0,"&langd;"],[0,"&rangd;"],[0,"&lparlt;"],[0,"&rpargt;"],[0,"&gtlPar;"],[0,"&ltrPar;"],[3,"&vzigzag;"],[1,"&vangrt;"],[0,"&angrtvbd;"],[6,"&ange;"],[0,"&range;"],[0,"&dwangle;"],[0,"&uwangle;"],[0,"&angmsdaa;"],[0,"&angmsdab;"],[0,"&angmsdac;"],[0,"&angmsdad;"],[0,"&angmsdae;"],[0,"&angmsdaf;"],[0,"&angmsdag;"],[0,"&angmsdah;"],[0,"&bemptyv;"],[0,"&demptyv;"],[0,"&cemptyv;"],[0,"&raemptyv;"],[0,"&laemptyv;"],[0,"&ohbar;"],[0,"&omid;"],[0,"&opar;"],[1,"&operp;"],[1,"&olcross;"],[0,"&odsold;"],[1,"&olcir;"],[0,"&ofcir;"],[0,"&olt;"],[0,"&ogt;"],[0,"&cirscir;"],[0,"&cirE;"],[0,"&solb;"],[0,"&bsolb;"],[3,"&boxbox;"],[3,"&trisb;"],[0,"&rtriltri;"],[0,{v:"&LeftTriangleBar;",n:824,o:"&NotLeftTriangleBar;"}],[0,{v:"&RightTriangleBar;",n:824,o:"&NotRightTriangleBar;"}],[11,"&iinfin;"],[0,"&infintie;"],[0,"&nvinfin;"],[4,"&eparsl;"],[0,"&smeparsl;"],[0,"&eqvparsl;"],[5,"&blacklozenge;"],[8,"&RuleDelayed;"],[1,"&dsol;"],[9,"&bigodot;"],[0,"&bigoplus;"],[0,"&bigotimes;"],[1,"&biguplus;"],[1,"&bigsqcup;"],[5,"&iiiint;"],[0,"&fpartint;"],[2,"&cirfnint;"],[0,"&awint;"],[0,"&rppolint;"],[0,"&scpolint;"],[0,"&npolint;"],[0,"&pointint;"],[0,"&quatint;"],[0,"&intlarhk;"],[10,"&pluscir;"],[0,"&plusacir;"],[0,"&simplus;"],[0,"&plusdu;"],[0,"&plussim;"],[0,"&plustwo;"],[1,"&mcomma;"],[0,"&minusdu;"],[2,"&loplus;"],[0,"&roplus;"],[0,"&Cross;"],[0,"&timesd;"],[0,"&timesbar;"],[1,"&smashp;"],[0,"&lotimes;"],[0,"&rotimes;"],[0,"&otimesas;"],[0,"&Otimes;"],[0,"&odiv;"],[0,"&triplus;"],[0,"&triminus;"],[0,"&tritime;"],[0,"&intprod;"],[2,"&amalg;"],[0,"&capdot;"],[1,"&ncup;"],[0,"&ncap;"],[0,"&capand;"],[0,"&cupor;"],[0,"&cupcap;"],[0,"&capcup;"],[0,"&cupbrcap;"],[0,"&capbrcup;"],[0,"&cupcup;"],[0,"&capcap;"],[0,"&ccups;"],[0,"&ccaps;"],[2,"&ccupssm;"],[2,"&And;"],[0,"&Or;"],[0,"&andand;"],[0,"&oror;"],[0,"&orslope;"],[0,"&andslope;"],[1,"&andv;"],[0,"&orv;"],[0,"&andd;"],[0,"&ord;"],[1,"&wedbar;"],[6,"&sdote;"],[3,"&simdot;"],[2,{v:"&congdot;",n:824,o:"&ncongdot;"}],[0,"&easter;"],[0,"&apacir;"],[0,{v:"&apE;",n:824,o:"&napE;"}],[0,"&eplus;"],[0,"&pluse;"],[0,"&Esim;"],[0,"&Colone;"],[0,"&Equal;"],[1,"&ddotseq;"],[0,"&equivDD;"],[0,"&ltcir;"],[0,"&gtcir;"],[0,"&ltquest;"],[0,"&gtquest;"],[0,{v:"&leqslant;",n:824,o:"&nleqslant;"}],[0,{v:"&geqslant;",n:824,o:"&ngeqslant;"}],[0,"&lesdot;"],[0,"&gesdot;"],[0,"&lesdoto;"],[0,"&gesdoto;"],[0,"&lesdotor;"],[0,"&gesdotol;"],[0,"&lap;"],[0,"&gap;"],[0,"&lne;"],[0,"&gne;"],[0,"&lnap;"],[0,"&gnap;"],[0,"&lEg;"],[0,"&gEl;"],[0,"&lsime;"],[0,"&gsime;"],[0,"&lsimg;"],[0,"&gsiml;"],[0,"&lgE;"],[0,"&glE;"],[0,"&lesges;"],[0,"&gesles;"],[0,"&els;"],[0,"&egs;"],[0,"&elsdot;"],[0,"&egsdot;"],[0,"&el;"],[0,"&eg;"],[2,"&siml;"],[0,"&simg;"],[0,"&simlE;"],[0,"&simgE;"],[0,{v:"&LessLess;",n:824,o:"&NotNestedLessLess;"}],[0,{v:"&GreaterGreater;",n:824,o:"&NotNestedGreaterGreater;"}],[1,"&glj;"],[0,"&gla;"],[0,"&ltcc;"],[0,"&gtcc;"],[0,"&lescc;"],[0,"&gescc;"],[0,"&smt;"],[0,"&lat;"],[0,{v:"&smte;",n:65024,o:"&smtes;"}],[0,{v:"&late;",n:65024,o:"&lates;"}],[0,"&bumpE;"],[0,{v:"&PrecedesEqual;",n:824,o:"&NotPrecedesEqual;"}],[0,{v:"&sce;",n:824,o:"&NotSucceedsEqual;"}],[2,"&prE;"],[0,"&scE;"],[0,"&precneqq;"],[0,"&scnE;"],[0,"&prap;"],[0,"&scap;"],[0,"&precnapprox;"],[0,"&scnap;"],[0,"&Pr;"],[0,"&Sc;"],[0,"&subdot;"],[0,"&supdot;"],[0,"&subplus;"],[0,"&supplus;"],[0,"&submult;"],[0,"&supmult;"],[0,"&subedot;"],[0,"&supedot;"],[0,{v:"&subE;",n:824,o:"&nsubE;"}],[0,{v:"&supE;",n:824,o:"&nsupE;"}],[0,"&subsim;"],[0,"&supsim;"],[2,{v:"&subnE;",n:65024,o:"&varsubsetneqq;"}],[0,{v:"&supnE;",n:65024,o:"&varsupsetneqq;"}],[2,"&csub;"],[0,"&csup;"],[0,"&csube;"],[0,"&csupe;"],[0,"&subsup;"],[0,"&supsub;"],[0,"&subsub;"],[0,"&supsup;"],[0,"&suphsub;"],[0,"&supdsub;"],[0,"&forkv;"],[0,"&topfork;"],[0,"&mlcp;"],[8,"&Dashv;"],[1,"&Vdashl;"],[0,"&Barv;"],[0,"&vBar;"],[0,"&vBarv;"],[1,"&Vbar;"],[0,"&Not;"],[0,"&bNot;"],[0,"&rnmid;"],[0,"&cirmid;"],[0,"&midcir;"],[0,"&topcir;"],[0,"&nhpar;"],[0,"&parsim;"],[9,{v:"&parsl;",n:8421,o:"&nparsl;"}],[44343,{n:new Map(e([[56476,"&Ascr;"],[1,"&Cscr;"],[0,"&Dscr;"],[2,"&Gscr;"],[2,"&Jscr;"],[0,"&Kscr;"],[2,"&Nscr;"],[0,"&Oscr;"],[0,"&Pscr;"],[0,"&Qscr;"],[1,"&Sscr;"],[0,"&Tscr;"],[0,"&Uscr;"],[0,"&Vscr;"],[0,"&Wscr;"],[0,"&Xscr;"],[0,"&Yscr;"],[0,"&Zscr;"],[0,"&ascr;"],[0,"&bscr;"],[0,"&cscr;"],[0,"&dscr;"],[1,"&fscr;"],[1,"&hscr;"],[0,"&iscr;"],[0,"&jscr;"],[0,"&kscr;"],[0,"&lscr;"],[0,"&mscr;"],[0,"&nscr;"],[1,"&pscr;"],[0,"&qscr;"],[0,"&rscr;"],[0,"&sscr;"],[0,"&tscr;"],[0,"&uscr;"],[0,"&vscr;"],[0,"&wscr;"],[0,"&xscr;"],[0,"&yscr;"],[0,"&zscr;"],[52,"&Afr;"],[0,"&Bfr;"],[1,"&Dfr;"],[0,"&Efr;"],[0,"&Ffr;"],[0,"&Gfr;"],[2,"&Jfr;"],[0,"&Kfr;"],[0,"&Lfr;"],[0,"&Mfr;"],[0,"&Nfr;"],[0,"&Ofr;"],[0,"&Pfr;"],[0,"&Qfr;"],[1,"&Sfr;"],[0,"&Tfr;"],[0,"&Ufr;"],[0,"&Vfr;"],[0,"&Wfr;"],[0,"&Xfr;"],[0,"&Yfr;"],[1,"&afr;"],[0,"&bfr;"],[0,"&cfr;"],[0,"&dfr;"],[0,"&efr;"],[0,"&ffr;"],[0,"&gfr;"],[0,"&hfr;"],[0,"&ifr;"],[0,"&jfr;"],[0,"&kfr;"],[0,"&lfr;"],[0,"&mfr;"],[0,"&nfr;"],[0,"&ofr;"],[0,"&pfr;"],[0,"&qfr;"],[0,"&rfr;"],[0,"&sfr;"],[0,"&tfr;"],[0,"&ufr;"],[0,"&vfr;"],[0,"&wfr;"],[0,"&xfr;"],[0,"&yfr;"],[0,"&zfr;"],[0,"&Aopf;"],[0,"&Bopf;"],[1,"&Dopf;"],[0,"&Eopf;"],[0,"&Fopf;"],[0,"&Gopf;"],[1,"&Iopf;"],[0,"&Jopf;"],[0,"&Kopf;"],[0,"&Lopf;"],[0,"&Mopf;"],[1,"&Oopf;"],[3,"&Sopf;"],[0,"&Topf;"],[0,"&Uopf;"],[0,"&Vopf;"],[0,"&Wopf;"],[0,"&Xopf;"],[0,"&Yopf;"],[1,"&aopf;"],[0,"&bopf;"],[0,"&copf;"],[0,"&dopf;"],[0,"&eopf;"],[0,"&fopf;"],[0,"&gopf;"],[0,"&hopf;"],[0,"&iopf;"],[0,"&jopf;"],[0,"&kopf;"],[0,"&lopf;"],[0,"&mopf;"],[0,"&nopf;"],[0,"&oopf;"],[0,"&popf;"],[0,"&qopf;"],[0,"&ropf;"],[0,"&sopf;"],[0,"&topf;"],[0,"&uopf;"],[0,"&vopf;"],[0,"&wopf;"],[0,"&xopf;"],[0,"&yopf;"],[0,"&zopf;"]]))}],[8906,"&fflig;"],[0,"&filig;"],[0,"&fllig;"],[0,"&ffilig;"],[0,"&ffllig;"]]))},2730:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXMLStrict=t.decodeHTML5Strict=t.decodeHTML4Strict=t.decodeHTML5=t.decodeHTML4=t.decodeHTMLAttribute=t.decodeHTMLStrict=t.decodeHTML=t.decodeXML=t.DecodingMode=t.EntityDecoder=t.encodeHTML5=t.encodeHTML4=t.encodeNonAsciiHTML=t.encodeHTML=t.escapeText=t.escapeAttribute=t.escapeUTF8=t.escape=t.encodeXML=t.encode=t.decodeStrict=t.decode=t.EncodingMode=t.EntityLevel=void 0;var l,o,A=e(9878),a=e(1818),m=e(5987);function d(n,h){if(h===void 0&&(h=l.XML),(typeof h=="number"?h:h.level)===l.HTML){var u=typeof h=="object"?h.mode:void 0;return(0,A.decodeHTML)(n,u)}return(0,A.decodeXML)(n)}(function(n){n[n.XML=0]="XML",n[n.HTML=1]="HTML"})(l=t.EntityLevel||(t.EntityLevel={})),function(n){n[n.UTF8=0]="UTF8",n[n.ASCII=1]="ASCII",n[n.Extensive=2]="Extensive",n[n.Attribute=3]="Attribute",n[n.Text=4]="Text"}(o=t.EncodingMode||(t.EncodingMode={})),t.decode=d,t.decodeStrict=function(n,h){var u;h===void 0&&(h=l.XML);var x=typeof h=="number"?{level:h}:h;return(u=x.mode)!==null&&u!==void 0||(x.mode=A.DecodingMode.Strict),d(n,x)},t.encode=function(n,h){h===void 0&&(h=l.XML);var u=typeof h=="number"?{level:h}:h;return u.mode===o.UTF8?(0,m.escapeUTF8)(n):u.mode===o.Attribute?(0,m.escapeAttribute)(n):u.mode===o.Text?(0,m.escapeText)(n):u.level===l.HTML?u.mode===o.ASCII?(0,a.encodeNonAsciiHTML)(n):(0,a.encodeHTML)(n):(0,m.encodeXML)(n)};var c=e(5987);Object.defineProperty(t,"encodeXML",{enumerable:!0,get:function(){return c.encodeXML}}),Object.defineProperty(t,"escape",{enumerable:!0,get:function(){return c.escape}}),Object.defineProperty(t,"escapeUTF8",{enumerable:!0,get:function(){return c.escapeUTF8}}),Object.defineProperty(t,"escapeAttribute",{enumerable:!0,get:function(){return c.escapeAttribute}}),Object.defineProperty(t,"escapeText",{enumerable:!0,get:function(){return c.escapeText}});var r=e(1818);Object.defineProperty(t,"encodeHTML",{enumerable:!0,get:function(){return r.encodeHTML}}),Object.defineProperty(t,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return r.encodeNonAsciiHTML}}),Object.defineProperty(t,"encodeHTML4",{enumerable:!0,get:function(){return r.encodeHTML}}),Object.defineProperty(t,"encodeHTML5",{enumerable:!0,get:function(){return r.encodeHTML}});var i=e(9878);Object.defineProperty(t,"EntityDecoder",{enumerable:!0,get:function(){return i.EntityDecoder}}),Object.defineProperty(t,"DecodingMode",{enumerable:!0,get:function(){return i.DecodingMode}}),Object.defineProperty(t,"decodeXML",{enumerable:!0,get:function(){return i.decodeXML}}),Object.defineProperty(t,"decodeHTML",{enumerable:!0,get:function(){return i.decodeHTML}}),Object.defineProperty(t,"decodeHTMLStrict",{enumerable:!0,get:function(){return i.decodeHTMLStrict}}),Object.defineProperty(t,"decodeHTMLAttribute",{enumerable:!0,get:function(){return i.decodeHTMLAttribute}}),Object.defineProperty(t,"decodeHTML4",{enumerable:!0,get:function(){return i.decodeHTML}}),Object.defineProperty(t,"decodeHTML5",{enumerable:!0,get:function(){return i.decodeHTML}}),Object.defineProperty(t,"decodeHTML4Strict",{enumerable:!0,get:function(){return i.decodeHTMLStrict}}),Object.defineProperty(t,"decodeHTML5Strict",{enumerable:!0,get:function(){return i.decodeHTMLStrict}}),Object.defineProperty(t,"decodeXMLStrict",{enumerable:!0,get:function(){return i.decodeXML}})},580:I=>{"use strict";var t=/["'&<>]/;I.exports=function(e){var l,o=""+e,A=t.exec(o);if(!A)return o;var a="",m=0,d=0;for(m=A.index;m<o.length;m++){switch(o.charCodeAt(m)){case 34:l="&quot;";break;case 38:l="&amp;";break;case 39:l="&#39;";break;case 60:l="&lt;";break;case 62:l="&gt;";break;default:continue}d!==m&&(a+=o.substring(d,m)),d=m+1,a+=l}return d!==m?a+o.substring(d,m):a}},1724:function(I,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(v,M,f,y){y===void 0&&(y=f);var s=Object.getOwnPropertyDescriptor(M,f);s&&!("get"in s?!M.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return M[f]}}),Object.defineProperty(v,y,s)}:function(v,M,f,y){y===void 0&&(y=f),v[y]=M[f]}),o=this&&this.__setModuleDefault||(Object.create?function(v,M){Object.defineProperty(v,"default",{enumerable:!0,value:M})}:function(v,M){v.default=M}),A=this&&this.__importStar||function(v){if(v&&v.__esModule)return v;var M={};if(v!=null)for(var f in v)f!=="default"&&Object.prototype.hasOwnProperty.call(v,f)&&l(M,v,f);return o(M,v),M};Object.defineProperty(t,"__esModule",{value:!0}),t.Parser=void 0;var a=A(e(7918)),m=e(9878),d=new Set(["input","option","optgroup","select","button","datalist","textarea"]),c=new Set(["p"]),r=new Set(["thead","tbody"]),i=new Set(["dd","dt"]),n=new Set(["rt","rp"]),h=new Map([["tr",new Set(["tr","th","td"])],["th",new Set(["th"])],["td",new Set(["thead","th","td"])],["body",new Set(["head","link","script"])],["li",new Set(["li"])],["p",c],["h1",c],["h2",c],["h3",c],["h4",c],["h5",c],["h6",c],["select",d],["input",d],["output",d],["button",d],["datalist",d],["textarea",d],["option",new Set(["option"])],["optgroup",new Set(["optgroup","option"])],["dd",i],["dt",i],["address",c],["article",c],["aside",c],["blockquote",c],["details",c],["div",c],["dl",c],["fieldset",c],["figcaption",c],["figure",c],["footer",c],["form",c],["header",c],["hr",c],["main",c],["nav",c],["ol",c],["pre",c],["section",c],["table",c],["ul",c],["rt",n],["rp",n],["tbody",r],["tfoot",r]]),u=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]),x=new Set(["math","svg"]),b=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignobject","desc","title"]),C=/\s|\//,p=function(){function v(M,f){var y,s,g,w,k;f===void 0&&(f={}),this.options=f,this.startIndex=0,this.endIndex=0,this.openTagStart=0,this.tagname="",this.attribname="",this.attribvalue="",this.attribs=null,this.stack=[],this.foreignContext=[],this.buffers=[],this.bufferOffset=0,this.writeIndex=0,this.ended=!1,this.cbs=M??{},this.lowerCaseTagNames=(y=f.lowerCaseTags)!==null&&y!==void 0?y:!f.xmlMode,this.lowerCaseAttributeNames=(s=f.lowerCaseAttributeNames)!==null&&s!==void 0?s:!f.xmlMode,this.tokenizer=new((g=f.Tokenizer)!==null&&g!==void 0?g:a.default)(this.options,this),(k=(w=this.cbs).onparserinit)===null||k===void 0||k.call(w,this)}return v.prototype.ontext=function(M,f){var y,s,g=this.getSlice(M,f);this.endIndex=f-1,(s=(y=this.cbs).ontext)===null||s===void 0||s.call(y,g),this.startIndex=f},v.prototype.ontextentity=function(M){var f,y,s=this.tokenizer.getSectionStart();this.endIndex=s-1,(y=(f=this.cbs).ontext)===null||y===void 0||y.call(f,(0,m.fromCodePoint)(M)),this.startIndex=s},v.prototype.isVoidElement=function(M){return!this.options.xmlMode&&u.has(M)},v.prototype.onopentagname=function(M,f){this.endIndex=f;var y=this.getSlice(M,f);this.lowerCaseTagNames&&(y=y.toLowerCase()),this.emitOpenTag(y)},v.prototype.emitOpenTag=function(M){var f,y,s,g;this.openTagStart=this.startIndex,this.tagname=M;var w=!this.options.xmlMode&&h.get(M);if(w)for(;this.stack.length>0&&w.has(this.stack[this.stack.length-1]);){var k=this.stack.pop();(y=(f=this.cbs).onclosetag)===null||y===void 0||y.call(f,k,!0)}this.isVoidElement(M)||(this.stack.push(M),x.has(M)?this.foreignContext.push(!0):b.has(M)&&this.foreignContext.push(!1)),(g=(s=this.cbs).onopentagname)===null||g===void 0||g.call(s,M),this.cbs.onopentag&&(this.attribs={})},v.prototype.endOpenTag=function(M){var f,y;this.startIndex=this.openTagStart,this.attribs&&((y=(f=this.cbs).onopentag)===null||y===void 0||y.call(f,this.tagname,this.attribs,M),this.attribs=null),this.cbs.onclosetag&&this.isVoidElement(this.tagname)&&this.cbs.onclosetag(this.tagname,!0),this.tagname=""},v.prototype.onopentagend=function(M){this.endIndex=M,this.endOpenTag(!1),this.startIndex=M+1},v.prototype.onclosetag=function(M,f){var y,s,g,w,k,S;this.endIndex=f;var L=this.getSlice(M,f);if(this.lowerCaseTagNames&&(L=L.toLowerCase()),(x.has(L)||b.has(L))&&this.foreignContext.pop(),this.isVoidElement(L))this.options.xmlMode||L!=="br"||((s=(y=this.cbs).onopentagname)===null||s===void 0||s.call(y,"br"),(w=(g=this.cbs).onopentag)===null||w===void 0||w.call(g,"br",{},!0),(S=(k=this.cbs).onclosetag)===null||S===void 0||S.call(k,"br",!1));else{var U=this.stack.lastIndexOf(L);if(U!==-1)if(this.cbs.onclosetag)for(var F=this.stack.length-U;F--;)this.cbs.onclosetag(this.stack.pop(),F!==0);else this.stack.length=U;else this.options.xmlMode||L!=="p"||(this.emitOpenTag("p"),this.closeCurrentTag(!0))}this.startIndex=f+1},v.prototype.onselfclosingtag=function(M){this.endIndex=M,this.options.xmlMode||this.options.recognizeSelfClosing||this.foreignContext[this.foreignContext.length-1]?(this.closeCurrentTag(!1),this.startIndex=M+1):this.onopentagend(M)},v.prototype.closeCurrentTag=function(M){var f,y,s=this.tagname;this.endOpenTag(M),this.stack[this.stack.length-1]===s&&((y=(f=this.cbs).onclosetag)===null||y===void 0||y.call(f,s,!M),this.stack.pop())},v.prototype.onattribname=function(M,f){this.startIndex=M;var y=this.getSlice(M,f);this.attribname=this.lowerCaseAttributeNames?y.toLowerCase():y},v.prototype.onattribdata=function(M,f){this.attribvalue+=this.getSlice(M,f)},v.prototype.onattribentity=function(M){this.attribvalue+=(0,m.fromCodePoint)(M)},v.prototype.onattribend=function(M,f){var y,s;this.endIndex=f,(s=(y=this.cbs).onattribute)===null||s===void 0||s.call(y,this.attribname,this.attribvalue,M===a.QuoteType.Double?'"':M===a.QuoteType.Single?"'":M===a.QuoteType.NoValue?void 0:null),this.attribs&&!Object.prototype.hasOwnProperty.call(this.attribs,this.attribname)&&(this.attribs[this.attribname]=this.attribvalue),this.attribvalue=""},v.prototype.getInstructionName=function(M){var f=M.search(C),y=f<0?M:M.substr(0,f);return this.lowerCaseTagNames&&(y=y.toLowerCase()),y},v.prototype.ondeclaration=function(M,f){this.endIndex=f;var y=this.getSlice(M,f);if(this.cbs.onprocessinginstruction){var s=this.getInstructionName(y);this.cbs.onprocessinginstruction("!".concat(s),"!".concat(y))}this.startIndex=f+1},v.prototype.onprocessinginstruction=function(M,f){this.endIndex=f;var y=this.getSlice(M,f);if(this.cbs.onprocessinginstruction){var s=this.getInstructionName(y);this.cbs.onprocessinginstruction("?".concat(s),"?".concat(y))}this.startIndex=f+1},v.prototype.oncomment=function(M,f,y){var s,g,w,k;this.endIndex=f,(g=(s=this.cbs).oncomment)===null||g===void 0||g.call(s,this.getSlice(M,f-y)),(k=(w=this.cbs).oncommentend)===null||k===void 0||k.call(w),this.startIndex=f+1},v.prototype.oncdata=function(M,f,y){var s,g,w,k,S,L,U,F,R,E;this.endIndex=f;var $=this.getSlice(M,f-y);this.options.xmlMode||this.options.recognizeCDATA?((g=(s=this.cbs).oncdatastart)===null||g===void 0||g.call(s),(k=(w=this.cbs).ontext)===null||k===void 0||k.call(w,$),(L=(S=this.cbs).oncdataend)===null||L===void 0||L.call(S)):((F=(U=this.cbs).oncomment)===null||F===void 0||F.call(U,"[CDATA[".concat($,"]]")),(E=(R=this.cbs).oncommentend)===null||E===void 0||E.call(R)),this.startIndex=f+1},v.prototype.onend=function(){var M,f;if(this.cbs.onclosetag){this.endIndex=this.startIndex;for(var y=this.stack.length;y>0;this.cbs.onclosetag(this.stack[--y],!0));}(f=(M=this.cbs).onend)===null||f===void 0||f.call(M)},v.prototype.reset=function(){var M,f,y,s;(f=(M=this.cbs).onreset)===null||f===void 0||f.call(M),this.tokenizer.reset(),this.tagname="",this.attribname="",this.attribs=null,this.stack.length=0,this.startIndex=0,this.endIndex=0,(s=(y=this.cbs).onparserinit)===null||s===void 0||s.call(y,this),this.buffers.length=0,this.bufferOffset=0,this.writeIndex=0,this.ended=!1},v.prototype.parseComplete=function(M){this.reset(),this.end(M)},v.prototype.getSlice=function(M,f){for(;M-this.bufferOffset>=this.buffers[0].length;)this.shiftBuffer();for(var y=this.buffers[0].slice(M-this.bufferOffset,f-this.bufferOffset);f-this.bufferOffset>this.buffers[0].length;)this.shiftBuffer(),y+=this.buffers[0].slice(0,f-this.bufferOffset);return y},v.prototype.shiftBuffer=function(){this.bufferOffset+=this.buffers[0].length,this.writeIndex--,this.buffers.shift()},v.prototype.write=function(M){var f,y;this.ended?(y=(f=this.cbs).onerror)===null||y===void 0||y.call(f,new Error(".write() after done!")):(this.buffers.push(M),this.tokenizer.running&&(this.tokenizer.write(M),this.writeIndex++))},v.prototype.end=function(M){var f,y;this.ended?(y=(f=this.cbs).onerror)===null||y===void 0||y.call(f,new Error(".end() after done!")):(M&&this.write(M),this.ended=!0,this.tokenizer.end())},v.prototype.pause=function(){this.tokenizer.pause()},v.prototype.resume=function(){for(this.tokenizer.resume();this.tokenizer.running&&this.writeIndex<this.buffers.length;)this.tokenizer.write(this.buffers[this.writeIndex++]);this.ended&&this.tokenizer.end()},v.prototype.parseChunk=function(M){this.write(M)},v.prototype.done=function(M){this.end(M)},v}();t.Parser=p},7918:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QuoteType=void 0;var l,o,A,a=e(9878);function m(n){return n===l.Space||n===l.NewLine||n===l.Tab||n===l.FormFeed||n===l.CarriageReturn}function d(n){return n===l.Slash||n===l.Gt||m(n)}function c(n){return n>=l.Zero&&n<=l.Nine}(function(n){n[n.Tab=9]="Tab",n[n.NewLine=10]="NewLine",n[n.FormFeed=12]="FormFeed",n[n.CarriageReturn=13]="CarriageReturn",n[n.Space=32]="Space",n[n.ExclamationMark=33]="ExclamationMark",n[n.Number=35]="Number",n[n.Amp=38]="Amp",n[n.SingleQuote=39]="SingleQuote",n[n.DoubleQuote=34]="DoubleQuote",n[n.Dash=45]="Dash",n[n.Slash=47]="Slash",n[n.Zero=48]="Zero",n[n.Nine=57]="Nine",n[n.Semi=59]="Semi",n[n.Lt=60]="Lt",n[n.Eq=61]="Eq",n[n.Gt=62]="Gt",n[n.Questionmark=63]="Questionmark",n[n.UpperA=65]="UpperA",n[n.LowerA=97]="LowerA",n[n.UpperF=70]="UpperF",n[n.LowerF=102]="LowerF",n[n.UpperZ=90]="UpperZ",n[n.LowerZ=122]="LowerZ",n[n.LowerX=120]="LowerX",n[n.OpeningSquareBracket=91]="OpeningSquareBracket"})(l||(l={})),function(n){n[n.Text=1]="Text",n[n.BeforeTagName=2]="BeforeTagName",n[n.InTagName=3]="InTagName",n[n.InSelfClosingTag=4]="InSelfClosingTag",n[n.BeforeClosingTagName=5]="BeforeClosingTagName",n[n.InClosingTagName=6]="InClosingTagName",n[n.AfterClosingTagName=7]="AfterClosingTagName",n[n.BeforeAttributeName=8]="BeforeAttributeName",n[n.InAttributeName=9]="InAttributeName",n[n.AfterAttributeName=10]="AfterAttributeName",n[n.BeforeAttributeValue=11]="BeforeAttributeValue",n[n.InAttributeValueDq=12]="InAttributeValueDq",n[n.InAttributeValueSq=13]="InAttributeValueSq",n[n.InAttributeValueNq=14]="InAttributeValueNq",n[n.BeforeDeclaration=15]="BeforeDeclaration",n[n.InDeclaration=16]="InDeclaration",n[n.InProcessingInstruction=17]="InProcessingInstruction",n[n.BeforeComment=18]="BeforeComment",n[n.CDATASequence=19]="CDATASequence",n[n.InSpecialComment=20]="InSpecialComment",n[n.InCommentLike=21]="InCommentLike",n[n.BeforeSpecialS=22]="BeforeSpecialS",n[n.SpecialStartSequence=23]="SpecialStartSequence",n[n.InSpecialTag=24]="InSpecialTag",n[n.BeforeEntity=25]="BeforeEntity",n[n.BeforeNumericEntity=26]="BeforeNumericEntity",n[n.InNamedEntity=27]="InNamedEntity",n[n.InNumericEntity=28]="InNumericEntity",n[n.InHexEntity=29]="InHexEntity"}(o||(o={})),function(n){n[n.NoValue=0]="NoValue",n[n.Unquoted=1]="Unquoted",n[n.Single=2]="Single",n[n.Double=3]="Double"}(A=t.QuoteType||(t.QuoteType={}));var r={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101])},i=function(){function n(h,u){var x=h.xmlMode,b=x!==void 0&&x,C=h.decodeEntities,p=C===void 0||C;this.cbs=u,this.state=o.Text,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=o.Text,this.isSpecial=!1,this.running=!0,this.offset=0,this.currentSequence=void 0,this.sequenceIndex=0,this.trieIndex=0,this.trieCurrent=0,this.entityResult=0,this.entityExcess=0,this.xmlMode=b,this.decodeEntities=p,this.entityTrie=b?a.xmlDecodeTree:a.htmlDecodeTree}return n.prototype.reset=function(){this.state=o.Text,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=o.Text,this.currentSequence=void 0,this.running=!0,this.offset=0},n.prototype.write=function(h){this.offset+=this.buffer.length,this.buffer=h,this.parse()},n.prototype.end=function(){this.running&&this.finish()},n.prototype.pause=function(){this.running=!1},n.prototype.resume=function(){this.running=!0,this.index<this.buffer.length+this.offset&&this.parse()},n.prototype.getIndex=function(){return this.index},n.prototype.getSectionStart=function(){return this.sectionStart},n.prototype.stateText=function(h){h===l.Lt||!this.decodeEntities&&this.fastForwardTo(l.Lt)?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=o.BeforeTagName,this.sectionStart=this.index):this.decodeEntities&&h===l.Amp&&(this.state=o.BeforeEntity)},n.prototype.stateSpecialStartSequence=function(h){var u=this.sequenceIndex===this.currentSequence.length;if(u?d(h):(32|h)===this.currentSequence[this.sequenceIndex]){if(!u)return void this.sequenceIndex++}else this.isSpecial=!1;this.sequenceIndex=0,this.state=o.InTagName,this.stateInTagName(h)},n.prototype.stateInSpecialTag=function(h){if(this.sequenceIndex===this.currentSequence.length){if(h===l.Gt||m(h)){var u=this.index-this.currentSequence.length;if(this.sectionStart<u){var x=this.index;this.index=u,this.cbs.ontext(this.sectionStart,u),this.index=x}return this.isSpecial=!1,this.sectionStart=u+2,void this.stateInClosingTagName(h)}this.sequenceIndex=0}(32|h)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===r.TitleEnd?this.decodeEntities&&h===l.Amp&&(this.state=o.BeforeEntity):this.fastForwardTo(l.Lt)&&(this.sequenceIndex=1):this.sequenceIndex=Number(h===l.Lt)},n.prototype.stateCDATASequence=function(h){h===r.Cdata[this.sequenceIndex]?++this.sequenceIndex===r.Cdata.length&&(this.state=o.InCommentLike,this.currentSequence=r.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=o.InDeclaration,this.stateInDeclaration(h))},n.prototype.fastForwardTo=function(h){for(;++this.index<this.buffer.length+this.offset;)if(this.buffer.charCodeAt(this.index-this.offset)===h)return!0;return this.index=this.buffer.length+this.offset-1,!1},n.prototype.stateInCommentLike=function(h){h===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===r.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index,2):this.cbs.oncomment(this.sectionStart,this.index,2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=o.Text):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):h!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)},n.prototype.isTagStartChar=function(h){return this.xmlMode?!d(h):function(u){return u>=l.LowerA&&u<=l.LowerZ||u>=l.UpperA&&u<=l.UpperZ}(h)},n.prototype.startSpecial=function(h,u){this.isSpecial=!0,this.currentSequence=h,this.sequenceIndex=u,this.state=o.SpecialStartSequence},n.prototype.stateBeforeTagName=function(h){if(h===l.ExclamationMark)this.state=o.BeforeDeclaration,this.sectionStart=this.index+1;else if(h===l.Questionmark)this.state=o.InProcessingInstruction,this.sectionStart=this.index+1;else if(this.isTagStartChar(h)){var u=32|h;this.sectionStart=this.index,this.xmlMode||u!==r.TitleEnd[2]?this.state=this.xmlMode||u!==r.ScriptEnd[2]?o.InTagName:o.BeforeSpecialS:this.startSpecial(r.TitleEnd,3)}else h===l.Slash?this.state=o.BeforeClosingTagName:(this.state=o.Text,this.stateText(h))},n.prototype.stateInTagName=function(h){d(h)&&(this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=o.BeforeAttributeName,this.stateBeforeAttributeName(h))},n.prototype.stateBeforeClosingTagName=function(h){m(h)||(h===l.Gt?this.state=o.Text:(this.state=this.isTagStartChar(h)?o.InClosingTagName:o.InSpecialComment,this.sectionStart=this.index))},n.prototype.stateInClosingTagName=function(h){(h===l.Gt||m(h))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=o.AfterClosingTagName,this.stateAfterClosingTagName(h))},n.prototype.stateAfterClosingTagName=function(h){(h===l.Gt||this.fastForwardTo(l.Gt))&&(this.state=o.Text,this.baseState=o.Text,this.sectionStart=this.index+1)},n.prototype.stateBeforeAttributeName=function(h){h===l.Gt?(this.cbs.onopentagend(this.index),this.isSpecial?(this.state=o.InSpecialTag,this.sequenceIndex=0):this.state=o.Text,this.baseState=this.state,this.sectionStart=this.index+1):h===l.Slash?this.state=o.InSelfClosingTag:m(h)||(this.state=o.InAttributeName,this.sectionStart=this.index)},n.prototype.stateInSelfClosingTag=function(h){h===l.Gt?(this.cbs.onselfclosingtag(this.index),this.state=o.Text,this.baseState=o.Text,this.sectionStart=this.index+1,this.isSpecial=!1):m(h)||(this.state=o.BeforeAttributeName,this.stateBeforeAttributeName(h))},n.prototype.stateInAttributeName=function(h){(h===l.Eq||d(h))&&(this.cbs.onattribname(this.sectionStart,this.index),this.sectionStart=-1,this.state=o.AfterAttributeName,this.stateAfterAttributeName(h))},n.prototype.stateAfterAttributeName=function(h){h===l.Eq?this.state=o.BeforeAttributeValue:h===l.Slash||h===l.Gt?(this.cbs.onattribend(A.NoValue,this.index),this.state=o.BeforeAttributeName,this.stateBeforeAttributeName(h)):m(h)||(this.cbs.onattribend(A.NoValue,this.index),this.state=o.InAttributeName,this.sectionStart=this.index)},n.prototype.stateBeforeAttributeValue=function(h){h===l.DoubleQuote?(this.state=o.InAttributeValueDq,this.sectionStart=this.index+1):h===l.SingleQuote?(this.state=o.InAttributeValueSq,this.sectionStart=this.index+1):m(h)||(this.sectionStart=this.index,this.state=o.InAttributeValueNq,this.stateInAttributeValueNoQuotes(h))},n.prototype.handleInAttributeValue=function(h,u){h===u||!this.decodeEntities&&this.fastForwardTo(u)?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(u===l.DoubleQuote?A.Double:A.Single,this.index),this.state=o.BeforeAttributeName):this.decodeEntities&&h===l.Amp&&(this.baseState=this.state,this.state=o.BeforeEntity)},n.prototype.stateInAttributeValueDoubleQuotes=function(h){this.handleInAttributeValue(h,l.DoubleQuote)},n.prototype.stateInAttributeValueSingleQuotes=function(h){this.handleInAttributeValue(h,l.SingleQuote)},n.prototype.stateInAttributeValueNoQuotes=function(h){m(h)||h===l.Gt?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(A.Unquoted,this.index),this.state=o.BeforeAttributeName,this.stateBeforeAttributeName(h)):this.decodeEntities&&h===l.Amp&&(this.baseState=this.state,this.state=o.BeforeEntity)},n.prototype.stateBeforeDeclaration=function(h){h===l.OpeningSquareBracket?(this.state=o.CDATASequence,this.sequenceIndex=0):this.state=h===l.Dash?o.BeforeComment:o.InDeclaration},n.prototype.stateInDeclaration=function(h){(h===l.Gt||this.fastForwardTo(l.Gt))&&(this.cbs.ondeclaration(this.sectionStart,this.index),this.state=o.Text,this.sectionStart=this.index+1)},n.prototype.stateInProcessingInstruction=function(h){(h===l.Gt||this.fastForwardTo(l.Gt))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=o.Text,this.sectionStart=this.index+1)},n.prototype.stateBeforeComment=function(h){h===l.Dash?(this.state=o.InCommentLike,this.currentSequence=r.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=o.InDeclaration},n.prototype.stateInSpecialComment=function(h){(h===l.Gt||this.fastForwardTo(l.Gt))&&(this.cbs.oncomment(this.sectionStart,this.index,0),this.state=o.Text,this.sectionStart=this.index+1)},n.prototype.stateBeforeSpecialS=function(h){var u=32|h;u===r.ScriptEnd[3]?this.startSpecial(r.ScriptEnd,4):u===r.StyleEnd[3]?this.startSpecial(r.StyleEnd,4):(this.state=o.InTagName,this.stateInTagName(h))},n.prototype.stateBeforeEntity=function(h){this.entityExcess=1,this.entityResult=0,h===l.Number?this.state=o.BeforeNumericEntity:h===l.Amp||(this.trieIndex=0,this.trieCurrent=this.entityTrie[0],this.state=o.InNamedEntity,this.stateInNamedEntity(h))},n.prototype.stateInNamedEntity=function(h){if(this.entityExcess+=1,this.trieIndex=(0,a.determineBranch)(this.entityTrie,this.trieCurrent,this.trieIndex+1,h),this.trieIndex<0)return this.emitNamedEntity(),void this.index--;this.trieCurrent=this.entityTrie[this.trieIndex];var u=this.trieCurrent&a.BinTrieFlags.VALUE_LENGTH;if(u){var x=(u>>14)-1;if(this.allowLegacyEntity()||h===l.Semi){var b=this.index-this.entityExcess+1;b>this.sectionStart&&this.emitPartial(this.sectionStart,b),this.entityResult=this.trieIndex,this.trieIndex+=x,this.entityExcess=0,this.sectionStart=this.index+1,x===0&&this.emitNamedEntity()}else this.trieIndex+=x}},n.prototype.emitNamedEntity=function(){if(this.state=this.baseState,this.entityResult!==0)switch((this.entityTrie[this.entityResult]&a.BinTrieFlags.VALUE_LENGTH)>>14){case 1:this.emitCodePoint(this.entityTrie[this.entityResult]&~a.BinTrieFlags.VALUE_LENGTH);break;case 2:this.emitCodePoint(this.entityTrie[this.entityResult+1]);break;case 3:this.emitCodePoint(this.entityTrie[this.entityResult+1]),this.emitCodePoint(this.entityTrie[this.entityResult+2])}},n.prototype.stateBeforeNumericEntity=function(h){(32|h)===l.LowerX?(this.entityExcess++,this.state=o.InHexEntity):(this.state=o.InNumericEntity,this.stateInNumericEntity(h))},n.prototype.emitNumericEntity=function(h){var u=this.index-this.entityExcess-1;u+2+Number(this.state===o.InHexEntity)!==this.index&&(u>this.sectionStart&&this.emitPartial(this.sectionStart,u),this.sectionStart=this.index+Number(h),this.emitCodePoint((0,a.replaceCodePoint)(this.entityResult))),this.state=this.baseState},n.prototype.stateInNumericEntity=function(h){h===l.Semi?this.emitNumericEntity(!0):c(h)?(this.entityResult=10*this.entityResult+(h-l.Zero),this.entityExcess++):(this.allowLegacyEntity()?this.emitNumericEntity(!1):this.state=this.baseState,this.index--)},n.prototype.stateInHexEntity=function(h){h===l.Semi?this.emitNumericEntity(!0):c(h)?(this.entityResult=16*this.entityResult+(h-l.Zero),this.entityExcess++):function(u){return u>=l.UpperA&&u<=l.UpperF||u>=l.LowerA&&u<=l.LowerF}(h)?(this.entityResult=16*this.entityResult+((32|h)-l.LowerA+10),this.entityExcess++):(this.allowLegacyEntity()?this.emitNumericEntity(!1):this.state=this.baseState,this.index--)},n.prototype.allowLegacyEntity=function(){return!this.xmlMode&&(this.baseState===o.Text||this.baseState===o.InSpecialTag)},n.prototype.cleanup=function(){this.running&&this.sectionStart!==this.index&&(this.state===o.Text||this.state===o.InSpecialTag&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):this.state!==o.InAttributeValueDq&&this.state!==o.InAttributeValueSq&&this.state!==o.InAttributeValueNq||(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))},n.prototype.shouldContinue=function(){return this.index<this.buffer.length+this.offset&&this.running},n.prototype.parse=function(){for(;this.shouldContinue();){var h=this.buffer.charCodeAt(this.index-this.offset);switch(this.state){case o.Text:this.stateText(h);break;case o.SpecialStartSequence:this.stateSpecialStartSequence(h);break;case o.InSpecialTag:this.stateInSpecialTag(h);break;case o.CDATASequence:this.stateCDATASequence(h);break;case o.InAttributeValueDq:this.stateInAttributeValueDoubleQuotes(h);break;case o.InAttributeName:this.stateInAttributeName(h);break;case o.InCommentLike:this.stateInCommentLike(h);break;case o.InSpecialComment:this.stateInSpecialComment(h);break;case o.BeforeAttributeName:this.stateBeforeAttributeName(h);break;case o.InTagName:this.stateInTagName(h);break;case o.InClosingTagName:this.stateInClosingTagName(h);break;case o.BeforeTagName:this.stateBeforeTagName(h);break;case o.AfterAttributeName:this.stateAfterAttributeName(h);break;case o.InAttributeValueSq:this.stateInAttributeValueSingleQuotes(h);break;case o.BeforeAttributeValue:this.stateBeforeAttributeValue(h);break;case o.BeforeClosingTagName:this.stateBeforeClosingTagName(h);break;case o.AfterClosingTagName:this.stateAfterClosingTagName(h);break;case o.BeforeSpecialS:this.stateBeforeSpecialS(h);break;case o.InAttributeValueNq:this.stateInAttributeValueNoQuotes(h);break;case o.InSelfClosingTag:this.stateInSelfClosingTag(h);break;case o.InDeclaration:this.stateInDeclaration(h);break;case o.BeforeDeclaration:this.stateBeforeDeclaration(h);break;case o.BeforeComment:this.stateBeforeComment(h);break;case o.InProcessingInstruction:this.stateInProcessingInstruction(h);break;case o.InNamedEntity:this.stateInNamedEntity(h);break;case o.BeforeEntity:this.stateBeforeEntity(h);break;case o.InHexEntity:this.stateInHexEntity(h);break;case o.InNumericEntity:this.stateInNumericEntity(h);break;default:this.stateBeforeNumericEntity(h)}this.index++}this.cleanup()},n.prototype.finish=function(){this.state===o.InNamedEntity&&this.emitNamedEntity(),this.sectionStart<this.index&&this.handleTrailingData(),this.cbs.onend()},n.prototype.handleTrailingData=function(){var h=this.buffer.length+this.offset;this.state===o.InCommentLike?this.currentSequence===r.CdataEnd?this.cbs.oncdata(this.sectionStart,h,0):this.cbs.oncomment(this.sectionStart,h,0):this.state===o.InNumericEntity&&this.allowLegacyEntity()||this.state===o.InHexEntity&&this.allowLegacyEntity()?this.emitNumericEntity(!1):this.state===o.InTagName||this.state===o.BeforeAttributeName||this.state===o.BeforeAttributeValue||this.state===o.AfterAttributeName||this.state===o.InAttributeName||this.state===o.InAttributeValueSq||this.state===o.InAttributeValueDq||this.state===o.InAttributeValueNq||this.state===o.InClosingTagName||this.cbs.ontext(this.sectionStart,h)},n.prototype.emitPartial=function(h,u){this.baseState!==o.Text&&this.baseState!==o.InSpecialTag?this.cbs.onattribdata(h,u):this.cbs.ontext(h,u)},n.prototype.emitCodePoint=function(h){this.baseState!==o.Text&&this.baseState!==o.InSpecialTag?this.cbs.onattribentity(h):this.cbs.ontextentity(h)},n}();t.default=i},8659:function(I,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(C,p,v,M){M===void 0&&(M=v);var f=Object.getOwnPropertyDescriptor(p,v);f&&!("get"in f?!p.__esModule:f.writable||f.configurable)||(f={enumerable:!0,get:function(){return p[v]}}),Object.defineProperty(C,M,f)}:function(C,p,v,M){M===void 0&&(M=v),C[M]=p[v]}),o=this&&this.__setModuleDefault||(Object.create?function(C,p){Object.defineProperty(C,"default",{enumerable:!0,value:p})}:function(C,p){C.default=p}),A=this&&this.__importStar||function(C){if(C&&C.__esModule)return C;var p={};if(C!=null)for(var v in C)v!=="default"&&Object.prototype.hasOwnProperty.call(C,v)&&l(p,C,v);return o(p,C),p},a=this&&this.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(t,"__esModule",{value:!0}),t.DomUtils=t.parseFeed=t.getFeed=t.ElementType=t.Tokenizer=t.createDomStream=t.parseDOM=t.parseDocument=t.DefaultHandler=t.DomHandler=t.Parser=void 0;var m=e(1724),d=e(1724);Object.defineProperty(t,"Parser",{enumerable:!0,get:function(){return d.Parser}});var c=e(1141),r=e(1141);function i(C,p){var v=new c.DomHandler(void 0,p);return new m.Parser(v,p).end(C),v.root}function n(C,p){return i(C,p).children}Object.defineProperty(t,"DomHandler",{enumerable:!0,get:function(){return r.DomHandler}}),Object.defineProperty(t,"DefaultHandler",{enumerable:!0,get:function(){return r.DomHandler}}),t.parseDocument=i,t.parseDOM=n,t.createDomStream=function(C,p,v){var M=new c.DomHandler(C,p,v);return new m.Parser(M,p)};var h=e(7918);Object.defineProperty(t,"Tokenizer",{enumerable:!0,get:function(){return a(h).default}}),t.ElementType=A(e(5413));var u=e(8888),x=e(8888);Object.defineProperty(t,"getFeed",{enumerable:!0,get:function(){return x.getFeed}});var b={xmlMode:!0};t.parseFeed=function(C,p){return p===void 0&&(p=b),(0,u.getFeed)(n(C,p))},t.DomUtils=A(e(8888))},9466:function(I,t){var e,l;(l=typeof(e=function(){return function(o){function A(s){return s===" "||s==="	"||s===`
`||s==="\f"||s==="\r"}function a(s){var g,w=s.exec(o.substring(v));if(w)return g=w[0],v+=g.length,g}for(var m,d,c,r,i,n=o.length,h=/^[ \t\n\r\u000c]+/,u=/^[, \t\n\r\u000c]+/,x=/^[^ \t\n\r\u000c]+/,b=/[,]+$/,C=/^\d+$/,p=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,v=0,M=[];;){if(a(u),v>=n)return M;m=a(x),d=[],m.slice(-1)===","?(m=m.replace(b,""),y()):f()}function f(){for(a(h),c="",r="in descriptor";;){if(i=o.charAt(v),r==="in descriptor")if(A(i))c&&(d.push(c),c="",r="after descriptor");else{if(i===",")return v+=1,c&&d.push(c),void y();if(i==="(")c+=i,r="in parens";else{if(i==="")return c&&d.push(c),void y();c+=i}}else if(r==="in parens")if(i===")")c+=i,r="in descriptor";else{if(i==="")return d.push(c),void y();c+=i}else if(r==="after descriptor"&&!A(i)){if(i==="")return void y();r="in descriptor",v-=1}v+=1}}function y(){var s,g,w,k,S,L,U,F,R,E=!1,$={};for(k=0;k<d.length;k++)L=(S=d[k])[S.length-1],U=S.substring(0,S.length-1),F=parseInt(U,10),R=parseFloat(U),C.test(U)&&L==="w"?((s||g)&&(E=!0),F===0?E=!0:s=F):p.test(U)&&L==="x"?((s||g||w)&&(E=!0),R<0?E=!0:g=R):C.test(U)&&L==="h"?((w||g)&&(E=!0),F===0?E=!0:w=F):E=!0;E?console&&console.log&&console.log("Invalid srcset descriptor found in '"+o+"' at '"+S+"'."):($.url=m,s&&($.w=s),g&&($.d=g),w&&($.h=w),M.push($))}}})=="function"?e.apply(t,[]):e)===void 0||(I.exports=l)},8633:I=>{var t=String,e=function(){return{isColorSupported:!1,reset:t,bold:t,dim:t,italic:t,underline:t,inverse:t,hidden:t,strikethrough:t,black:t,red:t,green:t,yellow:t,blue:t,magenta:t,cyan:t,white:t,gray:t,bgBlack:t,bgRed:t,bgGreen:t,bgYellow:t,bgBlue:t,bgMagenta:t,bgCyan:t,bgWhite:t}};I.exports=e(),I.exports.createColors=e},396:(I,t,e)=>{"use strict";let l=e(7793);class o extends l{constructor(a){super(a),this.type="atrule"}append(...a){return this.proxyOf.nodes||(this.nodes=[]),super.append(...a)}prepend(...a){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...a)}}I.exports=o,o.default=o,l.registerAtRule(o)},9371:(I,t,e)=>{"use strict";let l=e(3152);class o extends l{constructor(a){super(a),this.type="comment"}}I.exports=o,o.default=o},7793:(I,t,e)=>{"use strict";let l,o,A,a,{isClean:m,my:d}=e(4151),c=e(5238),r=e(9371),i=e(3152);function n(x){return x.map(b=>(b.nodes&&(b.nodes=n(b.nodes)),delete b.source,b))}function h(x){if(x[m]=!1,x.proxyOf.nodes)for(let b of x.proxyOf.nodes)h(b)}class u extends i{append(...b){for(let C of b){let p=this.normalize(C,this.last);for(let v of p)this.proxyOf.nodes.push(v)}return this.markDirty(),this}cleanRaws(b){if(super.cleanRaws(b),this.nodes)for(let C of this.nodes)C.cleanRaws(b)}each(b){if(!this.proxyOf.nodes)return;let C,p,v=this.getIterator();for(;this.indexes[v]<this.proxyOf.nodes.length&&(C=this.indexes[v],p=b(this.proxyOf.nodes[C],C),p!==!1);)this.indexes[v]+=1;return delete this.indexes[v],p}every(b){return this.nodes.every(b)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let b=this.lastEach;return this.indexes[b]=0,b}getProxyProcessor(){return{get:(b,C)=>C==="proxyOf"?b:b[C]?C==="each"||typeof C=="string"&&C.startsWith("walk")?(...p)=>b[C](...p.map(v=>typeof v=="function"?(M,f)=>v(M.toProxy(),f):v)):C==="every"||C==="some"?p=>b[C]((v,...M)=>p(v.toProxy(),...M)):C==="root"?()=>b.root().toProxy():C==="nodes"?b.nodes.map(p=>p.toProxy()):C==="first"||C==="last"?b[C].toProxy():b[C]:b[C],set:(b,C,p)=>(b[C]===p||(b[C]=p,C!=="name"&&C!=="params"&&C!=="selector"||b.markDirty()),!0)}}index(b){return typeof b=="number"?b:(b.proxyOf&&(b=b.proxyOf),this.proxyOf.nodes.indexOf(b))}insertAfter(b,C){let p,v=this.index(b),M=this.normalize(C,this.proxyOf.nodes[v]).reverse();v=this.index(b);for(let f of M)this.proxyOf.nodes.splice(v+1,0,f);for(let f in this.indexes)p=this.indexes[f],v<p&&(this.indexes[f]=p+M.length);return this.markDirty(),this}insertBefore(b,C){let p,v=this.index(b),M=v===0&&"prepend",f=this.normalize(C,this.proxyOf.nodes[v],M).reverse();v=this.index(b);for(let y of f)this.proxyOf.nodes.splice(v,0,y);for(let y in this.indexes)p=this.indexes[y],v<=p&&(this.indexes[y]=p+f.length);return this.markDirty(),this}normalize(b,C){if(typeof b=="string")b=n(l(b).nodes);else if(Array.isArray(b)){b=b.slice(0);for(let p of b)p.parent&&p.parent.removeChild(p,"ignore")}else if(b.type==="root"&&this.type!=="document"){b=b.nodes.slice(0);for(let p of b)p.parent&&p.parent.removeChild(p,"ignore")}else if(b.type)b=[b];else if(b.prop){if(b.value===void 0)throw new Error("Value field is missed in node creation");typeof b.value!="string"&&(b.value=String(b.value)),b=[new c(b)]}else if(b.selector)b=[new o(b)];else if(b.name)b=[new A(b)];else{if(!b.text)throw new Error("Unknown node type in node creation");b=[new r(b)]}return b.map(p=>(p[d]||u.rebuild(p),(p=p.proxyOf).parent&&p.parent.removeChild(p),p[m]&&h(p),p.raws.before===void 0&&C&&C.raws.before!==void 0&&(p.raws.before=C.raws.before.replace(/\S/g,"")),p.parent=this.proxyOf,p))}prepend(...b){b=b.reverse();for(let C of b){let p=this.normalize(C,this.first,"prepend").reverse();for(let v of p)this.proxyOf.nodes.unshift(v);for(let v in this.indexes)this.indexes[v]=this.indexes[v]+p.length}return this.markDirty(),this}push(b){return b.parent=this,this.proxyOf.nodes.push(b),this}removeAll(){for(let b of this.proxyOf.nodes)b.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(b){let C;b=this.index(b),this.proxyOf.nodes[b].parent=void 0,this.proxyOf.nodes.splice(b,1);for(let p in this.indexes)C=this.indexes[p],C>=b&&(this.indexes[p]=C-1);return this.markDirty(),this}replaceValues(b,C,p){return p||(p=C,C={}),this.walkDecls(v=>{C.props&&!C.props.includes(v.prop)||C.fast&&!v.value.includes(C.fast)||(v.value=v.value.replace(b,p))}),this.markDirty(),this}some(b){return this.nodes.some(b)}walk(b){return this.each((C,p)=>{let v;try{v=b(C,p)}catch(M){throw C.addToError(M)}return v!==!1&&C.walk&&(v=C.walk(b)),v})}walkAtRules(b,C){return C?b instanceof RegExp?this.walk((p,v)=>{if(p.type==="atrule"&&b.test(p.name))return C(p,v)}):this.walk((p,v)=>{if(p.type==="atrule"&&p.name===b)return C(p,v)}):(C=b,this.walk((p,v)=>{if(p.type==="atrule")return C(p,v)}))}walkComments(b){return this.walk((C,p)=>{if(C.type==="comment")return b(C,p)})}walkDecls(b,C){return C?b instanceof RegExp?this.walk((p,v)=>{if(p.type==="decl"&&b.test(p.prop))return C(p,v)}):this.walk((p,v)=>{if(p.type==="decl"&&p.prop===b)return C(p,v)}):(C=b,this.walk((p,v)=>{if(p.type==="decl")return C(p,v)}))}walkRules(b,C){return C?b instanceof RegExp?this.walk((p,v)=>{if(p.type==="rule"&&b.test(p.selector))return C(p,v)}):this.walk((p,v)=>{if(p.type==="rule"&&p.selector===b)return C(p,v)}):(C=b,this.walk((p,v)=>{if(p.type==="rule")return C(p,v)}))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}}u.registerParse=x=>{l=x},u.registerRule=x=>{o=x},u.registerAtRule=x=>{A=x},u.registerRoot=x=>{a=x},I.exports=u,u.default=u,u.rebuild=x=>{x.type==="atrule"?Object.setPrototypeOf(x,A.prototype):x.type==="rule"?Object.setPrototypeOf(x,o.prototype):x.type==="decl"?Object.setPrototypeOf(x,c.prototype):x.type==="comment"?Object.setPrototypeOf(x,r.prototype):x.type==="root"&&Object.setPrototypeOf(x,a.prototype),x[d]=!0,x.nodes&&x.nodes.forEach(b=>{u.rebuild(b)})}},3614:(I,t,e)=>{"use strict";let l=e(8633),o=e(9746);class A extends Error{constructor(m,d,c,r,i,n){super(m),this.name="CssSyntaxError",this.reason=m,i&&(this.file=i),r&&(this.source=r),n&&(this.plugin=n),d!==void 0&&c!==void 0&&(typeof d=="number"?(this.line=d,this.column=c):(this.line=d.line,this.column=d.column,this.endLine=c.line,this.endColumn=c.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,A)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",this.line!==void 0&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(m){if(!this.source)return"";let d=this.source;m==null&&(m=l.isColorSupported),o&&m&&(d=o(d));let c,r,i=d.split(/\r?\n/),n=Math.max(this.line-3,0),h=Math.min(this.line+2,i.length),u=String(h).length;if(m){let{bold:x,gray:b,red:C}=l.createColors(!0);c=p=>x(C(p)),r=p=>b(p)}else c=r=x=>x;return i.slice(n,h).map((x,b)=>{let C=n+1+b,p=" "+(" "+C).slice(-u)+" | ";if(C===this.line){let v=r(p.replace(/\d/g," "))+x.slice(0,this.column-1).replace(/[^\t]/g," ");return c(">")+r(p)+x+`
 `+v+c("^")}return" "+r(p)+x}).join(`
`)}toString(){let m=this.showSourceCode();return m&&(m=`

`+m+`
`),this.name+": "+this.message+m}}I.exports=A,A.default=A},5238:(I,t,e)=>{"use strict";let l=e(3152);class o extends l{constructor(a){a&&a.value!==void 0&&typeof a.value!="string"&&(a={...a,value:String(a.value)}),super(a),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}}I.exports=o,o.default=o},145:(I,t,e)=>{"use strict";let l,o,A=e(7793);class a extends A{constructor(d){super({type:"document",...d}),this.nodes||(this.nodes=[])}toResult(d={}){return new l(new o,this,d).stringify()}}a.registerLazyResult=m=>{l=m},a.registerProcessor=m=>{o=m},I.exports=a,a.default=a},3438:(I,t,e)=>{"use strict";let l=e(5238),o=e(3878),A=e(9371),a=e(396),m=e(1106),d=e(5644),c=e(1534);function r(i,n){if(Array.isArray(i))return i.map(x=>r(x));let{inputs:h,...u}=i;if(h){n=[];for(let x of h){let b={...x,__proto__:m.prototype};b.map&&(b.map={...b.map,__proto__:o.prototype}),n.push(b)}}if(u.nodes&&(u.nodes=i.nodes.map(x=>r(x,n))),u.source){let{inputId:x,...b}=u.source;u.source=b,x!=null&&(u.source.input=n[x])}if(u.type==="root")return new d(u);if(u.type==="decl")return new l(u);if(u.type==="rule")return new c(u);if(u.type==="comment")return new A(u);if(u.type==="atrule")return new a(u);throw new Error("Unknown node type: "+i.type)}I.exports=r,r.default=r},1106:(I,t,e)=>{"use strict";let{SourceMapConsumer:l,SourceMapGenerator:o}=e(1866),{fileURLToPath:A,pathToFileURL:a}=e(2739),{isAbsolute:m,resolve:d}=e(197),{nanoid:c}=e(5042),r=e(9746),i=e(3614),n=e(3878),h=Symbol("fromOffsetCache"),u=Boolean(l&&o),x=Boolean(d&&m);class b{constructor(p,v={}){if(p==null||typeof p=="object"&&!p.toString)throw new Error(`PostCSS received ${p} instead of CSS string`);if(this.css=p.toString(),this.css[0]==="\uFEFF"||this.css[0]==="\uFFFE"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,v.from&&(!x||/^\w+:\/\//.test(v.from)||m(v.from)?this.file=v.from:this.file=d(v.from)),x&&u){let M=new n(this.css,v);if(M.text){this.map=M;let f=M.consumer().file;!this.file&&f&&(this.file=this.mapResolve(f))}}this.file||(this.id="<input css "+c(6)+">"),this.map&&(this.map.file=this.from)}error(p,v,M,f={}){let y,s,g;if(v&&typeof v=="object"){let k=v,S=M;if(typeof k.offset=="number"){let L=this.fromOffset(k.offset);v=L.line,M=L.col}else v=k.line,M=k.column;if(typeof S.offset=="number"){let L=this.fromOffset(S.offset);s=L.line,g=L.col}else s=S.line,g=S.column}else if(!M){let k=this.fromOffset(v);v=k.line,M=k.col}let w=this.origin(v,M,s,g);return y=w?new i(p,w.endLine===void 0?w.line:{column:w.column,line:w.line},w.endLine===void 0?w.column:{column:w.endColumn,line:w.endLine},w.source,w.file,f.plugin):new i(p,s===void 0?v:{column:M,line:v},s===void 0?M:{column:g,line:s},this.css,this.file,f.plugin),y.input={column:M,endColumn:g,endLine:s,line:v,source:this.css},this.file&&(a&&(y.input.url=a(this.file).toString()),y.input.file=this.file),y}fromOffset(p){let v,M;if(this[h])M=this[h];else{let y=this.css.split(`
`);M=new Array(y.length);let s=0;for(let g=0,w=y.length;g<w;g++)M[g]=s,s+=y[g].length+1;this[h]=M}v=M[M.length-1];let f=0;if(p>=v)f=M.length-1;else{let y,s=M.length-2;for(;f<s;)if(y=f+(s-f>>1),p<M[y])s=y-1;else{if(!(p>=M[y+1])){f=y;break}f=y+1}}return{col:p-M[f]+1,line:f+1}}mapResolve(p){return/^\w+:\/\//.test(p)?p:d(this.map.consumer().sourceRoot||this.map.root||".",p)}origin(p,v,M,f){if(!this.map)return!1;let y,s,g=this.map.consumer(),w=g.originalPositionFor({column:v,line:p});if(!w.source)return!1;typeof M=="number"&&(y=g.originalPositionFor({column:f,line:M})),s=m(w.source)?a(w.source):new URL(w.source,this.map.consumer().sourceRoot||a(this.map.mapFile));let k={column:w.column,endColumn:y&&y.column,endLine:y&&y.line,line:w.line,url:s.toString()};if(s.protocol==="file:"){if(!A)throw new Error("file: protocol is not available in this PostCSS build");k.file=A(s)}let S=g.sourceContentFor(w.source);return S&&(k.source=S),k}toJSON(){let p={};for(let v of["hasBOM","css","file","id"])this[v]!=null&&(p[v]=this[v]);return this.map&&(p.map={...this.map},p.map.consumerCache&&(p.map.consumerCache=void 0)),p}get from(){return this.file||this.id}}I.exports=b,b.default=b,r&&r.registerInput&&r.registerInput(b)},6966:(I,t,e)=>{"use strict";let{isClean:l,my:o}=e(4151),A=e(1223),a=e(3303),m=e(7793),d=e(145),c=(e(6156),e(3717)),r=e(9577),i=e(5644);const n={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},h={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},u={Once:!0,postcssPlugin:!0,prepare:!0},x=0;function b(y){return typeof y=="object"&&typeof y.then=="function"}function C(y){let s=!1,g=n[y.type];return y.type==="decl"?s=y.prop.toLowerCase():y.type==="atrule"&&(s=y.name.toLowerCase()),s&&y.append?[g,g+"-"+s,x,g+"Exit",g+"Exit-"+s]:s?[g,g+"-"+s,g+"Exit",g+"Exit-"+s]:y.append?[g,x,g+"Exit"]:[g,g+"Exit"]}function p(y){let s;return s=y.type==="document"?["Document",x,"DocumentExit"]:y.type==="root"?["Root",x,"RootExit"]:C(y),{eventIndex:0,events:s,iterator:0,node:y,visitorIndex:0,visitors:[]}}function v(y){return y[l]=!1,y.nodes&&y.nodes.forEach(s=>v(s)),y}let M={};class f{constructor(s,g,w){let k;if(this.stringified=!1,this.processed=!1,typeof g!="object"||g===null||g.type!=="root"&&g.type!=="document")if(g instanceof f||g instanceof c)k=v(g.root),g.map&&(w.map===void 0&&(w.map={}),w.map.inline||(w.map.inline=!1),w.map.prev=g.map);else{let S=r;w.syntax&&(S=w.syntax.parse),w.parser&&(S=w.parser),S.parse&&(S=S.parse);try{k=S(g,w)}catch(L){this.processed=!0,this.error=L}k&&!k[o]&&m.rebuild(k)}else k=v(g);this.result=new c(s,k,w),this.helpers={...M,postcss:M,result:this.result},this.plugins=this.processor.plugins.map(S=>typeof S=="object"&&S.prepare?{...S,...S.prepare(this.result)}:S)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(s){return this.async().catch(s)}finally(s){return this.async().then(s,s)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(s,g){let w=this.result.lastPlugin;try{g&&g.addToError(s),this.error=s,s.name!=="CssSyntaxError"||s.plugin?w.postcssVersion:(s.plugin=w.postcssPlugin,s.setMessage())}catch(k){console&&console.error&&console.error(k)}return s}prepareVisitors(){this.listeners={};let s=(g,w,k)=>{this.listeners[w]||(this.listeners[w]=[]),this.listeners[w].push([g,k])};for(let g of this.plugins)if(typeof g=="object")for(let w in g){if(!h[w]&&/^[A-Z]/.test(w))throw new Error(`Unknown event ${w} in ${g.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!u[w])if(typeof g[w]=="object")for(let k in g[w])s(g,k==="*"?w:w+"-"+k.toLowerCase(),g[w][k]);else typeof g[w]=="function"&&s(g,w,g[w])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let s=0;s<this.plugins.length;s++){let g=this.plugins[s],w=this.runOnRoot(g);if(b(w))try{await w}catch(k){throw this.handleError(k)}}if(this.prepareVisitors(),this.hasListener){let s=this.result.root;for(;!s[l];){s[l]=!0;let g=[p(s)];for(;g.length>0;){let w=this.visitTick(g);if(b(w))try{await w}catch(k){let S=g[g.length-1].node;throw this.handleError(k,S)}}}if(this.listeners.OnceExit)for(let[g,w]of this.listeners.OnceExit){this.result.lastPlugin=g;try{if(s.type==="document"){let k=s.nodes.map(S=>w(S,this.helpers));await Promise.all(k)}else await w(s,this.helpers)}catch(k){throw this.handleError(k)}}}return this.processed=!0,this.stringify()}runOnRoot(s){this.result.lastPlugin=s;try{if(typeof s=="object"&&s.Once){if(this.result.root.type==="document"){let g=this.result.root.nodes.map(w=>s.Once(w,this.helpers));return b(g[0])?Promise.all(g):g}return s.Once(this.result.root,this.helpers)}if(typeof s=="function")return s(this.result.root,this.result)}catch(g){throw this.handleError(g)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let s=this.result.opts,g=a;s.syntax&&(g=s.syntax.stringify),s.stringifier&&(g=s.stringifier),g.stringify&&(g=g.stringify);let w=new A(g,this.result.root,this.result.opts).generate();return this.result.css=w[0],this.result.map=w[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let s of this.plugins)if(b(this.runOnRoot(s)))throw this.getAsyncError();if(this.prepareVisitors(),this.hasListener){let s=this.result.root;for(;!s[l];)s[l]=!0,this.walkSync(s);if(this.listeners.OnceExit)if(s.type==="document")for(let g of s.nodes)this.visitSync(this.listeners.OnceExit,g);else this.visitSync(this.listeners.OnceExit,s)}return this.result}then(s,g){return this.async().then(s,g)}toString(){return this.css}visitSync(s,g){for(let[w,k]of s){let S;this.result.lastPlugin=w;try{S=k(g,this.helpers)}catch(L){throw this.handleError(L,g.proxyOf)}if(g.type!=="root"&&g.type!=="document"&&!g.parent)return!0;if(b(S))throw this.getAsyncError()}}visitTick(s){let g=s[s.length-1],{node:w,visitors:k}=g;if(w.type!=="root"&&w.type!=="document"&&!w.parent)return void s.pop();if(k.length>0&&g.visitorIndex<k.length){let[L,U]=k[g.visitorIndex];g.visitorIndex+=1,g.visitorIndex===k.length&&(g.visitors=[],g.visitorIndex=0),this.result.lastPlugin=L;try{return U(w.toProxy(),this.helpers)}catch(F){throw this.handleError(F,w)}}if(g.iterator!==0){let L,U=g.iterator;for(;L=w.nodes[w.indexes[U]];)if(w.indexes[U]+=1,!L[l])return L[l]=!0,void s.push(p(L));g.iterator=0,delete w.indexes[U]}let S=g.events;for(;g.eventIndex<S.length;){let L=S[g.eventIndex];if(g.eventIndex+=1,L===x)return void(w.nodes&&w.nodes.length&&(w[l]=!0,g.iterator=w.getIterator()));if(this.listeners[L])return void(g.visitors=this.listeners[L])}s.pop()}walkSync(s){s[l]=!0;let g=C(s);for(let w of g)if(w===x)s.nodes&&s.each(k=>{k[l]||this.walkSync(k)});else{let k=this.listeners[w];if(k&&this.visitSync(k,s.toProxy()))return}}warnings(){return this.sync().warnings()}get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}}f.registerPostcss=y=>{M=y},I.exports=f,f.default=f,i.registerLazyResult(f),d.registerLazyResult(f)},1752:I=>{"use strict";let t={comma:e=>t.split(e,[","],!0),space:e=>t.split(e,[" ",`
`,"	"]),split(e,l,o){let A=[],a="",m=!1,d=0,c=!1,r="",i=!1;for(let n of e)i?i=!1:n==="\\"?i=!0:c?n===r&&(c=!1):n==='"'||n==="'"?(c=!0,r=n):n==="("?d+=1:n===")"?d>0&&(d-=1):d===0&&l.includes(n)&&(m=!0),m?(a!==""&&A.push(a.trim()),a="",m=!1):a+=n;return(o||a!=="")&&A.push(a.trim()),A}};I.exports=t,t.default=t},1223:(I,t,e)=>{"use strict";let{SourceMapConsumer:l,SourceMapGenerator:o}=e(1866),{dirname:A,relative:a,resolve:m,sep:d}=e(197),{pathToFileURL:c}=e(2739),r=e(1106),i=Boolean(l&&o),n=Boolean(A&&m&&a&&d);I.exports=class{constructor(h,u,x,b){this.stringify=h,this.mapOpts=x.map||{},this.root=u,this.opts=x,this.css=b,this.originalCSS=b,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let h;h=this.isInline()?"data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?this.mapOpts.annotation(this.opts.to,this.root):this.outputFile()+".map";let u=`
`;this.css.includes(`\r
`)&&(u=`\r
`),this.css+=u+"/*# sourceMappingURL="+h+" */"}applyPrevMaps(){for(let h of this.previous()){let u,x=this.toUrl(this.path(h.file)),b=h.root||A(h.file);this.mapOpts.sourcesContent===!1?(u=new l(h.text),u.sourcesContent&&(u.sourcesContent=u.sourcesContent.map(()=>null))):u=h.consumer(),this.map.applySourceMap(u,x,this.toUrl(this.path(b)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let h;for(let u=this.root.nodes.length-1;u>=0;u--)h=this.root.nodes[u],h.type==="comment"&&h.text.indexOf("# sourceMappingURL=")===0&&this.root.removeChild(u)}else this.css&&(this.css=this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),n&&i&&this.isMap())return this.generateMap();{let h="";return this.stringify(this.root,u=>{h+=u}),[h]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let h=this.previous()[0].consumer();h.file=this.outputFile(),this.map=o.fromSourceMap(h)}else this.map=new o({file:this.outputFile()}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new o({file:this.outputFile()});let h,u,x=1,b=1,C="<no source>",p={generated:{column:0,line:0},original:{column:0,line:0},source:""};this.stringify(this.root,(v,M,f)=>{if(this.css+=v,M&&f!=="end"&&(p.generated.line=x,p.generated.column=b-1,M.source&&M.source.start?(p.source=this.sourcePath(M),p.original.line=M.source.start.line,p.original.column=M.source.start.column-1,this.map.addMapping(p)):(p.source=C,p.original.line=1,p.original.column=0,this.map.addMapping(p))),h=v.match(/\n/g),h?(x+=h.length,u=v.lastIndexOf(`
`),b=v.length-u):b+=v.length,M&&f!=="start"){let y=M.parent||{raws:{}};(M.type==="decl"||M.type==="atrule"&&!M.nodes)&&M===y.last&&!y.raws.semicolon||(M.source&&M.source.end?(p.source=this.sourcePath(M),p.original.line=M.source.end.line,p.original.column=M.source.end.column-1,p.generated.line=x,p.generated.column=b-2,this.map.addMapping(p)):(p.source=C,p.original.line=1,p.original.column=0,p.generated.line=x,p.generated.column=b-1,this.map.addMapping(p)))}})}isAnnotation(){return!!this.isInline()||(this.mapOpts.annotation!==void 0?this.mapOpts.annotation:!this.previous().length||this.previous().some(h=>h.annotation))}isInline(){if(this.mapOpts.inline!==void 0)return this.mapOpts.inline;let h=this.mapOpts.annotation;return(h===void 0||h===!0)&&(!this.previous().length||this.previous().some(u=>u.inline))}isMap(){return this.opts.map!==void 0?!!this.opts.map:this.previous().length>0}isSourcesContent(){return this.mapOpts.sourcesContent!==void 0?this.mapOpts.sourcesContent:!this.previous().length||this.previous().some(h=>h.withContent())}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(h){if(this.mapOpts.absolute||h.charCodeAt(0)===60||/^\w+:\/\//.test(h))return h;let u=this.memoizedPaths.get(h);if(u)return u;let x=this.opts.to?A(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(x=A(m(x,this.mapOpts.annotation)));let b=a(x,h);return this.memoizedPaths.set(h,b),b}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(h=>{if(h.source&&h.source.input.map){let u=h.source.input.map;this.previousMaps.includes(u)||this.previousMaps.push(u)}});else{let h=new r(this.originalCSS,this.opts);h.map&&this.previousMaps.push(h.map)}return this.previousMaps}setSourcesContent(){let h={};if(this.root)this.root.walk(u=>{if(u.source){let x=u.source.input.from;if(x&&!h[x]){h[x]=!0;let b=this.usesFileUrls?this.toFileUrl(x):this.toUrl(this.path(x));this.map.setSourceContent(b,u.source.input.css)}}});else if(this.css){let u=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(u,this.css)}}sourcePath(h){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(h.source.input.from):this.toUrl(this.path(h.source.input.from))}toBase64(h){return Buffer?Buffer.from(h).toString("base64"):window.btoa(unescape(encodeURIComponent(h)))}toFileUrl(h){let u=this.memoizedFileURLs.get(h);if(u)return u;if(c){let x=c(h).toString();return this.memoizedFileURLs.set(h,x),x}throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(h){let u=this.memoizedURLs.get(h);if(u)return u;d==="\\"&&(h=h.replace(/\\/g,"/"));let x=encodeURI(h).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(h,x),x}}},4211:(I,t,e)=>{"use strict";let l=e(1223),o=e(3303),A=(e(6156),e(9577));const a=e(3717);class m{constructor(c,r,i){let n;r=r.toString(),this.stringified=!1,this._processor=c,this._css=r,this._opts=i,this._map=void 0;let h=o;this.result=new a(this._processor,n,this._opts),this.result.css=r;let u=this;Object.defineProperty(this.result,"root",{get:()=>u.root});let x=new l(h,n,this._opts,r);if(x.isMap()){let[b,C]=x.generate();b&&(this.result.css=b),C&&(this.result.map=C)}else x.clearAnnotation(),this.result.css=x.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(c){return this.async().catch(c)}finally(c){return this.async().then(c,c)}sync(){if(this.error)throw this.error;return this.result}then(c,r){return this.async().then(c,r)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let c,r=A;try{c=r(this._css,this._opts)}catch(i){this.error=i}if(this.error)throw this.error;return this._root=c,c}get[Symbol.toStringTag](){return"NoWorkResult"}}I.exports=m,m.default=m},3152:(I,t,e)=>{"use strict";let{isClean:l,my:o}=e(4151),A=e(3614),a=e(7668),m=e(3303);function d(r,i){let n=new r.constructor;for(let h in r){if(!Object.prototype.hasOwnProperty.call(r,h)||h==="proxyCache")continue;let u=r[h],x=typeof u;h==="parent"&&x==="object"?i&&(n[h]=i):h==="source"?n[h]=u:Array.isArray(u)?n[h]=u.map(b=>d(b,n)):(x==="object"&&u!==null&&(u=d(u)),n[h]=u)}return n}class c{constructor(i={}){this.raws={},this[l]=!1,this[o]=!0;for(let n in i)if(n==="nodes"){this.nodes=[];for(let h of i[n])typeof h.clone=="function"?this.append(h.clone()):this.append(h)}else this[n]=i[n]}addToError(i){if(i.postcssNode=this,i.stack&&this.source&&/\n\s{4}at /.test(i.stack)){let n=this.source;i.stack=i.stack.replace(/\n\s{4}at /,`$&${n.input.from}:${n.start.line}:${n.start.column}$&`)}return i}after(i){return this.parent.insertAfter(this,i),this}assign(i={}){for(let n in i)this[n]=i[n];return this}before(i){return this.parent.insertBefore(this,i),this}cleanRaws(i){delete this.raws.before,delete this.raws.after,i||delete this.raws.between}clone(i={}){let n=d(this);for(let h in i)n[h]=i[h];return n}cloneAfter(i={}){let n=this.clone(i);return this.parent.insertAfter(this,n),n}cloneBefore(i={}){let n=this.clone(i);return this.parent.insertBefore(this,n),n}error(i,n={}){if(this.source){let{end:h,start:u}=this.rangeBy(n);return this.source.input.error(i,{column:u.column,line:u.line},{column:h.column,line:h.line},n)}return new A(i)}getProxyProcessor(){return{get:(i,n)=>n==="proxyOf"?i:n==="root"?()=>i.root().toProxy():i[n],set:(i,n,h)=>(i[n]===h||(i[n]=h,n!=="prop"&&n!=="value"&&n!=="name"&&n!=="params"&&n!=="important"&&n!=="text"||i.markDirty()),!0)}}markDirty(){if(this[l]){this[l]=!1;let i=this;for(;i=i.parent;)i[l]=!1}}next(){if(!this.parent)return;let i=this.parent.index(this);return this.parent.nodes[i+1]}positionBy(i,n){let h=this.source.start;if(i.index)h=this.positionInside(i.index,n);else if(i.word){let u=(n=this.toString()).indexOf(i.word);u!==-1&&(h=this.positionInside(u,n))}return h}positionInside(i,n){let h=n||this.toString(),u=this.source.start.column,x=this.source.start.line;for(let b=0;b<i;b++)h[b]===`
`?(u=1,x+=1):u+=1;return{column:u,line:x}}prev(){if(!this.parent)return;let i=this.parent.index(this);return this.parent.nodes[i-1]}rangeBy(i){let n={column:this.source.start.column,line:this.source.start.line},h=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:n.column+1,line:n.line};if(i.word){let u=this.toString(),x=u.indexOf(i.word);x!==-1&&(n=this.positionInside(x,u),h=this.positionInside(x+i.word.length,u))}else i.start?n={column:i.start.column,line:i.start.line}:i.index&&(n=this.positionInside(i.index)),i.end?h={column:i.end.column,line:i.end.line}:i.endIndex?h=this.positionInside(i.endIndex):i.index&&(h=this.positionInside(i.index+1));return(h.line<n.line||h.line===n.line&&h.column<=n.column)&&(h={column:n.column+1,line:n.line}),{end:h,start:n}}raw(i,n){return new a().raw(this,i,n)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...i){if(this.parent){let n=this,h=!1;for(let u of i)u===this?h=!0:h?(this.parent.insertAfter(n,u),n=u):this.parent.insertBefore(n,u);h||this.remove()}return this}root(){let i=this;for(;i.parent&&i.parent.type!=="document";)i=i.parent;return i}toJSON(i,n){let h={},u=n==null;n=n||new Map;let x=0;for(let b in this){if(!Object.prototype.hasOwnProperty.call(this,b)||b==="parent"||b==="proxyCache")continue;let C=this[b];if(Array.isArray(C))h[b]=C.map(p=>typeof p=="object"&&p.toJSON?p.toJSON(null,n):p);else if(typeof C=="object"&&C.toJSON)h[b]=C.toJSON(null,n);else if(b==="source"){let p=n.get(C.input);p==null&&(p=x,n.set(C.input,x),x++),h[b]={end:C.end,inputId:p,start:C.start}}else h[b]=C}return u&&(h.inputs=[...n.keys()].map(b=>b.toJSON())),h}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(i=m){i.stringify&&(i=i.stringify);let n="";return i(this,h=>{n+=h}),n}warn(i,n,h){let u={node:this};for(let x in h)u[x]=h[x];return i.warn(n,u)}get proxyOf(){return this}}I.exports=c,c.default=c},9577:(I,t,e)=>{"use strict";let l=e(7793),o=e(8339),A=e(1106);function a(m,d){let c=new A(m,d),r=new o(c);try{r.parse()}catch(i){throw i}return r.root}I.exports=a,a.default=a,l.registerParse(a)},8339:(I,t,e)=>{"use strict";let l=e(5238),o=e(5781),A=e(9371),a=e(396),m=e(5644),d=e(1534);const c={empty:!0,space:!0};I.exports=class{constructor(r){this.input=r,this.root=new m,this.current=this.root,this.spaces="",this.semicolon=!1,this.customProperty=!1,this.createTokenizer(),this.root.source={input:r,start:{column:1,line:1,offset:0}}}atrule(r){let i,n,h,u=new a;u.name=r[1].slice(1),u.name===""&&this.unnamedAtrule(u,r),this.init(u,r[2]);let x=!1,b=!1,C=[],p=[];for(;!this.tokenizer.endOfFile();){if(i=(r=this.tokenizer.nextToken())[0],i==="("||i==="["?p.push(i==="("?")":"]"):i==="{"&&p.length>0?p.push("}"):i===p[p.length-1]&&p.pop(),p.length===0){if(i===";"){u.source.end=this.getPosition(r[2]),u.source.end.offset++,this.semicolon=!0;break}if(i==="{"){b=!0;break}if(i==="}"){if(C.length>0){for(h=C.length-1,n=C[h];n&&n[0]==="space";)n=C[--h];n&&(u.source.end=this.getPosition(n[3]||n[2]),u.source.end.offset++)}this.end(r);break}C.push(r)}else C.push(r);if(this.tokenizer.endOfFile()){x=!0;break}}u.raws.between=this.spacesAndCommentsFromEnd(C),C.length?(u.raws.afterName=this.spacesAndCommentsFromStart(C),this.raw(u,"params",C),x&&(r=C[C.length-1],u.source.end=this.getPosition(r[3]||r[2]),u.source.end.offset++,this.spaces=u.raws.between,u.raws.between="")):(u.raws.afterName="",u.params=""),b&&(u.nodes=[],this.current=u)}checkMissedSemicolon(r){let i=this.colon(r);if(i===!1)return;let n,h=0;for(let u=i-1;u>=0&&(n=r[u],n[0]==="space"||(h+=1,h!==2));u--);throw this.input.error("Missed semicolon",n[0]==="word"?n[3]+1:n[2])}colon(r){let i,n,h,u=0;for(let[x,b]of r.entries()){if(i=b,n=i[0],n==="("&&(u+=1),n===")"&&(u-=1),u===0&&n===":"){if(h){if(h[0]==="word"&&h[1]==="progid")continue;return x}this.doubleColon(i)}h=i}return!1}comment(r){let i=new A;this.init(i,r[2]),i.source.end=this.getPosition(r[3]||r[2]),i.source.end.offset++;let n=r[1].slice(2,-2);if(/^\s*$/.test(n))i.text="",i.raws.left=n,i.raws.right="";else{let h=n.match(/^(\s*)([^]*\S)(\s*)$/);i.text=h[2],i.raws.left=h[1],i.raws.right=h[3]}}createTokenizer(){this.tokenizer=o(this.input)}decl(r,i){let n=new l;this.init(n,r[0][2]);let h,u=r[r.length-1];for(u[0]===";"&&(this.semicolon=!0,r.pop()),n.source.end=this.getPosition(u[3]||u[2]||function(C){for(let p=C.length-1;p>=0;p--){let v=C[p],M=v[3]||v[2];if(M)return M}}(r)),n.source.end.offset++;r[0][0]!=="word";)r.length===1&&this.unknownWord(r),n.raws.before+=r.shift()[1];for(n.source.start=this.getPosition(r[0][2]),n.prop="";r.length;){let C=r[0][0];if(C===":"||C==="space"||C==="comment")break;n.prop+=r.shift()[1]}for(n.raws.between="";r.length;){if(h=r.shift(),h[0]===":"){n.raws.between+=h[1];break}h[0]==="word"&&/\w/.test(h[1])&&this.unknownWord([h]),n.raws.between+=h[1]}n.prop[0]!=="_"&&n.prop[0]!=="*"||(n.raws.before+=n.prop[0],n.prop=n.prop.slice(1));let x,b=[];for(;r.length&&(x=r[0][0],x==="space"||x==="comment");)b.push(r.shift());this.precheckMissedSemicolon(r);for(let C=r.length-1;C>=0;C--){if(h=r[C],h[1].toLowerCase()==="!important"){n.important=!0;let p=this.stringFrom(r,C);p=this.spacesFromEnd(r)+p,p!==" !important"&&(n.raws.important=p);break}if(h[1].toLowerCase()==="important"){let p=r.slice(0),v="";for(let M=C;M>0;M--){let f=p[M][0];if(v.trim().indexOf("!")===0&&f!=="space")break;v=p.pop()[1]+v}v.trim().indexOf("!")===0&&(n.important=!0,n.raws.important=v,r=p)}if(h[0]!=="space"&&h[0]!=="comment")break}r.some(C=>C[0]!=="space"&&C[0]!=="comment")&&(n.raws.between+=b.map(C=>C[1]).join(""),b=[]),this.raw(n,"value",b.concat(r),i),n.value.includes(":")&&!i&&this.checkMissedSemicolon(r)}doubleColon(r){throw this.input.error("Double colon",{offset:r[2]},{offset:r[2]+r[1].length})}emptyRule(r){let i=new d;this.init(i,r[2]),i.selector="",i.raws.between="",this.current=i}end(r){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(r[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(r)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(r){if(this.spaces+=r[1],this.current.nodes){let i=this.current.nodes[this.current.nodes.length-1];i&&i.type==="rule"&&!i.raws.ownSemicolon&&(i.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(r){let i=this.input.fromOffset(r);return{column:i.col,line:i.line,offset:r}}init(r,i){this.current.push(r),r.source={input:this.input,start:this.getPosition(i)},r.raws.before=this.spaces,this.spaces="",r.type!=="comment"&&(this.semicolon=!1)}other(r){let i=!1,n=null,h=!1,u=null,x=[],b=r[1].startsWith("--"),C=[],p=r;for(;p;){if(n=p[0],C.push(p),n==="("||n==="[")u||(u=p),x.push(n==="("?")":"]");else if(b&&h&&n==="{")u||(u=p),x.push("}");else if(x.length===0){if(n===";"){if(h)return void this.decl(C,b);break}if(n==="{")return void this.rule(C);if(n==="}"){this.tokenizer.back(C.pop()),i=!0;break}n===":"&&(h=!0)}else n===x[x.length-1]&&(x.pop(),x.length===0&&(u=null));p=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(i=!0),x.length>0&&this.unclosedBracket(u),i&&h){if(!b)for(;C.length&&(p=C[C.length-1][0],p==="space"||p==="comment");)this.tokenizer.back(C.pop());this.decl(C,b)}else this.unknownWord(C)}parse(){let r;for(;!this.tokenizer.endOfFile();)switch(r=this.tokenizer.nextToken(),r[0]){case"space":this.spaces+=r[1];break;case";":this.freeSemicolon(r);break;case"}":this.end(r);break;case"comment":this.comment(r);break;case"at-word":this.atrule(r);break;case"{":this.emptyRule(r);break;default:this.other(r)}this.endFile()}precheckMissedSemicolon(){}raw(r,i,n,h){let u,x,b,C,p=n.length,v="",M=!0;for(let f=0;f<p;f+=1)u=n[f],x=u[0],x!=="space"||f!==p-1||h?x==="comment"?(C=n[f-1]?n[f-1][0]:"empty",b=n[f+1]?n[f+1][0]:"empty",c[C]||c[b]||v.slice(-1)===","?M=!1:v+=u[1]):v+=u[1]:M=!1;if(!M){let f=n.reduce((y,s)=>y+s[1],"");r.raws[i]={raw:f,value:v}}r[i]=v}rule(r){r.pop();let i=new d;this.init(i,r[0][2]),i.raws.between=this.spacesAndCommentsFromEnd(r),this.raw(i,"selector",r),this.current=i}spacesAndCommentsFromEnd(r){let i,n="";for(;r.length&&(i=r[r.length-1][0],i==="space"||i==="comment");)n=r.pop()[1]+n;return n}spacesAndCommentsFromStart(r){let i,n="";for(;r.length&&(i=r[0][0],i==="space"||i==="comment");)n+=r.shift()[1];return n}spacesFromEnd(r){let i,n="";for(;r.length&&(i=r[r.length-1][0],i==="space");)n=r.pop()[1]+n;return n}stringFrom(r,i){let n="";for(let h=i;h<r.length;h++)n+=r[h][1];return r.splice(i,r.length-i),n}unclosedBlock(){let r=this.current.source.start;throw this.input.error("Unclosed block",r.line,r.column)}unclosedBracket(r){throw this.input.error("Unclosed bracket",{offset:r[2]},{offset:r[2]+1})}unexpectedClose(r){throw this.input.error("Unexpected }",{offset:r[2]},{offset:r[2]+1})}unknownWord(r){throw this.input.error("Unknown word",{offset:r[0][2]},{offset:r[0][2]+r[0][1].length})}unnamedAtrule(r,i){throw this.input.error("At-rule without name",{offset:i[2]},{offset:i[2]+i[1].length})}}},2895:(I,t,e)=>{"use strict";let l=e(3614),o=e(5238),A=e(6966),a=e(7793),m=e(6846),d=e(3303),c=e(3438),r=e(145),i=e(38),n=e(9371),h=e(396),u=e(3717),x=e(1106),b=e(9577),C=e(1752),p=e(1534),v=e(5644),M=e(3152);function f(...y){return y.length===1&&Array.isArray(y[0])&&(y=y[0]),new m(y)}f.plugin=function(y,s){let g,w=!1;function k(...S){console&&console.warn&&!w&&(w=!0,console.warn(y+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),process.env.LANG&&process.env.LANG.startsWith("cn")&&console.warn(y+`: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));let L=s(...S);return L.postcssPlugin=y,L.postcssVersion=new m().version,L}return Object.defineProperty(k,"postcss",{get:()=>(g||(g=k()),g)}),k.process=function(S,L,U){return f([k(U)]).process(S,L)},k},f.stringify=d,f.parse=b,f.fromJSON=c,f.list=C,f.comment=y=>new n(y),f.atRule=y=>new h(y),f.decl=y=>new o(y),f.rule=y=>new p(y),f.root=y=>new v(y),f.document=y=>new r(y),f.CssSyntaxError=l,f.Declaration=o,f.Container=a,f.Processor=m,f.Document=r,f.Comment=n,f.Warning=i,f.AtRule=h,f.Result=u,f.Input=x,f.Rule=p,f.Root=v,f.Node=M,A.registerPostcss(f),I.exports=f,f.default=f},3878:(I,t,e)=>{"use strict";let{SourceMapConsumer:l,SourceMapGenerator:o}=e(1866),{existsSync:A,readFileSync:a}=e(9977),{dirname:m,join:d}=e(197);class c{constructor(i,n){if(n.map===!1)return;this.loadAnnotation(i),this.inline=this.startWith(this.annotation,"data:");let h=n.map?n.map.prev:void 0,u=this.loadMap(n.from,h);!this.mapFile&&n.from&&(this.mapFile=n.from),this.mapFile&&(this.root=m(this.mapFile)),u&&(this.text=u)}consumer(){return this.consumerCache||(this.consumerCache=new l(this.text)),this.consumerCache}decodeInline(i){if(/^data:application\/json;charset=utf-?8,/.test(i)||/^data:application\/json,/.test(i))return decodeURIComponent(i.substr(RegExp.lastMatch.length));if(/^data:application\/json;charset=utf-?8;base64,/.test(i)||/^data:application\/json;base64,/.test(i))return n=i.substr(RegExp.lastMatch.length),Buffer?Buffer.from(n,"base64").toString():window.atob(n);var n;let h=i.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+h)}getAnnotationURL(i){return i.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(i){return typeof i=="object"&&(typeof i.mappings=="string"||typeof i._mappings=="string"||Array.isArray(i.sections))}loadAnnotation(i){let n=i.match(/\/\*\s*# sourceMappingURL=/gm);if(!n)return;let h=i.lastIndexOf(n.pop()),u=i.indexOf("*/",h);h>-1&&u>-1&&(this.annotation=this.getAnnotationURL(i.substring(h,u)))}loadFile(i){if(this.root=m(i),A(i))return this.mapFile=i,a(i,"utf-8").toString().trim()}loadMap(i,n){if(n===!1)return!1;if(n){if(typeof n=="string")return n;if(typeof n!="function"){if(n instanceof l)return o.fromSourceMap(n).toString();if(n instanceof o)return n.toString();if(this.isMap(n))return JSON.stringify(n);throw new Error("Unsupported previous source map format: "+n.toString())}{let h=n(i);if(h){let u=this.loadFile(h);if(!u)throw new Error("Unable to load previous source map: "+h.toString());return u}}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let h=this.annotation;return i&&(h=d(m(i),h)),this.loadFile(h)}}}startWith(i,n){return!!i&&i.substr(0,n.length)===n}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}}I.exports=c,c.default=c},6846:(I,t,e)=>{"use strict";let l=e(4211),o=e(6966),A=e(145),a=e(5644);class m{constructor(c=[]){this.version="8.4.33",this.plugins=this.normalize(c)}normalize(c){let r=[];for(let i of c)if(i.postcss===!0?i=i():i.postcss&&(i=i.postcss),typeof i=="object"&&Array.isArray(i.plugins))r=r.concat(i.plugins);else if(typeof i=="object"&&i.postcssPlugin)r.push(i);else if(typeof i=="function")r.push(i);else if(typeof i!="object"||!i.parse&&!i.stringify)throw new Error(i+" is not a PostCSS plugin");return r}process(c,r={}){return this.plugins.length||r.parser||r.stringifier||r.syntax?new o(this,c,r):new l(this,c,r)}use(c){return this.plugins=this.plugins.concat(this.normalize([c])),this}}I.exports=m,m.default=m,a.registerProcessor(m),A.registerProcessor(m)},3717:(I,t,e)=>{"use strict";let l=e(38);class o{constructor(a,m,d){this.processor=a,this.messages=[],this.root=m,this.opts=d,this.css=void 0,this.map=void 0}toString(){return this.css}warn(a,m={}){m.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(m.plugin=this.lastPlugin.postcssPlugin);let d=new l(a,m);return this.messages.push(d),d}warnings(){return this.messages.filter(a=>a.type==="warning")}get content(){return this.css}}I.exports=o,o.default=o},5644:(I,t,e)=>{"use strict";let l,o,A=e(7793);class a extends A{constructor(d){super(d),this.type="root",this.nodes||(this.nodes=[])}normalize(d,c,r){let i=super.normalize(d);if(c){if(r==="prepend")this.nodes.length>1?c.raws.before=this.nodes[1].raws.before:delete c.raws.before;else if(this.first!==c)for(let n of i)n.raws.before=c.raws.before}return i}removeChild(d,c){let r=this.index(d);return!c&&r===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[r].raws.before),super.removeChild(d)}toResult(d={}){return new l(new o,this,d).stringify()}}a.registerLazyResult=m=>{l=m},a.registerProcessor=m=>{o=m},I.exports=a,a.default=a,A.registerRoot(a)},1534:(I,t,e)=>{"use strict";let l=e(7793),o=e(1752);class A extends l{constructor(m){super(m),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return o.comma(this.selector)}set selectors(m){let d=this.selector?this.selector.match(/,\s*/):null,c=d?d[0]:","+this.raw("between","beforeOpen");this.selector=m.join(c)}}I.exports=A,A.default=A,l.registerRule(A)},7668:I=>{"use strict";const t={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};class e{constructor(o){this.builder=o}atrule(o,A){let a="@"+o.name,m=o.params?this.rawValue(o,"params"):"";if(o.raws.afterName!==void 0?a+=o.raws.afterName:m&&(a+=" "),o.nodes)this.block(o,a+m);else{let d=(o.raws.between||"")+(A?";":"");this.builder(a+m+d,o)}}beforeAfter(o,A){let a;a=o.type==="decl"?this.raw(o,null,"beforeDecl"):o.type==="comment"?this.raw(o,null,"beforeComment"):A==="before"?this.raw(o,null,"beforeRule"):this.raw(o,null,"beforeClose");let m=o.parent,d=0;for(;m&&m.type!=="root";)d+=1,m=m.parent;if(a.includes(`
`)){let c=this.raw(o,null,"indent");if(c.length)for(let r=0;r<d;r++)a+=c}return a}block(o,A){let a,m=this.raw(o,"between","beforeOpen");this.builder(A+m+"{",o,"start"),o.nodes&&o.nodes.length?(this.body(o),a=this.raw(o,"after")):a=this.raw(o,"after","emptyBody"),a&&this.builder(a),this.builder("}",o,"end")}body(o){let A=o.nodes.length-1;for(;A>0&&o.nodes[A].type==="comment";)A-=1;let a=this.raw(o,"semicolon");for(let m=0;m<o.nodes.length;m++){let d=o.nodes[m],c=this.raw(d,"before");c&&this.builder(c),this.stringify(d,A!==m||a)}}comment(o){let A=this.raw(o,"left","commentLeft"),a=this.raw(o,"right","commentRight");this.builder("/*"+A+o.text+a+"*/",o)}decl(o,A){let a=this.raw(o,"between","colon"),m=o.prop+a+this.rawValue(o,"value");o.important&&(m+=o.raws.important||" !important"),A&&(m+=";"),this.builder(m,o)}document(o){this.body(o)}raw(o,A,a){let m;if(a||(a=A),A&&(m=o.raws[A],m!==void 0))return m;let d=o.parent;if(a==="before"&&(!d||d.type==="root"&&d.first===o||d&&d.type==="document"))return"";if(!d)return t[a];let c=o.root();if(c.rawCache||(c.rawCache={}),c.rawCache[a]!==void 0)return c.rawCache[a];if(a==="before"||a==="after")return this.beforeAfter(o,a);{let i="raw"+((r=a)[0].toUpperCase()+r.slice(1));this[i]?m=this[i](c,o):c.walk(n=>{if(m=n.raws[A],m!==void 0)return!1})}var r;return m===void 0&&(m=t[a]),c.rawCache[a]=m,m}rawBeforeClose(o){let A;return o.walk(a=>{if(a.nodes&&a.nodes.length>0&&a.raws.after!==void 0)return A=a.raws.after,A.includes(`
`)&&(A=A.replace(/[^\n]+$/,"")),!1}),A&&(A=A.replace(/\S/g,"")),A}rawBeforeComment(o,A){let a;return o.walkComments(m=>{if(m.raws.before!==void 0)return a=m.raws.before,a.includes(`
`)&&(a=a.replace(/[^\n]+$/,"")),!1}),a===void 0?a=this.raw(A,null,"beforeDecl"):a&&(a=a.replace(/\S/g,"")),a}rawBeforeDecl(o,A){let a;return o.walkDecls(m=>{if(m.raws.before!==void 0)return a=m.raws.before,a.includes(`
`)&&(a=a.replace(/[^\n]+$/,"")),!1}),a===void 0?a=this.raw(A,null,"beforeRule"):a&&(a=a.replace(/\S/g,"")),a}rawBeforeOpen(o){let A;return o.walk(a=>{if(a.type!=="decl"&&(A=a.raws.between,A!==void 0))return!1}),A}rawBeforeRule(o){let A;return o.walk(a=>{if(a.nodes&&(a.parent!==o||o.first!==a)&&a.raws.before!==void 0)return A=a.raws.before,A.includes(`
`)&&(A=A.replace(/[^\n]+$/,"")),!1}),A&&(A=A.replace(/\S/g,"")),A}rawColon(o){let A;return o.walkDecls(a=>{if(a.raws.between!==void 0)return A=a.raws.between.replace(/[^\s:]/g,""),!1}),A}rawEmptyBody(o){let A;return o.walk(a=>{if(a.nodes&&a.nodes.length===0&&(A=a.raws.after,A!==void 0))return!1}),A}rawIndent(o){if(o.raws.indent)return o.raws.indent;let A;return o.walk(a=>{let m=a.parent;if(m&&m!==o&&m.parent&&m.parent===o&&a.raws.before!==void 0){let d=a.raws.before.split(`
`);return A=d[d.length-1],A=A.replace(/\S/g,""),!1}}),A}rawSemicolon(o){let A;return o.walk(a=>{if(a.nodes&&a.nodes.length&&a.last.type==="decl"&&(A=a.raws.semicolon,A!==void 0))return!1}),A}rawValue(o,A){let a=o[A],m=o.raws[A];return m&&m.value===a?m.raw:a}root(o){this.body(o),o.raws.after&&this.builder(o.raws.after)}rule(o){this.block(o,this.rawValue(o,"selector")),o.raws.ownSemicolon&&this.builder(o.raws.ownSemicolon,o,"end")}stringify(o,A){if(!this[o.type])throw new Error("Unknown AST node type "+o.type+". Maybe you need to change PostCSS stringifier.");this[o.type](o,A)}}I.exports=e,e.default=e},3303:(I,t,e)=>{"use strict";let l=e(7668);function o(A,a){new l(a).stringify(A)}I.exports=o,o.default=o},4151:I=>{"use strict";I.exports.isClean=Symbol("isClean"),I.exports.my=Symbol("my")},5781:I=>{"use strict";const t="'".charCodeAt(0),e='"'.charCodeAt(0),l="\\".charCodeAt(0),o="/".charCodeAt(0),A=`
`.charCodeAt(0),a=" ".charCodeAt(0),m="\f".charCodeAt(0),d="	".charCodeAt(0),c="\r".charCodeAt(0),r="[".charCodeAt(0),i="]".charCodeAt(0),n="(".charCodeAt(0),h=")".charCodeAt(0),u="{".charCodeAt(0),x="}".charCodeAt(0),b=";".charCodeAt(0),C="*".charCodeAt(0),p=":".charCodeAt(0),v="@".charCodeAt(0),M=/[\t\n\f\r "#'()/;[\\\]{}]/g,f=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,y=/.[\r\n"'(/\\]/,s=/[\da-f]/i;I.exports=function(g,w={}){let k,S,L,U,F,R,E,$,W,ee,V=g.css.valueOf(),ne=w.ignoreErrors,P=V.length,N=0,Z=[],K=[];function he(de){throw g.error("Unclosed "+de,N)}return{back:function(de){K.push(de)},endOfFile:function(){return K.length===0&&N>=P},nextToken:function(de){if(K.length)return K.pop();if(N>=P)return;let _=!!de&&de.ignoreUnclosed;switch(k=V.charCodeAt(N),k){case A:case a:case d:case c:case m:S=N;do S+=1,k=V.charCodeAt(S);while(k===a||k===A||k===d||k===c||k===m);ee=["space",V.slice(N,S)],N=S-1;break;case r:case i:case u:case x:case p:case b:case h:{let Q=String.fromCharCode(k);ee=[Q,Q,N];break}case n:if($=Z.length?Z.pop()[1]:"",W=V.charCodeAt(N+1),$==="url"&&W!==t&&W!==e&&W!==a&&W!==A&&W!==d&&W!==m&&W!==c){S=N;do{if(R=!1,S=V.indexOf(")",S+1),S===-1){if(ne||_){S=N;break}he("bracket")}for(E=S;V.charCodeAt(E-1)===l;)E-=1,R=!R}while(R);ee=["brackets",V.slice(N,S+1),N,S],N=S}else S=V.indexOf(")",N+1),U=V.slice(N,S+1),S===-1||y.test(U)?ee=["(","(",N]:(ee=["brackets",U,N,S],N=S);break;case t:case e:L=k===t?"'":'"',S=N;do{if(R=!1,S=V.indexOf(L,S+1),S===-1){if(ne||_){S=N+1;break}he("string")}for(E=S;V.charCodeAt(E-1)===l;)E-=1,R=!R}while(R);ee=["string",V.slice(N,S+1),N,S],N=S;break;case v:M.lastIndex=N+1,M.test(V),S=M.lastIndex===0?V.length-1:M.lastIndex-2,ee=["at-word",V.slice(N,S+1),N,S],N=S;break;case l:for(S=N,F=!0;V.charCodeAt(S+1)===l;)S+=1,F=!F;if(k=V.charCodeAt(S+1),F&&k!==o&&k!==a&&k!==A&&k!==d&&k!==c&&k!==m&&(S+=1,s.test(V.charAt(S)))){for(;s.test(V.charAt(S+1));)S+=1;V.charCodeAt(S+1)===a&&(S+=1)}ee=["word",V.slice(N,S+1),N,S],N=S;break;default:k===o&&V.charCodeAt(N+1)===C?(S=V.indexOf("*/",N+2)+1,S===0&&(ne||_?S=V.length:he("comment")),ee=["comment",V.slice(N,S+1),N,S],N=S):(f.lastIndex=N+1,f.test(V),S=f.lastIndex===0?V.length-1:f.lastIndex-2,ee=["word",V.slice(N,S+1),N,S],Z.push(ee),N=S)}return N++,ee},position:function(){return N}}}},6156:I=>{"use strict";let t={};I.exports=function(e){t[e]||(t[e]=!0,typeof console<"u"&&console.warn&&console.warn(e))}},38:I=>{"use strict";class t{constructor(l,o={}){if(this.type="warning",this.text=l,o.node&&o.node.source){let A=o.node.rangeBy(o);this.line=A.start.line,this.column=A.start.column,this.endLine=A.end.line,this.endColumn=A.end.column}for(let A in o)this[A]=o[A]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}}I.exports=t,t.default=t},3552:()=>{(function(I){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",e={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:e,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};I.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:e}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},e.inside=I.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],A=l.variable[1].inside,a=0;a<o.length;a++)A[o[a]]=I.languages.bash[o[a]];I.languages.sh=I.languages.bash,I.languages.shell=I.languages.bash})(Prism)},1793:()=>{Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}}),Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Prism.languages.c.boolean},4146:()=>{Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},8141:()=>{(function(I){function t(ne,P){return ne.replace(/<<(\d+)>>/g,function(N,Z){return"(?:"+P[+Z]+")"})}function e(ne,P,N){return RegExp(t(ne,P),N||"")}function l(ne,P){for(var N=0;N<P;N++)ne=ne.replace(/<<self>>/g,function(){return"(?:"+ne+")"});return ne.replace(/<<self>>/g,"[^\\s\\S]")}var o="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",A="class enum interface record struct",a="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",m="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function d(ne){return"\\b(?:"+ne.trim().replace(/ /g,"|")+")\\b"}var c=d(A),r=RegExp(d(o+" "+A+" "+a+" "+m)),i=d(A+" "+a+" "+m),n=d(o+" "+A+" "+m),h=l("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),u=l("\\((?:[^()]|<<self>>)*\\)",2),x="@?\\b[A-Za-z_]\\w*\\b",b=t("<<0>>(?:\\s*<<1>>)?",[x,h]),C=t("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[i,b]),p="\\[\\s*(?:,\\s*)*\\]",v=t("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[C,p]),M=t("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[h,u,p]),f=t("\\(<<0>>+(?:,<<0>>+)+\\)",[M]),y=t("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[f,C,p]),s={keyword:r,punctuation:/[<>()?,.:[\]]/},g=`'(?:[^\r
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,w=`"(?:\\\\.|[^\\\\"\r
])*"`;I.languages.csharp=I.languages.extend("clike",{string:[{pattern:e("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:e("(^|[^@$\\\\])<<0>>",[w]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[C]),lookbehind:!0,inside:s},{pattern:e("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[x,y]),lookbehind:!0,inside:s},{pattern:e("(\\busing\\s+)<<0>>(?=\\s*=)",[x]),lookbehind:!0},{pattern:e("(\\b<<0>>\\s+)<<1>>",[c,b]),lookbehind:!0,inside:s},{pattern:e("(\\bcatch\\s*\\(\\s*)<<0>>",[C]),lookbehind:!0,inside:s},{pattern:e("(\\bwhere\\s+)<<0>>",[x]),lookbehind:!0},{pattern:e("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[v]),lookbehind:!0,inside:s},{pattern:e("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[y,n,x]),inside:s}],keyword:r,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),I.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),I.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e("([(,]\\s*)<<0>>(?=\\s*:)",[x]),lookbehind:!0,alias:"punctuation"}}),I.languages.insertBefore("csharp","class-name",{namespace:{pattern:e("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[x]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[u]),lookbehind:!0,alias:"class-name",inside:s},"return-type":{pattern:e("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[y,C]),inside:s,alias:"class-name"},"constructor-invocation":{pattern:e("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[y]),lookbehind:!0,inside:s,alias:"class-name"},"generic-method":{pattern:e("<<0>>\\s*<<1>>(?=\\s*\\()",[x,h]),inside:{function:e("^<<0>>",[x]),generic:{pattern:RegExp(h),alias:"class-name",inside:s}}},"type-list":{pattern:e("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[c,b,x,y,r.source,u,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:e("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[b,u]),lookbehind:!0,greedy:!0,inside:I.languages.csharp},keyword:r,"class-name":{pattern:RegExp(y),greedy:!0,inside:s},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var k=w+"|"+g,S=t(`/(?![*/])|//[^\r
]*[\r
]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>`,[k]),L=l(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[S]),2),U="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",F=t("<<0>>(?:\\s*\\(<<1>>*\\))?",[C,L]);I.languages.insertBefore("csharp","class-name",{attribute:{pattern:e("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[U,F]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e("^<<0>>(?=\\s*:)",[U]),alias:"keyword"},"attribute-arguments":{pattern:e("\\(<<0>>*\\)",[L]),inside:I.languages.csharp},"class-name":{pattern:RegExp(C),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var R=`:[^}\r
]+`,E=l(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[S]),2),$=t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[E,R]),W=l(t(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`,[k]),2),ee=t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[W,R]);function V(ne,P){return{interpolation:{pattern:e("((?:^|[^{])(?:\\{\\{)*)<<0>>",[ne]),lookbehind:!0,inside:{"format-string":{pattern:e("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[P,R]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:I.languages.csharp}}},string:/[\s\S]+/}}I.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[$]),lookbehind:!0,greedy:!0,inside:V($,E)},{pattern:e('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[ee]),lookbehind:!0,greedy:!0,inside:V(ee,W)}],char:{pattern:RegExp(g),greedy:!0}}),I.languages.dotnet=I.languages.cs=I.languages.csharp})(Prism)},827:()=>{(function(I){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;I.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},I.languages.css.atrule.inside.rest=I.languages.css;var e=I.languages.markup;e&&(e.tag.addInlined("style","css"),e.tag.addAttribute("style","css"))})(Prism)},8753:()=>{(function(I){I.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var t={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(t).forEach(function(e){var l=t[e],o=[];/^\w+$/.test(e)||o.push(/\w+/.exec(e)[0]),e==="diff"&&o.push("bold"),I.languages.diff[e]={pattern:RegExp("^(?:["+l+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:o,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(I.languages.diff,"PREFIXES",{value:t})})(Prism)},8714:()=>{var I,t,e,l;I=Prism,t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,e="(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",l={pattern:RegExp("(^|[^\\w.])"+e+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}},I.languages.java=I.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[l,{pattern:RegExp("(^|[^\\w.])"+e+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),lookbehind:!0,inside:l.inside},{pattern:RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)"+e+"[A-Z]\\w*\\b"),lookbehind:!0,inside:l.inside}],keyword:t,function:[I.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),I.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),I.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":l,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp("(\\bimport\\s+)"+e+"(?:[A-Z]\\w*|\\*)(?=\\s*;)"),lookbehind:!0,inside:{namespace:l.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp("(\\bimport\\s+static\\s+)"+e+"(?:\\w+|\\*)(?=\\s*;)"),lookbehind:!0,alias:"static",inside:{namespace:l.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})},2661:()=>{Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript},3564:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},5841:()=>{(function(I){var t=I.util.clone(I.languages.javascript),e="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function l(a,m){return a=a.replace(/<S>/g,function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"}).replace(/<BRACES>/g,function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"}).replace(/<SPREAD>/g,function(){return e}),RegExp(a,m)}e=l(e).source,I.languages.jsx=I.languages.extend("markup",t),I.languages.jsx.tag.pattern=l(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`),I.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,I.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,I.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,I.languages.jsx.tag.inside.comment=t.comment,I.languages.insertBefore("inside","attr-name",{spread:{pattern:l("<SPREAD>"),inside:I.languages.jsx}},I.languages.jsx.tag),I.languages.insertBefore("inside","special-attr",{script:{pattern:l("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:I.languages.jsx}}},I.languages.jsx.tag);var o=function(a){return a?typeof a=="string"?a:typeof a.content=="string"?a.content:a.content.map(o).join(""):""},A=function(a){for(var m=[],d=0;d<a.length;d++){var c=a[d],r=!1;if(typeof c!="string"&&(c.type==="tag"&&c.content[0]&&c.content[0].type==="tag"?c.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===o(c.content[0].content[1])&&m.pop():c.content[c.content.length-1].content==="/>"||m.push({tagName:o(c.content[0].content[1]),openedBraces:0}):m.length>0&&c.type==="punctuation"&&c.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&c.type==="punctuation"&&c.content==="}"?m[m.length-1].openedBraces--:r=!0),(r||typeof c=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var i=o(c);d<a.length-1&&(typeof a[d+1]=="string"||a[d+1].type==="plain-text")&&(i+=o(a[d+1]),a.splice(d+1,1)),d>0&&(typeof a[d-1]=="string"||a[d-1].type==="plain-text")&&(i=o(a[d-1])+i,a.splice(d-1,1),d--),a[d]=new I.Token("plain-text",i,null,i)}c.content&&typeof c.content!="string"&&A(c.content)}};I.hooks.add("after-tokenize",function(a){a.language!=="jsx"&&a.language!=="tsx"||A(a.tokens)})})(Prism)},3643:()=>{Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}})},6890:()=>{Prism.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}},3467:()=>{(function(I){function t(d){return d=d.replace(/<inner>/g,function(){return`(?:\\\\.|[^\\\\
\r]|(?:
|\r
?)(?![\r
]))`}),RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:"+d+")")}var e="(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",l=`\\|?__(?:\\|__)+\\|?(?:(?:
|\r
?)|(?![^]))`.replace(/__/g,function(){return e}),o=`\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:
|\r
?)`;I.languages.markdown=I.languages.extend("markup",{}),I.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:I.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+l+o+"(?:"+l+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+l+o+")(?:"+l+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(e),inside:I.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+l+")"+o+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+l+"$"),inside:{"table-header":{pattern:RegExp(e),alias:"important",inside:I.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:t("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t("(~~?)(?:(?!~)<inner>)+\\2"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:t('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])'),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(d){["url","bold","italic","strike","code-snippet"].forEach(function(c){d!==c&&(I.languages.markdown[d].inside.content.inside[c]=I.languages.markdown[c])})}),I.hooks.add("after-tokenize",function(d){d.language!=="markdown"&&d.language!=="md"||function c(r){if(r&&typeof r!="string")for(var i=0,n=r.length;i<n;i++){var h=r[i];if(h.type==="code"){var u=h.content[1],x=h.content[3];if(u&&x&&u.type==="code-language"&&x.type==="code-block"&&typeof u.content=="string"){var b=u.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),C="language-"+(b=(/[a-z][\w-]*/i.exec(b)||[""])[0].toLowerCase());x.alias?typeof x.alias=="string"?x.alias=[x.alias,C]:x.alias.push(C):x.alias=[C]}}else c(h.content)}}(d.tokens)}),I.hooks.add("wrap",function(d){if(d.type==="code-block"){for(var c="",r=0,i=d.classes.length;r<i;r++){var n=d.classes[r],h=/language-(.+)/.exec(n);if(h){c=h[1];break}}var u=I.languages[c];if(u)d.content=I.highlight(d.content.replace(A,"").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(b,C){var p;return(C=C.toLowerCase())[0]==="#"?(p=C[1]==="x"?parseInt(C.slice(2),16):Number(C.slice(1)),m(p)):a[C]||b}),u,c);else if(c&&c!=="none"&&I.plugins.autoloader){var x="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random());d.attributes.id=x,I.plugins.autoloader.loadLanguages(c,function(){var b=document.getElementById(x);b&&(b.innerHTML=I.highlight(b.textContent,I.languages[c],c))})}}});var A=RegExp(I.languages.markup.tag.pattern.source,"gi"),a={amp:"&",lt:"<",gt:">",quot:'"'},m=String.fromCodePoint||String.fromCharCode;I.languages.md=I.languages.markdown})(Prism)},4818:()=>{Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(I){I.type==="entity"&&(I.attributes.title=I.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(I,t){var e={};e["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},e.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:e}};l["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var o={};o[I]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return I}),"i"),lookbehind:!0,greedy:!0,inside:l},Prism.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(I,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+I+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml},8606:()=>{var I,t;I=Prism,t="(?:"+["$eq","$gt","$gte","$in","$lt","$lte","$ne","$nin","$and","$not","$nor","$or","$exists","$type","$expr","$jsonSchema","$mod","$regex","$text","$where","$geoIntersects","$geoWithin","$near","$nearSphere","$all","$elemMatch","$size","$bitsAllClear","$bitsAllSet","$bitsAnyClear","$bitsAnySet","$comment","$elemMatch","$meta","$slice","$currentDate","$inc","$min","$max","$mul","$rename","$set","$setOnInsert","$unset","$addToSet","$pop","$pull","$push","$pullAll","$each","$position","$slice","$sort","$bit","$addFields","$bucket","$bucketAuto","$collStats","$count","$currentOp","$facet","$geoNear","$graphLookup","$group","$indexStats","$limit","$listLocalSessions","$listSessions","$lookup","$match","$merge","$out","$planCacheStats","$project","$redact","$replaceRoot","$replaceWith","$sample","$set","$skip","$sort","$sortByCount","$unionWith","$unset","$unwind","$setWindowFields","$abs","$accumulator","$acos","$acosh","$add","$addToSet","$allElementsTrue","$and","$anyElementTrue","$arrayElemAt","$arrayToObject","$asin","$asinh","$atan","$atan2","$atanh","$avg","$binarySize","$bsonSize","$ceil","$cmp","$concat","$concatArrays","$cond","$convert","$cos","$dateFromParts","$dateToParts","$dateFromString","$dateToString","$dayOfMonth","$dayOfWeek","$dayOfYear","$degreesToRadians","$divide","$eq","$exp","$filter","$first","$floor","$function","$gt","$gte","$hour","$ifNull","$in","$indexOfArray","$indexOfBytes","$indexOfCP","$isArray","$isNumber","$isoDayOfWeek","$isoWeek","$isoWeekYear","$last","$last","$let","$literal","$ln","$log","$log10","$lt","$lte","$ltrim","$map","$max","$mergeObjects","$meta","$min","$millisecond","$minute","$mod","$month","$multiply","$ne","$not","$objectToArray","$or","$pow","$push","$radiansToDegrees","$range","$reduce","$regexFind","$regexFindAll","$regexMatch","$replaceOne","$replaceAll","$reverseArray","$round","$rtrim","$second","$setDifference","$setEquals","$setIntersection","$setIsSubset","$setUnion","$size","$sin","$slice","$split","$sqrt","$stdDevPop","$stdDevSamp","$strcasecmp","$strLenBytes","$strLenCP","$substr","$substrBytes","$substrCP","$subtract","$sum","$switch","$tan","$toBool","$toDate","$toDecimal","$toDouble","$toInt","$toLong","$toObjectId","$toString","$toLower","$toUpper","$trim","$trunc","$type","$week","$year","$zip","$count","$dateAdd","$dateDiff","$dateSubtract","$dateTrunc","$getField","$rand","$sampleRate","$setField","$unsetField","$comment","$explain","$hint","$max","$maxTimeMS","$min","$orderby","$query","$returnKey","$showDiskLoc","$natural"].map(function(e){return e.replace("$","\\$")}).join("|")+")\\b",I.languages.mongodb=I.languages.extend("javascript",{}),I.languages.insertBefore("mongodb","string",{property:{pattern:/(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,greedy:!0,inside:{keyword:RegExp(`^(['"])?`+t+"(?:\\1)?$")}}}),I.languages.mongodb.string.inside={url:{pattern:/https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,greedy:!0},entity:{pattern:/\b(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])\b/,greedy:!0}},I.languages.insertBefore("mongodb","constant",{builtin:{pattern:RegExp("\\b(?:"+["ObjectId","Code","BinData","DBRef","Timestamp","NumberLong","NumberDecimal","MaxKey","MinKey","RegExp","ISODate","UUID"].join("|")+")\\b"),alias:"keyword"}})},1014:()=>{Prism.languages.objectivec=Prism.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete Prism.languages.objectivec["class-name"],Prism.languages.objc=Prism.languages.objectivec},6792:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},8871:()=>{var I,t,e,l,o,A;I=Prism,t={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},l="(?:[^\\\\-]|"+(e=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source+")",o=RegExp(l+"-"+l),A={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"},I.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:o,inside:{escape:e,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":t,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:e}},"special-escape":t,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":A}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:e,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":A}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}},5358:()=>{Prism.languages.scala=Prism.languages.extend("java",{"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/<-|=>|\b(?:abstract|case|catch|class|def|derives|do|else|enum|extends|extension|final|finally|for|forSome|given|if|implicit|import|infix|inline|lazy|match|new|null|object|opaque|open|override|package|private|protected|return|sealed|self|super|this|throw|trait|transparent|try|type|using|val|var|while|with|yield)\b/,number:/\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,builtin:/\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,symbol:/'[^\d\s\\]\w*/}),Prism.languages.insertBefore("scala","triple-quoted-string",{"string-interpolation":{pattern:/\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,greedy:!0,inside:{id:{pattern:/^\w+/,greedy:!0,alias:"function"},escape:{pattern:/\\\$"|\$[$"]/,greedy:!0,alias:"symbol"},interpolation:{pattern:/\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,greedy:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:Prism.languages.scala}}},string:/[\s\S]+/}}}),delete Prism.languages.scala["class-name"],delete Prism.languages.scala.function,delete Prism.languages.scala.constant},6414:()=>{Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss},4547:()=>{(function(I){var t=I.util.clone(I.languages.typescript);I.languages.tsx=I.languages.extend("jsx",t),delete I.languages.tsx.parameter,delete I.languages.tsx["literal-property"];var e=I.languages.tsx.tag;e.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+e.pattern.source+")",e.pattern.flags),e.lookbehind=!0})(Prism)},8125:()=>{(function(I){I.languages.typescript=I.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),I.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete I.languages.typescript.parameter,delete I.languages.typescript["literal-property"];var t=I.languages.extend("typescript",{});delete t["class-name"],I.languages.typescript["class-name"].inside=t,I.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),I.languages.ts=I.languages.typescript})(Prism)},8226:()=>{(function(I){function t(A,a){I.languages[A]&&I.languages.insertBefore(A,"comment",{"doc-comment":a})}var e=I.languages.markup.tag,l={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:e}},o={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:e}};t("csharp",l),t("fsharp",l),t("vbnet",o)})(Prism)},3493:()=>{(function(){if(typeof Prism<"u"){var I=/^diff-([\w-]+)/i,t=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,e=RegExp(`(?:__|[^\r
<])*(?:\r
?|
|(?:__|[^\r
<])(?![^\r
]))`.replace(/__/g,function(){return t.source}),"gi"),l=!1;Prism.hooks.add("before-sanity-check",function(o){var A=o.language;I.test(A)&&!o.grammar&&(o.grammar=Prism.languages[A]=Prism.languages.diff)}),Prism.hooks.add("before-tokenize",function(o){l||Prism.languages.diff||Prism.plugins.autoloader||(l=!0,console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."));var A=o.language;I.test(A)&&!Prism.languages[A]&&(Prism.languages[A]=Prism.languages.diff)}),Prism.hooks.add("wrap",function(o){var A,a;if(o.language!=="diff"){var m=I.exec(o.language);if(!m)return;A=m[1],a=Prism.languages[A]}var d=Prism.languages.diff&&Prism.languages.diff.PREFIXES;if(d&&o.type in d){var c,r=o.content.replace(t,"").replace(/&lt;/g,"<").replace(/&amp;/g,"&"),i=r.replace(/(^|[\r\n])./g,"$1");c=a?Prism.highlight(i,a,A):Prism.util.encode(i);var n,h=new Prism.Token("prefix",d[o.type],[/\w+/.exec(o.type)[0]]),u=Prism.Token.stringify(h,o.language),x=[];for(e.lastIndex=0;n=e.exec(c);)x.push(u+n[0]);/(?:^|[\r\n]).$/.test(r)&&x.push(u),o.content=x.join(""),a&&o.classes.push("language-"+A)}})}})()},4173:()=>{typeof Prism<"u"&&typeof document<"u"&&document.createRange&&(Prism.plugins.KeepMarkup=!0,Prism.hooks.add("before-highlight",function(I){if(I.element.children.length&&Prism.util.isActive(I.element,"keep-markup",!0)){var t=Prism.util.isActive(I.element,"drop-tokens",!1),e=0,l=[];A(I.element),l.length&&(I.keepMarkup=l)}function o(a){if(function(d){return!t||d.nodeName.toLowerCase()!=="span"||!d.classList.contains("token")}(a)){var m={element:a,posOpen:e};l.push(m),A(a),m.posClose=e}else A(a)}function A(a){for(var m=0,d=a.childNodes.length;m<d;m++){var c=a.childNodes[m];c.nodeType===1?o(c):c.nodeType===3&&(e+=c.data.length)}}}),Prism.hooks.add("after-highlight",function(I){if(I.keepMarkup&&I.keepMarkup.length){var t=function(e,l){for(var o=0,A=e.childNodes.length;o<A;o++){var a=e.childNodes[o];if(a.nodeType===1){if(!t(a,l))return!1}else a.nodeType===3&&(!l.nodeStart&&l.pos+a.data.length>l.node.posOpen&&(l.nodeStart=a,l.nodeStartPos=l.node.posOpen-l.pos),l.nodeStart&&l.pos+a.data.length>=l.node.posClose&&(l.nodeEnd=a,l.nodeEndPos=l.node.posClose-l.pos),l.pos+=a.data.length);if(l.nodeStart&&l.nodeEnd){var m=document.createRange();return m.setStart(l.nodeStart,l.nodeStartPos),m.setEnd(l.nodeEnd,l.nodeEndPos),l.node.element.innerHTML="",l.node.element.appendChild(m.extractContents()),m.insertNode(l.node.element),m.detach(),!1}}return!0};I.keepMarkup.forEach(function(e){t(I.element,{node:e,pos:0})}),I.highlightedCode=I.element.innerHTML}}))},6837:()=>{(function(){if(typeof Prism<"u"&&typeof document<"u"){var I="line-numbers",t=/\n(?!$)/g,e=Prism.plugins.lineNumbers={getLine:function(A,a){if(A.tagName==="PRE"&&A.classList.contains(I)){var m=A.querySelector(".line-numbers-rows");if(m){var d=parseInt(A.getAttribute("data-start"),10)||1,c=d+(m.children.length-1);a<d&&(a=d),a>c&&(a=c);var r=a-d;return m.children[r]}}},resize:function(A){o([A])},assumeViewportIndependence:!0},l=void 0;window.addEventListener("resize",function(){e.assumeViewportIndependence&&l===window.innerWidth||(l=window.innerWidth,o(Array.prototype.slice.call(document.querySelectorAll("pre."+I))))}),Prism.hooks.add("complete",function(A){if(A.code){var a=A.element,m=a.parentNode;if(m&&/pre/i.test(m.nodeName)&&!a.querySelector(".line-numbers-rows")&&Prism.util.isActive(a,I)){a.classList.remove(I),m.classList.add(I);var d,c=A.code.match(t),r=c?c.length+1:1,i=new Array(r+1).join("<span></span>");(d=document.createElement("span")).setAttribute("aria-hidden","true"),d.className="line-numbers-rows",d.innerHTML=i,m.hasAttribute("data-start")&&(m.style.counterReset="linenumber "+(parseInt(m.getAttribute("data-start"),10)-1)),A.element.appendChild(d),o([m]),Prism.hooks.run("line-numbers",A)}}}),Prism.hooks.add("line-numbers",function(A){A.plugins=A.plugins||{},A.plugins.lineNumbers=!0})}function o(A){if((A=A.filter(function(m){var d,c=(d=m,d?window.getComputedStyle?getComputedStyle(d):d.currentStyle||null:null)["white-space"];return c==="pre-wrap"||c==="pre-line"})).length!=0){var a=A.map(function(m){var d=m.querySelector("code"),c=m.querySelector(".line-numbers-rows");if(d&&c){var r=m.querySelector(".line-numbers-sizer"),i=d.textContent.split(t);r||((r=document.createElement("span")).className="line-numbers-sizer",d.appendChild(r)),r.innerHTML="0",r.style.display="block";var n=r.getBoundingClientRect().height;return r.innerHTML="",{element:m,lines:i,lineHeights:[],oneLinerHeight:n,sizer:r}}}).filter(Boolean);a.forEach(function(m){var d=m.sizer,c=m.lines,r=m.lineHeights,i=m.oneLinerHeight;r[c.length-1]=void 0,c.forEach(function(n,h){if(n&&n.length>1){var u=d.appendChild(document.createElement("span"));u.style.display="block",u.textContent=n}else r[h]=i})}),a.forEach(function(m){for(var d=m.sizer,c=m.lineHeights,r=0,i=0;i<c.length;i++)c[i]===void 0&&(c[i]=d.children[r++].getBoundingClientRect().height)}),a.forEach(function(m){var d=m.sizer,c=m.element.querySelector(".line-numbers-rows");d.style.display="none",d.innerHTML="",m.lineHeights.forEach(function(r,i){c.children[i].style.height=r+"px"})})}}})()},8848:(I,t,e)=>{var l=function(o){var A=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,m={},d={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function p(v){return v instanceof c?new c(v.type,p(v.content),v.alias):Array.isArray(v)?v.map(p):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++a}),p.__id},clone:function p(v,M){var f,y;switch(M=M||{},d.util.type(v)){case"Object":if(y=d.util.objId(v),M[y])return M[y];for(var s in f={},M[y]=f,v)v.hasOwnProperty(s)&&(f[s]=p(v[s],M));return f;case"Array":return y=d.util.objId(v),M[y]?M[y]:(f=[],M[y]=f,v.forEach(function(g,w){f[w]=p(g,M)}),f);default:return v}},getLanguage:function(p){for(;p;){var v=A.exec(p.className);if(v)return v[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,v){p.className=p.className.replace(RegExp(A,"gi"),""),p.classList.add("language-"+v)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(f){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(f.stack)||[])[1];if(p){var v=document.getElementsByTagName("script");for(var M in v)if(v[M].src==p)return v[M]}return null}},isActive:function(p,v,M){for(var f="no-"+v;p;){var y=p.classList;if(y.contains(v))return!0;if(y.contains(f))return!1;p=p.parentElement}return!!M}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(p,v){var M=d.util.clone(d.languages[p]);for(var f in v)M[f]=v[f];return M},insertBefore:function(p,v,M,f){var y=(f=f||d.languages)[p],s={};for(var g in y)if(y.hasOwnProperty(g)){if(g==v)for(var w in M)M.hasOwnProperty(w)&&(s[w]=M[w]);M.hasOwnProperty(g)||(s[g]=y[g])}var k=f[p];return f[p]=s,d.languages.DFS(d.languages,function(S,L){L===k&&S!=p&&(this[S]=s)}),s},DFS:function p(v,M,f,y){y=y||{};var s=d.util.objId;for(var g in v)if(v.hasOwnProperty(g)){M.call(v,g,v[g],f||g);var w=v[g],k=d.util.type(w);k!=="Object"||y[s(w)]?k!=="Array"||y[s(w)]||(y[s(w)]=!0,p(w,M,g,y)):(y[s(w)]=!0,p(w,M,null,y))}}},plugins:{},highlightAll:function(p,v){d.highlightAllUnder(document,p,v)},highlightAllUnder:function(p,v,M){var f={callback:M,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};d.hooks.run("before-highlightall",f),f.elements=Array.prototype.slice.apply(f.container.querySelectorAll(f.selector)),d.hooks.run("before-all-elements-highlight",f);for(var y,s=0;y=f.elements[s++];)d.highlightElement(y,v===!0,f.callback)},highlightElement:function(p,v,M){var f=d.util.getLanguage(p),y=d.languages[f];d.util.setLanguage(p,f);var s=p.parentElement;s&&s.nodeName.toLowerCase()==="pre"&&d.util.setLanguage(s,f);var g={element:p,language:f,grammar:y,code:p.textContent};function w(S){g.highlightedCode=S,d.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,d.hooks.run("after-highlight",g),d.hooks.run("complete",g),M&&M.call(g.element)}if(d.hooks.run("before-sanity-check",g),(s=g.element.parentElement)&&s.nodeName.toLowerCase()==="pre"&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!g.code)return d.hooks.run("complete",g),void(M&&M.call(g.element));if(d.hooks.run("before-highlight",g),g.grammar)if(v&&o.Worker){var k=new Worker(d.filename);k.onmessage=function(S){w(S.data)},k.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else w(d.highlight(g.code,g.grammar,g.language));else w(d.util.encode(g.code))},highlight:function(p,v,M){var f={code:p,grammar:v,language:M};if(d.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=d.tokenize(f.code,f.grammar),d.hooks.run("after-tokenize",f),c.stringify(d.util.encode(f.tokens),f.language)},tokenize:function(p,v){var M=v.rest;if(M){for(var f in M)v[f]=M[f];delete v.rest}var y=new n;return h(y,y.head,p),i(p,y,v,y.head,0),function(s){for(var g=[],w=s.head.next;w!==s.tail;)g.push(w.value),w=w.next;return g}(y)},hooks:{all:{},add:function(p,v){var M=d.hooks.all;M[p]=M[p]||[],M[p].push(v)},run:function(p,v){var M=d.hooks.all[p];if(M&&M.length)for(var f,y=0;f=M[y++];)f(v)}},Token:c};function c(p,v,M,f){this.type=p,this.content=v,this.alias=M,this.length=0|(f||"").length}function r(p,v,M,f){p.lastIndex=v;var y=p.exec(M);if(y&&f&&y[1]){var s=y[1].length;y.index+=s,y[0]=y[0].slice(s)}return y}function i(p,v,M,f,y,s){for(var g in M)if(M.hasOwnProperty(g)&&M[g]){var w=M[g];w=Array.isArray(w)?w:[w];for(var k=0;k<w.length;++k){if(s&&s.cause==g+","+k)return;var S=w[k],L=S.inside,U=!!S.lookbehind,F=!!S.greedy,R=S.alias;if(F&&!S.pattern.global){var E=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,E+"g")}for(var $=S.pattern||S,W=f.next,ee=y;W!==v.tail&&!(s&&ee>=s.reach);ee+=W.value.length,W=W.next){var V=W.value;if(v.length>p.length)return;if(!(V instanceof c)){var ne,P=1;if(F){if(!(ne=r($,ee,p,U))||ne.index>=p.length)break;var N=ne.index,Z=ne.index+ne[0].length,K=ee;for(K+=W.value.length;N>=K;)K+=(W=W.next).value.length;if(ee=K-=W.value.length,W.value instanceof c)continue;for(var he=W;he!==v.tail&&(K<Z||typeof he.value=="string");he=he.next)P++,K+=he.value.length;P--,V=p.slice(ee,K),ne.index-=ee}else if(!(ne=r($,0,V,U)))continue;N=ne.index;var de=ne[0],_=V.slice(0,N),Q=V.slice(N+de.length),Y=ee+V.length;s&&Y>s.reach&&(s.reach=Y);var re=W.prev;if(_&&(re=h(v,re,_),ee+=_.length),u(v,re,P),W=h(v,re,new c(g,L?d.tokenize(de,L):de,R,de)),Q&&h(v,W,Q),P>1){var me={cause:g+","+k,reach:Y};i(p,v,M,W.prev,ee,me),s&&me.reach>s.reach&&(s.reach=me.reach)}}}}}}function n(){var p={value:null,prev:null,next:null},v={value:null,prev:p,next:null};p.next=v,this.head=p,this.tail=v,this.length=0}function h(p,v,M){var f=v.next,y={value:M,prev:v,next:f};return v.next=y,f.prev=y,p.length++,y}function u(p,v,M){for(var f=v.next,y=0;y<M&&f!==p.tail;y++)f=f.next;v.next=f,f.prev=v,p.length-=y}if(o.Prism=d,c.stringify=function p(v,M){if(typeof v=="string")return v;if(Array.isArray(v)){var f="";return v.forEach(function(k){f+=p(k,M)}),f}var y={type:v.type,content:p(v.content,M),tag:"span",classes:["token",v.type],attributes:{},language:M},s=v.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(y.classes,s):y.classes.push(s)),d.hooks.run("wrap",y);var g="";for(var w in y.attributes)g+=" "+w+'="'+(y.attributes[w]||"").replace(/"/g,"&quot;")+'"';return"<"+y.tag+' class="'+y.classes.join(" ")+'"'+g+">"+y.content+"</"+y.tag+">"},!o.document)return o.addEventListener&&(d.disableWorkerMessageHandler||o.addEventListener("message",function(p){var v=JSON.parse(p.data),M=v.language,f=v.code,y=v.immediateClose;o.postMessage(d.highlight(f,d.languages[M],M)),y&&o.close()},!1)),d;var x=d.util.currentScript();function b(){d.manual||d.highlightAll()}if(x&&(d.filename=x.src,x.hasAttribute("data-manual")&&(d.manual=!0)),!d.manual){var C=document.readyState;C==="loading"||C==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return d}(typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{});I.exports&&(I.exports=l),e.g!==void 0&&(e.g.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(o,A){var a={};a["language-"+A]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[A]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var m={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};m["language-"+A]={pattern:/[\s\S]+/,inside:l.languages[A]};var d={};d[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:m},l.languages.insertBefore("markup","cdata",d)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(o,A){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[A,"language-"+A],inside:l.languages[A]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,function(o){var A=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+A.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+A.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+A.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+A.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:A,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var a=o.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,function(){if(l!==void 0&&typeof document<"u"){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},A="data-src-status",a="loading",m="loaded",d="pre[data-src]:not(["+A+'="'+m+'"]):not(['+A+'="'+a+'"])';l.hooks.add("before-highlightall",function(r){r.selector+=", "+d}),l.hooks.add("before-sanity-check",function(r){var i=r.element;if(i.matches(d)){r.code="",i.setAttribute(A,a);var n=i.appendChild(document.createElement("CODE"));n.textContent="Loading\u2026";var h=i.getAttribute("data-src"),u=r.language;if(u==="none"){var x=(/\.(\w+)$/.exec(h)||[,"none"])[1];u=o[x]||x}l.util.setLanguage(n,u),l.util.setLanguage(i,u);var b=l.plugins.autoloader;b&&b.loadLanguages(u),function(C,p,v){var M=new XMLHttpRequest;M.open("GET",C,!0),M.onreadystatechange=function(){M.readyState==4&&(M.status<400&&M.responseText?function(f){i.setAttribute(A,m);var y=function(k){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(k||"");if(S){var L=Number(S[1]),U=S[2],F=S[3];return U?F?[L,Number(F)]:[L,void 0]:[L,L]}}(i.getAttribute("data-range"));if(y){var s=f.split(/\r\n?|\n/g),g=y[0],w=y[1]==null?s.length:y[1];g<0&&(g+=s.length),g=Math.max(0,Math.min(g-1,s.length)),w<0&&(w+=s.length),w=Math.max(0,Math.min(w,s.length)),f=s.slice(g,w).join(`
`),i.hasAttribute("data-start")||i.setAttribute("data-start",String(g+1))}n.textContent=f,l.highlightElement(n)}(M.responseText):M.status>=400?v("\u2716 Error "+M.status+" while fetching file: "+M.statusText):v("\u2716 Error: File does not exist or is empty"))},M.send(null)}(h,0,function(C){i.setAttribute(A,"failed"),n.textContent=C})}}),l.plugins.fileHighlight={highlight:function(r){for(var i,n=(r||document).querySelectorAll(d),h=0;i=n[h++];)l.highlightElement(i)}};var c=!1;l.fileHighlight=function(){c||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),c=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},4728:(I,t,e)=>{const l=e(8659),o=e(7151),{isPlainObject:A}=e(6191),a=e(4744),m=e(9466),{parse:d}=e(2895),c=["img","audio","video","picture","svg","object","map","iframe","embed"],r=["script","style"];function i(C,p){C&&Object.keys(C).forEach(function(v){p(C[v],v)})}function n(C,p){return{}.hasOwnProperty.call(C,p)}function h(C,p){const v=[];return i(C,function(M){p(M)&&v.push(M)}),v}I.exports=x;const u=/^[^\0\t\n\f\r /<=>]+$/;function x(C,p,v){if(C==null)return"";typeof C=="number"&&(C=C.toString());let M="",f="";function y(_,Q){const Y=this;this.tag=_,this.attribs=Q||{},this.tagPosition=M.length,this.text="",this.mediaChildren=[],this.updateParentNodeText=function(){$.length&&($[$.length-1].text+=Y.text)},this.updateParentNodeMediaChildren=function(){$.length&&c.includes(this.tag)&&$[$.length-1].mediaChildren.push(this.tag)}}(p=Object.assign({},x.defaults,p)).parser=Object.assign({},b,p.parser);const s=function(_){return p.allowedTags===!1||(p.allowedTags||[]).indexOf(_)>-1};r.forEach(function(_){s(_)&&!p.allowVulnerableTags&&console.warn(`

\u26A0\uFE0F Your \`allowedTags\` option includes, \`${_}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`)});const g=p.nonTextTags||["script","style","textarea","option"];let w,k;p.allowedAttributes&&(w={},k={},i(p.allowedAttributes,function(_,Q){w[Q]=[];const Y=[];_.forEach(function(re){typeof re=="string"&&re.indexOf("*")>=0?Y.push(o(re).replace(/\\\*/g,".*")):w[Q].push(re)}),Y.length&&(k[Q]=new RegExp("^("+Y.join("|")+")$"))}));const S={},L={},U={};i(p.allowedClasses,function(_,Q){if(w&&(n(w,Q)||(w[Q]=[]),w[Q].push("class")),S[Q]=_,Array.isArray(_)){const Y=[];S[Q]=[],U[Q]=[],_.forEach(function(re){typeof re=="string"&&re.indexOf("*")>=0?Y.push(o(re).replace(/\\\*/g,".*")):re instanceof RegExp?U[Q].push(re):S[Q].push(re)}),Y.length&&(L[Q]=new RegExp("^("+Y.join("|")+")$"))}});const F={};let R,E,$,W,ee,V,ne;i(p.transformTags,function(_,Q){let Y;typeof _=="function"?Y=_:typeof _=="string"&&(Y=x.simpleTransform(_)),Q==="*"?R=Y:F[Q]=Y});let P=!1;Z();const N=new l.Parser({onopentag:function(_,Q){if(p.enforceHtmlBoundary&&_==="html"&&Z(),V)return void ne++;const Y=new y(_,Q);$.push(Y);let re=!1;const me=!!Y.text;let Ae;if(n(F,_)&&(Ae=F[_](_,Q),Y.attribs=Q=Ae.attribs,Ae.text!==void 0&&(Y.innerText=Ae.text),_!==Ae.tagName&&(Y.name=_=Ae.tagName,ee[E]=Ae.tagName)),R&&(Ae=R(_,Q),Y.attribs=Q=Ae.attribs,_!==Ae.tagName&&(Y.name=_=Ae.tagName,ee[E]=Ae.tagName)),(!s(_)||p.disallowedTagsMode==="recursiveEscape"&&!function(se){for(const ie in se)if(n(se,ie))return!1;return!0}(W)||p.nestingLimit!=null&&E>=p.nestingLimit)&&(re=!0,W[E]=!0,p.disallowedTagsMode==="discard"&&g.indexOf(_)!==-1&&(V=!0,ne=1),W[E]=!0),E++,re){if(p.disallowedTagsMode==="discard")return;f=M,M=""}M+="<"+_,_==="script"&&(p.allowedScriptHostnames||p.allowedScriptDomains)&&(Y.innerText=""),(!w||n(w,_)||w["*"])&&i(Q,function(se,ie){if(!u.test(ie)||se===""&&!p.allowedEmptyAttributes.includes(ie)&&(p.nonBooleanAttributes.includes(ie)||p.nonBooleanAttributes.includes("*")))return void delete Y.attribs[ie];let ze=!1;if(!w||n(w,_)&&w[_].indexOf(ie)!==-1||w["*"]&&w["*"].indexOf(ie)!==-1||n(k,_)&&k[_].test(ie)||k["*"]&&k["*"].test(ie))ze=!0;else if(w&&w[_]){for(const oe of w[_])if(A(oe)&&oe.name&&oe.name===ie){ze=!0;let q="";if(oe.multiple===!0){const ye=se.split(" ");for(const fe of ye)oe.values.indexOf(fe)!==-1&&(q===""?q=fe:q+=" "+fe)}else oe.values.indexOf(se)>=0&&(q=se);se=q}}if(ze){if(p.allowedSchemesAppliedToAttributes.indexOf(ie)!==-1&&he(_,se))return void delete Y.attribs[ie];if(_==="script"&&ie==="src"){let oe=!0;try{const q=de(se);if(p.allowedScriptHostnames||p.allowedScriptDomains){const ye=(p.allowedScriptHostnames||[]).find(function(ue){return ue===q.url.hostname}),fe=(p.allowedScriptDomains||[]).find(function(ue){return q.url.hostname===ue||q.url.hostname.endsWith(`.${ue}`)});oe=ye||fe}}catch{oe=!1}if(!oe)return void delete Y.attribs[ie]}if(_==="iframe"&&ie==="src"){let oe=!0;try{const q=de(se);if(q.isRelativeUrl)oe=n(p,"allowIframeRelativeUrls")?p.allowIframeRelativeUrls:!p.allowedIframeHostnames&&!p.allowedIframeDomains;else if(p.allowedIframeHostnames||p.allowedIframeDomains){const ye=(p.allowedIframeHostnames||[]).find(function(ue){return ue===q.url.hostname}),fe=(p.allowedIframeDomains||[]).find(function(ue){return q.url.hostname===ue||q.url.hostname.endsWith(`.${ue}`)});oe=ye||fe}}catch{oe=!1}if(!oe)return void delete Y.attribs[ie]}if(ie==="srcset")try{let oe=m(se);if(oe.forEach(function(q){he("srcset",q.url)&&(q.evil=!0)}),oe=h(oe,function(q){return!q.evil}),!oe.length)return void delete Y.attribs[ie];se=h(oe,function(q){return!q.evil}).map(function(q){if(!q.url)throw new Error("URL missing");return q.url+(q.w?` ${q.w}w`:"")+(q.h?` ${q.h}h`:"")+(q.d?` ${q.d}x`:"")}).join(", "),Y.attribs[ie]=se}catch{return void delete Y.attribs[ie]}if(ie==="class"){const oe=S[_],q=S["*"],ye=L[_],fe=U[_],ue=[ye,L["*"]].concat(fe).filter(function(we){return we});if(!(Ie=se,De=oe&&q?a(oe,q):oe||q,xe=ue,se=De?(Ie=Ie.split(/\s+/)).filter(function(we){return De.indexOf(we)!==-1||xe.some(function(Se){return Se.test(we)})}).join(" "):Ie).length)return void delete Y.attribs[ie]}if(ie==="style"){if(p.parseStyleAttributes)try{if(se=function(oe){return oe.nodes[0].nodes.reduce(function(q,ye){return q.push(`${ye.prop}:${ye.value}${ye.important?" !important":""}`),q},[]).join(";")}(function(oe,q){if(!q)return oe;const ye=oe.nodes[0];let fe;return fe=q[ye.selector]&&q["*"]?a(q[ye.selector],q["*"]):q[ye.selector]||q["*"],fe&&(oe.nodes[0].nodes=ye.nodes.reduce(function(ue){return function(we,Se){return n(ue,Se.prop)&&ue[Se.prop].some(function(Le){return Le.test(Se.value)})&&we.push(Se),we}}(fe),[])),oe}(d(_+" {"+se+"}",{map:!1}),p.allowedStyles)),se.length===0)return void delete Y.attribs[ie]}catch{return typeof window<"u"&&console.warn('Failed to parse "'+_+" {"+se+`}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`),void delete Y.attribs[ie]}else if(p.allowedStyles)throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.")}M+=" "+ie,se&&se.length?M+='="'+K(se,!0)+'"':p.allowedEmptyAttributes.includes(ie)&&(M+='=""')}else delete Y.attribs[ie];var Ie,De,xe}),p.selfClosing.indexOf(_)!==-1?M+=" />":(M+=">",!Y.innerText||me||p.textFilter||(M+=K(Y.innerText),P=!0)),re&&(M=f+K(M),f="")},ontext:function(_){if(V)return;const Q=$[$.length-1];let Y;if(Q&&(Y=Q.tag,_=Q.innerText!==void 0?Q.innerText:_),p.disallowedTagsMode!=="discard"||Y!=="script"&&Y!=="style"){const re=K(_,!1);p.textFilter&&!P?M+=p.textFilter(re,Y):P||(M+=re)}else M+=_;$.length&&($[$.length-1].text+=_)},onclosetag:function(_,Q){if(V){if(ne--,ne)return;V=!1}const Y=$.pop();if(!Y)return;if(Y.tag!==_)return void $.push(Y);V=!!p.enforceHtmlBoundary&&_==="html",E--;const re=W[E];if(re){if(delete W[E],p.disallowedTagsMode==="discard")return void Y.updateParentNodeText();f=M,M=""}ee[E]&&(_=ee[E],delete ee[E]),p.exclusiveFilter&&p.exclusiveFilter(Y)?M=M.substr(0,Y.tagPosition):(Y.updateParentNodeMediaChildren(),Y.updateParentNodeText(),p.selfClosing.indexOf(_)!==-1||Q&&!s(_)&&["escape","recursiveEscape"].indexOf(p.disallowedTagsMode)>=0?re&&(M=f,f=""):(M+="</"+_+">",re&&(M=f+K(M),f=""),P=!1))}},p.parser);return N.write(C),N.end(),M;function Z(){M="",E=0,$=[],W={},ee={},V=!1,ne=0}function K(_,Q){return typeof _!="string"&&(_+=""),p.parser.decodeEntities&&(_=_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q&&(_=_.replace(/"/g,"&quot;"))),_=_.replace(/&(?![a-zA-Z0-9#]{1,20};)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q&&(_=_.replace(/"/g,"&quot;")),_}function he(_,Q){for(Q=Q.replace(/[\x00-\x20]+/g,"");;){const me=Q.indexOf("<!--");if(me===-1)break;const Ae=Q.indexOf("-->",me+4);if(Ae===-1)break;Q=Q.substring(0,me)+Q.substring(Ae+3)}const Y=Q.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);if(!Y)return!!Q.match(/^[/\\]{2}/)&&!p.allowProtocolRelative;const re=Y[1].toLowerCase();return n(p.allowedSchemesByTag,_)?p.allowedSchemesByTag[_].indexOf(re)===-1:!p.allowedSchemes||p.allowedSchemes.indexOf(re)===-1}function de(_){if((_=_.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/,"$1//")).startsWith("relative:"))throw new Error("relative: exploit attempt");let Q="relative://relative-site";for(let re=0;re<100;re++)Q+=`/${re}`;const Y=new URL(_,Q);return{isRelativeUrl:Y&&Y.hostname==="relative-site"&&Y.protocol==="relative:",url:Y}}}const b={decodeEntities:!0};x.defaults={allowedTags:["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","main","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rb","rp","rt","rtc","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr"],nonBooleanAttributes:["abbr","accept","accept-charset","accesskey","action","allow","alt","as","autocapitalize","autocomplete","blocking","charset","cite","class","color","cols","colspan","content","contenteditable","coords","crossorigin","data","datetime","decoding","dir","dirname","download","draggable","enctype","enterkeyhint","fetchpriority","for","form","formaction","formenctype","formmethod","formtarget","headers","height","hidden","high","href","hreflang","http-equiv","id","imagesizes","imagesrcset","inputmode","integrity","is","itemid","itemprop","itemref","itemtype","kind","label","lang","list","loading","low","max","maxlength","media","method","min","minlength","name","nonce","optimum","pattern","ping","placeholder","popover","popovertarget","popovertargetaction","poster","preload","referrerpolicy","rel","rows","rowspan","sandbox","scope","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","start","step","style","tabindex","target","title","translate","type","usemap","value","width","wrap","onauxclick","onafterprint","onbeforematch","onbeforeprint","onbeforeunload","onbeforetoggle","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextlost","oncontextmenu","oncontextrestored","oncopy","oncuechange","oncut","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onformdata","onhashchange","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onlanguagechange","onload","onloadeddata","onloadedmetadata","onloadstart","onmessage","onmessageerror","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onoffline","ononline","onpagehide","onpageshow","onpaste","onpause","onplay","onplaying","onpopstate","onprogress","onratechange","onreset","onresize","onrejectionhandled","onscroll","onscrollend","onsecuritypolicyviolation","onseeked","onseeking","onselect","onslotchange","onstalled","onstorage","onsubmit","onsuspend","ontimeupdate","ontoggle","onunhandledrejection","onunload","onvolumechange","onwaiting","onwheel"],disallowedTagsMode:"discard",allowedAttributes:{a:["href","name","target"],img:["src","srcset","alt","title","width","height","loading"]},allowedEmptyAttributes:["alt"],selfClosing:["img","br","hr","area","base","basefont","input","link","meta"],allowedSchemes:["http","https","ftp","mailto","tel"],allowedSchemesByTag:{},allowedSchemesAppliedToAttributes:["href","src","cite"],allowProtocolRelative:!0,enforceHtmlBoundary:!1,parseStyleAttributes:!0},x.simpleTransform=function(C,p,v){return v=v===void 0||v,p=p||{},function(M,f){let y;if(v)for(y in p)f[y]=p[y];else f=p;return{tagName:C,attribs:f}}}},7151:I=>{"use strict";I.exports=t=>{if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}},6191:(I,t)=>{"use strict";function e(l){return Object.prototype.toString.call(l)==="[object Object]"}Object.defineProperty(t,"__esModule",{value:!0}),t.isPlainObject=function(l){var o,A;return e(l)!==!1&&((o=l.constructor)===void 0||e(A=o.prototype)!==!1&&A.hasOwnProperty("isPrototypeOf")!==!1)}},1180:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(7703),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},6568:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(9733),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},2860:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(1177),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},6271:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(4820),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},8705:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(8750),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},9592:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(3355),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},3094:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(9275),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},1895:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(7280),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},3604:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(9221),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},5625:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(4762),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},6212:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(9547),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},9061:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(3948),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},4707:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(7562),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},900:(I,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var l=e(5072),o=e.n(l),A=e(7825),a=e.n(A),m=e(7659),d=e.n(m),c=e(5056),r=e.n(c),i=e(540),n=e.n(i),h=e(1113),u=e.n(h),x=e(6907),b={};b.styleTagTransform=u(),b.setAttributes=r(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=n(),o()(x.A,b);const C=x.A&&x.A.locals?x.A.locals:void 0},5072:I=>{"use strict";var t=[];function e(A){for(var a=-1,m=0;m<t.length;m++)if(t[m].identifier===A){a=m;break}return a}function l(A,a){for(var m={},d=[],c=0;c<A.length;c++){var r=A[c],i=a.base?r[0]+a.base:r[0],n=m[i]||0,h="".concat(i," ").concat(n);m[i]=n+1;var u=e(h),x={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(u!==-1)t[u].references++,t[u].updater(x);else{var b=o(x,a);a.byIndex=c,t.splice(c,0,{identifier:h,updater:b,references:1})}d.push(h)}return d}function o(A,a){var m=a.domAPI(a);return m.update(A),function(d){if(d){if(d.css===A.css&&d.media===A.media&&d.sourceMap===A.sourceMap&&d.supports===A.supports&&d.layer===A.layer)return;m.update(A=d)}else m.remove()}}I.exports=function(A,a){var m=l(A=A||[],a=a||{});return function(d){d=d||[];for(var c=0;c<m.length;c++){var r=e(m[c]);t[r].references--}for(var i=l(d,a),n=0;n<m.length;n++){var h=e(m[n]);t[h].references===0&&(t[h].updater(),t.splice(h,1))}m=i}}},7659:I=>{"use strict";var t={};I.exports=function(e,l){var o=function(A){if(t[A]===void 0){var a=document.querySelector(A);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch{a=null}t[A]=a}return t[A]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(l)}},540:I=>{"use strict";I.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},5056:(I,t,e)=>{"use strict";I.exports=function(l){var o=e.nc;o&&l.setAttribute("nonce",o)}},7825:I=>{"use strict";I.exports=function(t){var e=t.insertStyleElement(t);return{update:function(l){(function(o,A,a){var m="";a.supports&&(m+="@supports (".concat(a.supports,") {")),a.media&&(m+="@media ".concat(a.media," {"));var d=a.layer!==void 0;d&&(m+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),m+=a.css,d&&(m+="}"),a.media&&(m+="}"),a.supports&&(m+="}");var c=a.sourceMap;c&&typeof btoa<"u"&&(m+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),A.styleTagTransform(m,o,A.options)})(e,t,l)},remove:function(){(function(l){if(l.parentNode===null)return!1;l.parentNode.removeChild(l)})(e)}}}},1113:I=>{"use strict";I.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},2685:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4gPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00NzguMjEgMzM0LjA5M0wzMzYgMjU2bDE0Mi4yMS03OC4wOTNjMTEuNzk1LTYuNDc3IDE1Ljk2MS0yMS4zODQgOS4yMzItMzMuMDM3bC0xOS40OC0zMy43NDFjLTYuNzI4LTExLjY1My0yMS43Mi0xNS40OTktMzMuMjI3LTguNTIzTDI5NiAxODYuNzE4bDMuNDc1LTE2Mi4yMDRDMjk5Ljc2MyAxMS4wNjEgMjg4LjkzNyAwIDI3NS40OCAwaC0zOC45NmMtMTMuNDU2IDAtMjQuMjgzIDExLjA2MS0yMy45OTQgMjQuNTE0TDIxNiAxODYuNzE4IDc3LjI2NSAxMDIuNjA3Yy0xMS41MDYtNi45NzYtMjYuNDk5LTMuMTMtMzMuMjI3IDguNTIzbC0xOS40OCAzMy43NDFjLTYuNzI4IDExLjY1My0yLjU2MiAyNi41NiA5LjIzMyAzMy4wMzdMMTc2IDI1NiAzMy43OSAzMzQuMDkzYy0xMS43OTUgNi40NzctMTUuOTYxIDIxLjM4NC05LjIzMiAzMy4wMzdsMTkuNDggMzMuNzQxYzYuNzI4IDExLjY1MyAyMS43MjEgMTUuNDk5IDMzLjIyNyA4LjUyM0wyMTYgMzI1LjI4MmwtMy40NzUgMTYyLjIwNEMyMTIuMjM3IDUwMC45MzkgMjIzLjA2NCA1MTIgMjM2LjUyIDUxMmgzOC45NjFjMTMuNDU2IDAgMjQuMjgzLTExLjA2MSAyMy45OTUtMjQuNTE0TDI5NiAzMjUuMjgybDEzOC43MzUgODQuMTExYzExLjUwNiA2Ljk3NiAyNi40OTkgMy4xMyAzMy4yMjctOC41MjNsMTkuNDgtMzMuNzQxYzYuNzI4LTExLjY1MyAyLjU2My0yNi41NTktOS4yMzItMzMuMDM2eiIvPjwvc3ZnPg=="},2668:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQ3MV80MzEzKSI+IDxwYXRoIGQ9Ik02IDExLjI1QzguODk5NSAxMS4yNSAxMS4yNSA4Ljg5OTUgMTEuMjUgNkMxMS4yNSAzLjEwMDUxIDguODk5NSAwLjc1IDYgMC43NUMzLjEwMDUxIDAuNzUgMC43NSAzLjEwMDUxIDAuNzUgNkMwLjc1IDguODk5NSAzLjEwMDUxIDExLjI1IDYgMTEuMjVaIiBzdHJva2U9IiM5QkE3QjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPHBhdGggZD0iTTguMjUgNkgzLjc1IiBzdHJva2U9IiM5QkE3QjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQ3MV80MzEzIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},1723:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FsZW5kYXIiPiA8cGF0aCBkPSJNMjAsM2gtMXYyYzAsMS4xMDQtMC44OTYsMi0yLDJzLTItMC44OTYtMi0yVjNIOXYyYzAsMS4xMDQtMC44OTYsMi0yLDJTNSw2LjEwNCw1LDVWM0g0QzIuODk1LDMsMiwzLjg5NSwyLDV2MTR2MSBjMCwxLjEwNSwwLjg5NSwyLDIsMmgxNmMxLjEwNSwwLDItMC44OTUsMi0ydi0xVjVDMjIsMy44OTUsMjEuMTA1LDMsMjAsM3ogTTcsMTguNUM3LDE4Ljc3NSw2Ljc3NSwxOSw2LjUsMTloLTEgQzUuMjI1LDE5LDUsMTguNzc1LDUsMTguNXYtMUM1LDE3LjIyNSw1LjIyNSwxNyw1LjUsMTdoMUM2Ljc3NSwxNyw3LDE3LjIyNSw3LDE3LjVWMTguNXogTTcsMTQuNUM3LDE0Ljc3NSw2Ljc3NSwxNSw2LjUsMTVoLTEgQzUuMjI1LDE1LDUsMTQuNzc1LDUsMTQuNXYtMUM1LDEzLjIyNSw1LjIyNSwxMyw1LjUsMTNoMUM2Ljc3NSwxMyw3LDEzLjIyNSw3LDEzLjVWMTQuNXogTTcsMTAuNUM3LDEwLjc3NSw2Ljc3NSwxMSw2LjUsMTFoLTEgQzUuMjI1LDExLDUsMTAuNzc1LDUsMTAuNXYtMUM1LDkuMjI1LDUuMjI1LDksNS41LDloMUM2Ljc3NSw5LDcsOS4yMjUsNyw5LjVWMTAuNXogTTExLDE4LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTksOSwxOC43NzUsOSwxOC41di0xQzksMTcuMjI1LDkuMjI1LDE3LDkuNSwxN2gxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTguNXogTTExLDE0LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTUsOSwxNC43NzUsOSwxNC41di0xQzksMTMuMjI1LDkuMjI1LDEzLDkuNSwxM2gxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTQuNXogTTExLDEwLjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTEsOSwxMC43NzUsOSwxMC41di0xQzksOS4yMjUsOS4yMjUsOSw5LjUsOWgxQzEwLjc3NSw5LDExLDkuMjI1LDExLDkuNVYxMC41eiBNMTUsMTguNWMwLDAuMjc1LTAuMjI1LDAuNS0wLjUsMC41aC0xIGMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNVYxOC41eiBNMTUsMTQuNWMwLDAuMjc1LTAuMjI1LDAuNS0wLjUsMC41IGgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNVYxNC41eiBNMTUsMTAuNSBjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMUMxMyw5LjIyNSwxMy4yMjUsOSwxMy41LDloMUMxNC43NzUsOSwxNSw5LjIyNSwxNSw5LjVWMTAuNXogTTE5LDE4LjUgYzAsMC4yNzUtMC4yMjUsMC41LTAuNSwwLjVoLTFjLTAuMjc1LDAtMC41LTAuMjI1LTAuNS0wLjV2LTFjMC0wLjI3NSwwLjIyNS0wLjUsMC41LTAuNWgxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTguNXogTTE5LDE0LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNSBWMTQuNXogTTE5LDEwLjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMUMxNyw5LjIyNSwxNy4yMjUsOSwxNy41LDloMUMxOC43NzUsOSwxOSw5LjIyNSwxOSw5LjUgVjEwLjV6IE02LDVWMmMwLTAuNTUyLDAuNDQ4LTEsMS0xczEsMC40NDgsMSwxdjNjMCwwLjU1Mi0wLjQ0OCwxLTEsMVM2LDUuNTUyLDYsNXogTTE2LDVWMmMwLTAuNTUyLDAuNDQ3LTEsMS0xczEsMC40NDgsMSwxdjMgYzAsMC41NTItMC40NDcsMS0xLDFTMTYsNS41NTIsMTYsNXoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},5884:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjYiIHN0cm9rZT0iI0YxNEM0QyIvPiA8cGF0aCBkPSJNNCA0TDkgOSIgc3Ryb2tlPSIjRjE0QzRDIi8+IDxwYXRoIGQ9Ik05IDRMNCA5IiBzdHJva2U9IiNGMTRDNEMiLz4gPC9zdmc+IA=="},9183:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxnIGlkPSJjYW5jZWwiPiA8cGF0aCBkPSJNMTkuMDcxLDE3LjY1N0wxMy40MTQsMTJsNS42NTctNS42NTdjMC4zOS0wLjM5LDAuMzktMS4wMjQsMC0xLjQxNHMtMS4wMjQtMC4zOS0xLjQxNCwwTDEyLDEwLjU4Nkw2LjM0Myw0LjkyOSBjLTAuMzktMC4zOS0xLjAyNC0wLjM5LTEuNDE0LDBzLTAuMzksMS4wMjQsMCwxLjQxNEwxMC41ODYsMTJsLTUuNjU3LDUuNjU3Yy0wLjM5MSwwLjM5MS0wLjM5LDEuMDI0LDAsMS40MTRzMS4wMjMsMC4zOTEsMS40MTQsMCBMMTIsMTMuNDE0bDUuNjU3LDUuNjU3YzAuMzksMC4zOSwxLjAyNCwwLjM5LDEuNDE0LDBTMTkuNDYyLDE4LjA0NywxOS4wNzEsMTcuNjU3eiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4="},3831:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic21zIj4gPHBhdGggZD0iTTE4LjQ4MSwxMGgtMS45NDdjLTIuMTg4LDAtNC4xNDIsMS42MDItNC40NzksMy44NDhDMTEuNjMsMTYuNjc4LDEzLjY5OCwxOSwxNi4zNDcsMTloMS4xSDE4IGMwLjI2NCwwLjQwOSwwLjQ3NCwxLjA0MiwwLjQ3NCwxLjU3MWMwLDAuMjY1LTAuMDM5LDAuNjExLTAuMTE0LDAuOTM5Yy0wLjA3NSwwLjMyOSwwLjI1MiwwLjYwNCwwLjUzNiwwLjQ0MSBjMS45NjgtMS4xMzIsNC4wNDctNC4zMTcsNC4xMDMtNy4yNTlDMjMuMDQ4LDEyLjExMiwyMC45NjUsMTAsMTguNDgxLDEweiIvPiA8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7IiBkPSJNMTYuOTIxLDcuNDUxQzE2LjQzMSw0LjI2OSwxMy41ODgsMiwxMC40MDYsMkg3LjU3M0MzLjk2LDIsMC45Myw0Ljk5MiwxLjAwMSw4LjY0OCBjMC4wODIsNC4xNjgsMy4xMDUsOC42NzksNS45NjgsMTAuMjgzYzAuNDE0LDAuMjMyLDAuODg5LTAuMTU5LDAuNzgtMC42MjRjLTAuMTA5LTAuNDY2LTAuMTY2LTAuOTU1LTAuMTY2LTEuMzMxIGMwLTAuNzUsMC4wMzMtMS4zOTYsMC40MTctMS45NzZoMC44MDRoMS42YzAuMjA2LDAsMC40MS0wLjAxNSwwLjYxMi0wLjAzNWMtMC4wMjktMC40MTctMC4wMTUtMC44NDEsMC4wNDktMS4yNjYgQzExLjQ2NywxMS4wMiwxMy44MTgsOSwxNi41MzMsOWgwLjQzM0MxNy4wMTIsOC40OTYsMTcuMDAyLDcuOTc4LDE2LjkyMSw3LjQ1MXoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},6782:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzY0KSI+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS44MTA2NiA2LjAwMDA2TDMuOTA1MzMgMy45MDUzOEwyLjg0NDY3IDIuODQ0NzNMMC4yMTk2NyA1LjQ2OTczQy0wLjA3MzIyMzMgNS43NjI2MiAtMC4wNzMyMjMzIDYuMjM3NDkgMC4yMTk2NyA2LjUzMDM4TDIuODQ0NjcgOS4xNTU0TDMuOTA1MzMgOC4wOTQ3NUwxLjgxMDY2IDYuMDAwMDZaTTQuMTU5NTggOC40ODg0Mkw2LjQ1NDU4IDIuOTM4NEw3Ljg0MDcyIDMuNTExNkw1LjU0NTc0IDkuMDYxNTdMNC4xNTk1OCA4LjQ4ODQyWk0xMS43ODAzIDUuNDY5NzNMOS4xNTUzMiAyLjg0NDczTDguMDk0NjcgMy45MDUzOEwxMC4xODkzIDYuMDAwMDZMOC4wOTQ2NyA4LjA5NDc1TDkuMTU1MzIgOS4xNTU0TDExLjc4MDMgNi41MzAzOEMxMi4wNzMyIDYuMjM3NDkgMTIuMDczMiA1Ljc2MjYyIDExLjc4MDMgNS40Njk3M1oiIGZpbGw9IndoaXRlIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzY0Ij4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},2596:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEzLjUwNjcgMC45NzMzMzNMMTMuOTg2NyAxLjUwNjY3VjEwLjUyTDEzLjUwNjcgMTFINi43MzMzM0wzLjg1MzMzIDEzLjg4TDMgMTMuNTA2N1YxMUgwLjQ5MzMzM0wwLjAxMzMzMzMgMTAuNTJWMS41MDY2N0wwLjQ5MzMzMyAwLjk3MzMzM0gxMy41MDY3Wk0xMy4wMjY3IDkuOTg2NjdWMS45ODY2N0gxLjAyNjY3VjkuOTg2NjdIMy40OEw0LjAxMzMzIDEwLjUyVjEyLjI4TDYuMTQ2NjcgMTAuMTQ2N0w2LjUyIDkuOTg2NjdIMTMuMDI2N1oiIGZpbGw9IiNGMTRDNEMiLz4gPC9zdmc+IA=="},582:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4OV80Mjk4OSkiPiA8cGF0aCBkPSJNNy41IDQuNUgxLjVWMTAuNUg3LjVWNC41WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNMy43NSA0LjVWMS41SDEwLjVWOC4yNUg3LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPC9nPiA8ZGVmcz4gPGNsaXBQYXRoIGlkPSJjbGlwMF8xODlfNDI5ODkiPiA8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIiAvPiA8L2NsaXBQYXRoPiA8L2RlZnM+IDwvc3ZnPiA="},8651:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIuMjVDMCAxLjgzNTc5IDAuMzM1Nzg2IDEuNSAwLjc1IDEuNUgxMS4yNUMxMS42NjQyIDEuNSAxMiAxLjgzNTc5IDEyIDIuMjVWNC41SDEwLjVWM0gxLjVWOC4yNUg0LjVWOS43NUgwLjc1QzAuMzM1Nzg2IDkuNzUgMCA5LjQxNDIzIDAgOVYyLjI1Wk05Ljc1IDcuNUgxMlY5SDkuNzVWMTEuMjVIOC4yNVY5SDZWNy41SDguMjVWNS4yNUg5Ljc1VjcuNVoiIGZpbGw9IndoaXRlIiAvPiA8L3N2Zz4g"},2965:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTExLjcwNjcgMy4yNjY2N0wxMi4wMjY3IDQuMDEzMzNWMTIuOTczM0wxMS4wMTMzIDEzLjk4NjdIMkwwLjk4NjY2NyAxMi45NzMzVjAuOTczMzMzTDIgMC4wMTMzMzMzSDguMDI2NjdMOC43MiAwLjI4TDExLjcwNjcgMy4yNjY2N1pNMTEuMDEzMyAxMi45NzMzVjQuOTczMzNINy4wMTMzM1YwLjk3MzMzM0gyVjEyLjk3MzNIMTEuMDEzM1pNOC4wMjY2NyA0LjAxMzMzSDExLjAxMzNMOC4wMjY2NyAwLjk3MzMzM1Y0LjAxMzMzWiIgZmlsbD0iI0M1QzVDNSIvPiA8L3N2Zz4g"},6178:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjc1IDMuODU2NjZMMS43MTMzNSAyLjg5MzMxTDYgNy4xNzk0M0wxMC4yODY3IDIuODkzMzFMMTEuMjUgMy44NTY2Nkw2IDkuMTA2NjZMMC43NSAzLjg1NjY2WiIgZmlsbD0iI0QxRDVEQiIgLz4gPC9zdmc+IA=="},8600:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4gPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEyIDEzLjc1QzEyLjk2NjUgMTMuNzUgMTMuNzUgMTIuOTY2NSAxMy43NSAxMkMxMy43NSAxMS4wMzM1IDEyLjk2NjUgMTAuMjUgMTIgMTAuMjVDMTEuMDMzNSAxMC4yNSAxMC4yNSAxMS4wMzM1IDEwLjI1IDEyQzEwLjI1IDEyLjk2NjUgMTEuMDMzNSAxMy43NSAxMiAxMy43NVoiIGZpbGw9IiMwMDAwMDAiLz4gPHBhdGggZD0iTTEyIDYuNzVDMTIuOTY2NSA2Ljc1IDEzLjc1IDUuOTY2NSAxMy43NSA1QzEzLjc1IDQuMDMzNSAxMi45NjY1IDMuMjUgMTIgMy4yNUMxMS4wMzM1IDMuMjUgMTAuMjUgNC4wMzM1IDEwLjI1IDVDMTAuMjUgNS45NjY1IDExLjAzMzUgNi43NSAxMiA2Ljc1WiIgZmlsbD0iIzAwMDAwMCIvPiA8cGF0aCBkPSJNMTIgMjAuNzVDMTIuOTY2NSAyMC43NSAxMy43NSAxOS45NjY1IDEzLjc1IDE5QzEzLjc1IDE4LjAzMzUgMTIuOTY2NSAxNy4yNSAxMiAxNy4yNUMxMS4wMzM1IDE3LjI1IDEwLjI1IDE4LjAzMzUgMTAuMjUgMTlDMTAuMjUgMTkuOTY2NSAxMS4wMzM1IDIwLjc1IDEyIDIwLjc1WiIgZmlsbD0iIzAwMDAwMCIvPiA8L3N2Zz4="},2092:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSI+IDxnPiA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+IDxwYXRoIHN0cm9rZT0ibnVsbCIgaWQ9InN2Z18xIiBmaWxsPSIjMDk3MkQzIiBkPSJtMS42NDg3MywwLjE0NzQzYy0wLjQxMzE2LC0wLjIwNjcyIC0wLjkxMDg4LC0wLjEzODM3IC0xLjI1MywwLjE3MjA5Yy0wLjM0MjEzLDAuMzEwNDYgLTAuNDU4MzYsMC43OTkyMiAtMC4yOTI2MiwxLjIzMDQ2bDIuODU4OCw3LjQzOGwtMi44NTg2LDcuNDI2MDljLTAuMTY1OTYsMC40MzExNSAtMC4wNDk5OSwwLjkxOTk0IDAuMjkxOTQsMS4yMzA1NWMwLjM0MTkzLDAuMzEwNiAwLjgzOTU5LDAuMzc5MzMgMS4yNTI4NSwwLjE3MjgybDE1LjY2ODg4LC03LjgyNzg1YzAuMzc5MzMsLTAuMTg5NDcgMC42MTg5NywtMC41NzY5OCAwLjYxOTA4LC0xLjAwMDk1YzAuMDAwMTEsLTAuNDIzOTggLTAuMjM5MywtMC44MTE2MiAtMC42MTg0MSwtMS4wMDEzM2wtMTUuNjY4OTMsLTcuODM5ODh6bTMuMjgxMzMsNy43MjE1N2wtMS43MDE5NywtNC40MjgybDguODUwMjksNC40MjgybC03LjE0ODMzLDB6bS0wLjAwMDQzLDIuMjM4NThsLTEuNzAwNTIsNC40MTc2OWw4Ljg0MjY3LC00LjQxNzY5bC03LjE0MjE1LDB6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPiA8L2c+IDwvc3ZnPg=="},2185:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iZXJyb3JfaW5saW5lIj4gPHBhdGggZD0iTTEyLDFDNS45MiwxLDEsNS45MiwxLDEyYzAsNi4wOCw0LjkyLDExLDExLDExczExLTQuOTIsMTEtMTFDMjMsNS45MiwxOC4wOCwxLDEyLDF6IE0xMiwxOGMtMC41NSwwLTEtMC40NS0xLTFzMC40NS0xLDEtMSBzMSwwLjQ1LDEsMVMxMi41NSwxOCwxMiwxOHogTTEzLDEzLjg3NkMxMywxNC40OTUsMTIuNTUsMTUsMTIsMTVzLTEtMC41MDUtMS0xLjEyNFY3LjEyNEMxMSw2LjUwNSwxMS40NSw2LDEyLDZzMSwwLjUwNSwxLDEuMTI0IFYxMy44NzZ6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},8080:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYzKSI+IDxwYXRoIGQ9Ik03LjUgMS41SDEwLjVWNC41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgLz4gPHBhdGggZD0iTTQuNSA3LjVMMTAuNSAxLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMTAuNSA2Ljc4NlYxMC41SDEuNVYxLjVINS4yNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzYzIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},8268:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icmVkZXllIj4gPHBhdGggc3R5bGU9Im9wYWNpdHk6MC41OyIgZD0iTTE1LDEyYy0xLjEwNSwwLTItMC44OTUtMi0yYzAtMC42NCwwLjMwNi0xLjIwMiwwLjc3My0xLjU2OUMxMy4yMzYsOC4xNjQsMTIuNjQsOCwxMiw4IGMtMi4yMDksMC00LDEuNzkxLTQsNGMwLDIuMjA5LDEuNzkxLDQsNCw0czQtMS43OTEsNC00YzAtMC4wOS0wLjAyMS0wLjE3NC0wLjAyNi0wLjI2M0MxNS42ODQsMTEuOSwxNS4zNTUsMTIsMTUsMTJ6Ii8+IDxwYXRoIGQ9Ik0yMi44NDIsMTEuNDZDMjIuNjUyLDExLjE2LDE4LjAwMSw0LDEyLDRTMS4zNDgsMTEuMTYsMS4xNTgsMTEuNDZjLTAuMjEsMC4zMy0wLjIxLDAuNzUsMCwxLjA4IEMxLjM0OCwxMi44NCw1Ljk5OSwyMCwxMiwyMHMxMC42NTItNy4xNiwxMC44NDItNy40NkMyMy4wNTMsMTIuMjEsMjMuMDUzLDExLjc5LDIyLjg0MiwxMS40NnogTTEyLDE3IGMtMi43NjIsMC01LjAwMS0yLjIzOS01LjAwMS01UzkuMjM4LDcsMTIsN3M1LjAwMSwyLjIzOSw1LjAwMSw1UzE0Ljc2MiwxNywxMiwxN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},2743:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSI+IDxnPiA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+IDxwYXRoIGlkPSJzdmdfMSIgZmlsbD0iI0M1QzVDNSIgZD0ibTkuNTAzNTQsMi43MTk0MmwwLjI0LDAuNTZsMCw2LjcybC0wLjc2LDAuNzZsLTYuNzYsMGwtMC43NiwtMC43NmwwLC05bDAuNzYsLTAuNzJsNC41MiwwbDAuNTIsMC4ybDIuMjQsMi4yNHptLTAuNTIsNy4yOGwwLC02bC0zLDBsMCwtM2wtMy43NiwwbDAsOWw2Ljc2LDB6bS0yLjI0LC02LjcybDIuMjQsMGwtMi4yNCwtMi4yOGwwLDIuMjh6Ii8+IDwvZz4gPC9zdmc+"},6245:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSI+IDxnPiA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+IDxwYXRoIGQ9Im0xMC44NjEyNCwyLjI5NjEybDAuMzYsMC40bDAsNy40OGwtMC4zNiwwLjM2bC05Ljc2LDBsLTAuMzYsLTAuMzZsMCwtOC4yNGwwLjM2LC0wLjRsMy43NiwwbDAuMjgsMC4xMmwwLjY0LDAuNjRsNS4wOCwwem0tMC40LDYuMzZsMC4wNCwtNC4xMmwtNC43NiwwbC0wLjY0LDAuNjRsLTAuMjQsMC4xMmwtMy40LDBsMCw0LjUybDksMGwwLC0xLjE2em0wLC00Ljg0bDAuMDQsLTAuNzZsLTQuODgsMGwtMC4yOCwtMC4xMmwtMC42NCwtMC42NGwtMy4yLDBsMCwyLjI4bDMuMiwwbDAuNjQsLTAuNjRsMC4yNCwtMC4xMmw0Ljg4LDB6IiBmaWxsPSIjQzVDNUM1IiBpZD0ic3ZnXzEiLz4gPC9nPiA8L3N2Zz4="},453:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iaW5mb3JtYXRpb24iPiA8cGF0aCBkPSJNMTIsMUM1LjkyNSwxLDEsNS45MjUsMSwxMnM0LjkyNSwxMSwxMSwxMXMxMS00LjkyNSwxMS0xMVMxOC4wNzUsMSwxMiwxeiBNMTQsMTdjMCwxLjEwNS0wLjg5NSwyLTIsMnMtMi0wLjg5NS0yLTJ2LTUgYzAtMS4xMDUsMC44OTUtMiwyLTJzMiwwLjg5NSwyLDJWMTd6IE0xMiw4Yy0xLjEwNSwwLTItMC44OTUtMi0yYzAtMS4xMDUsMC44OTUtMiwyLTJzMiwwLjg5NSwyLDJDMTQsNy4xMDUsMTMuMTA1LDgsMTIsOHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},2883:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FyZXRfbGVmdCI+IDxwYXRoIGQ9Ik0xNCwxOGMtMC4yNTYsMC0wLjUxMi0wLjA5OC0wLjcwNy0wLjI5M2wtNS01Yy0wLjM5MS0wLjM5MS0wLjM5MS0xLjAyMywwLTEuNDE0bDUtNWMwLjM5MS0wLjM5MSwxLjAyMy0wLjM5MSwxLjQxNCwwIHMwLjM5MSwxLjAyMywwLDEuNDE0TDEwLjQxNCwxMmw0LjI5Myw0LjI5M2MwLjM5MSwwLjM5MSwwLjM5MSwxLjAyMywwLDEuNDE0QzE0LjUxMiwxNy45MDIsMTQuMjU2LDE4LDE0LDE4eiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4g"},677:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibGlnaHQiPiA8cGF0aCBkPSJNNy4xMDYsMTNoOS43ODlDMTguMTkyLDExLjcyOSwxOSw5Ljk2LDE5LDhjMC0zLjg2Ni0zLjEzNC03LTctN1M1LDQuMTM0LDUsOEM1LDkuOTYsNS44MDgsMTEuNzI5LDcuMTA2LDEzeiIvPiA8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7IiBkPSJNMTQsMjFoMXYxYzAsMC41NTMtMC40NDcsMS0xLDFoLTRjLTAuNTUyLDAtMS0wLjQ0Ny0xLTF2LTFoMUgxNHogTTcsMTRjMCwwLDEsMS41LDEsM2MwLDEsMCwyLDEsM2g2IGMxLTEsMS0yLDEtM2MwLTEuNSwxLTMsMS0zSDd6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},8501:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iaHlwZXJsaW5rIj4gPHBhdGggZD0iTTE2LjUsNWgtNGMtMi4xMywwLTMuOTgsMS4yMi00Ljg5LDNoMi40NWMwLjYzLTAuNjIsMS40OS0xLDIuNDQtMWg0YzEuOTMsMCwzLjUsMS41NywzLjUsMy41UzE4LjQzLDE0LDE2LjUsMTRoLTQgYy0xLjM5LDAtMi42LTAuODItMy4xNS0ySDcuMjFjMC42NSwyLjMsMi43OCw0LDUuMjksNGg0YzMuMDMsMCw1LjUtMi40Nyw1LjUtNS41QzIyLDcuNDcsMTkuNTMsNSwxNi41LDV6IE0xMS41LDE4aC00IEM1LjU3LDE4LDQsMTYuNDMsNCwxNC41UzUuNTcsMTEsNy41LDExaDRjMS4zOSwwLDIuNiwwLjgyLDMuMTUsMmgyLjE0Yy0wLjY1LTIuMy0yLjc4LTQtNS4yOS00aC00QzQuNDcsOSwyLDExLjQ3LDIsMTQuNSBDMiwxNy41Myw0LjQ3LDIwLDcuNSwyMGg0YzIuMTMsMCwzLjk4LTEuMjIsNC44OS0zaC0yLjQ1QzEzLjMxLDE3LjYyLDEyLjQ1LDE4LDExLjUsMTh6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},899:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIuNUMwIDEuNjcxNTcgMC42NzE1NzMgMSAxLjUgMUg5QzkuODI4NDMgMSAxMC41IDEuNjcxNTcgMTAuNSAyLjVWNUg5VjIuNUgxLjVWOEg2VjkuNUgxLjVDMC42NzE1NzIgOS41IDAgOC44Mjg0MyAwIDhWMi41Wk05IDExVjkuNUg3LjQ5OTk5VjhIOVY2LjVIMTAuNVY4SDEyVjkuNUgxMC41VjExSDlaIiBmaWxsPSJ3aGl0ZSIvPiA8L3N2Zz4g"},5650:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzMyNzVfMTcxNzMpIj4gPHBhdGggZD0iTTggMUw5Ljk3OTkgNi4wMjAxTDE1IDhMOS45Nzk5IDkuOTc5OUw4IDE1TDYuMDIwMSA5Ljk3OTlMMSA4TDYuMDIwMSA2LjAyMDFMOCAxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+IDxwYXRoIGQ9Ik0yLjUgMEwzLjI5NTUgMS43MDQ1TDUgMi41TDMuMjk1NSAzLjI5NTVMMi41IDVMMS43MDQ1IDMuMjk1NUwwIDIuNUwxLjcwNDUgMS43MDQ1TDIuNSAwWiIgZmlsbD0id2hpdGUiLz4gPC9nPiA8ZGVmcz4gPGNsaXBQYXRoIGlkPSJjbGlwMF8zMjc1XzE3MTczIj4gPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIvPiA8L2NsaXBQYXRoPiA8L2RlZnM+IDwvc3ZnPiA="},4885:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iYW5ub3VuY2VyIj4gPHBhdGggZD0iTTIwLjg5OSwxOS4zOTRsLTYuNDktMTUuMDk1bC0xMS4xNCwxMS4xNGw4LjUzMSwzLjY1M2wtMS42NjksMS44MjFjLTAuMTA2LDAuMTE3LTAuMTUyLDAuMjc2LTAuMTIzLDAuNDMyIGMwLjAzLDAuMTU1LDAuMTMxLDAuMjg3LDAuMjcyLDAuMzU2bDIuNTcxLDEuMjVjMC4wNywwLjAzNCwwLjE0NSwwLjA1LDAuMjE5LDAuMDVjMC4xMzcsMCwwLjI3Mi0wLjA1NywwLjM2OS0wLjE2M2wyLTIuMTg3IGwyLjk0MiwxLjI2TDIwLjg5OSwxOS4zOTR6Ii8+IDxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNTsiIGQ9Ik05LjUsNkM5LjMzOSw2LDkuMTgsNS45MjIsOS4wODQsNS43NzdsLTItM2MtMC4xNTMtMC4yMy0wLjA5MS0wLjU0LDAuMTM5LTAuNjkzIHMwLjU0MS0wLjA5MiwwLjY5MywwLjEzOWwyLDNjMC4xNTMsMC4yMywwLjA5MSwwLjU0LTAuMTM5LDAuNjkzQzkuNjkyLDUuOTczLDkuNTk2LDYsOS41LDZ6IE00LjkxNiwxMC43NzcgYzAuMTUzLTAuMjMsMC4wOTEtMC41NC0wLjEzOS0wLjY5M2wtMy0yQzEuNTQ1LDcuOTMsMS4yMzYsNy45OTMsMS4wODQsOC4yMjNjLTAuMTUzLDAuMjMtMC4wOTEsMC41NCwwLjEzOSwwLjY5M2wzLDIgQzQuMzA4LDEwLjk3Myw0LjQwNCwxMSw0LjUsMTFDNC42NjEsMTEsNC44MiwxMC45MjIsNC45MTYsMTAuNzc3eiBNNi44NTQsNy44NTRjMC4xOTUtMC4xOTUsMC4xOTUtMC41MTIsMC0wLjcwN2wtNC00IGMtMC4xOTUtMC4xOTUtMC41MTItMC4xOTUtMC43MDcsMHMtMC4xOTUsMC41MTIsMCwwLjcwN2w0LDRDNi4yNDQsNy45NTEsNi4zNzIsOCw2LjUsOFM2Ljc1Niw3Ljk1MSw2Ljg1NCw3Ljg1NHogTTE4Ljg1NCwyMi44NTQgbDMtM2MwLjE5NS0wLjE5NSwwLjE5NS0wLjUxMiwwLTAuNzA3cy0wLjUxMi0wLjE5NS0wLjcwNywwbC0zLDNjLTAuMTk1LDAuMTk1LTAuMTk1LDAuNTEyLDAsMC43MDcgQzE4LjI0NCwyMi45NTEsMTguMzcyLDIzLDE4LjUsMjNTMTguNzU2LDIyLjk1MSwxOC44NTQsMjIuODU0eiBNMi44NTQsMTUuODU0bDEyLTEyYzAuMTk1LTAuMTk1LDAuMTk1LTAuNTEyLDAtMC43MDcgcy0wLjUxMi0wLjE5NS0wLjcwNywwbC0xMiwxMmMtMC4xOTUsMC4xOTUtMC4xOTUsMC41MTIsMCwwLjcwN0MyLjI0NCwxNS45NTEsMi4zNzIsMTYsMi41LDE2UzIuNzU2LDE1Ljk1MSwyLjg1NCwxNS44NTR6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},52:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibWVudSI+IDxwYXRoIGQ9Ik0yMSw4SDNDMi40NDgsOCwyLDcuNTUyLDIsN3MwLjQ0OC0xLDEtMWgxOGMwLjU1MywwLDEsMC40NDgsMSwxUzIxLjU1Myw4LDIxLDh6IE0yMiwxMmMwLTAuNTUyLTAuNDQ3LTEtMS0xSDMgYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDE4QzIxLjU1MywxMywyMiwxMi41NTIsMjIsMTJ6IE0yMiwxN2MwLTAuNTUzLTAuNDQ3LTEtMS0xSDNjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDEgaDE4QzIxLjU1MywxOCwyMiwxNy41NTMsMjIsMTd6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},1107:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icmVtb3ZlIj4gPHBhdGggZD0iTTIxLDEzSDNjLTAuNTUyLDAtMS0wLjQ0OC0xLTFzMC40NDgtMSwxLTFoMThjMC41NTIsMCwxLDAuNDQ4LDEsMVMyMS41NTIsMTMsMjEsMTN6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},3404:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYwKSI+IDxwYXRoIGQ9Ik02IDEuNjI1QzMuMzc1IDEuNjI1IDMuMzc1IDUuMTI1IDMuMzc1IDUuMTI1TDAuNzUgOC4yNUgxMS4yNUw4LjYyNSA1LjEyNUM4LjYyNSA1LjEyNSA4LjYyNSAxLjYyNSA2IDEuNjI1WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNNC4yNSA4LjYyNVY5LjVDNC4yNSA5Ljk2NDEzIDQuNDM0MzcgMTAuNDA5MiA0Ljc2MjU2IDEwLjczNzRDNS4wOTA3NSAxMS4wNjU2IDUuNTM1ODcgMTEuMjUgNiAxMS4yNUM2LjQ2NDEzIDExLjI1IDYuOTA5MjQgMTEuMDY1NiA3LjIzNzQzIDEwLjczNzRDNy41NjU2MiAxMC40MDkyIDcuNzUgOS45NjQxMyA3Ljc1IDkuNVY4LjYyNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNNiAwLjc1VjEuNjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPC9nPiA8ZGVmcz4gPGNsaXBQYXRoIGlkPSJjbGlwMF80MjZfMjM2MCI+IDxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiIC8+IDwvY2xpcFBhdGg+IDwvZGVmcz4gPC9zdmc+IA=="},4672:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibGlzdF9jaGVjayI+IDxwYXRoIGQ9Ik0xMiwyM0M1LjkzNSwyMywxLDE4LjA2NSwxLDEyUzUuOTM1LDEsMTIsMWMxLjgzNywwLDMuNjU3LDAuNDYzLDUuMjYzLDEuMzM5YzAuNDg0LDAuMjY1LDAuNjYzLDAuODcyLDAuMzk4LDEuMzU3IHMtMC44NzIsMC42NjQtMS4zNTcsMC4zOTlDMTQuOTkyLDMuMzc4LDEzLjUwNCwzLDEyLDNjLTQuOTYyLDAtOSw0LjAzOC05LDljMCw0Ljk2Myw0LjAzOCw5LDksOWM0Ljk2MywwLDktNC4wMzcsOS05IGMwLTAuNTMzLTAuMDUyLTEuMDcxLTAuMTU3LTEuNjQ0Yy0wLjEwMS0wLjU0MywwLjI1OS0xLjA2NSwwLjgwMi0xLjE2NWMwLjU1Mi0wLjA5OSwxLjA2NCwwLjI2LDEuMTY1LDAuODAyIEMyMi45MzgsMTAuNjg4LDIzLDExLjM0NCwyMywxMkMyMywxOC4wNjUsMTguMDY1LDIzLDEyLDIzeiBNMTEuNzA3LDE1LjcwN2w5LTljMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNCBzLTEuMDIzLTAuMzkxLTEuNDE0LDBMMTEsMTMuNTg2bC0zLjI5My0zLjI5M2MtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMHMtMC4zOTEsMS4wMjMsMCwxLjQxNGw0LDQgQzEwLjQ4OCwxNS45MDIsMTAuNzQ0LDE2LDExLDE2UzExLjUxMiwxNS45MDIsMTEuNzA3LDE1LjcwN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},5943:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjY1ODMgNS41NzAyTDAuNzUgNi40Nzg1TDQuMjI3MzUgOS45NTU4NUwxMS4yNSAyLjkzMzJMMTAuMzQxNyAyLjAyNDlMNC4yMjczNSA4LjEzOTI1TDEuNjU4MyA1LjU3MDJaIiBmaWxsPSJ3aGl0ZSIgLz4gPC9zdmc+IA=="},3408:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjE4NTk2IDEuNjI1NTRDNS4wODM0MiAwLjA3MTA5MTggNy4wNzEwOSAtMC40NjE1MDMgOC42MjU1NCAwLjQzNTk2TDkuMzY2NDcgMC44NjM3MzRDMTAuNjMxMyAxLjU5Mzk4IDExLjA2NDcgMy4yMTEzIDEwLjMzNDQgNC40NzYxMkMxMC4xMjczIDQuODM0ODQgOS42Njg2MSA0Ljk1Nzc1IDkuMzA5ODkgNC43NTA2NEM4Ljk1MTE3IDQuNTQzNTQgOC44MjgyNiA0LjA4NDg0IDkuMDM1MzcgMy43MjYxMkM5LjM1MTQgMy4xNzg3NCA5LjE2Mzg1IDIuNDc4OCA4LjYxNjQ3IDIuMTYyNzdMNy44NzU1NCAxLjczNUM3LjAzODUzIDEuMjUxNzUgNS45NjgyNSAxLjUzODUzIDUuNDg1IDIuMzc1NTRMMS43MzUgOC44NzA3M0MxLjI1MTc1IDkuNzA3NzUgMS41Mzg1MyAxMC43NzggMi4zNzU1NCAxMS4yNjEzQzMuMjEyNTUgMTEuNzQ0NSA0LjI4Mjg0IDExLjQ1NzcgNC43NjYwOSAxMC42MjA3TDcuMTQxMDkgNi41MDcxMUM3LjI3OTE2IDYuMjY3OTcgNy4xOTcyMiA1Ljk2MjE3IDYuOTU4MDcgNS44MjQxQzYuNzE4OTMgNS42ODYwMyA2LjQxMzEzIDUuNzY3OTcgNi4yNzUwNiA2LjAwNzExTDQuNzQ4MzEgOC42NTE1M0M0LjU0MTIgOS4wMTAyNSA0LjA4MjUxIDkuMTMzMTUgMy43MjM3OSA4LjkyNjA1QzMuMzY1MDcgOC43MTg5NCAzLjI0MjE2IDguMjYwMjUgMy40NDkyNyA3LjkwMTUzTDQuOTc2MDIgNS4yNTcxMUM1LjUyODMxIDQuMzAwNTMgNi43NTE0OSAzLjk3Mjc4IDcuNzA4MDcgNC41MjUwNkM4LjY2NDY2IDUuMDc3MzUgOC45OTI0MSA2LjMwMDUzIDguNDQwMTMgNy4yNTcxMUw2LjA2NTEyIDExLjM3MDdDNS4xNjc2NiAxMi45MjUyIDMuMTc5OTkgMTMuNDU3OCAxLjYyNTU0IDEyLjU2MDNDMC4wNzEwOTE4IDExLjY2MjkgLTAuNDYxNTAzIDkuNjc1MTggMC40MzU5NiA4LjEyMDczTDQuMTg1OTYgMS42MjU1NFoiIGZpbGw9IndoaXRlIi8+IDwvc3ZnPiA="},3161:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icGF1c2UiPiA8cGF0aCBkPSJNOSwyMkg2Yy0wLjU1LDAtMS0wLjQ1LTEtMVYzYzAtMC41NSwwLjQ1LTEsMS0xaDNjMC41NSwwLDEsMC40NSwxLDF2MThDMTAsMjEuNTUsOS41NSwyMiw5LDIyeiBNMTksMjFWMyBjMC0wLjU1LTAuNDUtMS0xLTFoLTNjLTAuNTUsMC0xLDAuNDUtMSwxdjE4YzAsMC41NSwwLjQ1LDEsMSwxaDNDMTguNTUsMjIsMTksMjEuNTUsMTksMjF6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},7934:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEyLjIyNjcgMC4wMTMzMzMzTDEzLjk4NjcgMS43NzMzM1YzLjIxMzMzTDUuNzczMzMgMTEuNDhMNS41MDY2NyAxMS42NEwxLjQgMTMuOTg2N0wwLjAxMzMzMzMgMTIuNkwyLjM2IDguNDkzMzNMMi41MiA4LjIyNjY3TDEwLjc4NjcgMC4wMTMzMzMzSDEyLjIyNjdaTTEuNCAxMi42TDQuMzg2NjcgMTEuMDUzM0wyLjk0NjY3IDkuNjEzMzNMMS40IDEyLjZaTTUuMjQgMTAuNTJMMTMuMjQgMi41MkwxMS40OCAwLjc1OTk5OUwzLjQ4IDguNzZMNS4yNCAxMC41MloiIGZpbGw9IiNDNUM1QzUiLz4gPC9zdmc+IA=="},5827:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icGxheSI+IDxwYXRoIGQ9Ik0yMS41NDksMTEuMjA4TDcuMzI4LDIuMTNDNy4wNTIsMS45NTUsNi43MTUsMS45NTcsNi40NDEsMi4xMzZDNi4xNjgsMi4zMTUsNiwyLjY0NCw2LDN2MTggYzAsMC4zNTQsMC4xNjcsMC42ODMsMC40MzksMC44NjJDNi41NzgsMjEuOTU0LDYuNzMzLDIyLDYuODg5LDIyYzAuMTQ5LDAsMC4yOTgtMC4wNDIsMC40MzMtMC4xMjdsMTQuMjIzLTguOTIyIGMwLjI4LTAuMTc2LDAuNDU1LTAuNTA5LDAuNDU2LTAuODdDMjIuMDAxLDExLjcyLDIxLjgyOSwxMS4zODYsMjEuNTQ5LDExLjIwOHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},6373:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iYWRkIj4gPHBhdGggZD0iTTIxLDExaC04VjNjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2OEgzYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDh2OGMwLDAuNTUzLDAuNDQ4LDEsMSwxczEtMC40NDcsMS0xIHYtOGg4YzAuNTUyLDAsMS0wLjQ0OCwxLTFTMjEuNTUyLDExLDIxLDExeiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4g"},3122:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTE4LjQyNjYgNC43NzMzNEwxMS4yMzMzIDAuNjIwMDFDMTAuOTA2NiAwLjQyNjY3NyAxMC40NjY2IDAuMzMzMzQ0IDEwLjAzMzMgMC4zMzMzNDRDOS41OTk5NCAwLjMzMzM0NCA5LjE2NjYxIDAuNDI2Njc3IDguODMzMjcgMC42MjAwMUwxLjYzOTk0IDQuNzczMzRDMC45Nzk5NDEgNS4xNTMzNCAwLjQzOTk0MSA2LjA4NjY4IDAuNDM5OTQxIDYuODQ2NjhWMTUuMTUzM0MwLjQzOTk0MSAxNS45MTMzIDAuOTc5OTQxIDE2Ljg0NjcgMS42Mzk5NCAxNy4yMjY3TDguODMzMjcgMjEuMzhDOS4xNTk5NCAyMS41NzMzIDkuNTk5OTQgMjEuNjY2NyAxMC4wMzMzIDIxLjY2NjdDMTAuNDY2NiAyMS42NjY3IDEwLjg5OTkgMjEuNTczMyAxMS4yMzMzIDIxLjM4TDE4LjQyNjYgMTcuMjI2N0MxOS4wODY2IDE2Ljg0NjcgMTkuNjI2NiAxNS45MTMzIDE5LjYyNjYgMTUuMTUzM1Y2Ljg0NjY4QzE5LjYyNjYgNi4wODY2OCAxOS4wODY2IDUuMTUzMzQgMTguNDI2NiA0Ljc3MzM0Wk0xMC4yMjY2IDE5LjY2QzEwLjIyNjYgMTkuNjYgMTAuMTMzMyAxOS42OCAxMC4wMzk5IDE5LjY4QzkuOTQ2NjEgMTkuNjggOS44Nzk5NCAxOS42NjY3IDkuODUzMjcgMTkuNjZMMi42Mzk5NCAxNS40OTMzQzIuNTY2NjEgMTUuNDI2NyAyLjQ3MzI3IDE1LjI2IDIuNDUzMjcgMTUuMTY2N1Y2LjgzMzM0QzIuNDczMjcgNi43NDAwMSAyLjU3MzI3IDYuNTczMzQgMi42Mzk5NCA2LjUwNjY4TDkuODUzMjcgMi4zNDAwMUM5Ljg1MzI3IDIuMzQwMDEgOS45NDY2MSAyLjMyMDAxIDEwLjAzOTkgMi4zMjAwMUMxMC4xMzMzIDIuMzIwMDEgMTAuMTk5OSAyLjMzMzM0IDEwLjIyNjYgMi4zNDAwMUwxNy40Mzk5IDYuNTA2NjhDMTcuNTEzMyA2LjU3MzM0IDE3LjYwNjYgNi43NDAwMSAxNy42MjY2IDYuODMzMzRWMTQuMjI2N0wxMi4wMzk5IDExVjEwLjEyQzEyLjAzOTkgOS45NDY2OCAxMS45NDY2IDkuNzkzMzQgMTEuNzk5OSA5LjcwNjY4TDEwLjI3OTkgOC44MjY2OEMxMC4yMDY2IDguNzg2NjggMTAuMTE5OSA4Ljc2MDAxIDEwLjAzOTkgOC43NjAwMUM5Ljk1OTk0IDguNzYwMDEgOS44NzMyNyA4Ljc4MDAxIDkuNzk5OTQgOC44MjY2OEw4LjI3OTk0IDkuNzA2NjhDOC4xMzMyNyA5Ljc5MzM0IDguMDM5OTQgOS45NTMzNCA4LjAzOTk0IDEwLjEyVjExLjg3MzNDOC4wMzk5NCAxMi4wNDY3IDguMTMzMjcgMTIuMiA4LjI3OTk0IDEyLjI4NjdMOS43OTk5NCAxMy4xNjY3QzkuODczMjcgMTMuMjA2NyA5Ljk1OTk0IDEzLjIzMzMgMTAuMDM5OSAxMy4yMzMzQzEwLjExOTkgMTMuMjMzMyAxMC4yMDY2IDEzLjIxMzMgMTAuMjc5OSAxMy4xNjY3TDExLjAzOTkgMTIuNzI2N0wxNi42MjY2IDE1Ljk1MzNMMTAuMjI2NiAxOS42NDY3VjE5LjY2WiIgZmlsbD0iYmxhY2siLz4gPC9zdmc+IA=="},6994:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDEwLjUwMDJDOC40ODUyOCAxMC41MDAyIDEwLjUgOC40ODU0NyAxMC41IDYuMDAwMTlIMTJDMTIgOS4zMTM4OSA5LjMxMzcxIDEyLjAwMDIgNiAxMi4wMDAyQzIuNjg2MjkgMTIuMDAwMiAwIDkuMzEzODkgMCA2LjAwMDE5QzAgMi42ODY0OCAyLjY4NjI5IDAuMDAwMTg1NTIyIDUuOTkzNjYgMC4wMDAyMTIzMzZDNy43NDc3NCAtMC4wMTQ2MjA3IDkuMzg1MiAwLjc0ODUgMTAuNSAyLjAzMTc4VjAuMDAwMTg1NTIySDEyVjQuNTAwMTlINy41VjMuMDAwMTlIOS4zNTQwN0M4LjUyMjU5IDIuMDUyMjQgNy4zMDYxMiAxLjQ4OTE2IDYgMS41MDAxOUMzLjUxNDcyIDEuNTAwMTkgMS41IDMuNTE0OSAxLjUgNi4wMDAxOUMxLjUgOC40ODU0NyAzLjUxNDcyIDEwLjUwMDIgNiAxMC41MDAyWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},6905:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYyKSI+IDxwYXRoIGQ9Ik02Ljc1IDEuNUgxMC41VjUuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNNS4yNSAxLjVIMS41VjUuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNNS4yNSAxMC41SDEuNVY2Ljc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgLz4gPHBhdGggZD0iTTYuNzUgMTAuNUgxMC41VjYuNzUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMS41IDEuNUwxMC41IDEwLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMTAuNSAxLjVMMS41IDEwLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzYyIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},6139:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibWluaW1pemVfeDQwX21pcnJvcmVkIj4gPHBhdGggZD0iTTQuMDI0LDE0LjM0N2MtMC4wNTcsMC4xNzktMC4wMSwwLjM3NCwwLjEyMywwLjUwNmwxLjc5MywxLjc5M2wtMy42NDgsMy42NDhjLTAuMzg5LDAuMzg5LTAuMzg5LDEuMDI1LDAsMS40MTQgYzAuMzg5LDAuMzg5LDEuMDI1LDAuMzg5LDEuNDE0LDBsMy42NDgtMy42NDhsMS43OTMsMS43OTNjMC4xMzIsMC4xMzIsMC4zMjgsMC4xOCwwLjUwNiwwLjEyM2MwLjE3OC0wLjA1NywwLjMxLTAuMjA5LDAuMzQtMC4zOTQgbDEtNmMwLjAyNS0wLjE1OC0wLjAyNS0wLjMyMS0wLjE0LTAuNDM2Yy0wLjExNC0wLjExNC0wLjI3Ny0wLjE2NS0wLjQzNi0wLjE0bC02LDFDNC4yMzMsMTQuMDM3LDQuMDgxLDE0LjE2OSw0LjAyNCwxNC4zNDd6IE0xNC4zNDcsNC4wMjRjMC4xNzktMC4wNTcsMC4zNzQtMC4wMSwwLjUwNiwwLjEyM2wxLjc5MywxLjc5M2wzLjY0OC0zLjY0OGMwLjM4OS0wLjM4OSwxLjAyNS0wLjM4OSwxLjQxNCwwIGMwLjM4OSwwLjM4OSwwLjM4OSwxLjAyNSwwLDEuNDE0TDE4LjA2LDcuMzU0bDEuNzkzLDEuNzkzYzAuMTMyLDAuMTMyLDAuMTgsMC4zMjgsMC4xMjMsMC41MDZjLTAuMDU3LDAuMTc4LTAuMjA5LDAuMzEtMC4zOTQsMC4zNCBsLTYsMWMtMC4xNTgsMC4wMjUtMC4zMjEtMC4wMjUtMC40MzYtMC4xNGMtMC4xMTQtMC4xMTQtMC4xNjUtMC4yNzctMC4xNC0wLjQzNmwxLTZDMTQuMDM3LDQuMjMzLDE0LjE2OSw0LjA4MSwxNC4zNDcsNC4wMjR6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},7479:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSI+IDxnPiA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+IDxwYXRoIHN0cm9rZT0ibnVsbCIgZD0ibTIuMjcxMTEsMC44NzUybDAuNzQ4NDMsMGwwLDEuNjIxNmwwLjU4MjExLC0wLjU0MDUzYzAuNDQzNTEsLTAuNDcxMjMgMC45NzAxOCwtMC43NzYxNSAxLjU4MDAxLC0wLjkxNDc0YzAuNjA5ODMsLTAuMTY2MzIgMS4yMTk2NiwtMC4xNjYzMiAxLjgyOTUsMGMwLjYwOTgzLDAuMTM4NTkgMS4xMzY1LDAuNDQzNTEgMS41ODAwMiwwLjkxNDc0YzAuNDcxMjMsMC40NDM1MSAwLjc5LDAuOTcwMTggMC45NTYzMiwxLjU4MDAyYzAuMTY2MzIsMC42MDk4MyAwLjE2NjMyLDEuMjE5NjYgMCwxLjgyOTQ5Yy0wLjE2NjMxLDAuNjA5ODMgLTAuNDcxMjMsMS4xNTAzNiAtMC45MTQ3NCwxLjYyMTZsLTQuMDc0NzgsNC4wMzMyM2wtMC41NDA1MywtMC41NDA2bDQuMDMzMTksLTQuMDc0NzRjMC4zNjAzNiwtMC4zMzI2NCAwLjYwOTgzLC0wLjczNDU3IDAuNzQ4NDMsLTEuMjA1OGMwLjEzODYsLTAuNDk4OTUgMC4xMzg2LC0wLjk4NDA1IDAsLTEuNDU1MjhjLTAuMTM4NTksLTAuNDk4OTUgLTAuMzg4MDcsLTAuOTE0NzQgLTAuNzQ4NDMsLTEuMjQ3MzhjLTAuMzMyNjMsLTAuMzYwMzUgLTAuNzQ4NDMsLTAuNTk1OTcgLTEuMjQ3MzgsLTAuNzA2ODRjLTAuNDcxMjMsLTAuMTM4NiAtMC45NDI0NiwtMC4xMzg2IC0xLjQxMzcsMGMtMC40NzEyMywwLjExMDg3IC0wLjg4NzAyLDAuMzQ2NDkgLTEuMjQ3MzgsMC43MDY4NGwtMC43NDg0MywwLjc0ODQzbDEuOTk1ODEsMGwwLDAuNzQ4NDNsLTIuNzQ0MjQsMGwtMC4zNzQyMSwtMC4zNzQyMWwwLC0yLjc0NDI0eiIgZmlsbD0iI0M1QzVDNSIgaWQ9InN2Z18xIi8+IDwvZz4gPC9zdmc+"},5402:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjEwODAiIHZpZXdCb3g9IjAgMCAxMDgwIDEwODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZGVzYz5DcmVhdGVkIHdpdGggRmFicmljLmpzIDUuMi40PC9kZXNjPiA8ZGVmcz4gPC9kZWZzPiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU0MCA1NDApIiBpZD0iZGJkNzU1MWEtNWNhNy00YzVmLWFlOTgtNzE4OGI0YjNlZGViIiA+IDxyZWN0IHN0eWxlPSJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogcmdiKDI1NSwyNTUsMjU1KTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxOyB2aXNpYmlsaXR5OiBoaWRkZW47IiB2ZWN0b3ItZWZmZWN0PSJub24tc2NhbGluZy1zdHJva2UiIHg9Ii01NDAiIHk9Ii01NDAiIHJ4PSIwIiByeT0iMCIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgLz4gPC9nPiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU0MCA1NDApIiBpZD0iM2ZlNzcxZGYtYjJiYy00NzRhLWE1NDAtYThlYWM4NTI1NzFlIiA+IDwvZz4gPGcgdHJhbnNmb3JtPSJtYXRyaXgoMCAtOTAgOTAgMCA1NDAgNTQwKSIgPiA8cGF0aCBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtZGFzaG9mZnNldDogMDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7IGZpbGw6IHJnYigyMDksMjEzLDIxOSk7IGZpbGwtcnVsZTogZXZlbm9kZDsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0iIHRyYW5zbGF0ZSgtNiwgLTYpIiBkPSJNIDAuNzUgMy44NTY2NiBMIDEuNzEzMzUgMi44OTMzMSBMIDYgNy4xNzk0MyBMIDEwLjI4NjcgMi44OTMzMSBMIDExLjI1IDMuODU2NjYgTCA2IDkuMTA2NjYgTCAwLjc1IDMuODU2NjYgWiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPiA8L2c+IDwvc3ZnPg=="},1705:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic2VhcmNoIj4gPHBhdGggZD0iTTIyLjcwNywyMS4yOTNsLTUuNjgyLTUuNjgyQzE4LjI1OCwxNC4wNzEsMTksMTIuMTIyLDE5LDEwYzAtNC45NjItNC4wMzctOS05LTljLTQuOTYyLDAtOSw0LjAzOC05LDljMCw0Ljk2Myw0LjAzOCw5LDksOSBjMi4xMjIsMCw0LjA3MS0wLjc0Miw1LjYxMS0xLjk3NWw1LjY4Miw1LjY4MkMyMS40ODgsMjIuOTAyLDIxLjc0NCwyMywyMiwyM3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5MyBDMjMuMDk4LDIyLjMxNiwyMy4wOTgsMjEuNjg0LDIyLjcwNywyMS4yOTN6IE0xMCwxN2MtMy44NiwwLTctMy4xNDEtNy03YzAtMy44NiwzLjE0LTcsNy03YzMuODU5LDAsNywzLjE0LDcsNyBDMTcsMTMuODU5LDEzLjg1OSwxNywxMCwxN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},8797:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic3Rhcl9vbiI+IDxwYXRoIGQ9Ik0yMi4xNDMsOC4yNjdsLTEuNTY5LTAuMjI4djBsLTQuODItMC43bC0yLjAxOC00LjA4NGMwLDAsMCwwLDAsMGwtMC44MzktMS42OTljLTAuMzY3LTAuNzQzLTEuNDI2LTAuNzQzLTEuNzkzLDAgbC0wLjgzOSwxLjY5OWMwLDAsMCwwLDAsMEw4LjI0Niw3LjM0TDIuNjc4LDguMTQ4YzAsMCwwLDAsMCwwTDEuODU3LDguMjY3Yy0wLjgyLDAuMTE5LTEuMTQ4LDEuMTI3LTAuNTU0LDEuNzA2bDAuNTk0LDAuNTc5bDAsMCBsNC4wMjgsMy45MjNsLTEuMDIyLDUuOTUyYzAsMCwwLDAsMCwwbC0wLjA2OSwwLjQwMmMtMC4xNCwwLjgxNywwLjcxNywxLjQ0LDEuNDUsMS4wNTRsMC42NDUtMC4zMzhsMCwwTDEyLDE4Ljg4Mmw0LjU5LDIuNDFsMCwwIGwxLjEyNSwwLjU5YzAuNzM0LDAuMzg1LDEuNTkxLTAuMjM4LDEuNDUtMS4wNTVsLTAuMjM0LTEuMzY0bDAsMGwtMC44NTctNC45OTFsMy44MjctMy43MjdsMCwwbDAuNzk2LTAuNzc1IEMyMy4yOTEsOS4zOTQsMjIuOTYzLDguMzg2LDIyLjE0Myw4LjI2N3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},9193:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjgwMHB4IiB3aWR0aD0iODAwcHgiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCA0NjAuODkzIDQ2MC44OTMiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8Zz4gPGc+IDxnPiA8cGF0aCBkPSJNNDIwLjg0LDBIMTYwLjA1MWMtMTguMTIxLDAtMzIuODY0LDE0Ljc0My0zMi44NjQsMzIuODY1djc2LjEzNmM5LjM5OCwwLDI5Ni41MTktMC4xNjMsMjk2LjUxOS0wLjE2M3YxODQuODE1IGMwLDEuNTgtMS4yODUsMi44NjUtMi44NjUsMi44NjVoLTU3LjEzNXYzMGg1Ny4xMzVjMTguMTIyLDAsMzIuODY1LTE0Ljc0MywzMi44NjUtMzIuODY1VjMyLjg2NSBDNDUzLjcwNSwxNC43NDMsNDM4Ljk2MiwwLDQyMC44NCwweiBNMTU3LjE4Niw3OC44MzhWMzIuODY1YzAtMS41OCwxLjI4NS0yLjg2NSwyLjg2NC0yLjg2NWgyNjAuNzg5IGMxLjU4LDAsMi44NjUsMS4yODUsMi44NjUsMi44NjV2NDUuOTczSDE1Ny4xODZ6Ii8+IDxjaXJjbGUgY3g9IjE4My44MzUiIGN5PSI1Ni41NTYiIHI9IjE4LjEiLz4gPHBhdGggZD0iTTMwMC44NCwxMzQuMzc1Yy04Ljc1NiwwLTI1Mi42MjIsMC0yNjAuNzg5LDBjLTE4LjEwOSwwLTMyLjg2NCwxNC43MTctMzIuODY0LDMyLjg2NHYyNjAuNzg5IGMwLDE4LjEyLDE0Ljc0MiwzMi44NjUsMzIuODY0LDMyLjg2NUgzMDAuODRjMTguMTE4LDAsMzIuODY1LTE0LjczOSwzMi44NjUtMzIuODY1VjE2Ny4yMzkgQzMzMy43MDUsMTQ5LjA5OCwzMTguOTUyLDEzNC4zNzUsMzAwLjg0LDEzNC4zNzV6IE0zNy4xODYsMTY3LjIzOWMwLTEuNTc5LDEuMjg1LTIuODY0LDIuODY0LTIuODY0aDI2MC43ODkgYzEuNTgsMCwyLjg2NSwxLjI4NSwyLjg2NSwyLjg2NHY0NS45NzRIMzcuMTg2VjE2Ny4yMzl6IE0zMDMuNzA2LDQyOC4wMjhoLTAuMDAxYzAsMS41OC0xLjI4NSwyLjg2NS0yLjg2NSwyLjg2NUg0MC4wNTEgYy0xLjU3OSwwLTIuODY0LTEuMjg1LTIuODY0LTIuODY1VjI0My4yMTNoMjY2LjUxOVY0MjguMDI4eiIvPiA8Y2lyY2xlIGN4PSI2NC44MzUiIGN5PSIxODguOTMxIiByPSIxOC4xIi8+IDwvZz4gPC9nPiA8L2c+IDwvc3ZnPg=="},7481:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic2VsZWN0X3RleHQiPiA8cGF0aCBkPSJNMSw5aDJ2MkgxVjl6IE0xLDdoMlY1SDFWN3ogTTUsMjNoMnYtMkg1VjIzeiBNMSwzaDJWMUgxVjN6IE0xLDIzaDJ2LTJIMVYyM3ogTTExLDFIOXYyaDJWMXogTTE1LDFoLTJ2MmgyVjF6IE03LDFINXYyaDIgVjF6IE05LDIzaDJ2LTJIOVYyM3ogTTEsMTloMnYtMkgxVjE5eiBNMSwxNWgydi0ySDFWMTV6IE0yMSwxMWgyVjloLTJWMTF6IE0xMywyM2gydi0yaC0yVjIzeiBNMjEsMTVoMnYtMmgtMlYxNXogTTIxLDdoMlY1aC0yVjd6IE0yMSwxdjJoMlYxSDIxeiBNMjEsMTloMnYtMmgtMlYxOXogTTIxLDIzaDJ2LTJoLTJWMjN6IE0xNywyM2gydi0yaC0yVjIzeiBNMTcsM2gyVjFoLTJWM3ogTTE3Ljg5NSw3LjMwMyBDMTcuOTY1LDcuMjE5LDE4LDcuMDkzLDE4LDYuOTE4VjUuNTA0YzAtMC4xODktMC4wMzUtMC4zMjItMC4xMDUtMC4zOTJDMTcuODE4LDUuMDM1LDE3LjY4NSw1LDE3LjQ5Niw1SDE1LjVoLTAuNzc1aC01LjQ1SDguNSBINi41MDRDNi4zMjksNSw2LjE5Niw1LjAzNSw2LjExOSw1LjExMkM2LjAzNSw1LjE4Miw2LDUuMzE1LDYsNS41MDR2MS40MTRjMCwwLjE3NSwwLjAzNSwwLjMwMSwwLjExOSwwLjM4NSBjMC4wNzcsMC4wODQsMC4yMSwwLjExOSwwLjM4NSwwLjExOUg4LjVoMC43NzVoMS4yMTN2MTEuMDc0YzAsMC4xNzUsMC4wMzUsMC4zMDEsMC4xMTksMC4zODVDMTAuNjg0LDE4Ljk1OCwxMC44MTcsMTksMTAuOTkyLDE5IGgyLjAxNmMwLjE4OSwwLDAuMzIyLTAuMDQyLDAuMzk5LTAuMTE5YzAuMDctMC4wODQsMC4xMDUtMC4yMSwwLjEwNS0wLjM4NVY3LjQyMmgxLjIxM0gxNS41aDEuOTk2IEMxNy42ODUsNy40MjIsMTcuODE4LDcuMzg3LDE3Ljg5NSw3LjMwM3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},3219:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjUgMC43NUMxLjA4NTc5IDAuNzUgMC43NSAxLjA4NTc5IDAuNzUgMS41VjYuNzVDMC43NSA3LjE2NDIxIDEuMDg1NzkgNy41IDEuNSA3LjVIMy4zMjU1Mkw1LjA3OTUxIDEwLjQyMTFMNS4wODA4NyAxMC40MjM0QzUuMzg4MjkgMTAuOTMxMyA1Ljk0NTcyIDExLjI1IDYuNTQ3NSAxMS4yNUM3LjQ5NDIxIDExLjI1IDguMjU3NSAxMC40ODY3IDguMjU3NSA5LjU0VjguMjg3NUg5LjMzNzVDMTAuODAyIDguMjg3NSAxMS44Njg5IDYuOTEzMzYgMTEuNTIwOCA1LjQ5ODMyTDExLjUyMDIgNS40OTYwM0wxMC43NjMxIDIuNDYwMDNMMTAuNzYyOCAyLjQ1ODk2QzEwLjUxNSAxLjQ1ODU2IDkuNjE1OTEgMC43NSA4LjU4IDAuNzVIMy43NUgxLjVaTTIuMjUgNlYyLjI1SDNWNkgyLjI1Wk00LjUgNi41NDIxM0w2LjM2NDEzIDkuNjQ2NjVMNi4zNjQ1NSA5LjY0NzM1QzYuNDAyMjUgOS43MDkwNiA2LjQ3NDU1IDkuNzUgNi41NDc1IDkuNzVDNi42NjU3OSA5Ljc1IDYuNzU3NSA5LjY1ODI5IDYuNzU3NSA5LjU0VjcuNTM3NUM2Ljc1NzUgNy4xMjMyOSA3LjA5MzI5IDYuNzg3NSA3LjUwNzUgNi43ODc1SDkuMzM3NUM5LjgyMjY4IDYuNzg3NSAxMC4xODA2IDYuMzMyMjcgMTAuMDY0NSA1Ljg1NzY1TDEwLjA2NDIgNS44NTY2OUw5LjMwNzI5IDIuODIxNDhMOS4zMDY5MiAyLjgxOTk4QzkuMjI0MzQgMi40ODU5NCA4LjkyMzcyIDIuMjUgOC41OCAyLjI1SDQuNVY2LjU0MjEzWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},6828:I=>{I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjM2NDU1IDIuMzUyNjRMNi4zNjQxMiAyLjM1MzM1TDQuNSA1LjQ1Nzg3VjkuNzVIOC41OEM4LjkyMzcyIDkuNzUgOS4yMjQzNCA5LjUxNDA2IDkuMzA2OTEgOS4xODAwMkwxMC4wNjQyIDYuMTQzMzJMMTAuMDY0NCA2LjE0MjQ4QzEwLjE4MDcgNS42Njc4MSA5LjgyMjcxIDUuMjEyNSA5LjMzNzUgNS4yMTI1SDcuNTA3NUM3LjA5MzI5IDUuMjEyNSA2Ljc1NzUgNC44NzY3MSA2Ljc1NzUgNC40NjI1VjIuNDZDNi43NTc1IDIuMzQxNzEgNi42NjU3OSAyLjI1IDYuNTQ3NSAyLjI1QzYuNDc0NTUgMi4yNSA2LjQwMjI2IDIuMjkwOTQgNi4zNjQ1NSAyLjM1MjY0Wk0zIDkuNzVWNkgyLjI1VjkuNzVIM1pNMy4zMjU1MiA0LjVMNS4wNzk1MSAxLjU3ODkxTDUuMDgwODcgMS41NzY2NEM1LjM4ODI5IDEuMDY4NzQgNS45NDU3MyAwLjc1IDYuNTQ3NSAwLjc1QzcuNDk0MjIgMC43NSA4LjI1NzUgMS41MTMyOSA4LjI1NzUgMi40NlYzLjcxMjVIOS4zMzc1QzEwLjgwMiAzLjcxMjUgMTEuODY4OSA1LjA4NjY2IDExLjUyMDggNi41MDE2OUwxMS41MjAyIDYuNTAzOTlMMTAuNzYzMSA5LjUzOTk3TDEwLjc2MjkgOS41NDA3NkMxMC41MTUyIDEwLjU0MTMgOS42MTYwMSAxMS4yNSA4LjU4IDExLjI1SDEuNUMxLjA4NTc5IDExLjI1IDAuNzUgMTAuOTE0MiAwLjc1IDEwLjVWNS4yNUMwLjc1IDQuODM1NzkgMS4wODU3OSA0LjUgMS41IDQuNUgzLjMyNTUyWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},9239:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FyZXRfdXAiPiA8cGF0aCBkPSJNMTcsMTVjLTAuMjU2LDAtMC41MTItMC4wOTgtMC43MDctMC4yOTNMMTIsMTAuNDE0bC00LjI5Myw0LjI5M2MtMC4zOTEsMC4zOTEtMS4wMjMsMC4zOTEtMS40MTQsMHMtMC4zOTEtMS4wMjMsMC0xLjQxNCBsNS01YzAuMzkxLTAuMzkxLDEuMDIzLTAuMzkxLDEuNDE0LDBsNSw1YzAuMzkxLDAuMzkxLDAuMzkxLDEuMDIzLDAsMS40MTRDMTcuNTEyLDE0LjkwMiwxNy4yNTYsMTUsMTcsMTV6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},192:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icHJvZmlsZSI+IDxwYXRoIGQ9Ik03LDZjMC0yLjc2MSwyLjIzOS01LDUtNXM1LDIuMjM5LDUsNXMtMi4yMzksNS01LDVTNyw4Ljc2MSw3LDZ6IE0yMS45NDgsMTguNjg0QzIwLjg2OCwxNS40NDMsMTcuMDE1LDEyLDEyLDEyIHMtOC44NjksMy40NDMtOS45NDksNi42ODRjLTAuMTIsMC4zNTktMC4wMjYsMC43NTYsMC4yNDIsMS4wMjNDNC40MTcsMjEuODMsNy44NjQsMjMsMTIsMjNjNC4xMzcsMCw3LjU4NC0xLjE3LDkuNzA3LTMuMjkzIEMyMS45NzUsMTkuNDM5LDIyLjA2OCwxOS4wNDMsMjEuOTQ4LDE4LjY4NHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},4335:I=>{I.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0id2FybmluZyI+IDxwYXRoIGQ9Ik0yMS44NTcsMTguNDgybC05LTE1LjAzYy0wLjM2MS0wLjYwNC0xLjM1NC0wLjYwNC0xLjcxNSwwbC05LDE1LjAzYy0wLjE4NiwwLjMwOS0wLjE5LDAuNjk1LTAuMDEzLDEuMDEgQzIuMzA3LDE5LjgwNiwyLjY0LDIwLDMsMjBoMThjMC4zNiwwLDAuNjkyLTAuMTk0LDAuODctMC41MDhDMjIuMDQ4LDE5LjE3NywyMi4wNDMsMTguNzkyLDIxLjg1NywxOC40ODJ6IE0xMiwxOCBjLTAuNTUyLDAtMS0wLjQ0OC0xLTFjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMUMxMywxNy41NTIsMTIuNTUyLDE4LDEyLDE4eiBNMTMsMTRjMCwwLjU1My0wLjQ0OCwxLTEsMXMtMS0wLjQ0Ny0xLTFWOCBjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMVYxNHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},8393:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(t,"__esModule",{value:!0}),t.Button=t.ButtonAbstract=void 0;const o=e(6709),A=e(8505),a=e(9845),m=e(8984),d=e(3121),c=e(4851);e(1180);const r=e(620),i=l(e(580));class n{constructor(){this.updateLabel=x=>{},this.setEnabled=x=>{},this.hideTooltip=()=>{}}}t.ButtonAbstract=n;class h extends n{constructor(x){var b;super(),this.getButtonLabelDomBuilderObject=C=>C!==void 0?typeof C!="string"?[{type:"span",classNames:["mynah-button-label"],children:[C]}]:[{type:"span",classNames:["mynah-button-label"],innerHTML:o.marked.parseInline((0,i.default)(C))}]:[],this.showTooltip=C=>{C.trim()!==void 0&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(()=>{var p,v;const M=this.render;this.tooltipOverlay=new a.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:M,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:(p=this.props.tooltipVerticalDirection)!==null&&p!==void 0?p:a.OverlayVerticalDirection.TO_TOP,horizontalDirection:(v=this.props.tooltipHorizontalDirection)!==null&&v!==void 0?v:a.OverlayHorizontalDirection.START_TO_RIGHT,children:[new m.Card({border:!1,children:[new d.CardBody({body:C}).render]}).render]})},350))},this.hideTooltip=()=>{var C;clearTimeout(this.tooltipTimeout),this.tooltipOverlay!==null&&((C=this.tooltipOverlay)===null||C===void 0||C.close(),this.tooltipOverlay=null)},this.updateLabel=C=>{this.render.querySelector(".mynah-button-label").replaceWith(A.DomBuilder.getInstance().build(this.getButtonLabelDomBuilderObject(C)[0]))},this.setEnabled=C=>{C?this.render.removeAttribute("disabled"):this.render.setAttribute("disabled","disabled")},this.props=x,this.render=A.DomBuilder.getInstance().build({type:"button",classNames:["mynah-button",...x.primary===!1?["mynah-button-secondary"]:[],...x.border===!0?["mynah-button-border"]:[],...x.status!=null?[`status-${x.status}`]:[],...x.classNames!==void 0?x.classNames:[]],attributes:{...x.disabled===!0?{disabled:"disabled"}:{},tabindex:"0",...x.attributes},events:{...x.additionalEvents,click:C=>{this.hideTooltip(),x.onClick(C)},mouseover:C=>{var p,v;(0,r.cancelEvent)(C);const M=this.render.querySelector(".mynah-button-label");let f;x.label!=null&&typeof x.label=="string"&&M!=null&&M.offsetWidth<M.scrollWidth&&(f=(0,o.marked)((p=x.label)!==null&&p!==void 0?p:"",{breaks:!0})),x.tooltip!==void 0&&(f!=null?f+=`

`:f="",f+=(0,o.marked)((v=x.tooltip)!==null&&v!==void 0?v:"",{breaks:!0})),f!=null&&this.showTooltip(f)},mouseleave:this.hideTooltip},children:[...x.icon!==void 0?[x.icon]:[],...this.getButtonLabelDomBuilderObject(x.label),...(b=x.children)!==null&&b!==void 0?b:[]]})}}t.Button=class extends n{constructor(u){var x;return super(),this.updateLabel=b=>{},this.setEnabled=b=>{},this.hideTooltip=()=>{},new((x=c.Config.getInstance().config.componentClasses.Button)!==null&&x!==void 0?x:h)(u)}}},3121:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=t.PARTS_CLASS_NAME_VISIBLE=t.PARTS_CLASS_NAME=t.highlightersWithTooltip=void 0;const o=e(8505),A=e(6709),a=l(e(4485)),m=e(9845),d=e(5580),c=e(4024);e(9061);const r=e(4851);t.highlightersWithTooltip={start:{markupStart:"<mark ",markupAttributes:n=>`marker-index=${n}`,markupEnd:" reference-tracker>"},end:{markup:"</mark>"}},t.PARTS_CLASS_NAME="typewriter-part",t.PARTS_CLASS_NAME_VISIBLE="typewriter";class i{constructor(h){var u,x;this.nextCodeBlockIndex=0,this.codeBlockStartIndex=0,this.processNode=C=>{var p,v,M,f,y,s,g,w,k,S,L,U,F;let R=C;if(this.props.useParts===!0&&R.nodeType===Node.TEXT_NODE&&((p=R.textContent)===null||p===void 0?void 0:p.trim())!=="")R=o.DomBuilder.getInstance().build({type:"span",classNames:["mynah-ui-animation-text-content"],children:(v=R.textContent)===null||v===void 0?void 0:v.split(" ").map(E=>o.DomBuilder.getInstance().build({type:"span",classNames:[t.PARTS_CLASS_NAME],children:[E," "]}))});else{if(((M=R.tagName)===null||M===void 0?void 0:M.toLowerCase())==="a"){const E=(f=R.getAttribute("href"))!==null&&f!==void 0?f:"";return o.DomBuilder.getInstance().build({type:"a",classNames:this.props.useParts===!0?[t.PARTS_CLASS_NAME]:[],events:{click:$=>{this.props.onLinkClick!==void 0&&this.props.onLinkClick(E,$)},auxclick:$=>{this.props.onLinkClick!==void 0&&this.props.onLinkClick(E,$)}},attributes:{href:(y=R.getAttribute("href"))!==null&&y!==void 0?y:"",target:"_blank"},innerHTML:R.innerHTML})}if(((s=R.tagName)===null||s===void 0?void 0:s.toLowerCase())==="pre"&&R.querySelector("code")!==null||((g=R.tagName)===null||g===void 0?void 0:g.toLowerCase())==="code"){const E=((w=R.tagName)===null||w===void 0?void 0:w.toLowerCase())==="pre"||R.innerHTML.match(/\r|\n/)!==null,$=((k=R.tagName)===null||k===void 0?void 0:k.toLowerCase())==="pre"?R.querySelector("code"):R,W=(L=Array.from((S=$?.classList)!==null&&S!==void 0?S:[]).find(ne=>ne.match("language-")))===null||L===void 0?void 0:L.replace("language-",""),ee=(U=$?.innerHTML)!==null&&U!==void 0?U:"",V=new d.SyntaxHighlighter({codeStringWithMarkup:(0,a.default)(ee),language:W?.trim()!==""?W:"",keepHighlights:!0,codeBlockActions:E?{...r.Config.getInstance().config.codeBlockActions,...this.props.codeBlockActions}:void 0,block:E,index:E?this.nextCodeBlockIndex:void 0,onCopiedToClipboard:this.props.onCopiedToClipboard!=null?(ne,P,N)=>{this.props.onCopiedToClipboard!=null&&this.props.onCopiedToClipboard(ne,P,this.getReferenceTrackerInformationFromElement(V),this.codeBlockStartIndex+(N??0),this.nextCodeBlockIndex)}:void 0,onCodeBlockAction:this.props.onCodeBlockAction!=null?(ne,P,N,Z,K,he)=>{var de,_;(_=(de=this.props).onCodeBlockAction)===null||_===void 0||_.call(de,ne,P,N,Z,this.getReferenceTrackerInformationFromElement(V),this.codeBlockStartIndex+(he??0),this.nextCodeBlockIndex)}:void 0}).render;return this.props.useParts===!0&&V.classList.add(t.PARTS_CLASS_NAME),E&&++this.nextCodeBlockIndex,V}(F=R.childNodes)===null||F===void 0||F.forEach(E=>{R.replaceChild(this.processNode(E),E)})}return R},this.getReferenceTrackerInformationFromElement=C=>{var p;const v=(p=C.querySelector("code"))===null||p===void 0?void 0:p.cloneNode(!0);if(v!==void 0){const M=v.querySelectorAll("mark[reference-tracker]");if(M.length>0)return Array.from(M).map((f,y)=>{var s,g,w,k,S,L;const U=`__MARK${y}_${(0,c.generateUID)()}_START__`,F=o.DomBuilder.getInstance().build({type:"span",innerHTML:U});f.insertAdjacentElement("afterbegin",F);const R=v.innerText.indexOf(U);F.remove();const E=(s=this.props.highlightRangeWithTooltip)===null||s===void 0?void 0:s[parseInt((g=f.getAttribute("marker-index"))!==null&&g!==void 0?g:"0")];return{...E,recommendationContentSpan:{start:R,end:R+(((k=(w=E?.recommendationContentSpan)===null||w===void 0?void 0:w.end)!==null&&k!==void 0?k:0)-((L=(S=E?.recommendationContentSpan)===null||S===void 0?void 0:S.start)!==null&&L!==void 0?L:0))}}})}return[]},this.showHighlightRangeTooltip=(C,p)=>{clearTimeout(this.highlightRangeTooltipTimeout),this.highlightRangeTooltipTimeout=setTimeout(()=>{var v;this.highlightRangeTooltip=new m.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:(v=C.currentTarget)!==null&&v!==void 0?v:C.target,removeOtherOverlays:!0,dimOutside:!1,verticalDirection:m.OverlayVerticalDirection.TO_TOP,horizontalDirection:m.OverlayHorizontalDirection.START_TO_RIGHT,children:[{type:"div",classNames:["mynah-ui-syntax-highlighter-highlight-tooltip"],children:[new i({body:p}).render]}]})},500)},this.hideHighlightRangeTooltip=()=>{var C;clearTimeout(this.highlightRangeTooltipTimeout),this.highlightRangeTooltip!==null&&((C=this.highlightRangeTooltip)===null||C===void 0||C.close(),this.highlightRangeTooltip=null)},this.getContentBodyChildren=C=>{if(C.body!=null&&C.body.trim()!==""){let p=C.body;return C.body!==void 0&&C.highlightRangeWithTooltip!==void 0&&C.highlightRangeWithTooltip.length>0&&C.highlightRangeWithTooltip.forEach((v,M)=>{if(p!==void 0&&v.recommendationContentSpan!==void 0){const f=`${t.highlightersWithTooltip.start.markupStart}${t.highlightersWithTooltip.start.markupAttributes(M.toString())}${t.highlightersWithTooltip.start.markupEnd}`;let y=v.recommendationContentSpan.start+M*(f.length+t.highlightersWithTooltip.end.markup.length),s=y+f.length-v.recommendationContentSpan.start+v.recommendationContentSpan.end;s>p.length&&(y=p.length-1),s>p.length&&(s=p.length-1),p=p.slice(0,y)+f+p.slice(y),p=p.slice(0,s)+t.highlightersWithTooltip.end.markup+p.slice(s)}}),[...Array.from(o.DomBuilder.getInstance().build({type:"div",innerHTML:`${A.marked.parse(p,{breaks:!0})}`}).childNodes).map(v=>{const M=this.processNode(v);return M.querySelectorAll!==void 0&&Array.from(M.querySelectorAll("*:empty:not(img):not(br):not(hr)")).forEach(f=>{f.remove()}),M})]}return[]},this.codeBlockStartIndex=(u=h.codeBlockStartIndex)!==null&&u!==void 0?u:0,this.props=h;const b=[...this.getContentBodyChildren(this.props),...this.props.children!=null?this.props.processChildren===!0?this.props.children.map(C=>{const p=this.processNode(C);return p.querySelectorAll!==void 0&&Array.from(p.querySelectorAll("*:empty:not(img):not(br):not(hr)")).forEach(v=>{v.remove()}),p}):this.props.children:[]];this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card-body",...(x=this.props.classNames)!==null&&x!==void 0?x:[]],children:this.props.childLocation==="above-body"?b.reverse():b}),Array.from(this.render.querySelectorAll("mark[reference-tracker]")).forEach(C=>{C.addEventListener("mouseenter",p=>{var v,M;const f=parseInt((v=p.target.getAttribute("marker-index"))!==null&&v!==void 0?v:"0");((M=h.highlightRangeWithTooltip)===null||M===void 0?void 0:M[f])!==void 0&&this.showHighlightRangeTooltip(p,h.highlightRangeWithTooltip[f].information)}),C.addEventListener("mouseleave",this.hideHighlightRangeTooltip)})}}t.CardBody=i},8984:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;const l=e(8505),o=e(1116);e(9061),t.Card=class{constructor(A){var a,m,d;this.engagementStartTime=-1,this.totalMouseDistanceTraveled={x:0,y:0},this.resetEngagement=()=>{this.engagementStartTime=-1,this.totalMouseDistanceTraveled={x:0,y:0},this.previousMousePosition={x:0,y:0},this.mouseDownInfo={x:0,y:0,time:-1}},this.handleEngagement=c=>{var r;this.props.onCardEngaged!==void 0&&this.props.onCardEngaged({engagementDurationTillTrigger:new Date().getTime()-this.engagementStartTime,engagementType:c!==void 0?o.EngagementType.INTERACTION:o.EngagementType.TIME,totalMouseDistanceTraveled:this.totalMouseDistanceTraveled,selectionDistanceTraveled:Boolean((r=c?.x)!==null&&r!==void 0?r:0)&&Boolean(c?.y)?c:void 0}),this.resetEngagement()},this.props=A,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card",`padding-${(a=A.padding)!==null&&a!==void 0?a:"large"}`,A.border!==!1?"border":"",A.background!==!1?"background":"",...(m=A.classNames)!==null&&m!==void 0?m:[]],persistent:A.persistent,innerHTML:A.innerHTML,children:[...(d=A.children)!==null&&d!==void 0?d:[]],events:{...A.events,...A.onCardEngaged!==void 0?{mouseenter:c=>{this.engagementStartTime===-1&&(this.engagementStartTime=new Date().getTime(),this.previousMousePosition={x:c.clientX,y:c.clientY},this.totalMouseDistanceTraveled={x:0,y:0})},mousemove:c=>{this.engagementStartTime===-1&&(this.engagementStartTime=new Date().getTime()),this.totalMouseDistanceTraveled={x:this.totalMouseDistanceTraveled.x+Math.abs(c.clientX-this.previousMousePosition.x),y:this.totalMouseDistanceTraveled.y+Math.abs(c.clientY-this.previousMousePosition.y)},this.previousMousePosition={x:c.clientX,y:c.clientY}},mousedown:c=>{this.mouseDownInfo={x:c.clientX,y:c.clientY,time:new Date().getTime()}},mouseup:c=>{var r;const i=c.clientX,n=c.clientY,h=new Date().getTime();this.mouseDownInfo!==void 0&&(Math.abs(this.mouseDownInfo.x-i)>6||Math.abs(this.mouseDownInfo.y-n)>6)&&h-this.mouseDownInfo.time>300&&this.handleEngagement({x:Math.abs(this.mouseDownInfo.x-i),y:Math.abs(this.mouseDownInfo.y-n),selectedText:(r=window?.getSelection())===null||r===void 0?void 0:r.toString()})},mouseleave:()=>{const c=new Date().getTime();this.engagementStartTime!==-1&&c-this.engagementStartTime>3e3?this.handleEngagement():this.resetEngagement()}}:{}},attributes:A.attributes})}}},1582:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemButtonsWrapper=void 0;const l=e(8505),o=e(8393),A=e(5316);t.ChatItemButtonsWrapper=class{constructor(a){var m;this.actions={},this.handleValidationChange=d=>{Object.keys(this.actions).forEach(c=>{this.actions[c].data.waitMandatoryFormItems!==!1&&this.actions[c].element.setEnabled(d)})},this.disableAll=()=>{Object.keys(this.actions).forEach(d=>{this.actions[d].data.disabled!==!1&&this.actions[d].element.setEnabled(!1)})},this.props=a,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-buttons-container",...(m=this.props.classNames)!==null&&m!==void 0?m:[]],children:this.props.buttons.map(d=>{const c=new o.Button({label:d.text,icon:d.icon!=null?new A.Icon({icon:d.icon}).render:void 0,primary:d.status==="primary",border:d.status!=="primary",status:d.status,onClick:r=>{a.formItems!==null&&a.formItems.disableAll(),this.disableAll(),this.props.onActionClick(d,r)}});return d.disabled===!0&&c.setEnabled(!1),this.actions[d.id]={data:d,element:c},c.render})}),a.formItems!==null&&(this.handleValidationChange(a.formItems.isFormValid()),a.formItems.onValidationChange=d=>{this.handleValidationChange(d)})}}},1349:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemCardContent=void 0;const l=e(8505),o=e(3121),A=e(4024);t.ChatItemCardContent=class{constructor(a){var m,d;this.contentBody=null,this.updateStack=[],this.typewriterItemIndex=0,this.typewriterId=`typewriter-card-${(0,A.generateUID)()}`,this.lastAnimationDuration=0,this.getCardContent=()=>{var c,r;return new o.CardBody({body:(c=this.props.body)!==null&&c!==void 0?c:"",useParts:this.props.renderAsStream,classNames:[this.typewriterId,...(r=this.props.classNames)!==null&&r!==void 0?r:[]],highlightRangeWithTooltip:this.props.codeReference,children:this.props.children,...this.props.contentProperties})},this.updateCard=()=>{var c,r,i;if(this.updateTimer===void 0&&this.updateStack.length>0){const n=this.updateStack.shift();if(n!==void 0){this.props={...this.props,...n};const h=this.getCardContent(),u=Array.from((c=h.render.querySelectorAll(".typewriter-part"))!==null&&c!==void 0?c:[]);for(let C=0;C<u.length;C++)u[C].setAttribute("index",C.toString());const x=u.length-this.typewriterItemIndex,b=Math.min(50,Math.floor(500/x));h.render.insertAdjacentElement("beforeend",(0,l.getTypewriterPartsCss)(this.typewriterId,this.typewriterItemIndex,u.length,b)),(i=(r=this.props).onAnimationStateChange)===null||i===void 0||i.call(r,!0),this.contentBody=h,this.render.replaceWith(this.contentBody.render),this.render=this.contentBody.render,this.lastAnimationDuration=b*x,this.typewriterItemIndex=u.length,this.updateTimer=setTimeout(()=>{var C,p;this.updateTimer=void 0,(p=(C=this.props).onAnimationStateChange)===null||p===void 0||p.call(C,!1),this.updateCard()},this.lastAnimationDuration)}}},this.updateCardStack=c=>{this.updateStack.push(c),this.updateCard()},this.getRenderDetails=()=>{var c,r;return{totalNumberOfCodeBlocks:(r=(c=this.contentBody)===null||c===void 0?void 0:c.nextCodeBlockIndex)!==null&&r!==void 0?r:0}},this.props=a,this.contentBody=this.getCardContent(),this.render=this.contentBody.render,(m=this.props.renderAsStream)!==null&&m!==void 0&&m&&((d=this.props.body)!==null&&d!==void 0?d:"").trim()!==""&&this.updateCardStack({})}}},3085:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemCard=void 0;const l=e(8505),o=e(620),A=e(3753),a=e(1116),m=e(3121),d=e(5316),c=e(215),r=e(7770),i=e(4213),n=e(1495),h=e(4851),u=e(1144),x=e(1582),b=e(4354),C=e(5914),p=e(1567),v=e(8984),M=e(1349);class f{constructor(s){var g,w;this.card=null,this.updateStack=[],this.initialSpinner=null,this.cardFooter=null,this.cardIcon=null,this.contentBody=null,this.chatFormItems=null,this.customRendererWrapper=null,this.chatButtons=null,this.fileTreeWrapper=null,this.followUps=null,this.votes=null,this.footer=null,this.getCardFooter=()=>l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-footer","mynah-card-inner-order-70"]}),this.generateCard=()=>{var k,S,L;const U=l.DomBuilder.getInstance().build({type:"div",classNames:this.getCardClasses(),attributes:{messageId:(k=this.props.chatItem.messageId)!==null&&k!==void 0?k:"unknown"},children:[...this.canShowAvatar()&&A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("showChatAvatars")===!0?[this.chatAvatar]:[],...this.card!=null?[(S=this.card)===null||S===void 0?void 0:S.render]:[],...((L=this.props.chatItem.followUp)===null||L===void 0?void 0:L.text)!==void 0?[new c.ChatItemFollowUpContainer({tabId:this.props.tabId,chatItem:this.props.chatItem}).render]:[]]});return setTimeout(()=>{U.addClass("reveal"),this.checkCardSnap()},this.props.chatItem.type===a.ChatItemType.PROMPT?10:200),U},this.getCardClasses=()=>{var k,S;return[...this.props.chatItem.icon!==void 0?["mynah-chat-item-card-has-icon"]:[],...this.props.inline===!0?["mynah-ui-chat-item-inline-card"]:[],...this.props.small===!0?["mynah-ui-chat-item-small-card"]:[],`mynah-chat-item-card-status-${(k=this.props.chatItem.status)!==null&&k!==void 0?k:"default"}`,"mynah-chat-item-card",`mynah-chat-item-${(S=this.props.chatItem.type)!==null&&S!==void 0?S:a.ChatItemType.ANSWER}`,...(0,p.chatItemHasContent)(this.props.chatItem)?[]:["mynah-chat-item-empty"]]},this.updateCardContent=()=>{var k,S,L,U,F,R,E,$,W,ee,V,ne,P,N,Z,K,he,de,_,Q,Y;if(A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId)===void 0)return;const re={onLinkClick:(me,Ae)=>{o.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.LINK_CLICK,{messageId:this.props.chatItem.messageId,link:me,event:Ae})},onCopiedToClipboard:(me,Ae,se,ie)=>{var ze,Ie,De,xe;o.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.COPY_CODE_TO_CLIPBOARD,{messageId:this.props.chatItem.messageId,type:me,text:Ae,referenceTrackerInformation:se,codeBlockIndex:ie,totalCodeBlocks:((Ie=(ze=this.contentBody)===null||ze===void 0?void 0:ze.getRenderDetails().totalNumberOfCodeBlocks)!==null&&Ie!==void 0?Ie:0)+((xe=(De=this.customRendererWrapper)===null||De===void 0?void 0:De.nextCodeBlockIndex)!==null&&xe!==void 0?xe:0)})},...Object.keys((k=h.Config.getInstance().config.codeBlockActions)!==null&&k!==void 0?k:{}).length>0||Object.keys((S=this.props.chatItem.codeBlockActions)!==null&&S!==void 0?S:{}).length>0?{codeBlockActions:{...h.Config.getInstance().config.codeBlockActions,...this.props.chatItem.codeBlockActions},onCodeBlockAction:(me,Ae,se,ie,ze,Ie)=>{var De,xe,oe,q;o.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.CODE_BLOCK_ACTION,{actionId:me,data:Ae,messageId:this.props.chatItem.messageId,type:se,text:ie,referenceTrackerInformation:ze,codeBlockIndex:Ie,totalCodeBlocks:((xe=(De=this.contentBody)===null||De===void 0?void 0:De.getRenderDetails().totalNumberOfCodeBlocks)!==null&&xe!==void 0?xe:0)+((q=(oe=this.customRendererWrapper)===null||oe===void 0?void 0:oe.nextCodeBlockIndex)!==null&&q!==void 0?q:0)})}}:{}};if((0,p.chatItemHasContent)(this.props.chatItem)&&((U=(L=this.initialSpinner)===null||L===void 0?void 0:L[0])===null||U===void 0||U.remove()),this.props.chatItem.icon!==void 0&&(this.cardIcon!==null?(this.cardIcon.render.remove(),this.cardIcon=null):(this.cardIcon=new d.Icon({icon:this.props.chatItem.icon,classNames:["mynah-chat-item-card-icon","mynah-card-inner-order-10"]}),(F=this.card)===null||F===void 0||F.render.insertChild("beforeend",this.cardIcon.render))),this.props.chatItem.body!=null&&this.props.chatItem.body!==""){const me={body:(R=this.props.chatItem.body)!==null&&R!==void 0?R:"",classNames:["mynah-card-inner-order-20"],renderAsStream:this.props.chatItem.type===a.ChatItemType.ANSWER_STREAM,codeReference:this.props.chatItem.codeReference,onAnimationStateChange:Ae=>{var se,ie;Ae?(se=this.render)===null||se===void 0||se.addClass("typewriter-animating"):(ie=this.render)===null||ie===void 0||ie.removeClass("typewriter-animating")},children:this.props.chatItem.relatedContent!==void 0?[new r.ChatItemSourceLinksContainer({messageId:(E=this.props.chatItem.messageId)!==null&&E!==void 0?E:"unknown",tabId:this.props.tabId,relatedContent:($=this.props.chatItem.relatedContent)===null||$===void 0?void 0:$.content,title:(W=this.props.chatItem.relatedContent)===null||W===void 0?void 0:W.title}).render]:[],contentProperties:re};this.contentBody!==null?this.contentBody.updateCardStack(me):(this.contentBody=new M.ChatItemCardContent(me),(ee=this.card)===null||ee===void 0||ee.render.insertChild("beforeend",this.contentBody.render))}if(this.customRendererWrapper!==null&&(this.customRendererWrapper.render.remove(),this.customRendererWrapper=null),this.props.chatItem.customRenderer!=null){const me={};typeof this.props.chatItem.customRenderer=="object"?me.children=Array.isArray(this.props.chatItem.customRenderer)?this.props.chatItem.customRenderer:[this.props.chatItem.customRenderer]:typeof this.props.chatItem.customRenderer=="string"&&(me.innerHTML=(0,b.cleanHtml)(this.props.chatItem.customRenderer)),this.customRendererWrapper=new m.CardBody({body:me.innerHTML,children:me.children,classNames:["mynah-card-inner-order-30"],processChildren:!0,useParts:!0,codeBlockStartIndex:(ne=(V=this.contentBody)===null||V===void 0?void 0:V.getRenderDetails().totalNumberOfCodeBlocks)!==null&&ne!==void 0?ne:0,...re}),(P=this.card)===null||P===void 0||P.render.insertChild("beforeend",this.customRendererWrapper.render)}if(this.chatFormItems!==null&&(this.chatFormItems.render.remove(),this.chatFormItems=null),this.props.chatItem.formItems!==void 0&&(this.chatFormItems=new u.ChatItemFormItemsWrapper({classNames:["mynah-card-inner-order-40"],tabId:this.props.tabId,chatItem:this.props.chatItem}),(N=this.card)===null||N===void 0||N.render.insertChild("beforeend",this.chatFormItems.render)),this.fileTreeWrapper!=null&&(this.fileTreeWrapper.render.remove(),this.fileTreeWrapper=null),this.props.chatItem.fileList!==void 0){const{filePaths:me=[],deletedFiles:Ae=[],actions:se,details:ie}=this.props.chatItem.fileList,ze=(Z=this.props.chatItem.body)!==null&&Z!==void 0?Z:"";this.fileTreeWrapper=new n.ChatItemTreeViewWrapper({tabId:this.props.tabId,classNames:["mynah-card-inner-order-50"],messageId:(K=this.props.chatItem.messageId)!==null&&K!==void 0?K:"",cardTitle:this.props.chatItem.fileList.fileTreeTitle,rootTitle:this.props.chatItem.fileList.rootFolderTitle,files:me,deletedFiles:Ae,actions:se,details:ie,references:(he=this.props.chatItem.codeReference)!==null&&he!==void 0?he:[],referenceSuggestionLabel:ze}),(de=this.card)===null||de===void 0||de.render.insertChild("beforeend",this.fileTreeWrapper.render)}this.chatButtons!==null&&(this.chatButtons.render.remove(),this.chatButtons=null),this.props.chatItem.buttons!==void 0&&(this.chatButtons=new x.ChatItemButtonsWrapper({tabId:this.props.tabId,classNames:["mynah-card-inner-order-60"],formItems:this.chatFormItems,buttons:this.props.chatItem.buttons,onActionClick:me=>{if(o.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.BODY_ACTION_CLICKED,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,actionId:me.id,actionText:me.text,...this.chatFormItems!==null?{formItemValues:this.chatFormItems.getAllValues()}:{}}),me.keepCardAfterClick===!1&&(this.render.remove(),this.props.chatItem.messageId!==void 0)){const Ae=A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("chatItems");A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).updateStore({chatItems:[...Ae.map(se=>this.props.chatItem.messageId!==se.messageId?se:{type:a.ChatItemType.ANSWER,messageId:se.messageId})]},!0)}}}),(_=this.card)===null||_===void 0||_.render.insertChild("beforeend",this.chatButtons.render)),this.cardFooter!==null&&(this.cardFooter.remove(),this.cardFooter=null),this.props.chatItem.footer==null&&this.props.chatItem.canBeVoted!==!0||(this.cardFooter=this.getCardFooter(),(Q=this.card)===null||Q===void 0||Q.render.insertChild("beforeend",this.cardFooter),this.footer!==null&&(this.footer.render.remove(),this.footer=null),this.props.chatItem.footer!==void 0&&(this.footer=new f({tabId:this.props.tabId,small:!0,inline:!0,chatItem:{...this.props.chatItem.footer,type:a.ChatItemType.ANSWER,messageId:this.props.chatItem.messageId}}),this.cardFooter.insertChild("beforeend",this.footer.render)),this.votes!==null&&(this.votes.render.remove(),this.votes=null),this.props.chatItem.canBeVoted===!0&&this.props.chatItem.messageId!==void 0&&(this.votes=new i.ChatItemRelevanceVote({tabId:this.props.tabId,messageId:this.props.chatItem.messageId}),this.cardFooter.insertChild("beforeend",this.votes.render))),this.followUps!==null&&(this.followUps.render.remove(),this.followUps=null),this.props.chatItem.followUp!=null&&(this.followUps=new c.ChatItemFollowUpContainer({tabId:this.props.tabId,chatItem:this.props.chatItem}),(Y=this.render)===null||Y===void 0||Y.insertChild("beforeend",this.followUps.render))},this.getChatAvatar=()=>l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-icon-wrapper"],children:[new d.Icon({icon:this.props.chatItem.type===a.ChatItemType.PROMPT?d.MynahIcons.USER:d.MynahIcons.Q}).render]}),this.canShowAvatar=()=>this.props.chatItem.type===a.ChatItemType.ANSWER_STREAM||this.props.inline!==!0&&(0,p.chatItemHasContent)({...this.props.chatItem,followUp:void 0}),this.checkCardSnap=()=>{this.render.offsetParent!=null&&this.props.chatItem.snapToTop===!0&&(this.render.offsetParent.scrollTop=this.render.offsetTop-C.CONTAINER_GAP-this.render.offsetParent.offsetTop)},this.updateCard=()=>{var k,S,L;if(this.updateStack.length>0){const U=this.updateStack.shift();if(U!==void 0){if(this.props.chatItem={...this.props.chatItem,...U},this.props.chatItem.messageId!==void 0){const F=(S=(k=A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId))===null||k===void 0?void 0:k.getStore())===null||S===void 0?void 0:S.chatItems;A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).updateStore({chatItems:F?.map(R=>R.messageId===this.props.chatItem.messageId?this.props.chatItem:R)},!0)}(L=this.render)===null||L===void 0||L.update({...this.props.chatItem.messageId!=null?{attributes:{messageid:this.props.chatItem.messageId}}:{},classNames:[...this.getCardClasses(),"reveal"]}),this.updateCardContent(),this.updateCard()}}else setTimeout(()=>{this.checkCardSnap()},200)},this.updateCardStack=k=>{this.updateStack.push(k),this.updateCard()},this.getRenderDetails=()=>{var k,S,L,U;return{totalNumberOfCodeBlocks:((S=(k=this.contentBody)===null||k===void 0?void 0:k.getRenderDetails().totalNumberOfCodeBlocks)!==null&&S!==void 0?S:0)+((U=(L=this.customRendererWrapper)===null||L===void 0?void 0:L.nextCodeBlockIndex)!==null&&U!==void 0?U:0)}},this.cleanFollowupsAndRemoveIfEmpty=()=>{var k,S;return(S=(k=this.followUps)===null||k===void 0?void 0:k.render)===null||S===void 0||S.remove(),this.followUps=null,!(0,p.chatItemHasContent)({...this.props.chatItem,followUp:void 0})&&(this.render.remove(),!0)},this.props=s,this.chatAvatar=this.getChatAvatar(),A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("showChatAvatars",k=>{k&&this.canShowAvatar()?(this.chatAvatar=this.getChatAvatar(),this.render.insertChild("afterbegin",this.chatAvatar)):this.chatAvatar.remove()}),this.props.chatItem.type===a.ChatItemType.ANSWER_STREAM&&(this.initialSpinner=[l.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-chat-items-spinner"],children:[{type:"span"},{type:"div",children:[h.Config.getInstance().config.texts.spinnerText]}]})]),this.cardFooter=this.getCardFooter(),this.card=new v.Card({children:(g=this.initialSpinner)!==null&&g!==void 0?g:[],background:this.props.inline!==!0,border:this.props.inline!==!0,padding:this.props.inline===!0?"none":void 0}),this.updateCardContent(),this.render=this.generateCard(),this.props.chatItem.type===a.ChatItemType.ANSWER_STREAM&&((w=this.props.chatItem.body)!==null&&w!==void 0?w:"").trim()!==""&&this.updateCardStack({})}}t.ChatItemCard=f},215:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemFollowUpContainer=void 0;const l=e(8505),o=e(620),A=e(1116),a=e(8393),m=e(5316);t.ChatItemFollowUpContainer=class{constructor(d){var c,r,i,n;this.handleLinkClick=(h,u)=>{o.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.LINK_CLICK,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,link:h,event:u})},this.props=d,this.props.chatItem=d.chatItem,this.followupOptions=((r=(c=this.props.chatItem.followUp)===null||c===void 0?void 0:c.options)!==null&&r!==void 0?r:[]).map(h=>new a.Button({classNames:["mynah-chat-item-followup-question-option"],status:h.status,label:h.pillText,tooltip:h.description,disabled:h.disabled,border:!0,primary:!1,...h.icon!=null?{icon:new m.Icon({icon:h.icon}).render}:{},onClick:()=>{var u,x;o.MynahUIGlobalEvents.getInstance().removeListener(A.MynahEventNames.CHAT_ITEM_ADD,this.itemAddListenerId),o.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.FOLLOW_UP_CLICKED,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,followUpOption:h}),!((u=this.render.parentElement)===null||u===void 0)&&u.hasClass("mynah-chat-item-empty")?(x=this.render.parentElement)===null||x===void 0||x.remove():this.render.remove()}})),this.itemAddListenerId=o.MynahUIGlobalEvents.getInstance().addListener(A.MynahEventNames.CHAT_ITEM_ADD,h=>{h.tabId===this.props.tabId&&(this.render.remove(),this.followupOptions.forEach(u=>u.hideTooltip()),this.followupOptions=[],o.MynahUIGlobalEvents.getInstance().removeListener(A.MynahEventNames.CHAT_ITEM_ADD,this.itemAddListenerId))}),this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-followup-question"],children:[{type:"div",classNames:["mynah-chat-item-followup-question-text"],children:[(n=(i=this.props.chatItem.followUp)===null||i===void 0?void 0:i.text)!==null&&n!==void 0?n:""]},{type:"div",classNames:["mynah-chat-item-followup-question-options-wrapper"],children:this.followupOptions.map(h=>h.render)}]}),Array.from(this.render.getElementsByTagName("a")).forEach(h=>{const u=h.href;h.onclick=x=>{this.handleLinkClick(u,x)},h.onauxclick=x=>{this.handleLinkClick(u,x)}})}}},1144:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemFormItemsWrapper=void 0;const l=e(4851),o=e(8505),A=e(3428),a=e(8073),m=e(1936),d=e(9010),c=e(1211),r=e(5316);t.ChatItemFormItemsWrapper=class{constructor(i){var n,h;this.options={},this.validationItems={},this.isValid=!1,this.getValidationHandler=u=>u.mandatory===!0?(this.validationItems[u.id]=u.value!==void 0&&u.value!=="",{onChange:x=>{this.validationItems[u.id]=x!==void 0&&x!=="",this.isFormValid()}}):{},this.isFormValid=()=>{const u=Object.keys(this.validationItems).reduce((x,b)=>x&&this.validationItems[b],!0);return this.isValid!==u&&this.onValidationChange!==void 0&&this.onValidationChange(u),this.isValid=u,u},this.disableAll=()=>{Object.keys(this.options).forEach(u=>this.options[u].setEnabled(!1))},this.getAllValues=()=>{const u={};return Object.keys(this.options).forEach(x=>{u[x]=this.options[x].getValue()}),u},this.props=i,this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-form-items-container",...(n=this.props.classNames)!==null&&n!==void 0?n:[]],children:(h=this.props.chatItem.formItems)===null||h===void 0?void 0:h.map(u=>{var x,b,C,p,v;let M,f=`${u.mandatory===!0?"* ":""}${(x=u.title)!==null&&x!==void 0?x:""}`;u.mandatory===!0&&(f=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-ui-form-item-mandatory-title"],children:[new r.Icon({icon:r.MynahIcons.ASTERISK}).render,(b=u.title)!==null&&b!==void 0?b:""]}),u.value===void 0&&(u.value=(p=(C=u.options)===null||C===void 0?void 0:C[0])===null||p===void 0?void 0:p.value));const y=(v=u.value)===null||v===void 0?void 0:v.toString();switch(u.type){case"select":M=new a.Select({label:f,value:y,options:u.options,optional:u.mandatory!==!0,placeholder:l.Config.getInstance().config.texts.pleaseSelect,...this.getValidationHandler(u)});break;case"radiogroup":M=new A.RadioGroup({label:f,value:y,options:u.options,optional:u.mandatory!==!0,...this.getValidationHandler(u)});break;case"textarea":M=new d.TextArea({label:f,value:y,placeholder:u.placeholder,...this.getValidationHandler(u)});break;case"textinput":M=new c.TextInput({label:f,value:y,placeholder:u.placeholder,...this.getValidationHandler(u)});break;case"numericinput":M=new c.TextInput({label:f,value:y,type:"number",placeholder:u.placeholder,...this.getValidationHandler(u)});break;case"email":M=new c.TextInput({label:f,value:y,type:"email",placeholder:u.placeholder,...this.getValidationHandler(u)});break;case"stars":M=new m.Stars({label:f,value:y,...this.getValidationHandler(u)})}return M!==void 0?(this.options[u.id]=M,M.render):null})}),this.isFormValid()}}},4213:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemRelevanceVote=void 0;const l=e(1116),o=e(8505),A=e(5316),a=e(620),m=e(8393),d=e(4851);t.ChatItemRelevanceVote=class{constructor(c){var r;this.handleVoteChange=i=>{a.MynahUIGlobalEvents.getInstance().dispatch(l.MynahEventNames.CARD_VOTE,{messageId:this.props.messageId,tabId:this.props.tabId,vote:i});const n=[d.Config.getInstance().config.texts.feedbackThanks,...i===l.RelevancyVoteType.DOWN?[new m.Button({label:d.Config.getInstance().config.texts.feedbackReportButtonLabel,onClick:()=>{this.sendFeedbackListenerId===void 0&&(this.sendFeedbackListenerId=a.MynahUIGlobalEvents.getInstance().addListener(l.MynahEventNames.FEEDBACK_SET,h=>{h.messageId===this.props.messageId&&h.tabId===this.props.tabId&&(a.MynahUIGlobalEvents.getInstance().removeListener(l.MynahEventNames.FEEDBACK_SET,this.sendFeedbackListenerId),this.render.remove())})),a.MynahUIGlobalEvents.getInstance().dispatch(l.MynahEventNames.SHOW_FEEDBACK_FORM,{tabId:this.props.tabId,messageId:this.props.messageId})},primary:!1}).render]:[]];this.render.replaceChildren(...n),i===l.RelevancyVoteType.UP&&setTimeout(()=>{this.render.remove()},3500)},this.props=c,this.votingId=`${this.props.tabId}-${this.props.messageId}`,this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card-votes-wrapper",...(r=this.props.classNames)!==null&&r!==void 0?r:[]],children:[{type:"div",classNames:["mynah-card-vote"],children:[{type:"input",events:{change:i=>{this.handleVoteChange(l.RelevancyVoteType.UP)}},attributes:{type:"radio",id:`${this.votingId}-vote-up`,name:`${this.votingId}-vote`,value:"up"},classNames:["mynah-vote-radio","mynah-vote-up-radio"]},{type:"input",events:{change:i=>{this.handleVoteChange(l.RelevancyVoteType.DOWN)}},attributes:{type:"radio",id:`${this.votingId}-vote-down`,name:`${this.votingId}-vote`,value:"down"},classNames:["mynah-vote-radio","mynah-vote-down-radio"]},{type:"label",attributes:{for:`${this.votingId}-vote-up`},classNames:["mynah-vote-label","mynah-vote-up"],children:[new A.Icon({icon:A.MynahIcons.THUMBS_UP}).render]},{type:"label",attributes:{for:`${this.votingId}-vote-down`},classNames:["mynah-vote-label","mynah-vote-down"],children:[new A.Icon({icon:A.MynahIcons.THUMBS_DOWN}).render]}]}]})}}},7770:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemSourceLinksContainer=void 0;const l=e(8505),o=e(620),A=e(1116),a=e(8393),m=e(8984),d=e(5316),c=e(7646);t.ChatItemSourceLinksContainer=class{constructor(r){this.props=r,this.showMoreButtonBlock=new a.Button({classNames:["mynah-chat-item-card-related-content-show-more"],primary:!1,icon:new d.Icon({icon:d.MynahIcons.DOWN_OPEN}).render,onClick:()=>{o.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.SHOW_MORE_WEB_RESULTS_CLICK,{messageId:this.props.messageId}),this.showMoreButtonBlock.render.remove(),this.render.addClass("expanded")},label:"Show more"}),this.props.relatedContent!==void 0&&(this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-related-content",this.props.relatedContent!==void 0&&this.props.relatedContent.length<=1?"expanded":""],children:[...this.props.title!==void 0?[{type:"span",classNames:["mynah-chat-item-card-related-content-title"],children:[this.props.title]}]:[],...this.props.relatedContent.map(i=>l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-related-content-item"],children:[new m.Card({background:!1,border:!1,padding:"none",children:[new c.SourceLinkHeader({sourceLink:i,showCardOnHover:!0,onClick:n=>{o.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.SOURCE_LINK_CLICK,{messageId:this.props.messageId,link:i.url,event:n})}}).render]}).render]})),this.showMoreButtonBlock.render]}))}}},338:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeFile=void 0;const l=e(6709),o=e(8505),A=e(620),a=e(1116),m=e(8393),d=e(8984),c=e(3121),r=e(5316),i=e(9845);t.ChatItemTreeFile=class{constructor(n){var h,u,x,b,C,p;this.showTooltip=(v,M,f)=>{v.trim()!==""&&(clearTimeout(this.fileTooltipTimeout),this.fileTooltipTimeout=setTimeout(()=>{this.fileTooltip=new i.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:this.render,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:M??i.OverlayVerticalDirection.TO_TOP,horizontalDirection:f??i.OverlayHorizontalDirection.CENTER,children:[new d.Card({border:!1,children:[new c.CardBody({body:v}).render]}).render]})},250))},this.hideTooltip=()=>{var v;this.fileTooltipTimeout!=null&&clearTimeout(this.fileTooltipTimeout),(v=this.fileTooltip)===null||v===void 0||v.close(),this.fileTooltip=null},this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-tree-view-file-item","mynah-button","mynah-button-secondary",((h=n.details)===null||h===void 0?void 0:h.status)!==void 0?`mynah-chat-item-tree-view-file-item-status-${(u=n.details)===null||u===void 0?void 0:u.status}`:""],events:{click:()=>{this.hideTooltip(),A.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.FILE_CLICK,{tabId:n.tabId,messageId:n.messageId,filePath:n.originalFilePath,deleted:n.deleted})},...((x=n.details)===null||x===void 0?void 0:x.description)!=null?{mouseenter:v=>{var M,f;const y=(0,l.marked)((f=(M=n.details)===null||M===void 0?void 0:M.description)!==null&&f!==void 0?f:"",{breaks:!0});this.showTooltip(y,i.OverlayVerticalDirection.CENTER,i.OverlayHorizontalDirection.TO_RIGHT)},mouseout:this.hideTooltip}:{}},children:[...n.icon!=null&&((b=n.details)===null||b===void 0?void 0:b.icon)==null?[{type:"span",classNames:["mynah-chat-single-file-icon"],children:[new r.Icon({icon:n.icon}).render]}]:[],{type:"div",classNames:["mynah-chat-item-tree-view-file-item-title",n.deleted===!0?"mynah-chat-item-tree-view-file-item-deleted":""],children:[new r.Icon({icon:(p=(C=n.details)===null||C===void 0?void 0:C.icon)!==null&&p!==void 0?p:r.MynahIcons.FILE}).render,{type:"span",children:[n.fileName]}]},{type:"div",classNames:["mynah-chat-item-tree-view-file-item-details"],children:n.details!=null?[...n.details.label!==void 0?[{type:"span",classNames:["mynah-chat-item-tree-view-file-item-details-text"],children:[n.details.label]}]:[]]:[]},...n.actions!==void 0?[{type:"div",classNames:["mynah-chat-item-tree-view-file-item-actions"],children:n.actions.map(v=>{var M,f;return new m.Button({icon:new r.Icon({icon:v.icon}).render,...v.label!==void 0?{label:v.label}:{},attributes:{title:(M=v.description)!==null&&M!==void 0?M:""},classNames:["mynah-icon-button",(f=v.status)!==null&&f!==void 0?f:""],primary:!1,onClick:y=>{(0,A.cancelEvent)(y),this.hideTooltip(),A.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.FILE_ACTION_CLICK,{tabId:n.tabId,messageId:n.messageId,filePath:n.originalFilePath,actionName:v.name})}}).render})}]:[]]})}}},3655:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeViewLicense=void 0;const l=e(4851),o=e(8505),A=e(3121),a=e(5357);t.ChatItemTreeViewLicense=class{constructor(m){this.buildDropdownChildren=d=>o.DomBuilder.getInstance().build({type:"ul",classNames:["mynah-chat-item-tree-view-license-container"],children:d.map(c=>({type:"li",children:[new A.CardBody({body:c.information}).render]}))}),m.references.length!==0?this.render=new a.CollapsibleContent({title:l.Config.getInstance().config.texts.codeSuggestionWithReferenceTitle,classNames:["mynah-chat-item-tree-view-license"],children:[this.buildDropdownChildren(m.references)]}).render:this.render=o.DomBuilder.getInstance().build({type:"span",classNames:["empty"]})}}},1495:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeViewWrapper=void 0;const l=e(4851),o=e(8505),A=e(6668),a=e(5316),m=e(338),d=e(5441),c=e(3655);t.ChatItemTreeViewWrapper=class{constructor(r){var i,n,h,u,x,b;const C=new c.ChatItemTreeViewLicense({referenceSuggestionLabel:r.referenceSuggestionLabel,references:r.references}).render,p=r.files.length===1&&r.rootTitle==null?new m.ChatItemTreeFile({filePath:r.files[0],fileName:r.files[0],originalFilePath:r.files[0],tabId:r.tabId,messageId:r.messageId,deleted:r.deletedFiles.includes(r.files[0]),details:r.details!=null?r.details[r.files[0]]:void 0,actions:r.actions!=null?r.actions[r.files[0]]:void 0,icon:a.MynahIcons.PAPER_CLIP}).render:new d.ChatItemTreeView({messageId:r.messageId,tabId:r.tabId,node:(0,A.fileListToTree)(r.files,r.deletedFiles,r.actions,r.details,r.rootTitle)}).render;this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-tree-view-wrapper",...(i=r.classNames)!==null&&i!==void 0?i:[]],children:[{type:"div",classNames:["mynah-chat-item-tree-view-wrapper-container"],children:[...r.cardTitle!==""?[{type:"div",classNames:["mynah-chat-item-tree-view-wrapper-title"],children:[{type:"h4",children:[`${(n=r.cardTitle)!==null&&n!==void 0?n:l.Config.getInstance().config.texts.codeSuggestions}`]},{type:"span",children:[`${((u=(h=r.files)===null||h===void 0?void 0:h.length)!==null&&u!==void 0?u:0)+((b=(x=r.deletedFiles)===null||x===void 0?void 0:x.length)!==null&&b!==void 0?b:0)} ${l.Config.getInstance().config.texts.files}`]}]}]:[],C,p]}]})}}},5441:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeView=void 0;const l=e(4851),o=e(8505),A=e(620),a=e(8393),m=e(5316),d=e(338);class c{constructor(i){var n;this.node=i.node,this.tabId=i.tabId,this.messageId=i.messageId,this.isOpen=!0,this.depth=(n=i.depth)!==null&&n!==void 0?n:0,this.render=o.DomBuilder.getInstance().build({type:"div",classNames:this.getClassNames(),children:[...this.node.type==="folder"?this.buildFolderNode():this.buildFileNode()]})}getClassNames(){return["mynah-chat-item-tree-view",this.node.type==="file"?"mynah-chat-tree-view-file":"mynah-chat-tree-view-folder-"+(this.isOpen?"open":"closed")]}updateTree(){this.render.update({classNames:this.getClassNames(),children:[...this.node.type==="folder"?this.buildFolderNode():this.buildFileNode()]})}buildFolderChildren(){return this.node.type!=="folder"?[]:this.isOpen?this.node.children.map(i=>o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-pull-request-item"],children:[new c({node:i,depth:this.depth+1,tabId:this.tabId,messageId:this.messageId}).render]})):[]}buildFolderNode(){return this.node.type!=="folder"?[]:[new a.Button({icon:new m.Icon({icon:this.isOpen?m.MynahIcons.DOWN_OPEN:m.MynahIcons.RIGHT_OPEN}).render,classNames:["mynah-chat-item-tree-view-button"],label:o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-tree-view-button-title"],children:[new m.Icon({icon:m.MynahIcons.FOLDER}).render,{type:"span",children:[this.node.name]},{type:"span",classNames:["mynah-chat-item-tree-view-button-weak-title"],children:[`${this.node.children.length} ${l.Config.getInstance().config.texts.files}`]}]}),primary:!1,onClick:i=>{(0,A.cancelEvent)(i),this.isOpen=!this.isOpen,this.updateTree()}}).render,...this.buildFolderChildren()]}buildFileNode(){return this.node.type!=="file"?[]:[new d.ChatItemTreeFile({fileName:this.node.name,filePath:this.node.filePath,originalFilePath:this.node.originalFilePath,tabId:this.tabId,messageId:this.messageId,details:this.node.details,deleted:this.node.deleted,actions:this.node.actions}).render]}}t.ChatItemTreeView=c},78:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInputCommand=void 0;const l=e(8505);t.ChatPromptInputCommand=class{constructor(o){this.setCommand=A=>{A.trim()===""?this.render.addClass("hidden"):this.render.removeClass("hidden"),this.promptTextInputCommand.innerText=A},this.props=o,this.promptTextInputCommand=l.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input-command-text"],events:{click:this.props.onRemoveClick}}),this.render=l.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input-command-wrapper",this.props.command===""?"hidden":""],children:[this.promptTextInputCommand]})}}},7855:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInputInfo=void 0;const l=e(6709),o=e(8505),A=e(3753),a=e(3121),m=e(620),d=e(1116);t.ChatPromptInputInfo=class{constructor(c){var r,i;this.linkClick=(n,h)=>{m.MynahUIGlobalEvents.getInstance().dispatch(d.MynahEventNames.INFO_LINK_CLICK,{link:n,event:h})},l.marked.use({extensions:[{name:"text",renderer:n=>n.text}]}),A.MynahUITabsStore.getInstance().addListenerToDataStore(c.tabId,"promptInputInfo",n=>{var h,u;this.render.update({children:[new a.CardBody({onLinkClick:this.linkClick,body:(u=(h=A.MynahUITabsStore.getInstance().getTabDataStore(c.tabId))===null||h===void 0?void 0:h.getValue("promptInputInfo"))!==null&&u!==void 0?u:""}).render]})}),this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-info"],children:[new a.CardBody({onLinkClick:this.linkClick,body:(i=(r=A.MynahUITabsStore.getInstance().getTabDataStore(c.tabId))===null||r===void 0?void 0:r.getValue("promptInputInfo"))!==null&&i!==void 0?i:""}).render]})}}},5215:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInputStickyCard=void 0;const l=e(8505),o=e(3753),A=e(1116),a=e(3085);t.ChatPromptInputStickyCard=class{constructor(m){var d,c;o.MynahUITabsStore.getInstance().addListenerToDataStore(m.tabId,"promptInputStickyCard",i=>{var n;i===null?this.render.clear():this.render.update({children:[new a.ChatItemCard({inline:!0,small:!0,chatItem:{...i,messageId:(n=i.messageId)!==null&&n!==void 0?n:"sticky-card",type:A.ChatItemType.ANSWER},tabId:m.tabId}).render]})});const r=(d=o.MynahUITabsStore.getInstance().getTabDataStore(m.tabId))===null||d===void 0?void 0:d.getValue("promptInputStickyCard");this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-sticky-card"],children:r!==null?[new a.ChatItemCard({inline:!0,small:!0,chatItem:{...r,messageId:(c=r.messageId)!==null&&c!==void 0?c:"sticky-card",type:A.ChatItemType.ANSWER},tabId:m.tabId}).render]:[]})}}},2326:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInput=t.MAX_USER_INPUT=t.MAX_USER_INPUT_THRESHOLD=void 0;const o=e(8505),A=e(1116),a=e(620),m=e(9845),d=e(3753),c=l(e(580)),r=e(78),i=e(4334),n=e(5120),h=e(505),u=e(4851);t.MAX_USER_INPUT_THRESHOLD=96,t.MAX_USER_INPUT=()=>u.Config.getInstance().config.maxUserInput-t.MAX_USER_INPUT_THRESHOLD,t.ChatPromptInput=class{constructor(x){var b;this.quickPickOpen=!1,this.selectedCommand="",this.updateAvailableCharactersIndicator=()=>{const p=this.promptTextInput.promptTextInputMaxLength-this.promptTextInput.getTextInputValue().trim().length;this.remainingCharsIndicator.update({innerHTML:`${Math.max(0,p)}/${(0,t.MAX_USER_INPUT)()}`})},this.handleInputKeydown=p=>{var v,M,f,y,s,g,w,k,S,L;if(this.quickPickOpen){const U=[A.KeyMap.ENTER,A.KeyMap.ESCAPE,A.KeyMap.SPACE,A.KeyMap.TAB,A.KeyMap.AT,A.KeyMap.BACK_SLASH,A.KeyMap.SLASH],F=[A.KeyMap.ARROW_UP,A.KeyMap.ARROW_DOWN];if(U.includes(p.key)){if(p.preventDefault(),p.key===A.KeyMap.ESCAPE)this.quickPickType==="quick-action"&&this.clearTextArea(!0),(f=this.quickPick)===null||f===void 0||f.close();else if(p.key===A.KeyMap.ENTER||p.key===A.KeyMap.TAB||p.key===A.KeyMap.SPACE){let R;this.filteredQuickPickItemGroups.length>0&&(this.quickPick.render.querySelector(".target-command")!=null?R=this.quickPick.render.querySelector(".target-command"):((y=this.quickPick.render.querySelector(".mynah-chat-command-selector-command"))===null||y===void 0?void 0:y.getAttribute("disabled"))!=="true"&&(R=this.quickPick.render.querySelector(".mynah-chat-command-selector-command")));const E={command:(s=R?.getAttribute("command"))!==null&&s!==void 0?s:"",placeholder:(g=R?.getAttribute("placeholder"))!==null&&g!==void 0?g:void 0};if(this.quickPickType==="context")if(E.command!=="")this.handleContextCommandSelection(E);else{const $=(k=(w=this.promptTextInput.getTextInputValue().substring(this.quickPickTriggerIndex).match(/\S*/gi))===null||w===void 0?void 0:w[0])!==null&&k!==void 0?k:"";this.handleContextCommandSelection({command:$})}else this.handleQuickActionCommandSelection(E)}}else if(F.includes(p.key)){p.preventDefault(),this.quickPick.render.querySelector(".mynah-chat-command-selector").addClass("has-target-item");const R=Array.from(this.quickPick.render.querySelectorAll(".mynah-chat-command-selector-command"));let E=R.findIndex(W=>W.classList.contains("target-command"));E=E===-1?R.length:E;let $=E;if(R.length===((S=R.filter(W=>W.getAttribute("disabled")==="true"))===null||S===void 0?void 0:S.length))$=-1;else{let W=!1;for(;!W;)p.key===A.KeyMap.ARROW_UP?$>0?$-=1:$=R.length-1:$<R.length-1?$+=1:$=0,R[$].getAttribute("disabled")!=="true"&&(W=!0)}$!==-1&&((L=R[E])===null||L===void 0||L.classList.remove("target-command"),R[$].classList.add("target-command"),R[$].getAttribute("prompt")!==null&&this.promptTextInput.updateTextInputValue(R[$].getAttribute("prompt")))}else this.quickPick!=null&&setTimeout(()=>{this.promptTextInput.getTextInputValue()===""?this.quickPick.close():(this.filteredQuickPickItemGroups=[],[...this.quickPickItemGroups].forEach(R=>{var E;const $={...R};try{const W=(E=this.promptTextInput.getTextInputValue().substring(this.quickPickTriggerIndex).match(/\S*/gi))===null||E===void 0?void 0:E[0],ee=new RegExp(W??"","gi");$.commands=$.commands.filter(V=>V.command.match(ee)),$.commands.length>0&&this.filteredQuickPickItemGroups.push($)}catch{}}),this.filteredQuickPickItemGroups.length>0?(this.quickPick.toggleHidden(!1),this.quickPick.updateContent([this.getQuickPickItemGroups(this.filteredQuickPickItemGroups)])):this.quickPick.toggleHidden(!0))},1)}else{const U=(v=d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("contextCommands"))!==null&&v!==void 0?v:[],F=U.flatMap(E=>E.commands.map($=>$.command)),R=(M=d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("quickActionCommands"))!==null&&M!==void 0?M:[];if(this.promptTextInput.updateContextItems(F),p.key===A.KeyMap.BACKSPACE||p.key===A.KeyMap.DELETE){if(this.selectedCommand!==""&&this.promptTextInput.getTextInputValue()==="")(0,a.cancelEvent)(p),this.clearTextArea(!0);else if(U.length>0){const E=this.promptTextInput.getWordAndIndexOnCursorPos();if(E.word.charAt(0)===A.KeyMap.AT&&F.includes(E.word)){(0,a.cancelEvent)(p);const $=this.promptTextInput.getTextInputValue();this.promptTextInput.updateTextInputValue($.substring(0,E.wordStartIndex)+$.substring(E.wordStartIndex+E.word.length)),this.promptTextInput.focus(E.wordStartIndex)}}}else p.key===A.KeyMap.ENTER&&(!p.isComposing&&!p.shiftKey&&!p.ctrlKey||p.isComposing&&p.shiftKey)?((0,a.cancelEvent)(p),this.sendPrompt()):(this.selectedCommand===""&&p.key===A.KeyMap.SLASH&&this.promptTextInput.getTextInputValue()===""||p.key===A.KeyMap.AT)&&(this.quickPickType=p.key===A.KeyMap.AT?"context":"quick-action",this.quickPickItemGroups=this.quickPickType==="context"?U:R,this.quickPickTriggerIndex=this.quickPickType==="context"?this.promptTextInput.getCursorPos():1,this.textAfter=this.promptTextInput.getTextInputValue().substring(this.quickPickTriggerIndex),this.promptTextInput.setContextReplacement(this.quickPickItemGroups.length>0),this.quickPickItemGroups.length>0&&(this.filteredQuickPickItemGroups=[...this.quickPickItemGroups],this.quickPick=new m.Overlay({closeOnOutsideClick:!0,referenceElement:this.render.querySelector(".mynah-chat-prompt"),dimOutside:!1,stretchWidth:!0,verticalDirection:m.OverlayVerticalDirection.TO_TOP,horizontalDirection:m.OverlayHorizontalDirection.START_TO_RIGHT,onClose:()=>{this.quickPickOpen=!1},children:[this.getQuickPickItemGroups(this.filteredQuickPickItemGroups)]}),this.quickPickOpen=!0))}},this.handleInputFocus=()=>{const p=this.promptTextInput.getTextInputValue();if(p.startsWith("/")){const v=d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("quickActionCommands");this.quickPickItemGroups=[...v],this.quickPickTriggerIndex=1,this.textAfter=p.substring(this.quickPickTriggerIndex),this.promptTextInput.setContextReplacement(this.quickPickItemGroups.length>0);const M=[];this.quickPickItemGroups.forEach(f=>{var y;const s={...f};try{const g=(y=p.substring(this.quickPickTriggerIndex).match(/\S*/gi))===null||y===void 0?void 0:y[0],w=new RegExp(g??"","gi");s.commands=s.commands.filter(k=>k.command.match(w)),s.commands.length>0&&M.push(s)}catch{}}),this.quickPickItemGroups.length>0&&(this.filteredQuickPickItemGroups=[...M],this.quickPick=new m.Overlay({closeOnOutsideClick:!0,referenceElement:this.render.querySelector(".mynah-chat-prompt"),dimOutside:!1,stretchWidth:!0,verticalDirection:m.OverlayVerticalDirection.TO_TOP,horizontalDirection:m.OverlayHorizontalDirection.START_TO_RIGHT,onClose:()=>{this.quickPickOpen=!1},children:[this.getQuickPickItemGroups(this.filteredQuickPickItemGroups)]}),this.quickPickOpen=!0)}},this.getQuickPickItemGroups=p=>o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector"],children:p.map(v=>o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector-group"],children:[...v.groupName!==void 0?[o.DomBuilder.getInstance().build({type:"h4",classNames:["mynah-chat-command-selector-group-title"],children:[v.groupName]})]:[],...v.commands.map(M=>o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector-command"],attributes:{...M},events:{click:()=>{M.disabled!==!0&&(this.quickPickType==="context"?this.handleContextCommandSelection(M):this.handleQuickActionCommandSelection(M))}},children:[{type:"div",classNames:["mynah-chat-command-selector-command-name"],children:[M.command]},...M.description!==void 0?[{type:"div",classNames:["mynah-chat-command-selector-command-description"],children:[M.description]}]:[]]}))]}))}),this.handleQuickActionCommandSelection=p=>{this.selectedCommand=p.command,this.promptTextInput.updateTextInputValue(""),p.placeholder!==void 0?(this.promptTextInputCommand.setCommand(this.selectedCommand),this.promptTextInput.updateTextInputPlaceholder(p.placeholder)):this.sendPrompt(),this.quickPick.close(),u.Config.getInstance().config.autoFocus&&this.promptTextInput.focus()},this.handleContextCommandSelection=p=>{const v=this.promptTextInput.getTextInputValue().substring(0,this.quickPickTriggerIndex);this.promptTextInput.updateTextInputValue(`${v}${p.command} ${this.textAfter}`,{index:this.quickPickTriggerIndex+p.command.length,text:p.placeholder}),this.quickPick.close(),this.promptTextInput.focus(this.quickPickTriggerIndex+p.command.length+1)},this.clearTextArea=p=>{this.selectedCommand="",this.promptTextInput.clear(),this.promptTextInput.updateTextInputMaxLength((0,t.MAX_USER_INPUT)()),this.promptTextInputCommand.setCommand(""),p!==!0&&(this.attachmentWrapper.clear(),this.promptAttachment.clear()),this.updateAvailableCharactersIndicator()},this.addAttachment=(p,v)=>{a.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.ADD_ATTACHMENT,{textToAdd:p,tabId:this.props.tabId,type:v})},this.sendPrompt=()=>{var p,v;const M=d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("quickActionCommands"),f=this.promptTextInput.getTextInputValue();if(f.trim()!==""||this.selectedCommand.trim()!==""){let y=this.selectedCommand;if(y==="")for(const U of M){if(y!=="")break;const F=U.commands.find(R=>R.disabled===!1&&f.startsWith(R.command));F!==void 0&&(y=F.command)}const s=(p=this.promptAttachment)===null||p===void 0?void 0:p.lastAttachmentContent,g=this.selectedCommand===""&&y!==""?f.replace(y,"")+(s??""):f+(s??""),w=[],k=((v=d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("contextCommands"))!==null&&v!==void 0?v:[]).flatMap(U=>U.commands.map(F=>F.command)),S=(0,c.default)(g.replace(/@\S*/gi,U=>(!w.includes(U)&&k.includes(U)&&w.push(U),`**${U}**`))),L={tabId:this.props.tabId,prompt:{prompt:g,escapedPrompt:S,context:w,...y!==""?{command:y}:{}}};this.clearTextArea(),a.MynahUIGlobalEvents.getInstance().dispatch(A.MynahEventNames.CHAT_PROMPT,L)}},this.props=x,this.promptTextInputCommand=new r.ChatPromptInputCommand({command:"",onRemoveClick:()=>{this.selectedCommand="",this.promptTextInputCommand.setCommand("")}});const C=((b=d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("contextCommands"))!==null&&b!==void 0?b:[]).flatMap(p=>p.commands.map(v=>v.command));this.promptTextInput=new h.PromptTextInput({initMaxLength:(0,t.MAX_USER_INPUT)(),tabId:this.props.tabId,onKeydown:this.handleInputKeydown,contextItems:C,onInput:()=>this.updateAvailableCharactersIndicator(),onFocus:this.handleInputFocus}),this.remainingCharsIndicator=o.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-chars-indicator"],innerHTML:`${(0,t.MAX_USER_INPUT)()-this.promptTextInput.getTextInputValue().length}/${(0,t.MAX_USER_INPUT)()}`}),this.sendButton=new n.PromptInputSendButton({tabId:this.props.tabId,onClick:()=>{this.sendPrompt()}}),this.promptAttachment=new i.PromptAttachment({tabId:this.props.tabId}),this.attachmentWrapper=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-attachment-wrapper"],children:[this.promptAttachment.render]}),this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-wrapper"],children:[{type:"div",classNames:["mynah-chat-prompt"],children:[{type:"div",classNames:["mynah-chat-prompt-input-wrapper"],children:[this.promptTextInputCommand.render,this.promptTextInput.render,{type:"div",classNames:["mynah-chat-prompt-button-wrapper"],children:[this.sendButton.render]}]},this.attachmentWrapper]},this.remainingCharsIndicator]}),a.MynahUIGlobalEvents.getInstance().addListener(A.MynahEventNames.ADD_ATTACHMENT,p=>{var v,M;if(this.props.tabId===p.tabId){const f=this.promptTextInput.getTextInputValue().trim().length,y=(0,t.MAX_USER_INPUT)()+t.MAX_USER_INPUT_THRESHOLD-f,s=(M=(v=p.textToAdd)!==null&&v!==void 0?v:"")===null||M===void 0?void 0:M.slice(0,y);this.promptAttachment.updateAttachment(s,p.type),this.promptTextInput.updateTextInputMaxLength(Math.min((0,t.MAX_USER_INPUT)(),Math.max(t.MAX_USER_INPUT_THRESHOLD,(0,t.MAX_USER_INPUT)()+t.MAX_USER_INPUT_THRESHOLD-s.length))),this.updateAvailableCharactersIndicator(),setTimeout(()=>{this.promptTextInput.focus()},100)}}),a.MynahUIGlobalEvents.getInstance().addListener(A.MynahEventNames.REMOVE_ATTACHMENT,()=>{this.promptTextInput.updateTextInputMaxLength((0,t.MAX_USER_INPUT)()),this.promptAttachment.clear(),this.updateAvailableCharactersIndicator()})}}},5914:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatWrapper=t.CONTAINER_GAP=void 0;const l=e(4851),o=e(8505),A=e(4024),a=e(3753),m=e(1116),d=e(8393),c=e(5316),r=e(3085),i=e(2326),n=e(7855),h=e(5215);e(4707),t.CONTAINER_GAP=12,t.ChatWrapper=class{constructor(u){var x;this.allRenderedChatItems={},this.removeEmptyCardsAndFollowups=()=>{Object.keys(this.allRenderedChatItems).forEach(C=>{this.allRenderedChatItems[C].cleanFollowupsAndRemoveIfEmpty()&&delete this.allRenderedChatItems[C]})},this.insertChatItem=C=>{this.removeEmptyCardsAndFollowups();const p=C.messageId!=null&&C.messageId!==""?C.messageId:`TEMP_${(0,A.generateUID)()}`,v=new r.ChatItemCard({tabId:this.props.tabId,chatItem:{...C,messageId:p}});this.lastStreamingChatItemMessageId!=null&&this.endStreamWithMessageId(this.lastStreamingChatItemMessageId,{}),C.type===m.ChatItemType.ANSWER_STREAM&&(this.lastStreamingChatItemMessageId=p,this.lastStreamingChatItemCard=v),this.chatItemsContainer.insertChild("afterbegin",v.render),this.allRenderedChatItems[p]=v,C.type!==m.ChatItemType.PROMPT&&C.type!==m.ChatItemType.SYSTEM_PROMPT||(this.chatItemsContainer.scrollTop=this.chatItemsContainer.scrollHeight+500)},this.checkLastAnswerStreamChange=C=>{C.type!==void 0&&C.type!==null&&C.type!==m.ChatItemType.ANSWER_STREAM&&C.type!==m.ChatItemType.ANSWER_PART&&(this.lastStreamingChatItemCard=null,this.lastStreamingChatItemMessageId=null)},this.updateLastChatAnswer=C=>{if(this.lastStreamingChatItemCard!=null){if(this.lastStreamingChatItemCard.updateCardStack(C),C.messageId!=null&&C.messageId!==""){if(this.lastStreamingChatItemMessageId!=null&&this.lastStreamingChatItemMessageId!==C.messageId){const p=this.allRenderedChatItems[this.lastStreamingChatItemMessageId];p!=null&&(this.allRenderedChatItems[C.messageId]=p,this.lastStreamingChatItemMessageId!=null&&delete this.allRenderedChatItems[this.lastStreamingChatItemMessageId])}this.lastStreamingChatItemMessageId=C.messageId}this.checkLastAnswerStreamChange(C)}},this.getLastStreamingMessageId=()=>this.lastStreamingChatItemMessageId,this.getChatItem=C=>{var p;if(((p=this.allRenderedChatItems[C])===null||p===void 0?void 0:p.render)!==void 0)return{chatItem:this.allRenderedChatItems[C].props.chatItem,render:this.allRenderedChatItems[C].render,renderDetails:this.allRenderedChatItems[C].getRenderDetails()}},this.endStreamWithMessageId=(C,p)=>{var v;((v=this.allRenderedChatItems[C])===null||v===void 0?void 0:v.render)!==void 0&&(this.allRenderedChatItems[C].render.addClass("stream-ended"),this.updateChatAnswerWithMessageId(C,p),this.lastStreamingChatItemMessageId===C&&(this.lastStreamingChatItemCard=null,this.lastStreamingChatItemMessageId=null))},this.updateChatAnswerWithMessageId=(C,p)=>{var v;((v=this.allRenderedChatItems[C])===null||v===void 0?void 0:v.render)!==void 0&&(this.allRenderedChatItems[C].updateCardStack(p),this.lastStreamingChatItemMessageId===C&&this.checkLastAnswerStreamChange(p))},this.addAttachmentToPrompt=(C,p)=>{this.promptInput.addAttachment(C,p)},this.props=u,a.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("chatItems",C=>{const p=C[C.length-1];if(this.chatItemsContainer.children.length===C.length){const v=this.chatItemsContainer.children.item(0);if(v!==null){const M=new r.ChatItemCard({tabId:this.props.tabId,chatItem:p});p.messageId!==void 0&&(this.allRenderedChatItems[p.messageId]=M),v.innerHTML=M.render.innerHTML}}else C.length>0?this.chatItemsContainer.children.length===0?C.forEach(v=>{this.insertChatItem(v)}):this.insertChatItem(p):(this.chatItemsContainer.clear(!0),this.allRenderedChatItems={})}),a.MynahUITabsStore.getInstance().addListenerToDataStore(this.props.tabId,"loadingChat",C=>{C?this.render.addClass("loading"):this.render.removeClass("loading")}),a.MynahUITabsStore.getInstance().addListenerToDataStore(this.props.tabId,"cancelButtonWhenLoading",C=>{C?this.intermediateBlockContainer.removeClass("hidden"):this.intermediateBlockContainer.addClass("hidden")}),this.chatItemsContainer=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-items-container"],persistent:!0,children:[]}),this.promptInfo=new n.ChatPromptInputInfo({tabId:this.props.tabId}).render,this.promptStickyCard=new h.ChatPromptInputStickyCard({tabId:this.props.tabId}).render,this.intermediateBlockContainer=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-overflowing-intermediate-block",...a.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("cancelButtonWhenLoading")===!1?["hidden"]:[]],children:[...((x=this.props)===null||x===void 0?void 0:x.onStopChatResponse)!==void 0?[new d.Button({classNames:["mynah-chat-stop-chat-response-button"],label:l.Config.getInstance().config.texts.stopGenerating,icon:new c.Icon({icon:c.MynahIcons.CANCEL}).render,onClick:()=>{var C,p;((C=this.props)===null||C===void 0?void 0:C.onStopChatResponse)!==void 0&&((p=this.props)===null||p===void 0||p.onStopChatResponse(this.props.tabId))}}).render]:[]]}),l.Config.getInstance().config.showPromptField&&(this.promptInput=new i.ChatPromptInput({tabId:this.props.tabId}),this.promptInputElement=this.promptInput.render),this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-wrapper"],attributes:{"mynah-tab-id":this.props.tabId},persistent:!0,children:[{type:"style",children:[`
          .mynah-nav-tabs-wrapper[selected-tab="${this.props.tabId}"] ~ .mynah-ui-tab-contents-wrapper > .mynah-chat-wrapper[mynah-tab-id="${this.props.tabId}"]{
              display: flex;
            }
            .mynah-nav-tabs-wrapper[selected-tab="${this.props.tabId}"] ~ .mynah-ui-tab-contents-wrapper > .mynah-chat-wrapper:not([mynah-tab-id="${this.props.tabId}"]) * {
              pointer-events: none !important;
            }`]},this.chatItemsContainer,this.intermediateBlockContainer,this.promptStickyCard,this.promptInputElement,this.promptInfo]});const b=a.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("chatItems");b.length>0&&b.forEach(C=>this.insertChatItem(C))}}},4334:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PromptAttachment=void 0;const l=e(8505),o=e(3753),A=e(7688);t.PromptAttachment=class{constructor(a){this.lastAttachmentContent="",this.updateAttachment=(m,d)=>{var c,r,i,n,h,u,x;this.attachmentItem!==void 0&&this.attachmentItem.clear(),this.render.clear(),this.lastAttachmentContent=m!=null?d==="code"?`
~~~~~~~~~~
${m}
~~~~~~~~~~`:`
${m}
`:"",m!==void 0&&m!==""&&(this.attachmentItem=new A.PromptTextAttachment({tabId:this.props.tabId,content:m,type:d??"markdown"}),this.render.insertChild("afterbegin",this.attachmentItem.render),((r=(c=this.render.getBoundingClientRect())===null||c===void 0?void 0:c.height)!==null&&r!==void 0?r:0)<((u=(h=(n=(i=this.render.getElementsByTagName("code"))===null||i===void 0?void 0:i[0])===null||n===void 0?void 0:n.getBoundingClientRect())===null||h===void 0?void 0:h.height)!==null&&u!==void 0?u:0)&&this.render.children[0].classList.add("vertical-overflow")),(x=o.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId))===null||x===void 0||x.updateStore({selectedCodeSnippet:m})},this.clear=()=>{var m;this.lastAttachmentContent="",this.attachmentItem!==void 0&&this.attachmentItem.clear(),this.attachmentItem=void 0,this.render.clear(),(m=o.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId))===null||m===void 0||m.updateStore({selectedCodeSnippet:void 0})},this.props=a,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["outer-container"],persistent:!0})}}},5120:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PromptInputSendButton=void 0;const l=e(3753),o=e(8393),A=e(5316);t.PromptInputSendButton=class{constructor(a){this.props=a;const m=l.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputDisabledState");this.render=new o.Button({classNames:["mynah-chat-prompt-button"],attributes:{...m?{disabled:"disabled"}:{},tabindex:"0"},icon:new A.Icon({icon:A.MynahIcons.ENVELOPE_SEND}).render,primary:!1,border:!1,status:"info",onClick:()=>{this.props.onClick()}}).render,l.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("promptInputDisabledState",d=>{d?this.render.setAttribute("disabled","disabled"):this.render.removeAttribute("disabled")})}}},7688:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PromptTextAttachment=void 0;const l=e(9845),o=e(5316),A=e(8393),a=e(620),m=e(1116),d=e(8984),c=e(3121),r=e(5580);t.PromptTextAttachment=class{constructor(i){this.showPreviewOverLay=()=>{this.previewOverlay=new l.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:this.render,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:l.OverlayVerticalDirection.TO_TOP,horizontalDirection:l.OverlayHorizontalDirection.START_TO_RIGHT,children:[new d.Card({border:!1,classNames:["mynah-prompt-input-snippet-attachment-overlay"],children:[new c.CardBody({...this.props.type==="markdown"?{body:this.props.content}:{children:[new r.SyntaxHighlighter({block:!0,codeStringWithMarkup:this.props.content}).render]}}).render]}).render]})},this.closePreviewOverLay=()=>{this.previewOverlay!==void 0&&(this.previewOverlay.close(),this.previewOverlay=void 0)},this.clear=()=>{this.closePreviewOverLay()},this.props=i,this.render=new d.Card({padding:"none",border:!1,events:{mouseenter:()=>{this.showPreviewOverLay()},mouseleave:()=>{this.closePreviewOverLay()}},classNames:["mynah-prompt-attachment-container"],children:[new c.CardBody({...this.props.type==="markdown"?{body:this.props.content}:{children:[new r.SyntaxHighlighter({block:!0,codeStringWithMarkup:this.props.content}).render]}}).render,new A.Button({classNames:["code-snippet-close-button"],onClick:n=>{(0,a.cancelEvent)(n),a.MynahUIGlobalEvents.getInstance().dispatch(m.MynahEventNames.REMOVE_ATTACHMENT,this.props.tabId),this.closePreviewOverLay()},icon:new o.Icon({icon:o.MynahIcons.CANCEL}).render,primary:!1}).render]}).render}}},505:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(t,"__esModule",{value:!0}),t.PromptTextInput=void 0;const o=l(e(580)),A=e(4851),a=e(8505),m=e(620),d=e(3753),c=e(1116),r=e(2326),i=e(9845),n=e(8984),h=e(3121);t.PromptTextInput=class{constructor(u){this.promptInputOverlay=null,this.keydownSupport=!0,this.updatePromptTextInputSizer=b=>{var C;this.promptInputOverlay!==null&&(this.promptInputOverlay.close(),this.promptInputOverlay=null),this.promptTextInput.value.trim()!==""?this.render.removeClass("no-text"):this.render.addClass("no-text");let p=(0,o.default)(this.promptTextInput.value);if(this.props.contextReplacement===!0&&(p=`${p.replace(/@\S*/gi,v=>this.props.contextItems!=null&&this.props.contextItems.includes(v)?`<span class="context">${v}</span>`:v)}&nbsp`),this.promptTextInputSizer.innerHTML=`${p}&nbsp<br/>`,b?.text!=null){const v=this.getContextElementAtTextIndex((C=b.index)!==null&&C!==void 0?C:0);this.promptInputOverlay=new i.Overlay({background:!0,closeOnOutsideClick:!0,referenceElement:v??this.render,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:i.OverlayVerticalDirection.TO_TOP,horizontalDirection:i.OverlayHorizontalDirection.START_TO_RIGHT,children:[new n.Card({border:!1,children:[new h.CardBody({body:b.text}).render]}).render]})}},this.setContextReplacement=b=>{this.props.contextReplacement=b},this.getCursorPos=()=>{var b;return(b=this.promptTextInput.selectionStart)!==null&&b!==void 0?b:this.promptTextInput.value.length},this.getWordAndIndexOnCursorPos=()=>{const b=this.promptTextInput.value,C=this.getCursorPos();let p=-1;const v=b.indexOf(`
`,C),M=b.indexOf(" ",C),f=Math.min(M!==-1?M:b.length,v!==-1?v:b.length);for(let y=C-1;y>=0;y--)if(b[y]===" "||b[y]===`
`){p=y;break}return{wordStartIndex:p+1,word:b.substring(p+1,f)}},this.getContextElementAtTextIndex=b=>{var C,p;let v=0,M=null;for(const f of this.promptTextInputSizer.childNodes){const y=v+((p=(C=f.textContent)===null||C===void 0?void 0:C.length)!==null&&p!==void 0?p:0);if(b>v&&b<=y&&f.nodeName==="SPAN"){M=f;break}v=y}return M},this.clear=()=>{this.promptTextInputSizer.innerHTML="",this.updateTextInputValue("");const b=d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputPlaceholder");this.updateTextInputPlaceholder(b),this.render.addClass("no-text")},this.focus=b=>{A.Config.getInstance().config.autoFocus&&this.promptTextInput.focus(),b!=null?this.promptTextInput.setSelectionRange(b,b):this.updateTextInputValue("")},this.getTextInputValue=()=>this.promptTextInput.value,this.updateTextInputValue=(b,C)=>{this.promptTextInput.value=b,this.updatePromptTextInputSizer(C)},this.updateTextInputMaxLength=b=>{this.promptTextInputMaxLength=b,this.promptTextInput.update({attributes:{maxlength:b.toString()}})},this.updateTextInputPlaceholder=b=>{this.promptTextInput.update({attributes:{placeholder:b}})},this.updateContextItems=b=>{this.props.contextItems=b},this.props=u,this.promptTextInputMaxLength=u.initMaxLength;const x=d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputDisabledState");this.promptTextInputSizer=a.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input","mynah-chat-prompt-input-sizer"]}),ResizeObserver!=null&&new ResizeObserver(()=>{this.promptTextInputSizer.scrollTop=this.promptTextInput.scrollTop}).observe(this.promptTextInputSizer),this.promptTextInput=a.DomBuilder.getInstance().build({type:"textarea",classNames:["mynah-chat-prompt-input"],attributes:{...x?{disabled:"disabled"}:{},tabindex:"0",rows:"1",maxlength:(0,r.MAX_USER_INPUT)().toString(),type:"text",placeholder:d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputPlaceholder"),value:"",...A.Config.getInstance().config.autoFocus?{autofocus:"autofocus"}:{}},events:{scroll:()=>{this.promptTextInputSizer.scrollTop=this.promptTextInput.scrollTop},keypress:b=>{this.keydownSupport||this.props.onKeydown(b)},keydown:b=>{b.key!==""?(this.keydownSupport=!0,this.props.onKeydown(b)):this.keydownSupport=!1},input:b=>{this.updatePromptTextInputSizer(),this.props.onInput!==void 0&&this.props.onInput(b)},focus:()=>{this.render.addClass("input-has-focus"),this.props.onFocus!==void 0&&this.props.onFocus()},blur:()=>{this.render.removeClass("input-has-focus")}}}),this.render=a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-inner-wrapper","no-text"],children:[this.promptTextInputSizer,this.promptTextInput]}),d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("promptInputDisabledState",b=>{b?this.promptTextInput.setAttribute("disabled","disabled"):(this.promptTextInput.removeAttribute("disabled"),A.Config.getInstance().config.autoFocus&&this.promptTextInput.focus())}),d.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("promptInputPlaceholder",b=>{b!==void 0&&this.promptTextInput.update({attributes:{placeholder:b}})}),m.MynahUIGlobalEvents.getInstance().addListener(c.MynahEventNames.TAB_FOCUS,b=>{b.tabId===this.props.tabId&&this.promptTextInput.focus()}),this.clear()}}},5357:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CollapsibleContent=void 0;const l=e(8505),o=e(4024),A=e(5316);e(6568),t.CollapsibleContent=class{constructor(a){this.uid=(0,o.generateUID)(),this.props={initialCollapsedState:!0,onCollapseStateChange:()=>{},classNames:[],...a},this.icon=new A.Icon({icon:this.props.initialCollapsedState?A.MynahIcons.RIGHT_OPEN:A.MynahIcons.DOWN_OPEN}).render,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-collapsible-content-wrapper",...this.props.classNames],children:[{type:"input",classNames:["mynah-collapsible-content-checkbox"],attributes:{type:"checkbox",name:this.uid,id:this.uid,...this.props.initialCollapsedState?{checked:"checked"}:{}},events:{change:m=>{const d=m.currentTarget.checked,c=new A.Icon({icon:d===!0?A.MynahIcons.RIGHT_OPEN:A.MynahIcons.DOWN_OPEN}).render;this.icon.replaceWith(c),this.icon=c,this.props.onCollapseStateChange(d)}}},{type:"label",classNames:["mynah-collapsible-content-label"],attributes:{for:this.uid},children:[{type:"div",classNames:["mynah-collapsible-content-label-title-wrapper"],children:[this.icon,{type:"span",classNames:["mynah-collapsible-content-label-title-text"],children:[this.props.title]}]},{type:"div",classNames:["mynah-collapsible-content-label-content-wrapper"],children:this.props.children}]}]})}}},4342:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomFormWrapper=void 0;const l=e(8505),o=e(620),A=e(3753),a=e(1116),m=e(1144),d=e(1582),c=e(3121),r=e(8393),i=e(5316);t.CustomFormWrapper=class{constructor(n){this.chatFormItems=null,this.chatButtons=null,this.getFormItems=()=>A.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId)===void 0?[]:(this.chatFormItems!==null&&(this.chatFormItems.render.remove(),this.chatFormItems=null),this.props.chatItem.formItems!==void 0&&(this.chatFormItems=new m.ChatItemFormItemsWrapper({tabId:this.props.tabId,chatItem:this.props.chatItem})),this.chatButtons!==null&&(this.chatButtons.render.remove(),this.chatButtons=null),this.props.chatItem.buttons!==void 0&&(this.chatButtons=new d.ChatItemButtonsWrapper({tabId:this.props.tabId,formItems:this.chatFormItems,buttons:this.props.chatItem.buttons,onActionClick:(h,u)=>{u!==void 0&&(0,o.cancelEvent)(u),o.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.CUSTOM_FORM_ACTION_CLICK,{tabId:this.props.tabId,id:h.id,text:h.text,...this.chatFormItems!==null?{formItemValues:this.chatFormItems.getAllValues()}:{}}),this.props.onFormAction!==void 0&&(this.props.onFormAction(h.id,this.chatFormItems!==null?this.chatFormItems.getAllValues():{}),this.render.remove())}})),[...this.chatFormItems!==null?[this.chatFormItems.render]:[],...this.chatButtons!==null?[this.chatButtons.render]:[]]),this.props=n,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form"],events:{click:o.cancelEvent},children:[{type:"div",classNames:["mynah-feedback-form-header"],children:[...this.props.title!==void 0?[{type:"h4",children:[this.props.title]}]:[],new r.Button({primary:!1,onClick:h=>{this.props.onCloseButtonClick!==void 0&&this.props.onCloseButtonClick(h)},icon:new i.Icon({icon:i.MynahIcons.CANCEL}).render}).render]},...this.props.description!==void 0?[new c.CardBody({body:this.props.description}).render]:[],...this.getFormItems()]})}}},7654:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeedbackFormComment=void 0;const l=e(8505);t.FeedbackFormComment=class{constructor(o){var A;this.getComment=()=>this.render.value,this.clear=()=>{this.render.value=""},this.render=l.DomBuilder.getInstance().build({type:"textarea",events:{keyup:a=>{o.onChange!==void 0&&o.onChange(this.render.value)}},classNames:["mynah-feedback-form-comment"],attributes:{value:(A=o.initComment)!==null&&A!==void 0?A:""}})}}},4498:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeedbackForm=void 0;const l=e(1116),o=e(8505),A=e(8393),a=e(7654),m=e(620),d=e(5316),c=e(4851),r=e(8073),i=e(4342);e(2860),t.FeedbackForm=class{constructor(n){var h;this.feedbackPayload={messageId:"",selectedOption:"",tabId:"",comment:""},this.onFeedbackSet=u=>{m.MynahUIGlobalEvents.getInstance().dispatch(l.MynahEventNames.FEEDBACK_SET,u)},this.close=()=>{this.feedbackComment.clear(),this.feedbackOptionsWrapper.setValue(c.Config.getInstance().config.feedbackOptions[0].value),this.feedbackPayload={messageId:"",selectedOption:c.Config.getInstance().config.feedbackOptions[0].value,tabId:"",comment:""},this.feedbackFormWrapper.removeClass("mynah-feedback-form-show")},this.show=()=>{this.feedbackFormWrapper.addClass("mynah-feedback-form-show")},this.feedbackPayload={selectedOption:c.Config.getInstance().config.feedbackOptions[0].value,messageId:"",tabId:"",comment:"",...n?.initPayload},m.MynahUIGlobalEvents.getInstance().addListener(l.MynahEventNames.SHOW_FEEDBACK_FORM,u=>{this.feedbackFormWrapper===void 0&&(this.feedbackFormWrapper=o.DomBuilder.getInstance().createPortal(l.MynahPortalNames.FEEDBACK_FORM,{type:"div",attributes:{id:"mynah-feedback-form-wrapper"}},"afterbegin")),this.feedbackFormWrapper.clear(),this.feedbackFormWrapper.update({children:[u.messageId!==void 0?this.feedbackFormContainer:u.customFormData!==void 0?new i.CustomFormWrapper({tabId:u.tabId,chatItem:u.customFormData,title:u.customFormData.title,description:u.customFormData.description,onFormAction:()=>{this.close()},onCloseButtonClick:x=>{(0,m.cancelEvent)(x),this.close()}}).render:""]}),u.messageId!==void 0&&(this.feedbackPayload.messageId=u.messageId),this.feedbackPayload.tabId=u.tabId,setTimeout(()=>{this.show()},5)}),this.feedbackOptionsWrapper=new r.Select({options:c.Config.getInstance().config.feedbackOptions,onChange:u=>{this.feedbackPayload.selectedOption=u},label:c.Config.getInstance().config.texts.feedbackFormOptionsLabel}),this.feedbackComment=new a.FeedbackFormComment({onChange:u=>{this.feedbackPayload.comment=u},initComment:(h=this.feedbackPayload)===null||h===void 0?void 0:h.comment}),this.feedbackSubmitButton=new A.Button({label:c.Config.getInstance().config.texts.submit,primary:!0,onClick:()=>{this.onFeedbackSet(this.feedbackPayload),this.close()}}),this.feedbackFormContainer=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form"],events:{click:m.cancelEvent},children:[{type:"div",classNames:["mynah-feedback-form-header"],children:[{type:"h4",children:[c.Config.getInstance().config.texts.feedbackFormTitle]},new A.Button({primary:!1,onClick:()=>{this.close()},icon:new d.Icon({icon:d.MynahIcons.CANCEL}).render}).render]},this.feedbackOptionsWrapper.render,{type:"span",children:[c.Config.getInstance().config.texts.feedbackFormCommentLabel]},this.feedbackComment.render,{type:"div",classNames:["mynah-feedback-form-buttons-container"],children:[new A.Button({primary:!1,label:c.Config.getInstance().config.texts.cancel,onClick:()=>{this.close()}}).render,this.feedbackSubmitButton.render]}]})}}},3428:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RadioGroup=t.RadioGroupInternal=t.RadioGroupAbstract=void 0;const l=e(4851),o=e(8505),A=e(620),a=e(4024),m=e(5316);e(6271);class d{constructor(){this.setValue=i=>{},this.getValue=()=>"",this.setEnabled=i=>{}}}t.RadioGroupAbstract=d;class c extends d{constructor(i){var n,h;super(),this.groupName=(0,a.generateUID)(),this.setValue=u=>{var x,b;(x=this.radioGroupElement.querySelector("[checked]"))===null||x===void 0||x.removeAttribute("checked"),(b=this.radioGroupElement.querySelector(`[id="${this.groupName}_${u}"]`))===null||b===void 0||b.setAttribute("checked","checked")},this.getValue=()=>{var u,x,b;return(b=(x=(u=this.radioGroupElement.querySelector("[checked]"))===null||u===void 0?void 0:u.getAttribute("id"))===null||x===void 0?void 0:x.replace(`${this.groupName}_`,""))!==null&&b!==void 0?b:""},this.setEnabled=u=>{u?(this.radioGroupElement.removeAttribute("disabled"),this.radioGroupElement.querySelectorAll("input").forEach(x=>x.removeAttribute("disabled"))):(this.radioGroupElement.setAttribute("disabled","disabled"),this.radioGroupElement.querySelectorAll("input").forEach(x=>x.setAttribute("disabled","disabled")))},this.radioGroupElement=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input","no-border",...(n=i.classNames)!==null&&n!==void 0?n:[]],children:(h=i.options)===null||h===void 0?void 0:h.map((u,x)=>({type:"div",classNames:["mynah-form-input-radio-wrapper"],children:[{type:"label",classNames:["mynah-form-input-radio-label"],events:{click:b=>{(0,A.cancelEvent)(b),b.currentTarget.querySelector("input").checked=!0,this.setValue(u.value),i.onChange!==void 0&&i.onChange(u.value)}},children:[{type:"input",attributes:{type:"radio",id:`${this.groupName}_${u.value}`,name:this.groupName,value:u.value,...i.value!==void 0&&i.value===u.value||i.optional!==!0&&i.value===void 0&&x===0?{checked:"checked"}:{}}},{type:"span",classNames:["mynah-form-input-radio-check"],children:[new m.Icon({icon:m.MynahIcons.OK}).render]},{type:"span",children:[u.label]}]}]}))}),this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...i.label!==void 0?[i.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...i.attributes!==void 0?{attributes:i.attributes}:{},children:[this.radioGroupElement]}]})}}t.RadioGroupInternal=c,t.RadioGroup=class extends d{constructor(r){var i;return super(),this.setValue=n=>{},this.getValue=()=>"",this.setEnabled=n=>{},new((i=l.Config.getInstance().config.componentClasses.RadioGroup)!==null&&i!==void 0?i:c)(r)}}},8073:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Select=t.SelectInternal=t.SelectAbstract=void 0;const l=e(4851),o=e(8505),A=e(5316);e(6271);class a{constructor(){this.setValue=c=>{},this.getValue=()=>"",this.setEnabled=c=>{}}}t.SelectAbstract=a;class m{constructor(c){var r,i,n,h;this.setValue=u=>{this.selectElement.value=u},this.getValue=()=>this.selectElement.value,this.setEnabled=u=>{u?this.selectElement.removeAttribute("disabled"):this.selectElement.setAttribute("disabled","disabled")},this.selectElement=o.DomBuilder.getInstance().build({type:"select",classNames:["mynah-form-input",...(r=c.classNames)!==null&&r!==void 0?r:[]],events:{change:u=>{c.onChange!==void 0&&c.onChange(u.currentTarget.value)}},children:[...c.optional===!0?[{label:(i=c.placeholder)!==null&&i!==void 0?i:"...",value:""}]:[],...(n=c.options)!==null&&n!==void 0?n:[]].map(u=>({type:"option",classNames:u.value===""?["empty-option"]:[],attributes:{value:u.value},children:[u.label]}))}),c.value!==void 0&&(this.selectElement.value=c.value),this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...c.label!==void 0?[c.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...c.attributes!==void 0?{attributes:c.attributes}:{},children:[this.selectElement,new A.Icon({icon:(h=c.icon)!==null&&h!==void 0?h:A.MynahIcons.DOWN_OPEN,classNames:["mynah-select-handle"]}).render]}]})}}t.SelectInternal=m,t.Select=class extends a{constructor(d){var c;return super(),this.setValue=r=>{},this.getValue=()=>"",this.setEnabled=r=>{},new((c=l.Config.getInstance().config.componentClasses.Select)!==null&&c!==void 0?c:m)(d)}}},1936:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Stars=void 0;const l=e(8505),o=e(5316);e(6271),t.Stars=class{constructor(A){var a,m,d;this.setValue=c=>{this.starsContainer.setAttribute("selected-star",c.toString())},this.getValue=()=>{var c;return(c=this.starsContainer.getAttribute("selected-star"))!==null&&c!==void 0?c:""},this.setEnabled=c=>{c?this.render.removeAttribute("disabled"):this.render.setAttribute("disabled","disabled")},this.starsContainer=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form-stars-container"],attributes:{...A.value!==void 0&&{"selected-star":(m=(a=A.value)===null||a===void 0?void 0:a.toString())!==null&&m!==void 0?m:"1"}},children:Array(5).fill(void 0).map((c,r)=>l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form-star",...A.value===(r+1).toString()?["selected"]:[]],events:{click:i=>{var n;(n=this.starsContainer.querySelector(".selected"))===null||n===void 0||n.removeClass("selected"),i.currentTarget.addClass("selected"),A.onChange!==void 0&&A.onChange((r+1).toString()),this.setValue(r+1)}},attributes:{star:(r+1).toString()},children:[new o.Icon({icon:o.MynahIcons.STAR}).render]}))}),this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...A.label!==void 0?[A.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...A.attributes!==void 0?{attributes:A.attributes}:{},children:[{type:"div",classNames:["mynah-form-input","no-border",...(d=A.classNames)!==null&&d!==void 0?d:[]],children:[this.starsContainer]}]}]})}}},9010:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextArea=t.TextAreaInternal=t.TextAreaAbstract=void 0;const l=e(4851),o=e(8505);e(6271);class A{constructor(){this.setValue=d=>{},this.getValue=()=>"",this.setEnabled=d=>{}}}t.TextAreaAbstract=A;class a extends A{constructor(d){var c,r;super(),this.setValue=i=>{this.inputElement.value=i},this.getValue=()=>this.inputElement.value,this.setEnabled=i=>{i?this.inputElement.removeAttribute("disabled"):this.inputElement.setAttribute("disabled","disabled")},this.inputElement=o.DomBuilder.getInstance().build({type:"textarea",classNames:["mynah-form-input",...(c=d.classNames)!==null&&c!==void 0?c:[]],attributes:d.placeholder!==void 0?{placeholder:d.placeholder}:{},events:{keyup:i=>{d.onChange!==void 0&&d.onChange(i.currentTarget.value)}}}),this.inputElement.value=(r=d.value)!==null&&r!==void 0?r:"",this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...d.label!==void 0?[d.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...d.attributes!==void 0?{attributes:d.attributes}:{},children:[this.inputElement]}]})}}t.TextAreaInternal=a,t.TextArea=class extends A{constructor(m){var d;return super(),this.setValue=c=>{},this.getValue=()=>"",this.setEnabled=c=>{},new((d=l.Config.getInstance().config.componentClasses.TextArea)!==null&&d!==void 0?d:a)(m)}}},1211:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextInput=t.TextInputInternal=t.TextInputAbstract=void 0;const l=e(4851),o=e(8505);e(6271);class A{constructor(){this.setValue=d=>{},this.getValue=()=>"",this.setEnabled=d=>{}}}t.TextInputAbstract=A;class a extends A{constructor(d){var c,r,i,n;super(),this.setValue=h=>{this.inputElement.value=h},this.getValue=()=>this.inputElement.value,this.setEnabled=h=>{h?this.inputElement.removeAttribute("disabled"):this.inputElement.setAttribute("disabled","disabled")},this.inputElement=o.DomBuilder.getInstance().build({type:"input",classNames:["mynah-form-input",...(c=d.classNames)!==null&&c!==void 0?c:[]],attributes:{type:(r=d.type)!==null&&r!==void 0?r:"text",...d.placeholder!==void 0?{placeholder:d.placeholder}:{}},events:{keyup:h=>{d.onChange!==void 0&&d.onChange(h.currentTarget.value)}}}),this.inputElement.value=(n=(i=d.value)===null||i===void 0?void 0:i.toString())!==null&&n!==void 0?n:"",this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...d.label!==void 0?[d.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...d.attributes!==void 0?{attributes:d.attributes}:{},children:[this.inputElement]}]})}}t.TextInputInternal=a,t.TextInput=class extends A{constructor(m){var d;return super(),this.setValue=c=>{},this.getValue=()=>"",this.setEnabled=c=>{},new((d=l.Config.getInstance().config.componentClasses.TextInput)!==null&&d!==void 0?d:a)(m)}}},5316:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=t.MynahIcons=void 0;const l=e(8505),o=e(3965);var A;e(8705),function(a){a.Q="q",a.MENU="menu",a.MINUS="minus",a.SEARCH="search",a.PLUS="plus",a.PAPER_CLIP="paper-clip",a.LIST_ADD="list-add",a.TABS="tabs",a.CHAT="chat",a.LINK="link",a.FOLDER="folder",a.FILE="file",a.DOC="doc",a.EXTERNAL="external",a.CANCEL="cancel",a.CANCEL_CIRCLE="cancel-circle",a.CALENDAR="calendar",a.COMMENT="comment",a.MEGAPHONE="megaphone",a.MAGIC="magic",a.NOTIFICATION="notification",a.EYE="eye",a.ELLIPSIS="ellipsis",a.OK="ok",a.UP_OPEN="up-open",a.DOWN_OPEN="down-open",a.RIGHT_OPEN="right-open",a.LEFT_OPEN="left-open",a.RESIZE_FULL="resize-full",a.RESIZE_SMALL="resize-small",a.BLOCK="block",a.OK_CIRCLED="ok-circled",a.INFO="info",a.WARNING="warning",a.ERROR="error",a.THUMBS_UP="thumbs-up",a.THUMBS_DOWN="thumbs-down",a.STAR="star",a.LIGHT_BULB="light-bulb",a.ENVELOPE_SEND="envelope-send",a.REFRESH="refresh",a.USER="user",a.PLAY="play",a.PENCIL="pencil",a.PAUSE="pause",a.CODE_BLOCK="code-block",a.COPY="copy",a.CURSOR_INSERT="cursor-insert",a.TEXT_SELECT="text-select",a.REVERT="revert",a.ASTERISK="asterisk"}(A||(t.MynahIcons=A={})),t.Icon=class{constructor(a){o.MynahUIIconImporter.getInstance(),this.render=l.DomBuilder.getInstance().build({type:"i",classNames:["mynah-ui-icon",`mynah-ui-icon-${a.icon}`,...a.classNames!==void 0?a.classNames:[]],children:[{type:"span",attributes:{"aria-hidden":"true"},children:[a.icon]}]})}}},3965:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(ye){return ye&&ye.__esModule?ye:{default:ye}};Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUIIconImporter=void 0;const o=e(8505),A=e(5316),a=l(e(3122)),m=l(e(52)),d=l(e(1107)),c=l(e(1705)),r=l(e(6373)),i=l(e(3408)),n=l(e(899)),h=l(e(9193)),u=l(e(7934)),x=l(e(6245)),b=l(e(2743)),C=l(e(3831)),p=l(e(2596)),v=l(e(8501)),M=l(e(2965)),f=l(e(8080)),y=l(e(9183)),s=l(e(5884)),g=l(e(1723)),w=l(e(4885)),k=l(e(5650)),S=l(e(3404)),L=l(e(8268)),U=l(e(8600)),F=l(e(5943)),R=l(e(9239)),E=l(e(6178)),$=l(e(5402)),W=l(e(2883)),ee=l(e(6905)),V=l(e(6139)),ne=l(e(2668)),P=l(e(4672)),N=l(e(453)),Z=l(e(4335)),K=l(e(2185)),he=l(e(6828)),de=l(e(3219)),_=l(e(8797)),Q=l(e(677)),Y=l(e(2092)),re=l(e(6994)),me=l(e(192)),Ae=l(e(5827)),se=l(e(3161)),ie=l(e(6782)),ze=l(e(582)),Ie=l(e(8651)),De=l(e(7481)),xe=l(e(7479)),oe=l(e(2685));class q{constructor(){const fe={Q:a.default,MENU:m.default,MINUS:d.default,SEARCH:c.default,PLUS:r.default,PAPER_CLIP:i.default,LIST_ADD:n.default,FOLDER:x.default,FILE:b.default,TABS:h.default,PENCIL:u.default,CHAT:C.default,LINK:v.default,DOC:M.default,EXTERNAL:f.default,CANCEL:y.default,CANCEL_CIRCLE:s.default,CALENDAR:g.default,COMMENT:p.default,MEGAPHONE:w.default,MAGIC:k.default,NOTIFICATION:S.default,EYE:L.default,ELLIPSIS:U.default,OK:F.default,UP_OPEN:R.default,DOWN_OPEN:E.default,RIGHT_OPEN:$.default,LEFT_OPEN:W.default,RESIZE_FULL:ee.default,RESIZE_SMALL:V.default,BLOCK:ne.default,OK_CIRCLED:P.default,INFO:N.default,WARNING:Z.default,ERROR:K.default,THUMBS_UP:he.default,THUMBS_DOWN:de.default,STAR:_.default,LIGHT_BULB:Q.default,ENVELOPE_SEND:Y.default,REFRESH:re.default,USER:me.default,PLAY:Ae.default,PAUSE:se.default,CODE_BLOCK:ie.default,COPY:ze.default,CURSOR_INSERT:Ie.default,TEXT_SELECT:De.default,REVERT:xe.default,ASTERISK:oe.default};o.DomBuilder.getInstance().createPortal("mynah-ui-icons",{type:"style",attributes:{type:"text/css"},children:[`
      ${Object.keys(A.MynahIcons).map(ue=>{const we=A.MynahIcons[ue];return`
        :root{
          --mynah-ui-icon-${we}: url(${fe[ue]});
        }
        .mynah-ui-icon-${we} {
          -webkit-mask-image: var(--mynah-ui-icon-${we});
          mask-image: var(--mynah-ui-icon-${we});
        }`}).join("")}
      `]},"beforebegin")}}t.MynahUIIconImporter=q,q.getInstance=()=>(q.instance===void 0&&(q.instance=new q),q.instance)},773:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabBarButtonsWrapper=void 0;const l=e(4851),o=e(8505),A=e(620),a=e(3753),m=e(1116),d=e(8393),c=e(5316),r=e(9845);t.TabBarButtonsWrapper=class{constructor(n){this.getTabsBarButtonsRender=h=>{var u,x;let b=(u=l.Config.getInstance().config.tabBarButtons)!==null&&u!==void 0?u:[];const C=(x=a.MynahUITabsStore.getInstance().getTabDataStore(h))===null||x===void 0?void 0:x.getValue("tabBarButtons");return C!=null&&C.length>0&&(b=C),b.map(p=>new i({onButtonClick:v=>{A.MynahUIGlobalEvents.getInstance().dispatch(m.MynahEventNames.TAB_BAR_BUTTON_CLICK,{tabId:h,buttonId:v}),this.props.onButtonClick!=null&&this.props.onButtonClick(h,v)},tabBarActionButton:p}).render)},this.props=n??{},this.render=o.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-nav-tabs-bar-buttons-wrapper"],children:this.getTabsBarButtonsRender(a.MynahUITabsStore.getInstance().getSelectedTabId())}),a.MynahUITabsStore.getInstance().addListener("selectedTabChange",h=>{this.render.clear(),this.render.update({children:this.getTabsBarButtonsRender(h)})})}};class i{constructor(h){this.showButtonOptionsOverlay=u=>{this.buttonOptionsOverlay=new r.Overlay({background:!0,closeOnOutsideClick:!0,referenceElement:this.render,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:r.OverlayVerticalDirection.TO_BOTTOM,horizontalDirection:r.OverlayHorizontalDirection.END_TO_LEFT,children:[{type:"div",classNames:["mynah-nav-tabs-bar-buttons-wrapper-overlay"],children:u.map(x=>new d.Button({label:x.text,icon:x.icon!=null?new c.Icon({icon:x.icon}).render:void 0,primary:!1,onClick:()=>{this.hideButtonOptionsOverlay(),this.props.onButtonClick(x.id)}}).render)}]})},this.hideButtonOptionsOverlay=()=>{this.buttonOptionsOverlay!==void 0&&(this.buttonOptionsOverlay.close(),this.buttonOptionsOverlay=void 0)},this.props=h,this.render=new d.Button({label:this.props.tabBarActionButton.text,tooltip:this.props.tabBarActionButton.description,tooltipVerticalDirection:r.OverlayVerticalDirection.START_TO_BOTTOM,tooltipHorizontalDirection:r.OverlayHorizontalDirection.TO_LEFT,icon:this.props.tabBarActionButton.icon!=null?new c.Icon({icon:this.props.tabBarActionButton.icon}).render:void 0,primary:!1,onClick:()=>{var u;this.props.tabBarActionButton.items!=null&&((u=this.props.tabBarActionButton.items)===null||u===void 0?void 0:u.length)>0?this.showButtonOptionsOverlay(this.props.tabBarActionButton.items):this.props.onButtonClick(this.props.tabBarActionButton.id)}}).render}}},8288:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=void 0;const l=e(4851),o=e(8505),A=e(620),a=e(3753),m=e(8393),d=e(8984),c=e(3121),r=e(5316),i=e(773),n=e(9845),h=e(9433);e(9592);const u=e(6138);t.Tabs=class{constructor(x){this.tabIdTitleSubscriptions={},this.tabIdChatItemsSubscriptions={},this.getTabOptionsFromTabStoreData=()=>{const b=a.MynahUITabsStore.getInstance().getAllTabs();return Object.keys(b).map(C=>{var p;return{value:C,label:(p=b[C].store)===null||p===void 0?void 0:p.tabTitle,selected:b[C].isSelected}})},this.getTabsRender=b=>{const C=this.getTabOptionsFromTabStoreData();return C.forEach(p=>{this.assignListener(p.value)}),this.toggleGroup=new h.Toggle({onChange:p=>{a.MynahUITabsStore.getInstance().selectTab(p),this.props.onChange!==void 0&&this.props.onChange(p)},onRemove:(p,v)=>{this.props.onBeforeTabRemove===void 0||this.props.onBeforeTabRemove(p)?a.MynahUITabsStore.getInstance().removeTab(p):this.showCloseTabConfirmationOverLay(v,p)},name:"mynah-main-tabs",options:C,value:b}),[this.toggleGroup.render,new m.Button({classNames:["mynah-toggle-close-button"],additionalEvents:{mouseenter:p=>{var v;a.MynahUITabsStore.getInstance().tabsLength()===l.Config.getInstance().config.maxTabs&&this.showMaxReachedOverLay(p.currentTarget,(v=this.props.noMoreTabsTooltip)!==null&&v!==void 0?v:l.Config.getInstance().config.texts.noMoreTabsTooltip,this.props.maxTabsTooltipDuration)},mouseleave:()=>{this.hideMaxReachedOverLay()}},onClick:p=>{(0,A.cancelEvent)(p),a.MynahUITabsStore.getInstance().tabsLength()<l.Config.getInstance().config.maxTabs&&a.MynahUITabsStore.getInstance().addTab()},icon:new r.Icon({icon:r.MynahIcons.PLUS}).render,primary:!1}).render]},this.showMaxReachedOverLay=(b,C,p)=>{this.maxReachedOverlay=new n.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:b,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:n.OverlayVerticalDirection.TO_BOTTOM,horizontalDirection:n.OverlayHorizontalDirection.CENTER,children:[new d.Card({border:!1,classNames:["mynah-nav-tabs-max-reached-overlay"],children:[new c.CardBody({body:C}).render]}).render]}),p!==void 0&&p!==-1?setTimeout(()=>{this.hideMaxReachedOverLay()},p):p===void 0&&setTimeout(()=>{this.hideMaxReachedOverLay()},u.DEFAULT_TIMEOUT)},this.hideMaxReachedOverLay=()=>{this.maxReachedOverlay!==void 0&&(this.maxReachedOverlay.close(),this.maxReachedOverlay=void 0)},this.showCloseTabConfirmationOverLay=(b,C)=>{var p,v,M;this.closeConfirmationOverlay=new n.Overlay({background:!0,closeOnOutsideClick:!0,referenceElement:b,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:n.OverlayVerticalDirection.TO_BOTTOM,horizontalDirection:n.OverlayHorizontalDirection.START_TO_RIGHT,children:[new d.Card({border:!1,classNames:["mynah-nav-tabs-close-confirmation-overlay"],children:[new c.CardBody({body:(p=a.MynahUITabsStore.getInstance().getTabDataStore(C).getValue("tabCloseConfirmationMessage"))!==null&&p!==void 0?p:l.Config.getInstance().config.texts.tabCloseConfirmationMessage}).render,o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-nav-tabs-close-confirmation-buttons-wrapper"],children:[new m.Button({onClick:()=>{this.hideshowCloseTabConfirmationOverLay()},label:(v=a.MynahUITabsStore.getInstance().getTabDataStore(C).getValue("tabCloseConfirmationKeepButton"))!==null&&v!==void 0?v:l.Config.getInstance().config.texts.tabCloseConfirmationKeepButton}).render,new m.Button({onClick:()=>{a.MynahUITabsStore.getInstance().removeTab(C),this.hideshowCloseTabConfirmationOverLay()},classNames:["mynah-nav-tabs-close-confirmation-close-button"],label:(M=a.MynahUITabsStore.getInstance().getTabDataStore(C).getValue("tabCloseConfirmationCloseButton"))!==null&&M!==void 0?M:l.Config.getInstance().config.texts.tabCloseConfirmationCloseButton}).render]})]}).render]})},this.hideshowCloseTabConfirmationOverLay=()=>{this.closeConfirmationOverlay!==void 0&&(this.closeConfirmationOverlay.close(),this.closeConfirmationOverlay=void 0)},this.assignListener=b=>{var C,p;this.tabIdTitleSubscriptions[b]=(C=a.MynahUITabsStore.getInstance().addListenerToDataStore(b,"tabTitle",v=>{this.toggleGroup.updateOptionTitle(b,v)}))!==null&&C!==void 0?C:"",this.tabIdChatItemsSubscriptions[b]=(p=a.MynahUITabsStore.getInstance().addListenerToDataStore(b,"chatItems",()=>{this.toggleGroup.updateOptionIndicator(b,!0)}))!==null&&p!==void 0?p:""},this.removeListenerAssignments=b=>{a.MynahUITabsStore.getInstance().removeListenerFromDataStore(b,this.tabIdTitleSubscriptions[b],"tabTitle"),a.MynahUITabsStore.getInstance().removeListenerFromDataStore(b,this.tabIdChatItemsSubscriptions[b],"chatItems")},this.props=x,this.render=o.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-nav-tabs-wrapper"],events:{dblclick:b=>{(0,A.cancelEvent)(b),a.MynahUITabsStore.getInstance().tabsLength()<l.Config.getInstance().config.maxTabs&&a.MynahUITabsStore.getInstance().addTab()}},children:[...this.getTabsRender(a.MynahUITabsStore.getInstance().getSelectedTabId()),new i.TabBarButtonsWrapper().render]}),a.MynahUITabsStore.getInstance().addListener("add",(b,C)=>{var p;this.assignListener(b),this.toggleGroup.addOption({value:b,label:(p=C?.store)===null||p===void 0?void 0:p.tabTitle,selected:C?.isSelected}),this.render.setAttribute("selected-tab",b)}),a.MynahUITabsStore.getInstance().addListener("remove",(b,C)=>{this.removeListenerAssignments(b),this.toggleGroup.removeOption(b),C!==void 0&&this.toggleGroup.snapToOption(a.MynahUITabsStore.getInstance().getSelectedTabId()),this.render.setAttribute("selected-tab",a.MynahUITabsStore.getInstance().getSelectedTabId())}),a.MynahUITabsStore.getInstance().addListener("selectedTabChange",b=>{this.render.setAttribute("selected-tab",b),this.toggleGroup.setValue(b)})}}},3295:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoTabs=void 0;const l=e(6709),o=e(4851),A=e(8505),a=e(620),m=e(3753),d=e(8393),c=e(5316);e(3094),t.NoTabs=class{constructor(){var r;this.render=A.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-no-tabs-wrapper",...m.MynahUITabsStore.getInstance().tabsLength()>0?["hidden"]:[]],children:[{type:"div",classNames:["mynah-no-tabs-icon-wrapper"],children:[new c.Icon({icon:c.MynahIcons.TABS}).render]},{type:"div",classNames:["mynah-no-tabs-info"],innerHTML:(0,l.marked)((r=o.Config.getInstance().config.texts.noTabsOpen)!==null&&r!==void 0?r:"",{breaks:!0})},{type:"div",classNames:["mynah-no-tabs-buttons-wrapper"],children:[new d.Button({onClick:i=>{(0,a.cancelEvent)(i),m.MynahUITabsStore.getInstance().tabsLength()<o.Config.getInstance().config.maxTabs&&m.MynahUITabsStore.getInstance().addTab()},icon:new c.Icon({icon:c.MynahIcons.PLUS}).render,label:o.Config.getInstance().config.texts.openNewTab}).render]}]}),m.MynahUITabsStore.getInstance().addListener("add",()=>{this.render.addClass("hidden")}),m.MynahUITabsStore.getInstance().addListener("remove",()=>{m.MynahUITabsStore.getInstance().tabsLength()===0&&this.render.removeClass("hidden")})}}},6138:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Notification=t.DEFAULT_TIMEOUT=void 0;const l=e(8505),o=e(620),A=e(1116),a=e(5316),m=e(9845);e(1895),t.DEFAULT_TIMEOUT=5e3,t.Notification=class{constructor(d){var c,r;this.getNextCalculatedTop=()=>{const i=(0,l.DS)(".mynah-notification");if(i.length>0){const n=i[i.length-1].getBoundingClientRect();return n.top+n.height+m.OVERLAY_MARGIN}return 0},this.getChildren=i=>i instanceof Array?i:[i],this.duration=(c=d.duration)!==null&&c!==void 0?c:t.DEFAULT_TIMEOUT,this.type=(r=d.type)!==null&&r!==void 0?r:A.NotificationType.INFO,this.props=d}notify(){var d,c,r;this.notificationOverlay=new m.Overlay({referencePoint:{left:Math.max((d=document.documentElement.clientWidth)!==null&&d!==void 0?d:0,(c=window.innerWidth)!==null&&c!==void 0?c:0),top:this.getNextCalculatedTop()},dimOutside:!1,closeOnOutsideClick:!1,horizontalDirection:m.OverlayHorizontalDirection.TO_LEFT,verticalDirection:m.OverlayVerticalDirection.TO_BOTTOM,onClose:this.props.onNotificationHide,children:[{type:"div",classNames:["mynah-notification",this.props.onNotificationClick!==void 0?"mynah-notification-clickable":""],events:{click:i=>{var n;(0,o.cancelEvent)(i),this.props.onNotificationClick!==void 0&&(this.props.onNotificationClick(),(n=this.notificationOverlay)===null||n===void 0||n.close())}},children:[new a.Icon({icon:this.type.toString()}).render,{type:"div",classNames:["mynah-notification-container"],children:[{type:"h3",classNames:["mynah-notification-title"],children:[(r=this.props.title)!==null&&r!==void 0?r:""]},{type:"div",classNames:["mynah-notification-content"],children:this.getChildren(this.props.content)}]}]}]}),this.duration!==-1&&setTimeout(()=>{var i;(i=this.notificationOverlay)===null||i===void 0||i.close()},this.duration)}}},9845:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=t.OverlayVerticalDirection=t.OverlayHorizontalDirection=t.OVERLAY_MARGIN=void 0;const l=e(8505),o=e(4024),A=e(1116);var a,m;e(3604),t.OVERLAY_MARGIN=8,function(d){d.TO_LEFT="horizontal-direction-to-left",d.END_TO_LEFT="horizontal-direction-from-end-to-left",d.TO_RIGHT="horizontal-direction-to-right",d.START_TO_RIGHT="horizontal-direction-from-start-to-right",d.CENTER="horizontal-direction-at-center"}(a||(t.OverlayHorizontalDirection=a={})),function(d){d.TO_BOTTOM="vertical-direction-to-bottom",d.START_TO_BOTTOM="vertical-direction-from-start-to-bottom",d.TO_TOP="vertical-direction-to-top",d.END_TO_TOP="vertical-direction-from-end-to-top",d.CENTER="vertical-direction-at-center"}(m||(t.OverlayVerticalDirection=m={})),t.Overlay=class{constructor(d){var c,r,i,n,h,u,x,b;this.guid=(0,o.generateUID)(),this.close=()=>{this.render.removeClass("mynah-overlay-open"),setTimeout(()=>{this.render.remove()},250),this.onClose!==void 0&&this.onClose()},this.windowBlurHandler=()=>{this.close(),window.removeEventListener("blur",this.windowBlurHandler.bind(this)),window.removeEventListener("resize",this.windowBlurHandler.bind(this))},this.getCalculatedLeft=(U,F,R)=>{const E=F!==void 0?F.getBoundingClientRect():R!==void 0?{left:R.left,width:0}:{left:0,width:0};switch(U.toString()){case a.TO_RIGHT:return E.left+E.width+t.OVERLAY_MARGIN;case a.START_TO_RIGHT:return E.left;case a.TO_LEFT:return E.left-t.OVERLAY_MARGIN;case a.END_TO_LEFT:return E.left+E.width;case a.CENTER:return E.left+E.width/2;default:return 0}},this.getCalculatedWidth=U=>U!==void 0?U.getBoundingClientRect().width:0,this.getCalculatedTop=(U,F,R)=>{const E=F!==void 0?F.getBoundingClientRect():R!==void 0?{top:R.top,height:0}:{top:0,height:0};switch(U.toString()){case m.TO_BOTTOM:return E.top+E.height+t.OVERLAY_MARGIN;case m.START_TO_BOTTOM:return E.top;case m.TO_TOP:return E.top-t.OVERLAY_MARGIN;case m.END_TO_TOP:return E.top+E.height;case m.CENTER:return E.top+E.height/2;default:return E.top}},this.updateContent=U=>{this.innerContainer.update({children:U})},this.toggleHidden=U=>{this.render.hidden=U};const C=(c=d.horizontalDirection)!==null&&c!==void 0?c:a.TO_RIGHT,p=(r=d.verticalDirection)!==null&&r!==void 0?r:m.START_TO_BOTTOM;this.onClose=d.onClose;const v=d.dimOutside!==!1,M=d.closeOnOutsideClick!==!1,f=this.getCalculatedTop(p,d.referenceElement,d.referencePoint),y=this.getCalculatedLeft(C,d.referenceElement,d.referencePoint),s=d.stretchWidth===!0?this.getCalculatedWidth(d.referenceElement):0;this.innerContainer=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-overlay-inner-container"],children:d.children}),this.container=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-overlay-container",C,p,d.background!==!1?"background":""],attributes:{style:`top: ${f}px; left: ${y}px; ${s!==0?`width: ${s}px;`:""}`},children:[this.innerContainer]}),d.removeOtherOverlays===!0&&l.DomBuilder.getInstance().removeAllPortals(A.MynahPortalNames.OVERLAY),this.render=l.DomBuilder.getInstance().createPortal(`${A.MynahPortalNames.OVERLAY}-${this.guid}`,{type:"div",attributes:{id:`mynah-overlay-${this.guid}`},classNames:["mynah-overlay",...v?["mynah-overlay-dim-outside"]:[],...M?["mynah-overlay-close-on-outside-click"]:[]],events:{click:M?this.close:()=>{}},children:[this.container]},"beforeend");const g=Math.max((i=document.documentElement.clientHeight)!==null&&i!==void 0?i:0,(n=window.innerHeight)!==null&&n!==void 0?n:0),w=Math.max((h=document.documentElement.clientWidth)!==null&&h!==void 0?h:0,(u=window.innerWidth)!==null&&u!==void 0?u:0),k=this.container.getBoundingClientRect(),S=parseFloat((x=this.container.style.top)!==null&&x!==void 0?x:"0"),L=parseFloat((b=this.container.style.left)!==null&&b!==void 0?b:"0");k.top<t.OVERLAY_MARGIN?this.container.style.top=`${S+(t.OVERLAY_MARGIN-k.top)}px`:k.top+k.height+t.OVERLAY_MARGIN>g&&(this.container.style.top=S-(k.top+k.height+t.OVERLAY_MARGIN-g)+"px"),k.left<t.OVERLAY_MARGIN?this.container.style.left=`${L+(t.OVERLAY_MARGIN-k.left)}px`:k.left+k.width+t.OVERLAY_MARGIN>w&&(this.container.style.left=L-(k.left+k.width+t.OVERLAY_MARGIN-w)+"px"),setTimeout(()=>{this.render.addClass("mynah-overlay-open"),M&&(window.addEventListener("blur",this.windowBlurHandler.bind(this)),window.addEventListener("resize",this.windowBlurHandler.bind(this)))},10)}}},7475:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SourceLinkBody=void 0;const l=e(3121);t.SourceLinkBody=class{constructor(o){var A;this.props=o,this.render=new l.CardBody({highlightRangeWithTooltip:o.highlightRangeWithTooltip,body:(A=this.props.suggestion.body)!==null&&A!==void 0?A:"",children:this.props.children}).render}}},7646:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SourceLinkHeader=void 0;const l=e(1511),o=e(8505),A=e(620),a=e(8188),m=e(1116),d=e(5316),c=e(9845),r=e(4326);t.SourceLinkHeader=class{constructor(i){this.getSourceMetaBlock=h=>{const u=[];return h!=null&&Object.keys(h).forEach(x=>{const b=h[x];b.isAccepted===!0&&u.push({type:"span",classNames:["mynah-title-meta-block-item","approved-answer"],children:[new d.Icon({icon:d.MynahIcons.OK}).render]}),b.lastActivityDate!==void 0&&u.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new d.Icon({icon:d.MynahIcons.CALENDAR}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[(0,l.getTimeDiff)(new Date().getTime()-b.lastActivityDate,2)]}]}),b.answerCount!==void 0&&u.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new d.Icon({icon:d.MynahIcons.CHAT}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[b.answerCount.toString()]}]}),b.stars!==void 0&&u.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new d.Icon({icon:d.MynahIcons.STAR}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${b.stars.toString()} contributors`]}]}),b.forks!==void 0&&u.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new d.Icon({icon:d.MynahIcons.DOWN_OPEN}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${b.forks.toString()} forks`]}]}),b.score!==void 0&&u.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new d.Icon({icon:d.MynahIcons.THUMBS_UP}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${b.score.toString()}`]}]})}),{type:"span",classNames:["mynah-title-meta-block"],children:u}},this.showLinkPreview=(h,u)=>{u.body!==void 0&&(clearTimeout(this.sourceLinkPreviewTimeout),this.sourceLinkPreviewTimeout=setTimeout(()=>{const x=h.target;this.sourceLinkPreview=new c.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:x,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:c.OverlayVerticalDirection.TO_TOP,horizontalDirection:c.OverlayHorizontalDirection.START_TO_RIGHT,children:[new r.SourceLinkCard({sourceLink:u}).render]})},500))},this.hideLinkPreview=()=>{var h;clearTimeout(this.sourceLinkPreviewTimeout),this.sourceLinkPreview!==null&&((h=this.sourceLinkPreview)===null||h===void 0||h.close(),this.sourceLinkPreview=null)};const n=i.sourceLink.url.replace(/^(http|https):\/\//,"").split("/");n[n.length-1].trim()===""&&n.pop(),A.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.ROOT_FOCUS,h=>{h.focusState||this.hideLinkPreview()}),this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-source-link-header"],...i.showCardOnHover===!0?{events:{mouseenter:h=>{this.showLinkPreview(h,i.sourceLink)},mouseleave:this.hideLinkPreview}}:{},attributes:{origin:(0,a.getOrigin)(i.sourceLink.url)},children:[{type:"span",classNames:["mynah-source-thumbnail"]},{type:"div",classNames:["mynah-source-link-title-wrapper"],children:[{type:"a",classNames:["mynah-source-link-title"],events:{...i.onClick!==void 0&&{click:i.onClick,auxclick:i.onClick}},attributes:{href:i.sourceLink.url,target:"_blank"},children:[i.sourceLink.title,{type:"div",classNames:["mynah-source-link-expand-icon"],children:[new d.Icon({icon:d.MynahIcons.EXTERNAL}).render]}]},{type:"a",classNames:["mynah-source-link-url"],events:{...i.onClick!==void 0&&{click:i.onClick,auxclick:i.onClick}},attributes:{href:i.sourceLink.url,target:"_blank"},innerHTML:n.map(h=>`<span>${h}</span>`).join("")},...i.sourceLink.metadata!=null?[this.getSourceMetaBlock(i.sourceLink.metadata)]:[]]}]})}}},4326:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SourceLinkCard=void 0;const l=e(8984),o=e(7475),A=e(7646);t.SourceLinkCard=class{constructor(a){this.sourceLink=a.sourceLink,this.render=new l.Card({border:!1,background:!1,children:[new A.SourceLinkHeader({sourceLink:this.sourceLink}).render,...this.sourceLink.body!==void 0?[new o.SourceLinkBody({suggestion:this.sourceLink}).render]:[]]}).render}}},5580:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(t,"__esModule",{value:!0}),t.SyntaxHighlighter=t.ellipsis=t.highlighters=void 0;const o=e(8505),A=e(8848);e(4818),e(8226),e(827),e(4146),e(2661),e(8125),e(5841),e(8753),e(4547),e(6890),e(8714),e(3564),e(3467),e(8606),e(1793),e(3552),e(8141),e(1014),e(6792),e(8871),e(5358),e(6414),e(3643),e(6837),e(4173),e(3493);const a=e(8393),m=e(5316),d=e(620),c=e(3121),r=l(e(580)),i=l(e(4485));e(5625);const n=e(1567),h=["markup","xml","css","clike","diff","javascript","typescript","jsx","tsx","lua","java","json","markdown","mongodb","c","bash","csharp","objectivec","python","regex","scala","scss","less","diff-markup","diff-xml","diff-css","diff-clike","diff-diff","diff-javascript","diff-typescript","diff-jsx","diff-tsx","diff-lua","diff-java","diff-json","diff-markdown","diff-mongodb","diff-c","diff-bash","diff-csharp","diff-objectivec","diff-python","diff-regex","diff-scala","diff-scss","diff-less"];t.highlighters={start:{markup:'<span class="amzn-mynah-search-result-highlight">',textReplacement:"__mynahhighlighterstart__"},end:{markup:"</span>",textReplacement:"__mynahhighlighterend__"}},t.ellipsis={start:{markup:'<span class="amzn-mynah-search-result-ellipsis">',textReplacement:"__mynahcodeellipsisstart__"},end:{markup:"</span>",textReplacement:"__mynahcodeellipsisend__"}},t.SyntaxHighlighter=class{constructor(u){var x,b;this.codeBlockButtons=[],this.getSelectedCodeContextMenu=()=>{var M,f;return{code:(f=(M=document.getSelection())===null||M===void 0?void 0:M.toString())!==null&&f!==void 0?f:"",type:"selection"}},this.getSelectedCode=()=>{var M,f;return{code:(f=(M=this.render.querySelector("pre"))===null||M===void 0?void 0:M.innerText)!==null&&f!==void 0?f:"",type:"block"}},this.onCopiedToClipboard=(M,f)=>{var y,s;((y=this.props)===null||y===void 0?void 0:y.onCopiedToClipboard)!=null&&((s=this.props)===null||s===void 0||s.onCopiedToClipboard(f,M,this.props.index))},this.props=u;let C=(0,i.default)(u.codeStringWithMarkup);u.keepHighlights===!0&&(C=C.replace(new RegExp(t.highlighters.start.markup,"g"),t.highlighters.start.textReplacement).replace(new RegExp(t.highlighters.end.markup,"g"),t.highlighters.end.textReplacement).replace(new RegExp(t.ellipsis.start.markup,"g"),t.ellipsis.start.textReplacement).replace(new RegExp(t.ellipsis.end.markup,"g"),t.ellipsis.end.textReplacement));let p=(0,r.default)(C);p=p.replace(new RegExp((0,r.default)(c.highlightersWithTooltip.start.markupStart),"g"),c.highlightersWithTooltip.start.markupStart).replace(new RegExp((0,r.default)(c.highlightersWithTooltip.start.markupEnd),"g"),c.highlightersWithTooltip.start.markupEnd).replace(new RegExp((0,r.default)(c.highlightersWithTooltip.end.markup),"g"),c.highlightersWithTooltip.end.markup);const v=o.DomBuilder.getInstance().build({type:"pre",classNames:["keep-markup",`language-${u.language!==void 0&&h.includes(u.language)?u.language:"clike"}`,...((x=u.language)===null||x===void 0?void 0:x.match("diff"))!=null?["diff-highlight"]:[],...u.showLineNumbers===!0?["line-numbers"]:[]],children:[{type:"code",innerHTML:p}],events:{copy:M=>{(0,d.cancelEvent)(M);const f=this.getSelectedCodeContextMenu();f.code.length>0&&(0,n.copyToClipboard)(f.code,()=>{this.onCopiedToClipboard(f.code,f.type)})}}});(0,A.highlightElement)(v),u.keepHighlights===!0&&(v.innerHTML=v.innerHTML.replace(new RegExp(t.highlighters.start.textReplacement,"g"),t.highlighters.start.markup).replace(new RegExp(t.highlighters.end.textReplacement,"g"),t.highlighters.end.markup).replace(new RegExp(t.ellipsis.start.textReplacement,"g"),t.ellipsis.start.markup).replace(new RegExp(t.ellipsis.end.textReplacement,"g"),t.ellipsis.end.markup)),u.codeBlockActions!=null&&Object.keys(u.codeBlockActions).forEach(M=>{var f,y,s,g,w,k,S;const L=((y=(f=u.codeBlockActions)===null||f===void 0?void 0:f[M])===null||y===void 0?void 0:y.acceptedLanguages)==null||u.language==null||((w=(g=(s=u.codeBlockActions)===null||s===void 0?void 0:s[M])===null||g===void 0?void 0:g.acceptedLanguages)===null||w===void 0?void 0:w.find(U=>u.language===U))!=null?(k=u.codeBlockActions)===null||k===void 0?void 0:k[M]:void 0;L!=null&&this.codeBlockButtons.push(new a.Button({icon:L.icon!=null?new m.Icon({icon:L.icon}).render:void 0,label:L.label,attributes:{title:(S=L.description)!==null&&S!==void 0?S:""},primary:!1,onClick:U=>{var F,R;(0,d.cancelEvent)(U);const E=this.getSelectedCode();((F=this.props)===null||F===void 0?void 0:F.onCodeBlockAction)!==void 0&&this.props.onCodeBlockAction(L.id,L.data,E.type,E.code,void 0,(R=this.props)===null||R===void 0?void 0:R.index)},additionalEvents:{mousedown:d.cancelEvent}}).render)}),this.render=o.DomBuilder.getInstance().build({type:"div",classNames:["mynah-syntax-highlighter",...u.block!==!0?["mynah-inline-code"]:[]],children:[v,...u.showLineNumbers===!0?[{type:"span",classNames:["line-numbers-rows"],children:v.innerHTML.split(/\n/).slice(0,-1).map((M,f)=>{var y;return{type:"span",innerHTML:String(f+((y=u.startingLineNumber)!==null&&y!==void 0?y:1))}})}]:[],{type:"div",classNames:["mynah-syntax-highlighter-copy-buttons"],children:[...this.codeBlockButtons,...this.codeBlockButtons.length>0?[{type:"span",classNames:["mynah-syntax-highlighter-language"],children:[(b=u.language)!==null&&b!==void 0?b:"text"]}]:[]]}]})}}},9433:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Toggle=void 0;const l=e(8505),o=e(620),A=e(8393),a=e(5316),m=e(9845);e(6212);class d{constructor(r){var i,n;this.props=r,this.render=l.DomBuilder.getInstance().build({type:"span",attributes:{key:`${this.props.name}-${this.props.value}`,title:(i=this.props.label)!==null&&i!==void 0?i:""},events:{...this.props.disabled===!0&&this.props.disabledTooltip!==void 0?{mouseenter:()=>{this.disabledTooltipTimer=setTimeout(()=>{var h;this.disabledTooltip=new m.Overlay({children:[{type:"span",classNames:["mynah-toggle-disabled-tooltip-container"],children:[(h=this.props.disabledTooltip)!==null&&h!==void 0?h:""]}],closeOnOutsideClick:!1,dimOutside:!1,referenceElement:this.render,horizontalDirection:m.OverlayHorizontalDirection.CENTER,verticalDirection:m.OverlayVerticalDirection.TO_TOP})},500)},mouseleave:()=>{clearTimeout(this.disabledTooltipTimer),this.disabledTooltip!==void 0&&(this.disabledTooltip.close(),setTimeout(()=>{this.disabledTooltip=void 0},50))}}:{}},children:[{type:"input",classNames:["mynah-toggle-option"],attributes:{type:"radio",id:`${this.props.name}-${this.props.value}`,value:this.props.value,name:this.props.name,...this.props.selected===!0?{checked:"checked"}:{},...this.props.disabled===!0?{disabled:"disabled"}:{}},events:{change:()=>{this.props.onChange!=null&&this.props.onChange(this.props.value)}}},{type:"label",classNames:["mynah-toggle-option-label"],attributes:{for:`${this.props.name}-${this.props.value}`},events:{dblclick:h=>{(0,o.cancelEvent)(h)},auxclick:()=>{this.props.onRemove!==void 0&&this.props.onRemove(this.props.value,this.render)}},children:[this.props.icon!==void 0?new a.Icon({icon:r.icon}).render:"",{type:"span",classNames:["mynah-toggle-option-label-text"],children:[(n=this.props.label)!==null&&n!==void 0?n:""]},this.props.onRemove!==void 0?new A.Button({classNames:["mynah-toggle-close-button"],onClick:()=>{this.props.onRemove!==void 0&&this.props.onRemove(this.props.value,this.render)},icon:new a.Icon({icon:a.MynahIcons.CANCEL}).render,primary:!1}).render:""]}]})}}t.Toggle=class{constructor(c){this.transformScroll=r=>{r.deltaY!==0&&(this.render.scrollLeft+=r.deltaY)},this.getChildren=r=>[...this.props.options.map(i=>new d({...i,selected:r===i.value,name:this.props.name,onChange:this.updateSelectionRender,onRemove:this.props.onRemove}).render)],this.updateSelectionRender=r=>{this.props.onChange!==void 0&&this.props.onChange(r)},this.setValue=r=>{if(r!==this.getValue()){this.currentValue=r;const i=this.render.querySelector(`#${this.props.name}-${r}`);i!==void 0&&(i.click(),i.checked=!0,i.nextSibling.classList.remove("indication"))}},this.addOption=r=>{this.props.options.push(r),this.render.appendChild(new d({...r,name:this.props.name,onChange:this.updateSelectionRender,onRemove:this.props.onRemove}).render),r.selected===!0&&(this.setValue(r.value),this.snapToOption(r.value))},this.removeOption=r=>{this.props.options=this.props.options.filter(n=>n.value!==r);const i=this.render.querySelector(`span[key="${this.props.name}-${r}"]`);i!==void 0&&i?.remove()},this.updateOptionTitle=(r,i)=>{this.props.options=this.props.options.filter(h=>h.value!==r);const n=this.render.querySelector(`span[key="${this.props.name}-${r}"] .mynah-toggle-option-label-text`);n!==void 0&&(n.innerHTML=i)},this.updateOptionIndicator=(r,i)=>{this.props.options=this.props.options.filter(h=>h.value!==r);const n=this.render.querySelector(`label[for="${this.props.name}-${r}"]`);n!==null&&(i&&r!==this.getValue()?n.classList.add("indication"):n.classList.remove("indication"))},this.snapToOption=r=>{const i=this.render.querySelector(`#${this.props.name}-${r}`);i!==void 0&&(this.render.scrollLeft=(i?.parentNode).offsetLeft)},this.getValue=()=>this.currentValue,this.props={direction:"horizontal",...c},this.currentValue=this.props.value,this.render=l.DomBuilder.getInstance().build({type:"div",classNames:["mynah-toggle-container","mynah-toggle-type-tabs",`mynah-toggle-direction-${this.props.direction}`],attributes:{disabled:c.disabled===!0?"disabled":""},children:this.getChildren(c.value),events:{wheel:{handler:this.transformScroll,options:{passive:!0}}}})}}},1567:(I,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.copyToClipboard=t.chatItemHasContent=void 0,t.chatItemHasContent=e=>e.body!=null&&e.body!==""||e.fileList!=null||e.formItems!=null||e.customRenderer!=null||e.buttons!=null,t.copyToClipboard=async(e,l)=>{var o;!((o=document.hasFocus)===null||o===void 0)&&o.call(document)||window.focus();try{await navigator.clipboard.writeText(e)}finally{l?.()}}},4851:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Config=void 0;const l=e(7927),o={componentClasses:{},maxTabs:1e3,maxUserInput:4096,showPromptField:!0,autoFocus:!0,tabBarButtons:[],feedbackOptions:[{value:"inaccurate-response",label:"Inaccurate response"},{value:"harmful-content",label:"Harmful content"},{value:"overlap",label:"Overlaps with existing content"},{value:"incorrect-syntax",label:"Incorrect syntax"},{value:"buggy-code",label:"Buggy code"},{value:"low-quality",label:"Low quality"},{value:"other",label:"Other"}],texts:{mainTitle:"AWS Q",copy:"Copy",insertAtCursorLabel:"Insert at cursor",feedbackFormTitle:"Report an issue",feedbackFormOptionsLabel:"What type of issue would you like to report?",feedbackFormCommentLabel:"Description of issue (optional):",feedbackThanks:"Thanks!",feedbackReportButtonLabel:"Report an issue",codeSuggestions:"Files",files:"file(s)",changes:"Changes",clickFileToViewDiff:"Click on a file to view diff.",showMore:"Show more",save:"Save",cancel:"Cancel",submit:"Submit",pleaseSelect:"Please select...",stopGenerating:"Stop generating",copyToClipboard:"Copied to clipboard",noMoreTabsTooltip:"You've reached maximum number of tabs you can simultaneously use.",codeSuggestionWithReferenceTitle:"Some suggestions contain code with references.",spinnerText:"Amazon Q is generating your answer...",tabCloseConfirmationMessage:"Are you sure want to close the tab? Closing the tab would mean that your running job will stop.",tabCloseConfirmationCloseButton:"Close tab",tabCloseConfirmationKeepButton:"Keep tab",noTabsOpen:"### Open a tab to chat with Q",openNewTab:"New tab"}};class A{constructor(m){this.config={...o,...m,texts:{...o.texts,...m?.texts},componentClasses:{...o.componentClasses,...m?.componentOverrides}},this.config.codeBlockActions={...this.config.codeCopyToClipboardEnabled!==!1?{copy:{id:"copy",label:this.config.texts.copy,icon:l.MynahIcons.COPY}}:{},...this.config.codeInsertToCursorEnabled!==!1?{"insert-to-cursor":{id:"insert-to-cursor",label:this.config.texts.insertAtCursorLabel,icon:l.MynahIcons.CURSOR_INSERT}}:{},...m?.codeBlockActions}}static getInstance(m){return A.instance===void 0&&(A.instance=new A(m)),A.instance}}t.Config=A},1511:(I,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeDiff=void 0,t.getTimeDiff=(e,l,o)=>{let A=Math.abs(e)/1e3;const a=Math.floor(A/31104e3);A-=31104e3*a;const m=Math.floor(A/2592e3);A-=2592e3*m;const d=Math.floor(A/604800);A-=604800*d;const c=Math.floor(A/86400);A-=86400*c;const r=Math.floor(A/3600)%24;A-=3600*r;const i=Math.floor(A/60)%60;A-=60*i;const n=[];return a===0||l!==void 0&&typeof l=="object"&&l.years===!1||n.push(`${a}yr`),m===0||l!==void 0&&typeof l=="object"&&l.months===!1||n.push(`${m}mo`),d===0||l!==void 0&&typeof l=="object"&&l.weeks===!1||n.push(`${d}we`),c===0||l!==void 0&&typeof l=="object"&&l.days===!1||n.push(`${c}da`),r===0||l!==void 0&&typeof l=="object"&&l.hours===!1||n.push(`${r}hr`),i===0||l!==void 0&&typeof l=="object"&&l.minutes===!1||n.push(`${i}min`),a+m+d+c+r+i===0?"1min":(l!==void 0&&typeof l=="number"&&n.splice(l,n.length),n.join(o??" "))}},8505:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTypewriterPartsCss=t.htmlDecode=t.DomBuilder=t.DS=void 0;const l=e(1116),o=e(620);t.DS=document.querySelectorAll.bind(document);const A={type:"div",attributes:{},classNames:[],events:{},children:[],innerHTML:void 0,persistent:!1};class a{constructor(d){var c;this.portals={},this.attachRootFocusListeners=()=>{var r,i,n,h;(r=this.root)===null||r===void 0||r.setAttribute("tabindex","0"),(i=this.root)===null||i===void 0||i.setAttribute("autofocus","true"),(n=this.root)===null||n===void 0||n.style.setProperty("outline","none"),(h=this.root)===null||h===void 0||h.addEventListener("focusin",this.onRootFocus,{capture:!0}),window.addEventListener("blur",this.onRootBlur)},this.onRootFocus=r=>{this.rootFocus||(this.rootFocus=!0,o.MynahUIGlobalEvents.getInstance().dispatch(l.MynahEventNames.ROOT_FOCUS,{focusState:this.rootFocus}))},this.onRootBlur=r=>{this.rootFocus&&(this.rootFocus=!1,o.MynahUIGlobalEvents.getInstance().dispatch(l.MynahEventNames.ROOT_FOCUS,{focusState:this.rootFocus}))},this.setFocusToRoot=()=>{var r;(r=this.root)===null||r===void 0||r.focus()},this.setRoot=r=>{var i;this.root.removeEventListener("focus",this.onRootFocus),window.removeEventListener("blur",this.onRootBlur),this.root=this.extendDomFunctionality((i=(0,t.DS)(r??"body")[0])!==null&&i!==void 0?i:document.body),this.attachRootFocusListeners()},this.addClass=function(r){var i,n;return r!==""&&(this.classList.add(r),((n=(i=this.builderObject)===null||i===void 0?void 0:i.classNames)===null||n===void 0?void 0:n.indexOf(r))===-1&&(this.builderObject.classNames=[...this.builderObject.classNames,r])),this},this.removeClass=function(r){return this.classList.remove(r),this.builderObject.classNames!==void 0&&this.builderObject.classNames.includes(r)&&this.builderObject.classNames.splice(this.builderObject.classNames.indexOf(r),1),this},this.toggleClass=function(r){return this.classList.contains(r)?this.removeClass(r):this.addClass(r),this},this.hasClass=function(r){return this.classList.contains(r)},this.insertChild=function(r,i){return i&&(i instanceof Array?i.forEach(n=>{n instanceof Element?this.insertAdjacentElement(r,n):typeof n=="string"&&this.insertAdjacentText(r,n)}):i instanceof Element?this.insertAdjacentElement(r,i):typeof i=="string"&&this.insertAdjacentText(r,i)),this},this.clearChildren=function(r){return Array.from(this.childNodes).forEach(i=>{!r&&i.builderObject&&i.builderObject.persistent===!0||i.remove()}),this},this.extendDomFunctionality=function(r){const i=r;return i.addClass=this.addClass.bind(i),i.removeClass=this.removeClass.bind(i),i.toggleClass=this.toggleClass.bind(i),i.hasClass=this.hasClass.bind(i),i.insertChild=this.insertChild.bind(i),i.clear=this.clearChildren.bind(i),i},this.build=r=>{var i,n,h,u;const x={...A,...r},b=document.createElement(x.type);return b.classList.add(...((i=x.classNames)===null||i===void 0?void 0:i.filter(C=>C!==""))||[]),Object.keys((n=x.events)!==null&&n!==void 0?n:{}).forEach(C=>{var p;x?.events!==void 0&&(typeof x?.events[C]=="function"?b.addEventListener(C,x.events[C]):typeof x?.events[C]=="object"&&b.addEventListener(C,x.events[C].handler,(p=x.events[C].options)!==null&&p!==void 0?p:void 0),C!=="dblclick"&&C!=="click"||b.classList.add("mynah-ui-clickable-item"))}),Object.keys((h=x.attributes)!==null&&h!==void 0?h:{}).forEach(C=>b.setAttribute(C,x.attributes!==void 0?x.attributes[C].toString():"")),typeof x.innerHTML=="string"?b.innerHTML=x.innerHTML:x.children!==void 0&&((u=x.children)===null||u===void 0?void 0:u.length)>0&&this.insertChild.apply(b,["beforeend",[...x.children.map(C=>typeof C=="string"||C instanceof HTMLElement?C:this.build(C))]]),b.builderObject=x,b.update=C=>this.update(b,C),this.extendDomFunctionality(b),b},this.update=function(r,i){var n,h;return r.builderObject?(i.classNames!==void 0&&(r.classList.remove(...r.builderObject.classNames),r.classList.add(...i.classNames.filter(u=>u!==""))),Object.keys((n=i.events)!==null&&n!==void 0?n:{}).forEach(u=>{var x;r.builderObject.events!==void 0&&r.builderObject.events[u]&&r.removeEventListener(u,(x=r.builderObject.events[u].handler)!==null&&x!==void 0?x:r.builderObject.events[u]),i.events!==void 0&&i.events[u]!==void 0&&r.addEventListener(u,i.events[u])}),Object.keys((h=i.attributes)!==null&&h!==void 0?h:{}).forEach(u=>{i.attributes!==void 0&&i.attributes[u]===void 0?r.removeAttribute(u):i.attributes!==void 0&&r.setAttribute(u,i.attributes[u])}),typeof i.innerHTML=="string"?r.innerHTML=i.innerHTML:i.children!==void 0&&i.children.length>0&&(r.clear(),r.insertChild("beforeend",i.children)),r.builderObject={...A,...i}):console.warn("element was not created with dom builder"),r},this.createPortal=(r,i,n)=>{const h=this.build(i);return this.root.insertChild(n||"beforeend",h),this.portals[r]=h,h},this.getPortal=r=>this.portals[r],this.removePortal=r=>{var i;return(i=this.portals[r])===null||i===void 0?void 0:i.remove()},this.removeAllPortals=r=>{Object.keys(this.portals).forEach(i=>{i.match(r)!==null&&(this.portals[i].remove(),delete this.portals[i])})},this.root=(0,t.DS)(d)[0],this.extendDomFunctionality(this.root),this.root.addClass("mynah-ui-root"),this.rootFocus=(c=this.root.matches(":focus"))!==null&&c!==void 0&&c,this.attachRootFocusListeners()}static getInstance(d){return a.instance||(a.instance=new a(d??"body")),d!=null&&a.instance.setRoot(d),a.instance}}t.DomBuilder=a,t.htmlDecode=m=>{var d;const c=document.createElement("textarea");return c.innerHTML=m,c.childNodes.length===0?"":(d=c.childNodes[0].nodeValue)!==null&&d!==void 0?d:m},t.getTypewriterPartsCss=(m,d,c,r)=>a.getInstance().build({type:"style",attributes:{type:"text/css"},persistent:!0,innerHTML:`
    root:{
    --mynah-typewriter-bottom-pull: max(-100%, calc(-5 * var(--mynah-line-height, 1.5rem)));
    }
    @keyframes typewriter-${m} {
      0% {
          opacity: 0;
          margin-bottom: var(--mynah-typewriter-bottom-pull, -1.5rem);
          visibility: visible;
      }
      99% {
          opacity: 1;
          margin-bottom: 0px;
          visibility: visible;
      }
      100% {
          opacity: 1;
          margin-bottom: initial;
          visibility: visible;
      }
  }
  ${new Array(Math.max(0,c)).fill(null).map((i,n)=>n<d?`
      .${m} .typewriter-part[index="${n}"] {
        visibility: visible !important;
        opacity: 1 !important;
        margin-bottom: initial;
        animation: none;
      }
      `:`
      .${m} .typewriter-part[index="${n}"] {
        visibility: hidden;
        opacity: 0;
        margin-bottom: var(--mynah-typewriter-bottom-pull, -1.5rem);
        animation: typewriter-${m} ${150+r}ms ease-out forwards;
        animation-delay: ${(n-d)*r}ms;
      }
      `).join("")}
  `})},620:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUIGlobalEvents=t.cancelEvent=void 0;const l=e(4024);t.cancelEvent=A=>{var a,m,d;return(a=A.preventDefault)===null||a===void 0||a.call(A),(m=A.stopPropagation)===null||m===void 0||m.call(A),(d=A.stopImmediatePropagation)===null||d===void 0||d.call(A),!1};class o{constructor(){this.addListener=(a,m)=>{const d=(0,l.generateUID)();return this.listeners[a]===void 0&&(this.listeners[a]={}),this.listeners[a][d]=m,d},this.removeListener=(a,m)=>{var d;((d=this.listeners[a])===null||d===void 0?void 0:d[m])!==void 0&&delete this.listeners[a][m]},this.dispatch=(a,m)=>{this.listeners[a]!==void 0&&Object.keys(this.listeners[a]).forEach(d=>{this.listeners[a][d](m)})},this.listeners={...this.listeners}}}t.MynahUIGlobalEvents=o,o.getInstance=()=>(o.instance===void 0&&(o.instance=new o),o.instance)},6668:(I,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fileListToTree=void 0;const l=e(4851);t.fileListToTree=(A,a=[],m,d,c)=>[...o(A,!1),...o(a,!0)].reduce((r,{originalFilePath:i,filePath:n,deleted:h})=>{let u=r;for(let x=0;x<n.length;x++){const b=n[x];if(x===n.length-1){const C=n.join("/");u.children.push({type:"file",name:b,filePath:C,deleted:h,originalFilePath:i,actions:m!==void 0?m[i]:void 0,details:d!==void 0?d[i]:void 0});break}{const C=u.children.find(({name:p})=>p===b);if(C!=null)u=C;else{const p={name:b,type:"folder",children:[]};u.children.push(p),u=p}}}return r},{name:c??l.Config.getInstance().config.texts.changes,type:"folder",children:[]});const o=(A,a)=>A.map(m=>({originalFilePath:m,filePath:m.split("/").filter(d=>d!==void 0&&d!=="."),deleted:a}))},4024:(I,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateUID=void 0,t.generateUID=()=>{const e=46656*Math.random()|0,l=46656*Math.random()|0;return`000${e.toString(36)}`.slice(-3)+`000${l.toString(36)}`.slice(-3)}},4354:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(t,"__esModule",{value:!0}),t.cleanHtml=t.AllowedAttributes=t.AllowedTags=void 0;const o=l(e(4728));t.AllowedTags=["a","audio","b","blockquote","br","hr","canvas","code","col","colgroup","data","div","em","embed","figcaption","figure","h1","h2","h3","h4","h5","h6","i","iframe","img","li","map","mark","object","ol","p","pre","q","s","small","source","span","strong","sub","sup","table","tbody","td","tfoot","th","thead","tr","track","u","ul","video"],t.AllowedAttributes=["accept","accept-charset","accesskey","align","allow","allowfullscreen","alt","as","async","autocapitalize","autoplay","charset","class","cols","colspan","controls","crossorigin","data","data-*","datetime","decoding","default","dir","download","headers","hidden","high","href","hreflang","id","ismap","itemprop","kind","lang","language","loop","low","media","muted","optimum","ping","playsinline","poster","preload","referrerpolicy","rel","reversed","role","rowspan","sandbox","scope","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","start","style","target","title","translate","usemap","wrap","aspect-ratio"],t.cleanHtml=A=>(0,o.default)(A,{allowedTags:[...t.AllowedTags],allowedAttributes:{"*":[...t.AllowedAttributes]}})},8180:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUIDataStore=t.EmptyMynahUIDataModel=void 0;const o=e(1116),A=e(4851),a=e(620),m=e(4024),d=l(e(8917)),c=["string","number","boolean"];class r{constructor(n){this.data={tabTitle:A.Config.getInstance().config.texts.mainTitle,loadingChat:!1,tabCloseConfirmationCloseButton:null,tabCloseConfirmationKeepButton:null,tabCloseConfirmationMessage:null,cancelButtonWhenLoading:!0,showChatAvatars:!1,quickActionCommands:[],contextCommands:[],promptInputPlaceholder:"",promptInputInfo:"",promptInputStickyCard:null,promptInputDisabledState:!1,chatItems:[],selectedCodeSnippet:"",tabBarButtons:[],...n}}}t.EmptyMynahUIDataModel=r,t.MynahUIDataStore=class{constructor(i,n){this.store=new r().data,this.defaults=null,this.setDefaults=h=>{this.defaults=h},this.getDefaults=()=>this.defaults,this.getStore=()=>this.store,this.subscribe=(h,u)=>{const x=(0,m.generateUID)();return this.subscriptions[h][x]=u,x},this.unsubscribe=(h,u)=>{var x;((x=this.subscriptions[h])===null||x===void 0?void 0:x[u])!==void 0&&delete this.subscriptions[h][u]},this.getValue=h=>(0,d.default)(this.store[h]),this.getDefaultValue=h=>new r(this.defaults).data[h],this.updateStore=(h,u)=>{u!==!0&&Object.keys(h).forEach(x=>{Object.keys(this.subscriptions[x]).forEach(b=>{c.includes(typeof h[x])&&h[x]===this.store[x]||this.subscriptions[x][b](h[x],this.store[x])})}),this.store=Object.assign((0,d.default)(this.store),h)},this.resetStore=()=>{this.updateStore(new r((0,d.default)(this.defaults)).data),a.MynahUIGlobalEvents.getInstance().dispatch(o.MynahEventNames.RESET_STORE,{tabId:this.tabId})},this.tabId=i,this.store=Object.assign(this.store,n),this.subscriptions=Object.create({}),Object.keys(this.store).forEach(h=>{Object.assign(this.subscriptions,{[h]:{}})})}}},3753:function(I,t,e){"use strict";var l=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUITabsStore=t.EmptyMynahUITabsStoreModel=void 0;const o=l(e(8917)),A=e(4851),a=e(4024),m=e(8180);t.EmptyMynahUITabsStoreModel=class{constructor(){const c=(0,a.generateUID)();this.data={[c]:{isSelected:!0,store:{}}}}};class d{constructor(r,i){this.subscriptions={add:{},remove:{},update:{},selectedTabChange:{}},this.tabDefaults={},this.tabsStore={},this.tabsDataStore={},this.deselectAllTabs=()=>{Object.keys(this.tabsStore).forEach(n=>{this.tabsStore[n].isSelected=!1})},this.addTab=n=>{var h;if(Object.keys(this.tabsStore).length<A.Config.getInstance().config.maxTabs){const u=(0,a.generateUID)();return this.deselectAllTabs(),this.tabsStore[u]={...this.tabDefaults,...n,isSelected:!0},this.tabsDataStore[u]=new m.MynahUIDataStore(u,(h=this.tabsStore[u].store)!==null&&h!==void 0?h:{}),this.informSubscribers("add",u,this.tabsStore[u]),this.informSubscribers("selectedTabChange",u,this.tabsStore[u]),u}},this.removeTab=n=>{var h;const u=(h=this.tabsStore[n].isSelected)!==null&&h!==void 0&&h;let x;if(delete this.tabsStore[n],this.tabsDataStore[n].resetStore(),delete this.tabsDataStore[n],u){const b=Object.keys(this.tabsStore);b.length>0&&(this.deselectAllTabs(),this.selectTab(b[b.length-1]),x=this.tabsStore[this.getSelectedTabId()])}return this.informSubscribers("remove",n,x),n},this.selectTab=n=>{this.deselectAllTabs(),this.tabsStore[n].isSelected=!0,this.informSubscribers("selectedTabChange",n,this.tabsStore[n])},this.updateTab=(n,h,u)=>{this.tabsStore[n]!==void 0&&(h?.isSelected===!0&&this.getSelectedTabId()!==n&&(this.deselectAllTabs(),this.informSubscribers("selectedTabChange",n)),this.tabsStore[n]={...this.tabsStore[n],...h},h?.store!==void 0&&(this.tabsDataStore[n]===void 0&&(this.tabsDataStore[n]=new m.MynahUIDataStore(n)),this.tabsDataStore[n].updateStore(h?.store)),u!==!0&&this.informSubscribers("update",n,this.tabsStore[n]))},this.addListener=(n,h)=>{const u=(0,a.generateUID)();return this.subscriptions[n][u]=h,u},this.addListenerToDataStore=(n,h,u)=>this.tabsDataStore[n]!==void 0?this.tabsDataStore[n].subscribe(h,u):null,this.removeListenerFromDataStore=(n,h,u)=>{this.tabsDataStore[n]!==void 0&&this.tabsDataStore[n].unsubscribe(u,h)},this.removeListener=(n,h)=>{this.subscriptions[n][h]!==void 0&&delete this.subscriptions[n][h]},this.informSubscribers=(n,h,u)=>{Object.keys(this.subscriptions[n]).forEach(x=>{this.subscriptions[n][x](h,u)})},this.getTab=n=>{var h;return(h=this.tabsStore[n])!==null&&h!==void 0?h:null},this.getAllTabs=()=>{const n=(0,o.default)(this.tabsStore);return Object.keys(n).forEach(h=>{var u;n[h].store=(u=(0,o.default)(this.getTabDataStore(h).getStore()))!==null&&u!==void 0?u:{}}),n},this.getTabDataStore=n=>this.tabsDataStore[n],this.getSelectedTabId=()=>{var n;return(n=Object.keys(this.tabsStore).find(h=>this.tabsStore[h].isSelected===!0))!==null&&n!==void 0?n:""},this.removeAllTabs=()=>{Object.keys(this.tabsStore).forEach(n=>{this.removeTab(n)})},this.tabsLength=()=>Object.keys(this.tabsStore).length,this.tabsStore=Object.assign(this.tabsStore,r),i!=null&&(this.tabDefaults=i),r!=null&&Object.keys(r).length>0&&Object.keys(r).forEach(n=>{var h;this.tabsDataStore[n]=new m.MynahUIDataStore(n,(h=r[n].store)!==null&&h!==void 0?h:{})})}}t.MynahUITabsStore=d,d.getInstance=(c,r)=>(d.instance===void 0&&(d.instance=new d(c,r)),d.instance)},8188:(I,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOrigin=void 0,t.getOrigin=e=>{let l="";try{l=new URL(e).origin}catch{l="unknown"}return l}},7927:function(I,t,e){"use strict";var l=this&&this.__createBinding||(Object.create?function(S,L,U,F){F===void 0&&(F=U);var R=Object.getOwnPropertyDescriptor(L,U);R&&!("get"in R?!L.__esModule:R.writable||R.configurable)||(R={enumerable:!0,get:function(){return L[U]}}),Object.defineProperty(S,F,R)}:function(S,L,U,F){F===void 0&&(F=U),S[F]=L[U]}),o=this&&this.__exportStar||function(S,L){for(var U in S)U==="default"||Object.prototype.hasOwnProperty.call(L,U)||l(L,S,U)};Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUI=t.ChatItemCardContent=t.TextAreaAbstract=t.TextInputAbstract=t.SelectAbstract=t.RadioGroupAbstract=t.ButtonAbstract=t.DomBuilder=t.MynahIcons=t.generateUID=void 0;const A=e(6138),a=e(8505),m=e(1116),d=e(620),c=e(8288),r=e(5914),i=e(4498),n=e(3753),h=e(4851),u=e(6709);e(900);const x=e(4024),b=e(3295),C=e(1567);var p=e(4024);Object.defineProperty(t,"generateUID",{enumerable:!0,get:function(){return p.generateUID}}),o(e(1116),t);var v=e(5316);Object.defineProperty(t,"MynahIcons",{enumerable:!0,get:function(){return v.MynahIcons}});var M=e(8505);Object.defineProperty(t,"DomBuilder",{enumerable:!0,get:function(){return M.DomBuilder}});var f=e(8393);Object.defineProperty(t,"ButtonAbstract",{enumerable:!0,get:function(){return f.ButtonAbstract}});var y=e(3428);Object.defineProperty(t,"RadioGroupAbstract",{enumerable:!0,get:function(){return y.RadioGroupAbstract}});var s=e(8073);Object.defineProperty(t,"SelectAbstract",{enumerable:!0,get:function(){return s.SelectAbstract}});var g=e(1211);Object.defineProperty(t,"TextInputAbstract",{enumerable:!0,get:function(){return g.TextInputAbstract}});var w=e(9010);Object.defineProperty(t,"TextAreaAbstract",{enumerable:!0,get:function(){return w.TextAreaAbstract}});var k=e(1349);Object.defineProperty(t,"ChatItemCardContent",{enumerable:!0,get:function(){return k.ChatItemCardContent}}),t.MynahUI=class{constructor(S){var L,U;this.lastEventId="",this.chatWrappers={},this.getUserEventId=()=>(this.lastEventId=(0,x.generateUID)(),this.lastEventId),this.focusToInput=E=>{h.Config.getInstance().config.autoFocus&&d.MynahUIGlobalEvents.getInstance().dispatch(m.MynahEventNames.TAB_FOCUS,{tabId:E})},this.addGlobalListeners=()=>{d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.CHAT_PROMPT,E=>{this.props.onChatPrompt!==void 0&&this.props.onChatPrompt(E.tabId,E.prompt,this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.FOLLOW_UP_CLICKED,E=>{this.props.onFollowUpClicked!==void 0&&this.props.onFollowUpClicked(E.tabId,E.messageId,E.followUpOption,this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.BODY_ACTION_CLICKED,E=>{this.props.onInBodyButtonClicked!==void 0&&this.props.onInBodyButtonClicked(E.tabId,E.messageId,{id:E.actionId,text:E.actionText,formItemValues:E.formItemValues},this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.SHOW_MORE_WEB_RESULTS_CLICK,E=>{this.props.onShowMoreWebResultsClick!==void 0&&this.props.onShowMoreWebResultsClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),E.messageId,this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.FEEDBACK_SET,E=>{this.props.onSendFeedback!==void 0&&this.props.onSendFeedback(n.MynahUITabsStore.getInstance().getSelectedTabId(),E,this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.CHAT_ITEM_ENGAGEMENT,E=>{this.props.onChatItemEngagement!==void 0&&this.props.onChatItemEngagement(n.MynahUITabsStore.getInstance().getSelectedTabId(),E.messageId,E.engagement)}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.CODE_BLOCK_ACTION,E=>{var $,W,ee,V;E.actionId==="insert-to-cursor"&&((W=($=this.props).onCodeInsertToCursorPosition)===null||W===void 0||W.call($,n.MynahUITabsStore.getInstance().getSelectedTabId(),E.messageId,E.text,E.type,E.referenceTrackerInformation,this.getUserEventId(),E.codeBlockIndex,E.totalCodeBlocks)),E.actionId==="copy"&&(0,C.copyToClipboard)(E.text,()=>{var ne,P;(P=(ne=this.props).onCopyCodeToClipboard)===null||P===void 0||P.call(ne,n.MynahUITabsStore.getInstance().getSelectedTabId(),E.messageId,E.text,E.type,E.referenceTrackerInformation,this.getUserEventId(),E.codeBlockIndex,E.totalCodeBlocks)}),(V=(ee=this.props).onCodeBlockActionClicked)===null||V===void 0||V.call(ee,n.MynahUITabsStore.getInstance().getSelectedTabId(),E.messageId,E.actionId,E.data,E.text,E.type,E.referenceTrackerInformation,this.getUserEventId(),E.codeBlockIndex,E.totalCodeBlocks)}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.COPY_CODE_TO_CLIPBOARD,E=>{this.props.onCopyCodeToClipboard!==void 0&&this.props.onCopyCodeToClipboard(n.MynahUITabsStore.getInstance().getSelectedTabId(),E.messageId,E.text,E.type,E.referenceTrackerInformation,this.getUserEventId(),E.codeBlockIndex,E.totalCodeBlocks)}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.SOURCE_LINK_CLICK,E=>{this.props.onSourceLinkClick!==void 0&&this.props.onSourceLinkClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),E.messageId,E.link,E.event,this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.LINK_CLICK,E=>{this.props.onLinkClick!==void 0&&this.props.onLinkClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),E.messageId,E.link,E.event,this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.INFO_LINK_CLICK,E=>{this.props.onInfoLinkClick!==void 0&&this.props.onInfoLinkClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),E.link,E.event,this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.CARD_VOTE,E=>{this.props.onVote!==void 0&&this.props.onVote(E.tabId,E.messageId,E.vote,this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.RESET_STORE,E=>{this.props.onResetStore!==void 0&&this.props.onResetStore(E.tabId)}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.ROOT_FOCUS,E=>{var $,W;(W=($=this.props).onFocusStateChanged)===null||W===void 0||W.call($,E.focusState)}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.FILE_CLICK,E=>{this.props.onFileClick!==void 0&&this.props.onFileClick(E.tabId,E.filePath,E.deleted,E.messageId,this.getUserEventId()),this.props.onOpenDiff!==void 0&&(console.warn("onOpenDiff will be deprecated after v5.x.x. Please use MynahUIProps.onFileClick instead"),this.props.onOpenDiff(E.tabId,E.filePath,E.deleted,E.messageId,this.getUserEventId()))}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.FILE_ACTION_CLICK,E=>{this.props.onFileActionClick!==void 0&&this.props.onFileActionClick(E.tabId,E.messageId,E.filePath,E.actionName,this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.CUSTOM_FORM_ACTION_CLICK,E=>{this.props.onCustomFormAction!==void 0&&this.props.onCustomFormAction(E.tabId,E,this.getUserEventId())}),d.MynahUIGlobalEvents.getInstance().addListener(m.MynahEventNames.TAB_BAR_BUTTON_CLICK,E=>{this.props.onTabBarButtonClick!==void 0&&this.props.onTabBarButtonClick(E.tabId,E.buttonId,this.getUserEventId())})},this.addToUserPrompt=(E,$,W)=>{h.Config.getInstance().config.showPromptField&&n.MynahUITabsStore.getInstance().getTab(E)!==null&&this.chatWrappers[E].addAttachmentToPrompt($,W)},this.addChatItem=(E,$)=>{n.MynahUITabsStore.getInstance().getTab(E)!==null&&(d.MynahUIGlobalEvents.getInstance().dispatch(m.MynahEventNames.CHAT_ITEM_ADD,{tabId:E,chatItem:$}),n.MynahUITabsStore.getInstance().getTabDataStore(E).updateStore({chatItems:[...n.MynahUITabsStore.getInstance().getTabDataStore(E).getValue("chatItems"),$]}))},this.updateLastChatAnswer=(E,$)=>{n.MynahUITabsStore.getInstance().getTab(E)!=null&&(this.chatWrappers[E].getLastStreamingMessageId()!=null||this.addChatItem(E,{type:m.ChatItemType.ANSWER_STREAM,body:""}),this.chatWrappers[E].updateLastChatAnswer($))},this.updateChatAnswerWithMessageId=(E,$,W)=>{n.MynahUITabsStore.getInstance().getTab(E)!==null&&this.chatWrappers[E].updateChatAnswerWithMessageId($,W)},this.endMessageStream=(E,$,W)=>{if(n.MynahUITabsStore.getInstance().getTab(E)!==null){const ee=this.chatWrappers[E].getChatItem($);if(ee!=null&&![m.ChatItemType.AI_PROMPT,m.ChatItemType.PROMPT,m.ChatItemType.SYSTEM_PROMPT].includes(ee.chatItem.type))return this.chatWrappers[E].endStreamWithMessageId($,{type:m.ChatItemType.ANSWER,...W}),ee.renderDetails}return{totalNumberOfCodeBlocks:0}},this.selectTab=(E,$)=>{$===this.lastEventId&&n.MynahUITabsStore.getInstance().getTab(E)!==null&&n.MynahUITabsStore.getInstance().selectTab(E)},this.removeTab=(E,$)=>{$===this.lastEventId&&n.MynahUITabsStore.getInstance().getTab(E)!==null&&n.MynahUITabsStore.getInstance().removeTab(E)},this.updateStore=(E,$)=>E===""?n.MynahUITabsStore.getInstance().addTab({store:{...$}}):(n.MynahUITabsStore.getInstance().getTab(E)!==null&&n.MynahUITabsStore.getInstance().updateTab(E,{store:{...$}}),E),this.getSelectedTabId=()=>{const E=n.MynahUITabsStore.getInstance().getSelectedTabId();return E===""?void 0:E},this.getAllTabs=()=>n.MynahUITabsStore.getInstance().getAllTabs(),this.notify=E=>{new A.Notification({...E,onNotificationClick:E.onNotificationClick!=null?()=>{E.onNotificationClick!=null&&E.onNotificationClick(this.getUserEventId())}:void 0,onNotificationHide:E.onNotificationHide!=null?()=>{E.onNotificationHide!=null&&E.onNotificationHide(this.getUserEventId())}:void 0}).notify()},this.showCustomForm=(E,$,W,ee,V)=>{d.MynahUIGlobalEvents.getInstance().dispatch(m.MynahEventNames.SHOW_FEEDBACK_FORM,{tabId:E,customFormData:{title:ee,description:V,buttons:W,formItems:$}})},u.marked.use({renderer:{listitem:E=>`<li>${u.marked.parse(E,{breaks:!1})}</li>`}}),this.props=S,h.Config.getInstance(S.config),a.DomBuilder.getInstance(S.rootSelector),n.MynahUITabsStore.getInstance(this.props.tabs,this.props.defaults),d.MynahUIGlobalEvents.getInstance();const F=n.MynahUITabsStore.getInstance().getAllTabs();this.tabContentsWrapper=a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-ui-tab-contents-wrapper"],children:Object.keys(F).slice(0,h.Config.getInstance().config.maxTabs).map(E=>(this.chatWrappers[E]=new r.ChatWrapper({tabId:E,onStopChatResponse:S.onStopChatResponse!=null?$=>{S.onStopChatResponse!=null&&S.onStopChatResponse($,this.getUserEventId())}:void 0}),this.chatWrappers[E].render))}),S.onSendFeedback!==void 0&&(this.feedbackForm=new i.FeedbackForm),h.Config.getInstance().config.maxTabs>1&&(this.tabsWrapper=new c.Tabs({onChange:E=>{this.focusToInput(E),this.props.onTabChange!==void 0&&this.props.onTabChange(E,this.getUserEventId())},maxTabsTooltipDuration:h.Config.getInstance().config.maxTabsTooltipDuration,noMoreTabsTooltip:h.Config.getInstance().config.noMoreTabsTooltip,onBeforeTabRemove:E=>S.onBeforeTabRemove===void 0||S.onBeforeTabRemove(E,this.getUserEventId())}).render,this.tabsWrapper.setAttribute("selected-tab",n.MynahUITabsStore.getInstance().getSelectedTabId())),this.render=a.DomBuilder.getInstance().createPortal(m.MynahPortalNames.WRAPPER,{type:"div",attributes:{id:"mynah-wrapper"},children:[(L=this.tabsWrapper)!==null&&L!==void 0?L:"",...h.Config.getInstance().config.maxTabs>1?[new b.NoTabs().render]:[],this.tabContentsWrapper]},"afterbegin"),n.MynahUITabsStore.getInstance().addListener("add",E=>{this.chatWrappers[E]=new r.ChatWrapper({tabId:E,onStopChatResponse:S.onStopChatResponse!=null?$=>{S.onStopChatResponse!=null&&S.onStopChatResponse($,this.getUserEventId())}:void 0}),this.tabContentsWrapper.appendChild(this.chatWrappers[E].render),this.focusToInput(E),this.props.onTabAdd!==void 0&&this.props.onTabAdd(E,this.getUserEventId())}),n.MynahUITabsStore.getInstance().addListener("remove",E=>{this.chatWrappers[E].render.remove(),delete this.chatWrappers[E],this.props.onTabRemove!==void 0&&this.props.onTabRemove(E,this.getUserEventId())}),this.addGlobalListeners();const R=(U=n.MynahUITabsStore.getInstance().getSelectedTabId())!==null&&U!==void 0?U:"";window.addEventListener("focus",()=>{this.focusToInput(R)},!1),this.focusToInput(R),this.props.onReady!==void 0&&this.props.onReady()}}},1116:(I,t)=>{"use strict";var e,l,o,A,a,m,d;Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationType=t.EngagementType=t.RelevancyVoteType=t.KeyMap=t.ChatItemType=t.MynahPortalNames=t.MynahEventNames=void 0,function(c){c.RESET_STORE="resetStore",c.FEEDBACK_SET="feedbackSet",c.ROOT_FOCUS="rootFocusStateChange",c.CARD_VOTE="cardVote",c.SOURCE_LINK_CLICK="sourceLinkClick",c.INFO_LINK_CLICK="infoLinkClick",c.LINK_CLICK="linkClick",c.CHAT_ITEM_ENGAGEMENT="chatItemEngagement",c.COPY_CODE_TO_CLIPBOARD="copyCodeToClipboard",c.CODE_BLOCK_ACTION="codeBlockAction",c.CHAT_PROMPT="chatPrompt",c.CHAT_ITEM_ADD="chatItemAdd",c.FOLLOW_UP_CLICKED="followUpClicked",c.BODY_ACTION_CLICKED="bodyActionClicked",c.SHOW_MORE_WEB_RESULTS_CLICK="showMoreWebResultsClick",c.SHOW_FEEDBACK_FORM="showFeedbackForm",c.FILE_CLICK="fileClick",c.FILE_ACTION_CLICK="fileActionClick",c.TAB_FOCUS="tabFocus",c.CUSTOM_FORM_ACTION_CLICK="customFormActionClick",c.ADD_ATTACHMENT="addAttachment",c.REMOVE_ATTACHMENT="removeAttachment",c.TAB_BAR_BUTTON_CLICK="tabBarButtonClick"}(e||(t.MynahEventNames=e={})),function(c){c.WRAPPER="wrapper",c.SIDE_NAV="sideNav",c.OVERLAY="overlay",c.FEEDBACK_FORM="feedbackForm"}(l||(t.MynahPortalNames=l={})),function(c){c.PROMPT="prompt",c.SYSTEM_PROMPT="system-prompt",c.AI_PROMPT="ai-prompt",c.ANSWER="answer",c.ANSWER_STREAM="answer-stream",c.ANSWER_PART="answer-part",c.CODE_RESULT="code-result"}(o||(t.ChatItemType=o={})),function(c){c.ESCAPE="Escape",c.ENTER="Enter",c.BACKSPACE="Backspace",c.SPACE=" ",c.DELETE="Delete",c.ARROW_UP="ArrowUp",c.ARROW_DOWN="ArrowDown",c.ARROW_LEFT="ArrowLeft",c.ARROW_RIGHT="ArrowRight",c.PAGE_UP="PageUp",c.PAGED_OWN="PageDown",c.HOME="Home",c.END="End",c.META="Meta",c.TAB="Tab",c.SHIFT="Shift",c.CONTROL="Control",c.ALT="Alt",c.AT="@",c.SLASH="/",c.BACK_SLASH="\\"}(A||(t.KeyMap=A={})),function(c){c.UP="upvote",c.DOWN="downvote"}(a||(t.RelevancyVoteType=a={})),function(c){c.INTERACTION="interaction",c.TIME="timespend"}(m||(t.EngagementType=m={})),function(c){c.INFO="info",c.SUCCESS="ok-circled",c.WARNING="warning",c.ERROR="error"}(d||(t.NotificationType=d={}))},4485:I=>{"use strict";I.exports=function(t){return String(t).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}},9746:()=>{},9977:()=>{},197:()=>{},1866:()=>{},2739:()=>{},8917:I=>{I.exports=function t(e){let l=e;var o={}.toString.call(e).slice(8,-1);if(o=="Set")return new Set([...e].map(a=>t(a)));if(o=="Map")return new Map([...e].map(a=>[t(a[0]),t(a[1])]));if(o=="Date")return new Date(e.getTime());if(o=="RegExp")return RegExp(e.source,function(a){if(typeof a.source.flags=="string")return a.source.flags;var m=[];return a.global&&m.push("g"),a.ignoreCase&&m.push("i"),a.multiline&&m.push("m"),a.sticky&&m.push("y"),a.unicode&&m.push("u"),m.join("")}(e));if(o=="Array"||o=="Object")for(var A in l=Array.isArray(e)?[]:{},e)l[A]=t(e[A]);return l}},6709:(I,t)=>{var Ue,Ge,Pe,qe;"use strict";function e(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}function l(ce){t.defaults=ce}t.defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};const o=/[&<>"']/,A=new RegExp(o.source,"g"),a=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,m=new RegExp(a.source,"g"),d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c=ce=>d[ce];function r(ce,z){if(z){if(o.test(ce))return ce.replace(A,c)}else if(a.test(ce))return ce.replace(m,c);return ce}const i=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function n(ce){return ce.replace(i,(z,T)=>(T=T.toLowerCase())==="colon"?":":T.charAt(0)==="#"?T.charAt(1)==="x"?String.fromCharCode(parseInt(T.substring(2),16)):String.fromCharCode(+T.substring(1)):"")}const h=/(^|[^\[])\^/g;function u(ce,z){let T=typeof ce=="string"?ce:ce.source;z=z||"";const D={replace:(O,B)=>{let j=typeof B=="string"?B:B.source;return j=j.replace(h,"$1"),T=T.replace(O,j),D},getRegex:()=>new RegExp(T,z)};return D}function x(ce){try{ce=encodeURI(ce).replace(/%25/g,"%")}catch{return null}return ce}const b={exec:()=>null};function C(ce,z){const T=ce.replace(/\|/g,(O,B,j)=>{let G=!1,H=B;for(;--H>=0&&j[H]==="\\";)G=!G;return G?"|":" |"}).split(/ \|/);let D=0;if(T[0].trim()||T.shift(),T.length>0&&!T[T.length-1].trim()&&T.pop(),z)if(T.length>z)T.splice(z);else for(;T.length<z;)T.push("");for(;D<T.length;D++)T[D]=T[D].trim().replace(/\\\|/g,"|");return T}function p(ce,z,T){const D=ce.length;if(D===0)return"";let O=0;for(;O<D;){const B=ce.charAt(D-O-1);if(B!==z||T){if(B===z||!T)break;O++}else O++}return ce.slice(0,D-O)}function v(ce,z,T,D){const O=z.href,B=z.title?r(z.title):null,j=ce[1].replace(/\\([\[\]])/g,"$1");if(ce[0].charAt(0)!=="!"){D.state.inLink=!0;const G={type:"link",raw:T,href:O,title:B,text:j,tokens:D.inlineTokens(j)};return D.state.inLink=!1,G}return{type:"image",raw:T,href:O,title:B,text:r(j)}}class M{constructor(z){be(this,"options");be(this,"rules");be(this,"lexer");this.options=z||t.defaults}space(z){const T=this.rules.block.newline.exec(z);if(T&&T[0].length>0)return{type:"space",raw:T[0]}}code(z){const T=this.rules.block.code.exec(z);if(T){const D=T[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:T[0],codeBlockStyle:"indented",text:this.options.pedantic?D:p(D,`
`)}}}fences(z){const T=this.rules.block.fences.exec(z);if(T){const D=T[0],O=function(B,j){const G=B.match(/^(\s+)(?:```)/);if(G===null)return j;const H=G[1];return j.split(`
`).map(te=>{const J=te.match(/^\s+/);if(J===null)return te;const[le]=J;return le.length>=H.length?te.slice(H.length):te}).join(`
`)}(D,T[3]||"");return{type:"code",raw:D,lang:T[2]?T[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):T[2],text:O}}}heading(z){const T=this.rules.block.heading.exec(z);if(T){let D=T[2].trim();if(/#$/.test(D)){const O=p(D,"#");this.options.pedantic?D=O.trim():O&&!/ $/.test(O)||(D=O.trim())}return{type:"heading",raw:T[0],depth:T[1].length,text:D,tokens:this.lexer.inline(D)}}}hr(z){const T=this.rules.block.hr.exec(z);if(T)return{type:"hr",raw:T[0]}}blockquote(z){const T=this.rules.block.blockquote.exec(z);if(T){let D=T[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);D=p(D.replace(/^ *>[ \t]?/gm,""),`
`);const O=this.lexer.state.top;this.lexer.state.top=!0;const B=this.lexer.blockTokens(D);return this.lexer.state.top=O,{type:"blockquote",raw:T[0],tokens:B,text:D}}}list(z){let T=this.rules.block.list.exec(z);if(T){let D=T[1].trim();const O=D.length>1,B={type:"list",raw:"",ordered:O,start:O?+D.slice(0,-1):"",loose:!1,items:[]};D=O?`\\d{1,9}\\${D.slice(-1)}`:`\\${D}`,this.options.pedantic&&(D=O?D:"[*+-]");const j=new RegExp(`^( {0,3}${D})((?:[	 ][^\\n]*)?(?:\\n|$))`);let G="",H="",te=!1;for(;z;){let J=!1;if(!(T=j.exec(z))||this.rules.block.hr.test(z))break;G=T[0],z=z.substring(G.length);let le=T[2].split(`
`,1)[0].replace(/^\t+/,$e=>" ".repeat(3*$e.length)),ae=z.split(`
`,1)[0],ge=0;this.options.pedantic?(ge=2,H=le.trimStart()):(ge=T[2].search(/[^ ]/),ge=ge>4?1:ge,H=le.slice(ge),ge+=T[1].length);let je=!1;if(!le&&/^ *$/.test(ae)&&(G+=ae+`
`,z=z.substring(ae.length+1),J=!0),!J){const $e=new RegExp(`^ {0,${Math.min(3,ge-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),We=new RegExp(`^ {0,${Math.min(3,ge-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Ye=new RegExp(`^ {0,${Math.min(3,ge-1)}}(?:\`\`\`|~~~)`),Ve=new RegExp(`^ {0,${Math.min(3,ge-1)}}#`);for(;z;){const Fe=z.split(`
`,1)[0];if(ae=Fe,this.options.pedantic&&(ae=ae.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Ye.test(ae)||Ve.test(ae)||$e.test(ae)||We.test(z))break;if(ae.search(/[^ ]/)>=ge||!ae.trim())H+=`
`+ae.slice(ge);else{if(je||le.search(/[^ ]/)>=4||Ye.test(le)||Ve.test(le)||We.test(le))break;H+=`
`+ae}je||ae.trim()||(je=!0),G+=Fe+`
`,z=z.substring(Fe.length+1),le=ae.slice(ge)}}B.loose||(te?B.loose=!0:/\n *\n *$/.test(G)&&(te=!0));let Be,Ne=null;this.options.gfm&&(Ne=/^\[[ xX]\] /.exec(H),Ne&&(Be=Ne[0]!=="[ ] ",H=H.replace(/^\[[ xX]\] +/,""))),B.items.push({type:"list_item",raw:G,task:!!Ne,checked:Be,loose:!1,text:H,tokens:[]}),B.raw+=G}B.items[B.items.length-1].raw=G.trimEnd(),B.items[B.items.length-1].text=H.trimEnd(),B.raw=B.raw.trimEnd();for(let J=0;J<B.items.length;J++)if(this.lexer.state.top=!1,B.items[J].tokens=this.lexer.blockTokens(B.items[J].text,[]),!B.loose){const le=B.items[J].tokens.filter(ge=>ge.type==="space"),ae=le.length>0&&le.some(ge=>/\n.*\n/.test(ge.raw));B.loose=ae}if(B.loose)for(let J=0;J<B.items.length;J++)B.items[J].loose=!0;return B}}html(z){const T=this.rules.block.html.exec(z);if(T)return{type:"html",block:!0,raw:T[0],pre:T[1]==="pre"||T[1]==="script"||T[1]==="style",text:T[0]}}def(z){const T=this.rules.block.def.exec(z);if(T){const D=T[1].toLowerCase().replace(/\s+/g," "),O=T[2]?T[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",B=T[3]?T[3].substring(1,T[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):T[3];return{type:"def",tag:D,raw:T[0],href:O,title:B}}}table(z){const T=this.rules.block.table.exec(z);if(!T||!/[:|]/.test(T[2]))return;const D=C(T[1]),O=T[2].replace(/^\||\| *$/g,"").split("|"),B=T[3]&&T[3].trim()?T[3].replace(/\n[ \t]*$/,"").split(`
`):[],j={type:"table",raw:T[0],header:[],align:[],rows:[]};if(D.length===O.length){for(const G of O)/^ *-+: *$/.test(G)?j.align.push("right"):/^ *:-+: *$/.test(G)?j.align.push("center"):/^ *:-+ *$/.test(G)?j.align.push("left"):j.align.push(null);for(const G of D)j.header.push({text:G,tokens:this.lexer.inline(G)});for(const G of B)j.rows.push(C(G,j.header.length).map(H=>({text:H,tokens:this.lexer.inline(H)})));return j}}lheading(z){const T=this.rules.block.lheading.exec(z);if(T)return{type:"heading",raw:T[0],depth:T[2].charAt(0)==="="?1:2,text:T[1],tokens:this.lexer.inline(T[1])}}paragraph(z){const T=this.rules.block.paragraph.exec(z);if(T){const D=T[1].charAt(T[1].length-1)===`
`?T[1].slice(0,-1):T[1];return{type:"paragraph",raw:T[0],text:D,tokens:this.lexer.inline(D)}}}text(z){const T=this.rules.block.text.exec(z);if(T)return{type:"text",raw:T[0],text:T[0],tokens:this.lexer.inline(T[0])}}escape(z){const T=this.rules.inline.escape.exec(z);if(T)return{type:"escape",raw:T[0],text:r(T[1])}}tag(z){const T=this.rules.inline.tag.exec(z);if(T)return!this.lexer.state.inLink&&/^<a /i.test(T[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(T[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(T[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(T[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:T[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:T[0]}}link(z){const T=this.rules.inline.link.exec(z);if(T){const D=T[2].trim();if(!this.options.pedantic&&/^</.test(D)){if(!/>$/.test(D))return;const j=p(D.slice(0,-1),"\\");if((D.length-j.length)%2==0)return}else{const j=function(G,H){if(G.indexOf(H[1])===-1)return-1;let te=0;for(let J=0;J<G.length;J++)if(G[J]==="\\")J++;else if(G[J]===H[0])te++;else if(G[J]===H[1]&&(te--,te<0))return J;return-1}(T[2],"()");if(j>-1){const G=(T[0].indexOf("!")===0?5:4)+T[1].length+j;T[2]=T[2].substring(0,j),T[0]=T[0].substring(0,G).trim(),T[3]=""}}let O=T[2],B="";if(this.options.pedantic){const j=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(O);j&&(O=j[1],B=j[3])}else B=T[3]?T[3].slice(1,-1):"";return O=O.trim(),/^</.test(O)&&(O=this.options.pedantic&&!/>$/.test(D)?O.slice(1):O.slice(1,-1)),v(T,{href:O&&O.replace(this.rules.inline.anyPunctuation,"$1"),title:B&&B.replace(this.rules.inline.anyPunctuation,"$1")},T[0],this.lexer)}}reflink(z,T){let D;if((D=this.rules.inline.reflink.exec(z))||(D=this.rules.inline.nolink.exec(z))){const O=T[(D[2]||D[1]).replace(/\s+/g," ").toLowerCase()];if(!O){const B=D[0].charAt(0);return{type:"text",raw:B,text:B}}return v(D,O,D[0],this.lexer)}}emStrong(z,T,D=""){let O=this.rules.inline.emStrongLDelim.exec(z);if(O&&(!O[3]||!D.match(/[\p{L}\p{N}]/u))&&(!O[1]&&!O[2]||!D||this.rules.inline.punctuation.exec(D))){const B=[...O[0]].length-1;let j,G,H=B,te=0;const J=O[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(J.lastIndex=0,T=T.slice(-1*z.length+B);(O=J.exec(T))!=null;){if(j=O[1]||O[2]||O[3]||O[4]||O[5]||O[6],!j)continue;if(G=[...j].length,O[3]||O[4]){H+=G;continue}if((O[5]||O[6])&&B%3&&!((B+G)%3)){te+=G;continue}if(H-=G,H>0)continue;G=Math.min(G,G+H+te);const le=[...O[0]][0].length,ae=z.slice(0,B+O.index+le+G);if(Math.min(B,G)%2){const je=ae.slice(1,-1);return{type:"em",raw:ae,text:je,tokens:this.lexer.inlineTokens(je)}}const ge=ae.slice(2,-2);return{type:"strong",raw:ae,text:ge,tokens:this.lexer.inlineTokens(ge)}}}}codespan(z){const T=this.rules.inline.code.exec(z);if(T){let D=T[2].replace(/\n/g," ");const O=/[^ ]/.test(D),B=/^ /.test(D)&&/ $/.test(D);return O&&B&&(D=D.substring(1,D.length-1)),D=r(D,!0),{type:"codespan",raw:T[0],text:D}}}br(z){const T=this.rules.inline.br.exec(z);if(T)return{type:"br",raw:T[0]}}del(z){const T=this.rules.inline.del.exec(z);if(T)return{type:"del",raw:T[0],text:T[2],tokens:this.lexer.inlineTokens(T[2])}}autolink(z){const T=this.rules.inline.autolink.exec(z);if(T){let D,O;return T[2]==="@"?(D=r(T[1]),O="mailto:"+D):(D=r(T[1]),O=D),{type:"link",raw:T[0],text:D,href:O,tokens:[{type:"text",raw:D,text:D}]}}}url(z){let T;if(T=this.rules.inline.url.exec(z)){let D,O;if(T[2]==="@")D=r(T[0]),O="mailto:"+D;else{let B;do B=T[0],T[0]=this.rules.inline._backpedal.exec(T[0])?.[0]??"";while(B!==T[0]);D=r(T[0]),O=T[1]==="www."?"http://"+T[0]:T[0]}return{type:"link",raw:T[0],text:D,href:O,tokens:[{type:"text",raw:D,text:D}]}}}inlineText(z){const T=this.rules.inline.text.exec(z);if(T){let D;return D=this.lexer.state.inRawBlock?T[0]:r(T[0]),{type:"text",raw:T[0],text:D}}}}const f=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,y=/(?:[*+-]|\d{1,9}[.)])/,s=u(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,y).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),g=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,w=/(?!\s*\])(?:\\.|[^\[\]\\])+/,k=u(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",w).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),S=u(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,y).getRegex(),L="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",U=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,F=u("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",U).replace("tag",L).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),R=u(g).replace("hr",f).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L).getRegex(),E={blockquote:u(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",R).getRegex(),code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,def:k,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:f,html:F,lheading:s,list:S,newline:/^(?: *(?:\n|$))+/,paragraph:R,table:b,text:/^[^\n]+/},$=u("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",f).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L).getRegex(),W={...E,table:$,paragraph:u(g).replace("hr",f).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",$).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L).getRegex()},ee={...E,html:u(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",U).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:b,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:u(g).replace("hr",f).replace("heading",` *#{1,6} *[^
]`).replace("lheading",s).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},V=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ne=/^( {2,}|\\)\n(?!\s*$)/,P="\\p{P}\\p{S}",N=u(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,P).getRegex(),Z=u(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,P).getRegex(),K=u("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,P).getRegex(),he=u("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,P).getRegex(),de=u(/\\([punct])/,"gu").replace(/punct/g,P).getRegex(),_=u(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Q=u(U).replace("(?:-->|$)","-->").getRegex(),Y=u("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Q).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),re=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,me=u(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",re).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ae=u(/^!?\[(label)\]\[(ref)\]/).replace("label",re).replace("ref",w).getRegex(),se=u(/^!?\[(ref)\](?:\[\])?/).replace("ref",w).getRegex(),ie={_backpedal:b,anyPunctuation:de,autolink:_,blockSkip:/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,br:ne,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:b,emStrongLDelim:Z,emStrongRDelimAst:K,emStrongRDelimUnd:he,escape:V,link:me,nolink:se,punctuation:N,reflink:Ae,reflinkSearch:u("reflink|nolink(?!\\()","g").replace("reflink",Ae).replace("nolink",se).getRegex(),tag:Y,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:b},ze={...ie,link:u(/^!?\[(label)\]\((.*?)\)/).replace("label",re).getRegex(),reflink:u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",re).getRegex()},Ie={...ie,escape:u(V).replace("])","~|])").getRegex(),url:u(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},De={...Ie,br:u(ne).replace("{2,}","*").getRegex(),text:u(Ie.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xe={normal:E,gfm:W,pedantic:ee},oe={normal:ie,gfm:Ie,breaks:De,pedantic:ze};class q{constructor(z){be(this,"tokens");be(this,"options");be(this,"state");be(this,"tokenizer");be(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=z||t.defaults,this.options.tokenizer=this.options.tokenizer||new M,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const T={block:xe.normal,inline:oe.normal};this.options.pedantic?(T.block=xe.pedantic,T.inline=oe.pedantic):this.options.gfm&&(T.block=xe.gfm,this.options.breaks?T.inline=oe.breaks:T.inline=oe.gfm),this.tokenizer.rules=T}static get rules(){return{block:xe,inline:oe}}static lex(z,T){return new q(T).lex(z)}static lexInline(z,T){return new q(T).inlineTokens(z)}lex(z){z=z.replace(/\r\n|\r/g,`
`),this.blockTokens(z,this.tokens);for(let T=0;T<this.inlineQueue.length;T++){const D=this.inlineQueue[T];this.inlineTokens(D.src,D.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(z,T=[]){let D,O,B,j;for(z=this.options.pedantic?z.replace(/\t/g,"    ").replace(/^ +$/gm,""):z.replace(/^( *)(\t+)/gm,(G,H,te)=>H+"    ".repeat(te.length));z;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(G=>!!(D=G.call({lexer:this},z,T))&&(z=z.substring(D.raw.length),T.push(D),!0))))if(D=this.tokenizer.space(z))z=z.substring(D.raw.length),D.raw.length===1&&T.length>0?T[T.length-1].raw+=`
`:T.push(D);else if(D=this.tokenizer.code(z))z=z.substring(D.raw.length),O=T[T.length-1],!O||O.type!=="paragraph"&&O.type!=="text"?T.push(D):(O.raw+=`
`+D.raw,O.text+=`
`+D.text,this.inlineQueue[this.inlineQueue.length-1].src=O.text);else if(D=this.tokenizer.fences(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.heading(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.hr(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.blockquote(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.list(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.html(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.def(z))z=z.substring(D.raw.length),O=T[T.length-1],!O||O.type!=="paragraph"&&O.type!=="text"?this.tokens.links[D.tag]||(this.tokens.links[D.tag]={href:D.href,title:D.title}):(O.raw+=`
`+D.raw,O.text+=`
`+D.raw,this.inlineQueue[this.inlineQueue.length-1].src=O.text);else if(D=this.tokenizer.table(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.lheading(z))z=z.substring(D.raw.length),T.push(D);else{if(B=z,this.options.extensions&&this.options.extensions.startBlock){let G=1/0;const H=z.slice(1);let te;this.options.extensions.startBlock.forEach(J=>{te=J.call({lexer:this},H),typeof te=="number"&&te>=0&&(G=Math.min(G,te))}),G<1/0&&G>=0&&(B=z.substring(0,G+1))}if(this.state.top&&(D=this.tokenizer.paragraph(B)))O=T[T.length-1],j&&O.type==="paragraph"?(O.raw+=`
`+D.raw,O.text+=`
`+D.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=O.text):T.push(D),j=B.length!==z.length,z=z.substring(D.raw.length);else if(D=this.tokenizer.text(z))z=z.substring(D.raw.length),O=T[T.length-1],O&&O.type==="text"?(O.raw+=`
`+D.raw,O.text+=`
`+D.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=O.text):T.push(D);else if(z){const G="Infinite loop on byte: "+z.charCodeAt(0);if(this.options.silent){console.error(G);break}throw new Error(G)}}return this.state.top=!0,T}inline(z,T=[]){return this.inlineQueue.push({src:z,tokens:T}),T}inlineTokens(z,T=[]){let D,O,B,j,G,H,te=z;if(this.tokens.links){const J=Object.keys(this.tokens.links);if(J.length>0)for(;(j=this.tokenizer.rules.inline.reflinkSearch.exec(te))!=null;)J.includes(j[0].slice(j[0].lastIndexOf("[")+1,-1))&&(te=te.slice(0,j.index)+"["+"a".repeat(j[0].length-2)+"]"+te.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(j=this.tokenizer.rules.inline.blockSkip.exec(te))!=null;)te=te.slice(0,j.index)+"["+"a".repeat(j[0].length-2)+"]"+te.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(j=this.tokenizer.rules.inline.anyPunctuation.exec(te))!=null;)te=te.slice(0,j.index)+"++"+te.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;z;)if(G||(H=""),G=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(J=>!!(D=J.call({lexer:this},z,T))&&(z=z.substring(D.raw.length),T.push(D),!0))))if(D=this.tokenizer.escape(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.tag(z))z=z.substring(D.raw.length),O=T[T.length-1],O&&D.type==="text"&&O.type==="text"?(O.raw+=D.raw,O.text+=D.text):T.push(D);else if(D=this.tokenizer.link(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.reflink(z,this.tokens.links))z=z.substring(D.raw.length),O=T[T.length-1],O&&D.type==="text"&&O.type==="text"?(O.raw+=D.raw,O.text+=D.text):T.push(D);else if(D=this.tokenizer.emStrong(z,te,H))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.codespan(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.br(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.del(z))z=z.substring(D.raw.length),T.push(D);else if(D=this.tokenizer.autolink(z))z=z.substring(D.raw.length),T.push(D);else if(this.state.inLink||!(D=this.tokenizer.url(z))){if(B=z,this.options.extensions&&this.options.extensions.startInline){let J=1/0;const le=z.slice(1);let ae;this.options.extensions.startInline.forEach(ge=>{ae=ge.call({lexer:this},le),typeof ae=="number"&&ae>=0&&(J=Math.min(J,ae))}),J<1/0&&J>=0&&(B=z.substring(0,J+1))}if(D=this.tokenizer.inlineText(B))z=z.substring(D.raw.length),D.raw.slice(-1)!=="_"&&(H=D.raw.slice(-1)),G=!0,O=T[T.length-1],O&&O.type==="text"?(O.raw+=D.raw,O.text+=D.text):T.push(D);else if(z){const J="Infinite loop on byte: "+z.charCodeAt(0);if(this.options.silent){console.error(J);break}throw new Error(J)}}else z=z.substring(D.raw.length),T.push(D);return T}}class ye{constructor(z){be(this,"options");this.options=z||t.defaults}code(z,T,D){const O=(T||"").match(/^\S*/)?.[0];return z=z.replace(/\n$/,"")+`
`,O?'<pre><code class="language-'+r(O)+'">'+(D?z:r(z,!0))+`</code></pre>
`:"<pre><code>"+(D?z:r(z,!0))+`</code></pre>
`}blockquote(z){return`<blockquote>
${z}</blockquote>
`}html(z,T){return z}heading(z,T,D){return`<h${T}>${z}</h${T}>
`}hr(){return`<hr>
`}list(z,T,D){const O=T?"ol":"ul";return"<"+O+(T&&D!==1?' start="'+D+'"':"")+`>
`+z+"</"+O+`>
`}listitem(z,T,D){return`<li>${z}</li>
`}checkbox(z){return"<input "+(z?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(z){return`<p>${z}</p>
`}table(z,T){return T&&(T=`<tbody>${T}</tbody>`),`<table>
<thead>
`+z+`</thead>
`+T+`</table>
`}tablerow(z){return`<tr>
${z}</tr>
`}tablecell(z,T){const D=T.header?"th":"td";return(T.align?`<${D} align="${T.align}">`:`<${D}>`)+z+`</${D}>
`}strong(z){return`<strong>${z}</strong>`}em(z){return`<em>${z}</em>`}codespan(z){return`<code>${z}</code>`}br(){return"<br>"}del(z){return`<del>${z}</del>`}link(z,T,D){const O=x(z);if(O===null)return D;let B='<a href="'+(z=O)+'"';return T&&(B+=' title="'+T+'"'),B+=">"+D+"</a>",B}image(z,T,D){const O=x(z);if(O===null)return D;let B=`<img src="${z=O}" alt="${D}"`;return T&&(B+=` title="${T}"`),B+=">",B}text(z){return z}}class fe{strong(z){return z}em(z){return z}codespan(z){return z}del(z){return z}html(z){return z}text(z){return z}link(z,T,D){return""+D}image(z,T,D){return""+D}br(){return""}}class ue{constructor(z){be(this,"options");be(this,"renderer");be(this,"textRenderer");this.options=z||t.defaults,this.options.renderer=this.options.renderer||new ye,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new fe}static parse(z,T){return new ue(T).parse(z)}static parseInline(z,T){return new ue(T).parseInline(z)}parse(z,T=!0){let D="";for(let O=0;O<z.length;O++){const B=z[O];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[B.type]){const j=B,G=this.options.extensions.renderers[j.type].call({parser:this},j);if(G!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(j.type)){D+=G||"";continue}}switch(B.type){case"space":continue;case"hr":D+=this.renderer.hr();continue;case"heading":{const j=B;D+=this.renderer.heading(this.parseInline(j.tokens),j.depth,n(this.parseInline(j.tokens,this.textRenderer)));continue}case"code":{const j=B;D+=this.renderer.code(j.text,j.lang,!!j.escaped);continue}case"table":{const j=B;let G="",H="";for(let J=0;J<j.header.length;J++)H+=this.renderer.tablecell(this.parseInline(j.header[J].tokens),{header:!0,align:j.align[J]});G+=this.renderer.tablerow(H);let te="";for(let J=0;J<j.rows.length;J++){const le=j.rows[J];H="";for(let ae=0;ae<le.length;ae++)H+=this.renderer.tablecell(this.parseInline(le[ae].tokens),{header:!1,align:j.align[ae]});te+=this.renderer.tablerow(H)}D+=this.renderer.table(G,te);continue}case"blockquote":{const j=B,G=this.parse(j.tokens);D+=this.renderer.blockquote(G);continue}case"list":{const j=B,G=j.ordered,H=j.start,te=j.loose;let J="";for(let le=0;le<j.items.length;le++){const ae=j.items[le],ge=ae.checked,je=ae.task;let Be="";if(ae.task){const Ne=this.renderer.checkbox(!!ge);te?ae.tokens.length>0&&ae.tokens[0].type==="paragraph"?(ae.tokens[0].text=Ne+" "+ae.tokens[0].text,ae.tokens[0].tokens&&ae.tokens[0].tokens.length>0&&ae.tokens[0].tokens[0].type==="text"&&(ae.tokens[0].tokens[0].text=Ne+" "+ae.tokens[0].tokens[0].text)):ae.tokens.unshift({type:"text",text:Ne+" "}):Be+=Ne+" "}Be+=this.parse(ae.tokens,te),J+=this.renderer.listitem(Be,je,!!ge)}D+=this.renderer.list(J,G,H);continue}case"html":{const j=B;D+=this.renderer.html(j.text,j.block);continue}case"paragraph":{const j=B;D+=this.renderer.paragraph(this.parseInline(j.tokens));continue}case"text":{let j=B,G=j.tokens?this.parseInline(j.tokens):j.text;for(;O+1<z.length&&z[O+1].type==="text";)j=z[++O],G+=`
`+(j.tokens?this.parseInline(j.tokens):j.text);D+=T?this.renderer.paragraph(G):G;continue}default:{const j='Token with "'+B.type+'" type was not found.';if(this.options.silent)return console.error(j),"";throw new Error(j)}}}return D}parseInline(z,T){T=T||this.renderer;let D="";for(let O=0;O<z.length;O++){const B=z[O];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[B.type]){const j=this.options.extensions.renderers[B.type].call({parser:this},B);if(j!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(B.type)){D+=j||"";continue}}switch(B.type){case"escape":{const j=B;D+=T.text(j.text);break}case"html":{const j=B;D+=T.html(j.text);break}case"link":{const j=B;D+=T.link(j.href,j.title,this.parseInline(j.tokens,T));break}case"image":{const j=B;D+=T.image(j.href,j.title,j.text);break}case"strong":{const j=B;D+=T.strong(this.parseInline(j.tokens,T));break}case"em":{const j=B;D+=T.em(this.parseInline(j.tokens,T));break}case"codespan":{const j=B;D+=T.codespan(j.text);break}case"br":D+=T.br();break;case"del":{const j=B;D+=T.del(this.parseInline(j.tokens,T));break}case"text":{const j=B;D+=T.text(j.text);break}default:{const j='Token with "'+B.type+'" type was not found.';if(this.options.silent)return console.error(j),"";throw new Error(j)}}}return D}}class we{constructor(z){be(this,"options");this.options=z||t.defaults}preprocess(z){return z}postprocess(z){return z}processAllTokens(z){return z}}be(we,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Se{constructor(...z){_e(this,Ue);_e(this,Pe);be(this,"defaults",{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null});be(this,"options",this.setOptions);be(this,"parse",Re(this,Ue,Ge).call(this,q.lex,ue.parse));be(this,"parseInline",Re(this,Ue,Ge).call(this,q.lexInline,ue.parseInline));be(this,"Parser",ue);be(this,"Renderer",ye);be(this,"TextRenderer",fe);be(this,"Lexer",q);be(this,"Tokenizer",M);be(this,"Hooks",we);this.use(...z)}walkTokens(z,T){let D=[];for(const O of z)switch(D=D.concat(T.call(this,O)),O.type){case"table":{const B=O;for(const j of B.header)D=D.concat(this.walkTokens(j.tokens,T));for(const j of B.rows)for(const G of j)D=D.concat(this.walkTokens(G.tokens,T));break}case"list":{const B=O;D=D.concat(this.walkTokens(B.items,T));break}default:{const B=O;this.defaults.extensions?.childTokens?.[B.type]?this.defaults.extensions.childTokens[B.type].forEach(j=>{const G=B[j].flat(1/0);D=D.concat(this.walkTokens(G,T))}):B.tokens&&(D=D.concat(this.walkTokens(B.tokens,T)))}}return D}use(...z){const T=this.defaults.extensions||{renderers:{},childTokens:{}};return z.forEach(D=>{const O={...D};if(O.async=this.defaults.async||O.async||!1,D.extensions&&(D.extensions.forEach(B=>{if(!B.name)throw new Error("extension name required");if("renderer"in B){const j=T.renderers[B.name];T.renderers[B.name]=j?function(...G){let H=B.renderer.apply(this,G);return H===!1&&(H=j.apply(this,G)),H}:B.renderer}if("tokenizer"in B){if(!B.level||B.level!=="block"&&B.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const j=T[B.level];j?j.unshift(B.tokenizer):T[B.level]=[B.tokenizer],B.start&&(B.level==="block"?T.startBlock?T.startBlock.push(B.start):T.startBlock=[B.start]:B.level==="inline"&&(T.startInline?T.startInline.push(B.start):T.startInline=[B.start]))}"childTokens"in B&&B.childTokens&&(T.childTokens[B.name]=B.childTokens)}),O.extensions=T),D.renderer){const B=this.defaults.renderer||new ye(this.defaults);for(const j in D.renderer){if(!(j in B))throw new Error(`renderer '${j}' does not exist`);if(j==="options")continue;const G=j,H=D.renderer[G],te=B[G];B[G]=(...J)=>{let le=H.apply(B,J);return le===!1&&(le=te.apply(B,J)),le||""}}O.renderer=B}if(D.tokenizer){const B=this.defaults.tokenizer||new M(this.defaults);for(const j in D.tokenizer){if(!(j in B))throw new Error(`tokenizer '${j}' does not exist`);if(["options","rules","lexer"].includes(j))continue;const G=j,H=D.tokenizer[G],te=B[G];B[G]=(...J)=>{let le=H.apply(B,J);return le===!1&&(le=te.apply(B,J)),le}}O.tokenizer=B}if(D.hooks){const B=this.defaults.hooks||new we;for(const j in D.hooks){if(!(j in B))throw new Error(`hook '${j}' does not exist`);if(j==="options")continue;const G=j,H=D.hooks[G],te=B[G];we.passThroughHooks.has(j)?B[G]=J=>{if(this.defaults.async)return Promise.resolve(H.call(B,J)).then(ae=>te.call(B,ae));const le=H.call(B,J);return te.call(B,le)}:B[G]=(...J)=>{let le=H.apply(B,J);return le===!1&&(le=te.apply(B,J)),le}}O.hooks=B}if(D.walkTokens){const B=this.defaults.walkTokens,j=D.walkTokens;O.walkTokens=function(G){let H=[];return H.push(j.call(this,G)),B&&(H=H.concat(B.call(this,G))),H}}this.defaults={...this.defaults,...O}}),this}setOptions(z){return this.defaults={...this.defaults,...z},this}lexer(z,T){return q.lex(z,T??this.defaults)}parser(z,T){return ue.parse(z,T??this.defaults)}}Ue=new WeakSet,Ge=function(z,T){return(D,O)=>{const B={...O},j={...this.defaults,...B};this.defaults.async===!0&&B.async===!1&&(j.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),j.async=!0);const G=Re(this,Pe,qe).call(this,!!j.silent,!!j.async);if(D==null)return G(new Error("marked(): input parameter is undefined or null"));if(typeof D!="string")return G(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(D)+", string expected"));if(j.hooks&&(j.hooks.options=j),j.async)return Promise.resolve(j.hooks?j.hooks.preprocess(D):D).then(H=>z(H,j)).then(H=>j.hooks?j.hooks.processAllTokens(H):H).then(H=>j.walkTokens?Promise.all(this.walkTokens(H,j.walkTokens)).then(()=>H):H).then(H=>T(H,j)).then(H=>j.hooks?j.hooks.postprocess(H):H).catch(G);try{j.hooks&&(D=j.hooks.preprocess(D));let H=z(D,j);j.hooks&&(H=j.hooks.processAllTokens(H)),j.walkTokens&&this.walkTokens(H,j.walkTokens);let te=T(H,j);return j.hooks&&(te=j.hooks.postprocess(te)),te}catch(H){return G(H)}}},Pe=new WeakSet,qe=function(z,T){return D=>{if(D.message+=`
Please report this to https://github.com/markedjs/marked.`,z){const O="<p>An error occurred:</p><pre>"+r(D.message+"",!0)+"</pre>";return T?Promise.resolve(O):O}if(T)return Promise.reject(D);throw D}};const Le=new Se;function pe(ce,z){return Le.parse(ce,z)}pe.options=pe.setOptions=function(ce){return Le.setOptions(ce),pe.defaults=Le.defaults,l(pe.defaults),pe},pe.getDefaults=e,pe.defaults=t.defaults,pe.use=function(...ce){return Le.use(...ce),pe.defaults=Le.defaults,l(pe.defaults),pe},pe.walkTokens=function(ce,z){return Le.walkTokens(ce,z)},pe.parseInline=Le.parseInline,pe.Parser=ue,pe.parser=ue.parse,pe.Renderer=ye,pe.TextRenderer=fe,pe.Lexer=q,pe.lexer=q.lex,pe.Tokenizer=M,pe.Hooks=we,pe.parse=pe;const Qe=pe.options,Je=pe.setOptions,Xe=pe.use,Ke=pe.walkTokens,et=pe.parseInline,tt=pe,nt=ue.parse,at=q.lex;t.Hooks=we,t.Lexer=q,t.Marked=Se,t.Parser=ue,t.Renderer=ye,t.TextRenderer=fe,t.Tokenizer=M,t.getDefaults=e,t.lexer=at,t.marked=pe,t.options=Qe,t.parse=tt,t.parseInline=et,t.parser=nt,t.setOptions=Je,t.use=Xe,t.walkTokens=Ke},5042:I=>{I.exports={nanoid:(t=21)=>{let e="",l=t;for(;l--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return e},customAlphabet:(t,e=21)=>(l=e)=>{let o="",A=l;for(;A--;)o+=t[Math.random()*t.length|0];return o}}}},Te={};function Ee(I){var t=Te[I];if(t!==void 0)return t.exports;var e=Te[I]={id:I,exports:{}};return ke[I].call(e.exports,e,e.exports,Ee),e.exports}return Ee.n=I=>{var t=I&&I.__esModule?()=>I.default:()=>I;return Ee.d(t,{a:t}),t},Ee.d=(I,t)=>{for(var e in t)Ee.o(t,e)&&!Ee.o(I,e)&&Object.defineProperty(I,e,{enumerable:!0,get:t[e]})},Ee.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),Ee.o=(I,t)=>Object.prototype.hasOwnProperty.call(I,t),Ee.r=I=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})},Ee.nc=void 0,Ee(7927)})())}},ve={};function Ce(X){var ke=ve[X];if(ke!==void 0)return ke.exports;var Te=ve[X]={exports:{}};return Me[X](Te,Te.exports,Ce),Te.exports}Ce.d=(X,ke)=>{for(var Te in ke)Ce.o(ke,Te)&&!Ce.o(X,Te)&&Object.defineProperty(X,Te,{enumerable:!0,get:ke[Te]})},Ce.o=(X,ke)=>Object.prototype.hasOwnProperty.call(X,ke),Ce.r=X=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(X,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(X,"__esModule",{value:!0})};var Oe={};(()=>{"use strict";Ce.r(Oe),Ce.d(Oe,{createMynahUI:()=>M});var X=Ce(9714);class ke{generateAuthFollowUps(y,s){let g;switch(s){case"full-auth":g="Authenticate";break;case"use-supported-auth":case"missing_scopes":g="Enable Amazon Q";break;case"re-auth":g="Re-authenticate";break}switch(y){default:return{text:"",options:[{pillText:g,type:s,status:"info",icon:"refresh"}]}}}generateWelcomeBlockForTab(y){switch(y){case"featuredev":return{text:"Ask a follow up question",options:[{pillText:"What are some examples of tasks?",type:"DevExamples"}]};default:return{text:"Try Examples:",options:[{pillText:"Explain selected code",prompt:"Explain selected code",type:"init-prompt"},{pillText:"How can Amazon Q help me?",type:"help"}]}}}}class Te{constructor(y){this.onSourceLinkClick=(s,g,w)=>{this.sendMessageToExtension({command:"source-link-click",tabID:s,messageId:g,link:w,tabType:"cwc"})},this.onResponseBodyLinkClick=(s,g,w)=>{this.sendMessageToExtension({command:"response-body-link-click",tabID:s,messageId:g,link:w,tabType:"cwc"})},this.onInfoLinkClick=(s,g)=>{this.sendMessageToExtension({command:"footer-info-link-click",tabID:s,link:g,tabType:"cwc"})},this.followUpClicked=(s,g,w)=>{this.sendMessageToExtension({command:"start-chat-message-telemetry",trigger:"followUpClicked",tabID:s,traceId:g,tabType:"cwc",startTime:Date.now()}),this.sendMessageToExtension({command:"follow-up-was-clicked",followUp:w,tabID:s,messageId:g,tabType:"cwc"})},this.onTabAdd=(s,g)=>{this.sendMessageToExtension({tabID:s,command:"new-tab-was-created",tabType:"cwc",tabOpenInteractionType:g})},this.onCodeInsertToCursorPosition=(s,g,w,k,S,L,U,F,R,E)=>{this.sendMessageToExtension({tabID:s,messageId:g,code:w,command:"insert_code_at_cursor_position",tabType:"cwc",insertionTargetType:k,codeReference:S,eventId:L,codeBlockIndex:U,totalCodeBlocks:F,userIntent:R,codeBlockLanguage:E})},this.onCopyCodeToClipboard=(s,g,w,k,S,L,U,F,R,E)=>{this.sendMessageToExtension({tabID:s,messageId:g,code:w,command:"code_was_copied_to_clipboard",tabType:"cwc",insertionTargetType:k,codeReference:S,eventId:L,codeBlockIndex:U,totalCodeBlocks:F,userIntent:R,codeBlockLanguage:E})},this.onTabRemove=s=>{this.sendMessageToExtension({tabID:s,command:"tab-was-removed",tabType:"cwc"})},this.onTabChange=(s,g)=>{this.sendMessageToExtension({tabID:s,command:"tab-was-changed",tabType:"cwc",prevTabID:g})},this.onStopChatResponse=s=>{this.sendMessageToExtension({tabID:s,command:"stop-response",tabType:"cwc"})},this.onChatItemVoted=(s,g,w)=>{this.sendMessageToExtension({tabID:s,command:"chat-item-voted",messageId:g,vote:w,tabType:"cwc"})},this.onSendFeedback=(s,g)=>{this.sendMessageToExtension({command:"chat-item-feedback",...g,tabType:"cwc",tabID:s})},this.requestGenerativeAIAnswer=(s,g,w)=>(this.sendMessageToExtension({command:"start-chat-message-telemetry",trigger:"onChatPrompt",tabID:s,traceId:g,tabType:"cwc",startTime:Date.now()}),new Promise((k,S)=>{this.sendMessageToExtension({tabID:s,command:"chat-prompt",chatMessage:w.chatMessage,chatCommand:w.chatCommand,tabType:"cwc"})})),this.clearChat=s=>{this.sendMessageToExtension({tabID:s,command:"clear",chatMessage:"",tabType:"cwc"})},this.help=s=>{this.sendMessageToExtension({tabID:s,command:"help",chatMessage:"",tabType:"cwc"})},this.sendTriggerMessageProcessed=async s=>{this.sendMessageToExtension({command:"trigger-message-processed",requestID:s,tabType:"cwc"})},this.processEditorContextCommandMessage=async s=>{const g=this.onCWCContextCommandMessage({body:s.message,type:X.ChatItemType.PROMPT},s.command);await this.sendTriggerTabIDReceived(s.triggerID,g!==void 0?g:"no-available-tabs")},this.sendTriggerTabIDReceived=async(s,g)=>{this.sendMessageToExtension({command:"trigger-tabID-received",triggerID:s,tabID:g,tabType:"cwc"})},this.processChatMessage=async s=>{if(this.onChatAnswerReceived!==void 0){if(s.message!==void 0||s.relatedSuggestions!==void 0||s.codeReference!==void 0){const g=s.followUps!==void 0&&s.followUps.length>0?{text:s.followUpsHeader??"Suggested follow up questions:",options:s.followUps}:void 0,w={type:s.messageType,messageId:s.messageID??s.triggerID,body:s.message,followUp:g,canBeVoted:!0,codeReference:s.codeReference,userIntent:s.userIntent,codeBlockLanguage:s.codeBlockLanguage};(s.messageType==="answer-part"||s.messageType==="answer")&&(w.canBeVoted=!0),s.relatedSuggestions!==void 0&&(w.relatedContent={title:"Sources",content:s.relatedSuggestions}),this.onChatAnswerReceived(s.tabID,w,s),(s.messageType===X.ChatItemType.SYSTEM_PROMPT||s.messageType===X.ChatItemType.AI_PROMPT)&&await this.sendTriggerMessageProcessed(s.requestID);return}if(s.messageType===X.ChatItemType.ANSWER){const g={type:s.messageType,body:void 0,relatedContent:void 0,messageId:s.messageID,codeReference:s.codeReference,userIntent:s.userIntent,codeBlockLanguage:s.codeBlockLanguage,followUp:s.followUps!==void 0&&s.followUps.length>0?{text:"Suggested follow up questions:",options:s.followUps}:void 0};this.onChatAnswerReceived(s.tabID,g,s);return}}},this.processAuthNeededException=async s=>{this.onChatAnswerReceived!==void 0&&this.onChatAnswerReceived(s.tabID,{type:X.ChatItemType.ANSWER,messageId:s.triggerID,body:s.message,followUp:this.followUpGenerator.generateAuthFollowUps("cwc",s.authType),canBeVoted:!1},s)},this.processOpenSettingsMessage=async s=>{this.onOpenSettingsMessage(s.tabID)},this.handleMessageReceive=async s=>{if(s.type==="errorMessage"){this.onError(s.tabID,s.message,s.title);return}if(s.type==="showInvalidTokenNotification"){this.onWarning(s.tabID,s.message,s.title);return}if(s.type==="chatMessage"){await this.processChatMessage(s);return}if(s.type==="editorContextCommandMessage"){await this.processEditorContextCommandMessage(s);return}if(s.type==="authNeededException"){await this.processAuthNeededException(s);return}if(s.type==="openSettingsMessage"){await this.processOpenSettingsMessage(s);return}},this.sendMessageToExtension=y.sendMessageToExtension,this.onChatAnswerReceived=y.onChatAnswerReceived,this.onWarning=y.onWarning,this.onError=y.onError,this.onCWCContextCommandMessage=y.onCWCContextCommandMessage,this.onOpenSettingsMessage=y.onOpenSettingsMessage,this.followUpGenerator=new ke}}function Ee(f){const y={};for(const s of f)s.rejected&&(y[s.relativePath]={status:"error",label:"File rejected",icon:X.MynahIcons.CANCEL_CIRCLE});return y}function I(f){const y={};for(const s of f)switch(s.rejected){case!0:y[s.relativePath]=[{icon:X.MynahIcons.REVERT,name:"revert-rejection",description:"Revert rejection"}];break;case!1:y[s.relativePath]=[{icon:X.MynahIcons.CANCEL_CIRCLE,status:"error",name:"reject-change",description:"Reject change"}];break}return y}class t{constructor(y){this.onCodeInsertToCursorPosition=(s,g,w,k)=>{this.sendMessageToExtension({tabID:s,code:g,command:"insert_code_at_cursor_position",codeReference:k,tabType:"featuredev"})},this.onCopyCodeToClipboard=(s,g,w,k)=>{this.sendMessageToExtension({tabID:s,code:g,command:"code_was_copied_to_clipboard",codeReference:k,tabType:"featuredev"})},this.onOpenDiff=(s,g,w,k)=>{this.sendMessageToExtension({command:"open-diff",tabID:s,filePath:g,deleted:w,messageId:k,tabType:"featuredev"})},this.onFileActionClick=(s,g,w,k)=>{this.sendMessageToExtension({command:"file-click",tabID:s,messageId:g,filePath:w,actionName:k,tabType:"featuredev"})},this.followUpClicked=(s,g)=>{this.sendMessageToExtension({command:"follow-up-was-clicked",followUp:g,tabID:s,tabType:"featuredev"})},this.requestGenerativeAIAnswer=(s,g)=>new Promise((w,k)=>{this.sendMessageToExtension({tabID:s,command:"chat-prompt",chatMessage:g.chatMessage,tabType:"featuredev"})}),this.processChatMessage=async s=>{if(this.onChatAnswerReceived!==void 0){const g={type:s.messageType,body:s.message??void 0,messageId:s.messageID??s.triggerID??"",relatedContent:void 0,canBeVoted:s.canBeVoted,snapToTop:s.snapToTop,followUp:s.followUps!==void 0&&s.followUps.length>0?{text:s.messageType===X.ChatItemType.SYSTEM_PROMPT?"":"Please follow up with one of these",options:s.followUps}:void 0};this.onChatAnswerReceived(s.tabID,g,s)}},this.processCodeResultMessage=async s=>{if(this.onChatAnswerReceived!==void 0){const g=I([...s.filePaths,...s.deletedFiles]),w={type:X.ChatItemType.ANSWER,relatedContent:void 0,followUp:void 0,canBeVoted:!0,codeReference:s.references,messageId:s.codeGenerationId??s.messageID??s.triggerID??s.conversationID,fileList:{rootFolderTitle:"Changes",filePaths:s.filePaths.map(k=>k.zipFilePath),deletedFiles:s.deletedFiles.map(k=>k.zipFilePath),actions:g},body:""};this.onChatAnswerReceived(s.tabID,w,s)}},this.processAuthNeededException=async s=>{this.onChatAnswerReceived!==void 0&&(this.onChatAnswerReceived(s.tabID,{type:X.ChatItemType.ANSWER,body:s.message,followUp:void 0,canBeVoted:!1},s),this.onChatAnswerReceived(s.tabID,{type:X.ChatItemType.SYSTEM_PROMPT,body:void 0,followUp:this.followUpGenerator.generateAuthFollowUps("featuredev",s.authType),canBeVoted:!1},s))},this.handleMessageReceive=async s=>{if(s.type==="updateFileComponent"){this.onFileComponentUpdate(s.tabID,s.filePaths,s.deletedFiles,s.messageId);return}if(s.type==="errorMessage"){this.onError(s.tabID,s.message,s.title);return}if(s.type==="showInvalidTokenNotification"){this.onWarning(s.tabID,s.message,s.title);return}if(s.type==="chatMessage"){await this.processChatMessage(s);return}if(s.type==="codeResultMessage"){await this.processCodeResultMessage(s);return}if(s.type==="asyncEventProgressMessage"){this.onAsyncEventProgress(s.tabID,s.inProgress,s.message??void 0,s.messageId??void 0,!0);return}if(s.type==="updatePlaceholderMessage"){this.updatePlaceholder(s.tabID,s.newPlaceholder);return}if(s.type==="chatInputEnabledMessage"){this.chatInputEnabled(s.tabID,s.enabled);return}if(s.type==="authenticationUpdateMessage"){this.onUpdateAuthentication(s.featureDevEnabled,s.authenticatingTabIDs);return}if(s.type==="authNeededException"){await this.processAuthNeededException(s);return}if(s.type==="openNewTabMessage"){this.onNewTab("featuredev");return}},this.onStopChatResponse=s=>{this.sendMessageToExtension({tabID:s,command:"stop-response",tabType:"featuredev"})},this.onTabOpen=s=>{this.sendMessageToExtension({tabID:s,command:"new-tab-was-created",tabType:"featuredev"})},this.onTabRemove=s=>{this.sendMessageToExtension({tabID:s,command:"tab-was-removed",tabType:"featuredev"})},this.sendFeedback=(s,g)=>{this.sendMessageToExtension({command:"chat-item-feedback",...g,tabType:"featuredev",tabID:s})},this.onChatItemVoted=(s,g,w)=>{this.sendMessageToExtension({tabID:s,messageId:g,vote:w,command:"chat-item-voted",tabType:"featuredev"})},this.onResponseBodyLinkClick=(s,g,w)=>{this.sendMessageToExtension({command:"response-body-link-click",tabID:s,messageId:g,link:w,tabType:"featuredev"})},this.sendMessageToExtension=y.sendMessageToExtension,this.onChatAnswerReceived=y.onChatAnswerReceived,this.onWarning=y.onWarning,this.onFileComponentUpdate=y.onFileComponentUpdate,this.onError=y.onError,this.onAsyncEventProgress=y.onAsyncEventProgress,this.updatePlaceholder=y.onUpdatePlaceholder,this.chatInputEnabled=y.onChatInputEnabled,this.onUpdateAuthentication=y.onUpdateAuthentication,this.followUpGenerator=new ke,this.onNewTab=y.onNewTab}}class e{constructor(y){this.followUpClicked=(s,g)=>{g.type!==void 0&&g.type==="continue-to-chat"&&this.onWelcomeFollowUpClicked(s,g.type)},this.authFollowUpClicked=(s,g,w)=>{this.sendMessageToExtension({command:"auth-follow-up-was-clicked",authType:w,tabID:s,tabType:g})},this.sendMessageToExtension=y.sendMessageToExtension,this.onWelcomeFollowUpClicked=y.onWelcomeFollowUpClicked}}class l{constructor(y){this.onTabAdd=(s,g)=>{this.sendMessageToExtension({tabID:s,command:"new-tab-was-created",tabType:"gumby",tabOpenInteractionType:g})},this.processChatPrompt=async(s,g)=>{if(this.onChatAnswerReceived===void 0)return;const w={type:X.ChatItemType.AI_PROMPT,body:s.message,formItems:s.formItems,buttons:s.formButtons,followUp:void 0,status:"info",canBeVoted:!1};this.onChatAnswerReceived(g,w,s)},this.processChatMessage=async s=>{if(!(this.onChatAnswerReceived===void 0||this.onChatAnswerUpdated===void 0)&&s.message!==void 0){const g={type:s.messageType,messageId:s.messageId??s.triggerID,body:s.message,buttons:s.buttons??[],canBeVoted:!1};if(s.messageId!==void 0){this.onChatAnswerUpdated(s.tabID,g);return}this.onChatAnswerReceived(s.tabID,g,s)}},this.transform=s=>{this.sendMessageToExtension({tabID:s,command:"transform",chatMessage:"transform",tabType:"gumby"})},this.requestAnswer=(s,g)=>{this.tabStorage.updateTabStatus(s,"busy"),this.sendMessageToExtension({tabID:s,command:"chat-prompt",chatMessage:g.chatMessage,chatCommand:g.chatCommand,tabType:"gumby"})},this.processAuthNeededException=async s=>{this.onChatAnswerReceived!==void 0&&this.onChatAnswerReceived(s.tabID,{type:X.ChatItemType.SYSTEM_PROMPT,body:s.message},s)},this.onResponseBodyLinkClick=(s,g,w)=>{this.sendMessageToExtension({command:"response-body-link-click",tabID:s,messageId:g,link:w,tabType:"gumby"})},this.processExecuteCommand=async s=>{this.onQuickHandlerCommand(s.tabID,s.command,s.eventId)},this.handleMessageReceive=async s=>{switch(s.type){case"asyncEventProgressMessage":this.onAsyncEventProgress(s.tabID,s.inProgress,s.message,s.messageId,!1);break;case"authNeededException":await this.processAuthNeededException(s);break;case"authenticationUpdateMessage":this.onAuthenticationUpdate(s.gumbyEnabled,s.authenticatingTabIDs);break;case"chatInputEnabledMessage":this.chatInputEnabled(s.tabID,s.enabled);break;case"chatMessage":await this.processChatMessage(s);break;case"chatPrompt":await this.processChatPrompt(s,s.tabID);break;case"errorMessage":this.onError(s.tabID,s.message,s.title);break;case"sendCommandMessage":await this.processExecuteCommand(s);break;case"updatePlaceholderMessage":this.updatePlaceholder(s.tabID,s.newPlaceholder);break}},this.sendMessageToExtension=y.sendMessageToExtension,this.onChatAnswerReceived=y.onChatAnswerReceived,this.onChatAnswerUpdated=y.onChatAnswerUpdated,this.onError=y.onError,this.chatInputEnabled=y.onChatInputEnabled,this.onAsyncEventProgress=y.onAsyncEventProgress,this.updatePlaceholder=y.onUpdatePlaceholder,this.onQuickHandlerCommand=y.onQuickHandlerCommand,this.onAuthenticationUpdate=y.onUpdateAuthentication,this.tabStorage=y.tabsStorage}onTabRemove(y){this.sendMessageToExtension({tabID:y,command:"tab-was-removed",tabType:"gumby"})}onCustomFormAction(y,s){s!==void 0&&this.sendMessageToExtension({command:"form-action-click",action:s.id,formSelectedValues:s.formItemValues,tabType:"gumby",tabID:y})}}class o{constructor(y){this.isUIReady=!1,this.onSourceLinkClick=(s,g,w)=>{switch(this.tabsStorage.getTab(s)?.type){case"cwc":this.cwChatConnector.onSourceLinkClick(s,g,w);break}},this.onResponseBodyLinkClick=(s,g,w)=>{switch(this.tabsStorage.getTab(s)?.type){case"cwc":this.cwChatConnector.onResponseBodyLinkClick(s,g,w);break;case"featuredev":this.featureDevChatConnector.onResponseBodyLinkClick(s,g,w);break;case"gumby":this.gumbyChatConnector.onResponseBodyLinkClick(s,g,w)}},this.onInfoLinkClick=(s,g)=>{switch(this.tabsStorage.getTab(s)?.type){default:this.cwChatConnector.onInfoLinkClick(s,g);break}},this.requestAnswer=(s,g)=>{switch(this.tabsStorage.getTab(s)?.type){case"gumby":return this.gumbyChatConnector.requestAnswer(s,g)}},this.requestGenerativeAIAnswer=(s,g,w)=>new Promise((k,S)=>{if(this.isUIReady)switch(this.tabsStorage.getTab(s)?.type){case"featuredev":return this.featureDevChatConnector.requestGenerativeAIAnswer(s,w);default:return this.cwChatConnector.requestGenerativeAIAnswer(s,g,w)}else return setTimeout(()=>this.requestGenerativeAIAnswer(s,g,w),2e3)}),this.clearChat=s=>{switch(this.tabsStorage.getTab(s)?.type){case"cwc":this.cwChatConnector.clearChat(s);break}},this.help=s=>{switch(this.tabsStorage.getTab(s)?.type){case"cwc":this.cwChatConnector.help(s);break}},this.transform=s=>{this.gumbyChatConnector.transform(s)},this.onStopChatResponse=s=>{switch(this.tabsStorage.getTab(s)?.type){case"featuredev":this.featureDevChatConnector.onStopChatResponse(s);break;case"cwc":this.cwChatConnector.onStopChatResponse(s);break}},this.handleMessageReceive=async s=>{if(s.data===void 0)return;const g=JSON.parse(s.data);g!==void 0&&(g.sender==="CWChat"?await this.cwChatConnector.handleMessageReceive(g):g.sender==="featureDevChat"?await this.featureDevChatConnector.handleMessageReceive(g):g.sender==="gumbyChat"&&await this.gumbyChatConnector.handleMessageReceive(g),this.tabsStorage.updateTabLastCommand(g.tabID,""))},this.onTabAdd=s=>{this.tabsStorage.addTab({id:s,type:"unknown",status:"free",isSelected:!0})},this.onUpdateTabType=s=>{const g=this.tabsStorage.getTab(s);switch(g?.type){case"cwc":this.cwChatConnector.onTabAdd(s,g.openInteractionType);break;case"gumby":this.gumbyChatConnector.onTabAdd(s);break}},this.onKnownTabOpen=s=>{switch(this.tabsStorage.getTab(s)?.type){case"featuredev":this.featureDevChatConnector.onTabOpen(s);break}},this.onTabChange=s=>{const g=this.tabsStorage.setSelectedTab(s);this.cwChatConnector.onTabChange(s,g)},this.onCodeInsertToCursorPosition=(s,g,w,k,S,L,U,F,R,E)=>{switch(this.tabsStorage.getTab(s)?.type){case"cwc":this.cwChatConnector.onCodeInsertToCursorPosition(s,g,w,k,S,L,U,F,R,E);break;case"featuredev":this.featureDevChatConnector.onCodeInsertToCursorPosition(s,w,k,S);break}},this.onAcceptDiff=(s,g,w,k,S,L,U,F,R,E)=>{const $=this.tabsStorage.getTab(s)?.type;this.sendMessageToExtension({tabType:$,tabID:s,command:"accept_diff",messageId:g,actionId:w,data:k,code:S,type:L,referenceTrackerInformation:U,eventId:F,codeBlockIndex:R,totalCodeBlocks:E})},this.onViewDiff=(s,g,w,k,S,L,U,F,R,E)=>{const $=this.tabsStorage.getTab(s)?.type;this.sendMessageToExtension({tabType:$,tabID:s,command:"view_diff",messageId:g,actionId:w,data:k,code:S,type:L,referenceTrackerInformation:U,eventId:F,codeBlockIndex:R,totalCodeBlocks:E})},this.onCopyCodeToClipboard=(s,g,w,k,S,L,U,F,R,E)=>{switch(this.tabsStorage.getTab(s)?.type){case"cwc":this.cwChatConnector.onCopyCodeToClipboard(s,g,w,k,S,L,U,F,R,E);break;case"featuredev":this.featureDevChatConnector.onCopyCodeToClipboard(s,w,k,S);break}},this.onTabRemove=s=>{const g=this.tabsStorage.getTab(s);switch(this.tabsStorage.deleteTab(s),g?.type){case"cwc":this.cwChatConnector.onTabRemove(s);break;case"featuredev":this.featureDevChatConnector.onTabRemove(s);break;case"gumby":this.gumbyChatConnector.onTabRemove(s);break}},this.uiReady=()=>{this.isUIReady=!0,this.sendMessageToExtension({command:"ui-is-ready"}),this.onMessageReceived!==void 0&&window.addEventListener("message",this.handleMessageReceive.bind(this)),window.addEventListener("focus",this.handleApplicationFocus),window.addEventListener("blur",this.handleApplicationFocus)},this.handleApplicationFocus=async s=>{this.sendMessageToExtension({command:"ui-focus",type:s.type,tabType:"cwc"})},this.triggerSuggestionEngagement=(s,g,w)=>{},this.onAuthFollowUpClicked=(s,g)=>{const w=this.tabsStorage.getTab(s)?.type;switch(w){case"cwc":case"featuredev":this.amazonqCommonsConnector.authFollowUpClicked(s,w,g)}},this.onFollowUpClicked=(s,g,w)=>{switch(this.tabsStorage.getTab(s)?.type){case"unknown":this.amazonqCommonsConnector.followUpClicked(s,w);break;case"featuredev":this.featureDevChatConnector.followUpClicked(s,w);break;default:this.cwChatConnector.followUpClicked(s,g,w);break}},this.onFileActionClick=(s,g,w,k)=>{switch(this.tabsStorage.getTab(s)?.type){case"featuredev":this.featureDevChatConnector.onFileActionClick(s,g,w,k);break}},this.onOpenDiff=(s,g,w,k)=>{switch(this.tabsStorage.getTab(s)?.type){case"featuredev":this.featureDevChatConnector.onOpenDiff(s,g,w,k);break}},this.sendFeedback=(s,g)=>{switch(this.tabsStorage.getTab(s)?.type){case"featuredev":this.featureDevChatConnector.sendFeedback(s,g);break;case"cwc":this.cwChatConnector.onSendFeedback(s,g);break}},this.onChatItemVoted=(s,g,w)=>{switch(this.tabsStorage.getTab(s)?.type){case"cwc":this.cwChatConnector.onChatItemVoted(s,g,w);break;case"featuredev":this.featureDevChatConnector.onChatItemVoted(s,g,w);break}},this.onCustomFormAction=(s,g,w,k=void 0)=>{switch(this.tabsStorage.getTab(s)?.type){case"gumby":this.gumbyChatConnector.onCustomFormAction(s,w);break;case"cwc":w.id==="open-settings"&&this.sendMessageToExtension({command:"open-settings",type:"",tabType:"cwc"})}},this.sendMessageToExtension=y.sendMessageToExtension,this.onMessageReceived=y.onMessageReceived,this.cwChatConnector=new Te(y),this.featureDevChatConnector=new t(y),this.gumbyChatConnector=new l(y),this.amazonqCommonsConnector=new e({sendMessageToExtension:this.sendMessageToExtension,onWelcomeFollowUpClicked:y.onWelcomeFollowUpClicked}),this.tabsStorage=y.tabsStorage}}const A=1728e5;class a{constructor(y){this.tabs=new Map,this.lastCreatedTabByType=new Map,this.lastSelectedTab=void 0,this.tabActivityTimers={},this.onTabTimeout=y?.onTabTimeout}addTab(y){this.tabs.has(y.id)||(this.tabs.set(y.id,y),this.lastCreatedTabByType.set(y.type,y.id),y.isSelected&&this.setSelectedTab(y.id))}deleteTab(y){this.tabActivityTimers[y]!==void 0&&(clearTimeout(this.tabActivityTimers[y]),delete this.tabActivityTimers[y]),y===this.lastSelectedTab?.id&&(this.lastSelectedTab=void 0),this.tabs.delete(y)}getTab(y){return this.tabs.get(y)}getTabs(){return Array.from(this.tabs.values())}isTabDead(y){return this.tabs.get(y)?.status==="dead"}updateTabLastCommand(y,s){if(s===void 0)return;const g=this.tabs.get(y);g===void 0||g.status==="dead"||(g.lastCommand=s,this.tabs.set(y,g))}updateTabStatus(y,s){const g=this.tabs.get(y);g===void 0||g.status==="dead"||(g.status=s,this.tabs.set(y,g))}updateTabTypeFromUnknown(y,s){const g=this.tabs.get(y);g===void 0||g.type!=="unknown"||(g.type=s,this.tabs.set(y,g),this.lastCreatedTabByType.set(s,y))}resetTabTimer(y){this.onTabTimeout!==void 0&&(this.tabActivityTimers[y]!==void 0&&clearTimeout(this.tabActivityTimers[y]),this.tabActivityTimers[y]=setTimeout(()=>{this.onTabTimeout!==void 0&&(this.updateTabStatus(y,"dead"),this.onTabTimeout(y))},A))}setSelectedTab(y){const s=this.lastSelectedTab,g=this.lastSelectedTab?.id;s!==void 0&&(s.isSelected=!1,this.tabs.set(s.id,s));const w=this.tabs.get(y);return w===void 0||(w.isSelected=!0,this.tabs.set(w.id,w),this.lastSelectedTab=w),g}getSelectedTab(){return this.lastSelectedTab}}class m{constructor(y){this.isFeatureDevEnabled=y.isFeatureDevEnabled,this.isGumbyEnabled=y.isGumbyEnabled,this.disabledCommands=y.disableCommands??[]}generateForTab(y){const s=[{commands:[...this.isFeatureDevEnabled&&!this.disabledCommands.includes("/dev")?[{command:"/dev",placeholder:"Describe your task or issue in as much detail as possible",description:"Generate code to make a change in your project"}]:[],...this.isGumbyEnabled&&!this.disabledCommands.includes("/transform")?[{command:"/transform",description:"Transform your Java 8 or 11 Maven project to Java 17"}]:[]]},{commands:[{command:"/help",description:"Learn more about Amazon Q"},{command:"/clear",description:"Clear this session"}]}].filter(w=>w.commands.length>0),g={cwc:{description:"",unavailableItems:[]},featuredev:{description:"This command isn't available in /dev",unavailableItems:["/dev","/transform","/help","/clear"]},gumby:{description:"This command isn't available in /transform",unavailableItems:["/dev","/transform"]},unknown:{description:"",unavailableItems:[]}};return s.map(w=>({commands:w.commands.map(k=>{const S=g[y].unavailableItems.includes(k.command);return{...k,disabled:S,description:S?g[y].description:k.description}})}))}}const d={title:"Chat",placeholder:'Ask a question or enter "/" for quick actions',welcome:"Hi, I'm Amazon Q. I can answer your software development questions.\n  Ask me to explain, debug, or optimize your code.\n  You can enter `/` to see a list of quick actions. Add @workspace to beginning of your message to include your entire workspace as context."},c={unknown:d,cwc:d,featuredev:{title:"Q - Dev",placeholder:"Describe your task or issue in as much detail as possible",welcome:`Hi! I'm the Amazon Q Developer Agent for software development. 
        
I can generate code to implement new functionality across your workspace. To get started, describe the task you're trying to accomplish, and I'll generate code to implement it. If you want to make changes to the code, you can tell me what to improve and I'll generate new code based on your feedback. 

What would you like to work on?`},gumby:{title:"Q - Code Transformation",placeholder:"Open a new tab to chat with Q",welcome:`Welcome to Code Transformation!

I can help you upgrade your Java 8 and 11 codebases to Java 17.`}};class r{constructor(y){this.followUpsGenerator=new ke,this.quickActionsGenerator=new m({isFeatureDevEnabled:y.isFeatureDevEnabled,isGumbyEnabled:y.isGumbyEnabled,disableCommands:y.disabledCommands})}getTabData(y,s,g){return{tabTitle:g??c[y].title,promptInputInfo:"Amazon Q Developer uses generative AI. You may need to verify responses. See the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/).",quickActionCommands:this.quickActionsGenerator.generateForTab(y),promptInputPlaceholder:c[y].placeholder,contextCommands:[{groupName:"Mention code",commands:[{command:"@workspace",description:"(BETA) Reference all code in workspace."}]}],chatItems:s?[{type:X.ChatItemType.ANSWER,body:c[y].welcome},{type:X.ChatItemType.ANSWER,followUp:this.followUpsGenerator.generateWelcomeBlockForTab(y)}]:[]}}}const i=[{value:"inaccurate-response",label:"Inaccurate response"},{value:"harmful-content",label:"Harmful content"},{value:"incorrect-syntax",label:"Incorrect syntax"},{value:"buggy-code",label:"Buggy code"},{value:"low-quality",label:"Low quality"},{value:"other",label:"Other"}];const n={mainTitle:"Amazon Q",copy:"Copy",insertAtCursorLabel:"Insert at cursor",feedbackFormTitle:"Report an issue",feedbackFormOptionsLabel:"What type of issue would you like to report?",feedbackFormCommentLabel:"Description of issue (optional):",feedbackThanks:"Thanks for your feedback!",feedbackReportButtonLabel:"Report an issue",codeSuggestions:"Code suggestions",files:"file(s)",clickFileToViewDiff:"Click on a file to view diff.",showMore:"Show more",save:"Save",cancel:"Cancel",submit:"Submit",stopGenerating:"Stop",copyToClipboard:"Copied to clipboard",noMoreTabsTooltip:"You can only open ten conversation tabs at a time.",codeSuggestionWithReferenceTitle:"Some suggestions contain code with references.",spinnerText:"Generating your answer..."},h="https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/software-dev.html",u="https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html";class x{constructor(y){this.mynahUI=y.mynahUI,this.connector=y.connector,this.tabsStorage=y.tabsStorage}onFollowUpClicked(y,s,g){if(g.type!==void 0&&["full-auth","re-auth","missing_scopes","use-supported-auth"].includes(g.type)){this.connector.onAuthFollowUpClicked(y,g.type);return}if(g.type!==void 0&&g.type==="help"){this.tabsStorage.updateTabTypeFromUnknown(y,"cwc"),this.connector.onUpdateTabType(y),this.connector.help(y);return}if(g.prompt!==void 0&&(this.mynahUI.updateStore(y,{loadingChat:!0,cancelButtonWhenLoading:!1,promptInputDisabledState:!0}),this.mynahUI.addChatItem(y,{type:X.ChatItemType.PROMPT,body:g.prompt}),this.mynahUI.addChatItem(y,{type:X.ChatItemType.ANSWER_STREAM,body:""}),this.tabsStorage.updateTabStatus(y,"busy"),this.tabsStorage.resetTabTimer(y),g.type!==void 0&&g.type==="init-prompt")){this.connector.requestGenerativeAIAnswer(y,s,{chatMessage:g.prompt});return}this.connector.onFollowUpClicked(y,s,g)}onWelcomeFollowUpClicked(y,s){if(s==="continue-to-chat"){this.mynahUI.addChatItem(y,{type:X.ChatItemType.ANSWER,body:"Ok, please write your question below."}),this.tabsStorage.updateTabTypeFromUnknown(y,"cwc"),this.connector.onUpdateTabType(y);return}}}class b{constructor(y){this.mynahUI=y.mynahUI,this.connector=y.connector,this.tabsStorage=y.tabsStorage,this.tabDataGenerator=new r({isFeatureDevEnabled:y.isFeatureDevEnabled,isGumbyEnabled:y.isGumbyEnabled,disabledCommands:y.disabledCommands}),this.isFeatureDevEnabled=y.isFeatureDevEnabled,this.isGumbyEnabled=y.isGumbyEnabled}handle(y,s,g){switch(this.tabsStorage.resetTabTimer(s),y.command){case"/dev":this.handleFeatureDevCommand(y,s,"Q - Dev");break;case"/help":this.handleHelpCommand(s);break;case"/transform":this.handleGumbyCommand(s,g);break;case"/clear":this.handleClearCommand(s);break}}handleGumbyCommand(y,s){if(!this.isGumbyEnabled)return;let g;if(this.tabsStorage.getTabs().forEach(k=>{k.type==="gumby"&&(g=k.id)}),g!==void 0){this.mynahUI.selectTab(g,s||""),this.connector.onTabChange(g);return}let w=y;if(this.tabsStorage.getTab(w)?.type!=="unknown"&&(w=this.mynahUI.updateStore("",{loadingChat:!0,cancelButtonWhenLoading:!1})),w===void 0){this.mynahUI.notify({content:n.noMoreTabsTooltip,type:X.NotificationType.WARNING});return}else this.tabsStorage.updateTabTypeFromUnknown(w,"gumby"),this.connector.onKnownTabOpen(w),this.connector.onUpdateTabType(w),this.mynahUI.updateStore(w,{chatItems:[]}),this.mynahUI.updateStore(w,this.tabDataGenerator.getTabData("gumby",!0,void 0)),this.mynahUI.updateStore(w,{loadingChat:!0,cancelButtonWhenLoading:!1}),this.connector.transform(w)}handleClearCommand(y){this.mynahUI.updateStore(y,{chatItems:[]}),this.connector.clearChat(y)}handleHelpCommand(y){this.tabsStorage.getTab(y)?.type==="unknown"&&this.tabsStorage.updateTabTypeFromUnknown(y,"cwc"),this.connector.help(y)}handleFeatureDevCommand(y,s,g){if(!this.isFeatureDevEnabled)return;let w=s;const k=y.escapedPrompt?.trim()??"";if(this.tabsStorage.getTab(w)?.type!=="unknown"&&(w=this.mynahUI.updateStore("",{})),w===void 0){this.mynahUI.notify({content:n.noMoreTabsTooltip,type:X.NotificationType.WARNING});return}else this.tabsStorage.updateTabTypeFromUnknown(w,"featuredev"),this.connector.onKnownTabOpen(w),this.connector.onUpdateTabType(w),this.mynahUI.updateStore(w,{chatItems:[]}),this.mynahUI.updateStore(w,this.tabDataGenerator.getTabData("featuredev",k==="",g)),k!==""&&(this.mynahUI.addChatItem(w,{type:X.ChatItemType.PROMPT,body:k}),this.mynahUI.updateStore(w,{loadingChat:!0,promptInputDisabledState:!0,cancelButtonWhenLoading:!1}),this.connector.requestGenerativeAIAnswer(w,"",{chatMessage:k}))}}class C{constructor(y){this.mynahUI=y.mynahUI,this.connector=y.connector,this.tabsStorage=y.tabsStorage}handle(y,s,g){this.tabsStorage.updateTabLastCommand(s,y.command),this.tabsStorage.updateTabTypeFromUnknown(s,"cwc"),this.tabsStorage.resetTabTimer(s),this.connector.onUpdateTabType(s),this.mynahUI.addChatItem(s,{type:X.ChatItemType.PROMPT,body:y.escapedPrompt}),this.mynahUI.updateStore(s,{loadingChat:!0,cancelButtonWhenLoading:!1,promptInputDisabledState:!0}),this.tabsStorage.updateTabStatus(s,"busy"),this.connector.requestGenerativeAIAnswer(s,g,{chatMessage:y.prompt??"",chatCommand:y.command}).then(()=>{})}}class p{constructor(y){this.mynahUI=y.mynahUI,this.connector=y.connector,this.tabsStorage=y.tabsStorage,this.tabDataGenerator=new r({isFeatureDevEnabled:y.isFeatureDevEnabled,isGumbyEnabled:y.isGumbyEnabled,disabledCommands:y.disabledCommands})}sendSelectedCodeToTab(y,s=""){const g={...this.tabsStorage.getSelectedTab()};if(g?.id===void 0||g?.type==="featuredev"){const w=this.mynahUI.updateStore("",this.tabDataGenerator.getTabData("cwc",!1));if(w===void 0){this.mynahUI.notify({content:n.noMoreTabsTooltip,type:X.NotificationType.WARNING});return}this.tabsStorage.addTab({id:w,type:"cwc",status:"free",isSelected:!0,lastCommand:s}),g.id=w}return this.mynahUI.addToUserPrompt(g.id,y.body),g.id}sendMessageToTab(y,s,g=""){const w=this.tabsStorage.getSelectedTab();if(w!==void 0&&[s,"unknown"].includes(w.type)&&w.status==="free")return this.tabsStorage.updateTabStatus(w.id,"busy"),this.tabsStorage.updateTabTypeFromUnknown(w.id,s),this.tabsStorage.updateTabLastCommand(w.id,g),this.mynahUI.updateStore(w.id,{loadingChat:!0,cancelButtonWhenLoading:!1,promptInputDisabledState:!0}),this.mynahUI.addChatItem(w.id,y),this.mynahUI.addChatItem(w.id,{type:X.ChatItemType.ANSWER_STREAM,body:""}),w.id;const k=this.mynahUI.updateStore("",this.tabDataGenerator.getTabData("cwc",!1));if(k===void 0){this.mynahUI.notify({content:n.noMoreTabsTooltip,type:X.NotificationType.WARNING});return}else return this.tabsStorage.updateTabLastCommand(k,g),this.mynahUI.addChatItem(k,y),this.mynahUI.addChatItem(k,{type:X.ChatItemType.ANSWER_STREAM,body:""}),this.mynahUI.updateStore(k,{loadingChat:!0,cancelButtonWhenLoading:!1,promptInputDisabledState:!0}),this.tabsStorage.addTab({id:k,type:"cwc",status:"busy",isSelected:!0,openInteractionType:"contextMenu",lastCommand:g}),this.tabsStorage.updateTabTypeFromUnknown(k,"cwc"),this.connector.onUpdateTabType(k),this.tabsStorage.updateTabStatus(k,"busy"),k}}function v(f){try{return new Map(f)}catch{return new Map}}const M=(f,y,s,g)=>{let w,k;const S=new Map;window.addEventListener("error",P=>{const{error:N,message:Z}=P;f.postMessage({type:"error",event:k.isUIReady?"webview_error":"webview_load",errorMessage:N?N.toString():Z})});const L=new a({onTabTimeout:P=>{w.addChatItem(P,{type:X.ChatItemType.ANSWER,body:"This conversation has timed out after 48 hours. It will not be saved. Start a new conversation."}),w.updateStore(P,{promptInputDisabledState:!0,promptInputPlaceholder:"Session ended."})}});L.addTab({id:"tab-1",status:"free",type:"cwc",isSelected:!0});let U=y,F=y,R=new r({isFeatureDevEnabled:U,isGumbyEnabled:F,disabledCommands:g}),E,$,W,ee,V=v(s);function ne(P){const N=V.get("ViewDiffInChat")?.variation==="TREATMENT",Z=L.getTab(P?.tabID||""),K=["aws.amazonq.refactorCode","aws.amazonq.fixCode","aws.amazonq.optimizeCode","aws.amazonq.sendToPrompt"];return!!(N&&Z?.type==="cwc"&&K.includes(Z.lastCommand||""))}return k=new o({tabsStorage:L,onUpdateAuthentication:(P,N)=>{U=P,F=P,$=new b({mynahUI:w,connector:k,tabsStorage:L,isFeatureDevEnabled:U,isGumbyEnabled:F,disabledCommands:g}),R=new r({isFeatureDevEnabled:U,isGumbyEnabled:F,disabledCommands:g}),V=v(s);for(const Z of L.getTabs())w.updateStore(Z.id,{quickActionCommands:R.quickActionsGenerator.generateForTab(Z.type)});if(P)for(const Z of N)w.addChatItem(Z,{type:X.ChatItemType.ANSWER,body:"Authentication successful. Connected to Amazon Q."}),L.getTab(Z)?.type==="gumby"&&w.updateStore(Z,{promptInputDisabledState:!1})},onFileActionClick:(P,N,Z,K)=>{},onQuickHandlerCommand:(P,N,Z)=>{L.updateTabLastCommand(P,N),N==="aws.awsq.transform"?$.handle({command:"/transform"},P,Z):N==="aws.awsq.clearchat"&&$.handle({command:"/clear"},P)},onCWCContextCommandMessage:(P,N)=>{const Z=L.getSelectedTab();if(L.updateTabLastCommand(Z?.id||"",N||""),N==="aws.amazonq.sendToPrompt")return ee.sendSelectedCodeToTab(P,N);{const K=ee.sendMessageToTab(P,"cwc",N);return K&&f.postMessage({command:"start-chat-message-telemetry",trigger:"onContextCommand",tabID:K,tabType:"cwc",startTime:Date.now()}),K}},onWelcomeFollowUpClicked:(P,N)=>{E.onWelcomeFollowUpClicked(P,N)},onChatInputEnabled:(P,N)=>{w.updateStore(P,{promptInputDisabledState:L.isTabDead(P)||!N})},onAsyncEventProgress:(P,N,Z,K=void 0,he=!1)=>{if(N){w.updateStore(P,{loadingChat:!0,promptInputDisabledState:!0,cancelButtonWhenLoading:he}),Z&&K?w.updateChatAnswerWithMessageId(P,K,{body:Z}):Z?w.updateLastChatAnswer(P,{body:Z}):w.addChatItem(P,{type:X.ChatItemType.ANSWER_STREAM,body:"",messageId:K}),L.updateTabStatus(P,"busy");return}w.updateStore(P,{loadingChat:!1,promptInputDisabledState:L.isTabDead(P)}),L.updateTabStatus(P,"free")},sendMessageToExtension:P=>{f.postMessage(P)},onChatAnswerUpdated:(P,N)=>{N.messageId!==void 0?w.updateChatAnswerWithMessageId(P,N.messageId,{...N.body!==void 0?{body:N.body}:{},...N.buttons!==void 0?{buttons:N.buttons}:{}}):w.updateLastChatAnswer(P,{...N.body!==void 0?{body:N.body}:{},...N.buttons!==void 0?{buttons:N.buttons}:{}})},onChatAnswerReceived:(P,N,Z)=>{if(N.type===X.ChatItemType.ANSWER_PART||N.type===X.ChatItemType.CODE_RESULT){w.updateLastChatAnswer(P,{...N.messageId!==void 0?{messageId:N.messageId}:{},...N.canBeVoted!==void 0?{canBeVoted:N.canBeVoted}:{},...N.codeReference!==void 0?{codeReference:N.codeReference}:{},...N.body!==void 0?{body:N.body}:{},...N.relatedContent!==void 0?{relatedContent:N.relatedContent}:{},...N.type===X.ChatItemType.CODE_RESULT?{type:X.ChatItemType.CODE_RESULT,fileList:N.fileList}:{}}),N.messageId!==void 0&&N.userIntent!==void 0&&N.codeBlockLanguage!==void 0&&S.set(N.messageId,[N.userIntent,N.codeBlockLanguage]),f.postMessage({command:"update-chat-message-telemetry",tabID:P,tabType:L.getTab(P)?.type,time:Date.now()});return}if((N.body!==void 0||N.relatedContent!==void 0||N.followUp!==void 0||N.formItems!==void 0||N.buttons!==void 0)&&w.addChatItem(P,{...N,messageId:N.messageId,codeBlockActions:{...ne(Z)?{"insert-to-cursor":void 0,accept_diff:{id:"accept_diff",label:"Apply Diff",icon:X.MynahIcons.OK_CIRCLED,data:Z},view_diff:{id:"view_diff",label:"View Diff",icon:X.MynahIcons.EYE,data:Z}}:{}}}),N.type===X.ChatItemType.PROMPT||N.type===X.ChatItemType.SYSTEM_PROMPT||N.type===X.ChatItemType.AI_PROMPT){w.updateStore(P,{loadingChat:!0,cancelButtonWhenLoading:!1,promptInputDisabledState:!0}),L.updateTabStatus(P,"busy");return}N.type===X.ChatItemType.ANSWER&&(w.updateStore(P,{loadingChat:!1,promptInputDisabledState:L.isTabDead(P)}),L.updateTabStatus(P,"free"),f.postMessage({command:"stop-chat-message-telemetry",tabID:P,tabType:L.getTab(P)?.type,time:Date.now()}))},onMessageReceived:(P,N)=>{w.updateStore(P,N)},onFileComponentUpdate:(P,N,Z,K)=>{const he={type:X.ChatItemType.ANSWER,fileList:{rootFolderTitle:"Changes",filePaths:N.map(de=>de.zipFilePath),deletedFiles:Z.map(de=>de.zipFilePath),details:Ee(N),actions:I([...N,...Z])}};w.updateChatAnswerWithMessageId(P,K,he)},onWarning:(P,N,Z)=>{w.notify({title:Z,content:N,type:X.NotificationType.WARNING}),w.updateStore(P,{loadingChat:!1,promptInputDisabledState:L.isTabDead(P)}),L.updateTabStatus(P,"free")},onError:(P,N,Z)=>{const K={type:X.ChatItemType.ANSWER,body:`**${Z}** 
 ${N}`};if(P!=="")w.updateStore(P,{loadingChat:!1,promptInputDisabledState:L.isTabDead(P)}),L.updateTabStatus(P,"free"),w.addChatItem(P,K);else{const he=w.updateStore("",{tabTitle:"Error",quickActionCommands:[],promptInputPlaceholder:"",chatItems:[K]});if(he===void 0){w.notify({content:n.noMoreTabsTooltip,type:X.NotificationType.WARNING});return}else L.addTab({id:he,status:"busy",type:"cwc",isSelected:!0})}},onUpdatePlaceholder(P,N){w.updateStore(P,{promptInputPlaceholder:N})},onNewTab(P){const N=w.updateStore("",{});!N||(L.updateTabTypeFromUnknown(N,P),k.onKnownTabOpen(N),k.onUpdateTabType(N),w.updateStore(N,R.getTabData(P,!0)),V=v(s))},onOpenSettingsMessage(P){w.addChatItem(P,{type:X.ChatItemType.ANSWER,body:"To add your workspace as context, enable local indexing in your IDE settings. After enabling, add @workspace to your question, and I'll generate a response using your workspace as context.",buttons:[{id:"open-settings",text:"Open settings",icon:X.MynahIcons.EXTERNAL,keepCardAfterClick:!1,status:"info"}]}),L.updateTabStatus(P,"free"),w.updateStore(P,{loadingChat:!1,promptInputDisabledState:L.isTabDead(P)})}}),w=new X.MynahUI({onReady:k.uiReady,onTabAdd:P=>{w.updateStore(P,{quickActionCommands:R.quickActionsGenerator.generateForTab("unknown")}),k.onTabAdd(P)},onTabRemove:k.onTabRemove,onTabChange:k.onTabChange,onStopChatResponse:P=>{w.updateStore(P,{loadingChat:!1,promptInputDisabledState:!1}),k.onStopChatResponse(P)},onChatPrompt:(P,N,Z)=>{if(!((N.prompt??"")===""&&(N.command??"")==="")){if(L.getTab(P)?.type==="featuredev")w.addChatItem(P,{type:X.ChatItemType.ANSWER_STREAM});else if(L.getTab(P)?.type==="gumby"){k.requestAnswer(P,{chatMessage:N.prompt??""});return}if(N.command!==void 0&&N.command.trim()!==""){$.handle(N,P,Z);return}W.handle(N,P,Z)}},onVote:k.onChatItemVoted,onInBodyButtonClicked:(P,N,Z,K)=>{k.onCustomFormAction(P,N,Z,K)},onCustomFormAction:(P,N,Z)=>{k.onCustomFormAction(P,void 0,N,Z)},onSendFeedback:(P,N)=>{k.sendFeedback(P,N),w.notify({type:X.NotificationType.INFO,title:"Your feedback is sent",content:"Thanks for your feedback."})},onCodeInsertToCursorPosition:(P,N,Z,K,he,de,_,Q)=>{k.onCodeInsertToCursorPosition(P,N,Z,K,he,de,_,Q,S.get(N)?.[0]??void 0,S.get(N)?.[1]??void 0)},onCodeBlockActionClicked:(P,N,Z,K,he,de,_,Q,Y,re)=>{switch(Z){case"accept_diff":k.onAcceptDiff(P,N,Z,K,he,de,_,Q,Y,re);break;case"view_diff":k.onViewDiff(P,N,Z,K,he,de,_,Q,Y,re);break;default:break}},onCopyCodeToClipboard:(P,N,Z,K,he,de,_,Q)=>{k.onCopyCodeToClipboard(P,N,Z,K,he,de,_,Q,S.get(N)?.[0]??void 0,S.get(N)?.[1]??void 0),w.notify({type:X.NotificationType.SUCCESS,content:"Selected code is copied to clipboard"})},onChatItemEngagement:k.triggerSuggestionEngagement,onSourceLinkClick:(P,N,Z,K)=>{K?.preventDefault(),K?.stopPropagation(),K?.stopImmediatePropagation(),k.onSourceLinkClick(P,N,Z)},onLinkClick:(P,N,Z,K)=>{K?.preventDefault(),K?.stopPropagation(),K?.stopImmediatePropagation(),k.onResponseBodyLinkClick(P,N,Z)},onInfoLinkClick:(P,N,Z)=>{Z?.preventDefault(),Z?.stopPropagation(),Z?.stopImmediatePropagation(),k.onInfoLinkClick(P,N)},onResetStore:()=>{},onFollowUpClicked:(P,N,Z)=>{E.onFollowUpClicked(P,N,Z)},onFileActionClick:async(P,N,Z,K)=>{k.onFileActionClick(P,N,Z,K)},onOpenDiff:k.onOpenDiff,tabs:{"tab-1":{isSelected:!0,store:R.getTabData("cwc",!0)}},defaults:{store:R.getTabData("cwc",!0)},config:{maxTabs:10,feedbackOptions:i,texts:n}}),E=new x({mynahUI:w,connector:k,tabsStorage:L}),$=new b({mynahUI:w,connector:k,tabsStorage:L,isFeatureDevEnabled:U,isGumbyEnabled:F}),W=new C({mynahUI:w,connector:k,tabsStorage:L}),ee=new p({mynahUI:w,connector:k,tabsStorage:L,isFeatureDevEnabled:U,isGumbyEnabled:F}),{mynahUI:w,messageReceiver:k.handleMessageReceive}}})();var He=this;for(var Ze in Oe)He[Ze]=Oe[Ze];Oe.__esModule&&Object.defineProperty(He,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 *
 * This class is responsible for listening to and processing events
 * from the webview and translating them into events to be handled by the extension,
 * and events from the extension and translating them into events to be handled by the webview.
 */
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/*! For license information please see main.js.LICENSE.txt */
