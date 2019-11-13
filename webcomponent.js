(function()  {
    let d3Script = document.createElement('script');
    d3Script.src = 'https://d3js.org/d3.v5.min.js';
    d3Script.async = false;
    document.head.appendChild(d3Script);

    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
      </style>
    `;

    d3Script.onload = () => 

    customElements.define('com-sap-teched-gauge-XX', class Gauge extends HTMLElement {


        disconnectedCallback () {
            // your cleanup code goes here
            try{
                document.head.removeChild(d3Script);
            }
            catch{}
        }
    
        constructor() {
            super();
            //Constants
            if (!window._d3){
                window._d3 = d3;
            }
            
            this._shadowRoot = this.attachShadow({mode: 'open'});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._svgContainer;
            this.style.height="100%";
            this._outerRad = 0.0;
this._endAngleDeg = 0.0;
this._endAngleDegMax = 145.0;
this._startAngleDeg = -145.0;
const bcRect = this.getBoundingClientRect();
this._widgetHeight = bcRect.height;
this._widgetWidth = bcRect.width;

// Guide Lines
this._ringColorCode ="black";
this._guideOpacity = 0.75;
this.ringThickness = 5;
this._bracketThickness = 5;

if (this._widgetHeight < this._widgetWidth){
    this._widgetWidth = this._widgetHeight;
   }

   this.redraw();





        };

        redraw() {
            if (!this._svgContainer){
                this._svgContainer = window._d3.select(this._shadowRoot)
                .append("svg:svg")
                .attr("id", "gauge")
                .attr("width", this._widgetWidth)
                .attr("height", this._widgetWidth);
               }
 

        }
    
    
    });
        
})();