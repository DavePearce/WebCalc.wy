'use strict';
const main$ADD$static = 0;
const main$SUBTRACT$static = 1;
const main$MULTIPLY$static = 2;
const main$DIVIDE$static = 3;
function main$push$IQ5State(mode, s) {
   let r;
    {
      const $0 = main$execute$Q5State(Wy.copy(s));
      s = $0;
   }
   s.mode = mode;
   return Wy.copy(s);
}
function main$execute$Q5State(s) {
   let r;
   if((typeof s.current) === "number")  {
      switch(s.mode) {
         case main$ADD$static: {
             {
               const $1 = s.accumulator + s.current;
               s.accumulator = $1;
            }
            break;
         }
         case main$SUBTRACT$static: {
             {
               const $2 = s.accumulator - s.current;
               s.accumulator = $2;
            }
            break;
         }
         case main$MULTIPLY$static: {
             {
               const $3 = s.accumulator * s.current;
               s.accumulator = $3;
            }
            break;
         }
         case main$DIVIDE$static: {
             {
               const $4 = Math.floor(s.accumulator / s.current);
               s.accumulator = $4;
            }
            break;
         }
      }
   }
   s.current = null;
   return Wy.copy(s);
}
function main$clear$Q5State(s) {
   let r;
   s.accumulator = 0;
   s.current = null;
   s.mode = main$ADD$static;
   return Wy.copy(s);
}
function main$enter$IQ5State(digit, s) {
   let r;
   if(s.current === null)  {
      s.current = digit;
   } else  {
       {
         const $5 = (10 * s.current) + digit;
         s.current = $5;
      }
   }
   return Wy.copy(s);
}
const main$ADDER$static = function() {
   return function(s) {
      return main$push$IQ5State(main$ADD$static, Wy.copy(s));
   };
}();
const main$SUBTRACTER$static = function() {
   return function(s) {
      return main$push$IQ5State(main$SUBTRACT$static, Wy.copy(s));
   };
}();
const main$MULTIPLIER$static = function() {
   return function(s) {
      return main$push$IQ5State(main$MULTIPLY$static, Wy.copy(s));
   };
}();
const main$DIVIDER$static = function() {
   return function(s) {
      return main$push$IQ5State(main$DIVIDE$static, Wy.copy(s));
   };
}();
const main$BUTTON_STYLE$static = Wy.toString("background-color: #4CAF50; color: white; border: none; padding: 15px 32px; display: inline-block; font-size: 16px;");
function main$button$Q5ascii6stringQ11Transformer(label, fn) {
   return w3c$html$button$aQ9AttributeQ4Node([w3c$html$style$Q5ascii6string(Wy.copy(main$BUTTON_STYLE$static)), w3c$html$click$Q7handler(function(fn) {
      return function(e, s) {
         return fn(Wy.copy(s));
      };
   }(fn))], Wy.copy(label));
}
function main$numeric$I(value) {
   let label = std$ascii$to_string$I(value);
   return main$button$Q5ascii6stringQ11Transformer(Wy.copy(label), function(value) {
      return function(s) {
         return main$enter$IQ5State(value, Wy.copy(s));
      };
   }(value));
}
function main$view$Q5State(s) {
   let current;
   if(s.current === null)  {
      current = s.accumulator;
   } else  {
      current = s.current;
   }
   return w3c$html$div$aQ4Node([w3c$html$h1$Q4Node(std$ascii$to_string$I(current)), w3c$html$div$aQ4Node([main$numeric$I(7), main$numeric$I(8), main$numeric$I(9), main$button$Q5ascii6stringQ11Transformer(Wy.toString("/"), main$DIVIDER$static)]), w3c$html$div$aQ4Node([main$numeric$I(4), main$numeric$I(5), main$numeric$I(6), main$button$Q5ascii6stringQ11Transformer(Wy.toString("*"), main$MULTIPLIER$static)]), w3c$html$div$aQ4Node([main$numeric$I(1), main$numeric$I(2), main$numeric$I(3), main$button$Q5ascii6stringQ11Transformer(Wy.toString("+"), main$ADDER$static)]), w3c$html$div$aQ4Node([main$button$Q5ascii6stringQ11Transformer(Wy.toString("C"), function(p0) {
      return main$clear$Q5State(p0);
   }), main$numeric$I(0), main$button$Q5ascii6stringQ11Transformer(Wy.toString("="), function(p0) {
      return main$execute$Q5State(p0);
   }), main$button$Q5ascii6stringQ11Transformer(Wy.toString("-"), main$SUBTRACTER$static)])]);
}
function main$main() {
   return new Wy.Record({model: new Wy.Record({current: null, accumulator: 0, mode: main$ADD$static}), view: function(p0) {
      return main$view$Q5State(p0);
   }});
}
