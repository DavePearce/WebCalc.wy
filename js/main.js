'use strict';
const main$ADD$static = 0;
const main$SUBTRACT$static = 1;
const main$MULTIPLY$static = 2;
const main$DIVIDE$static = 3;
function main$push$IQ5State$Q5State(mode, s) {
   let r;
   let as;
    {
      const $0 = main$execute$Q5State$Q5StateaQ2io6Action(Wy.copy(s));
      s = $0[0];
      as = $0[1];
   }
   s.mode = mode;
   return Wy.copy(s);
}
function main$execute$Q5State$Q5StateaQ2io6Action(s) {
   let as;
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
   return [Wy.copy(s), []];
}
function main$clear$Q5State$Q5StateaQ2io6Action(s) {
   let as;
   let r;
   s.accumulator = 0;
   s.current = null;
   s.mode = main$ADD$static;
   return [Wy.copy(s), []];
}
function main$enter$IQ5State$Q5State(digit, s) {
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
      return [main$push$IQ5State$Q5State(main$ADD$static, Wy.copy(s)), []];
   };
}();
const main$SUBTRACTER$static = function() {
   return function(s) {
      return [main$push$IQ5State$Q5State(main$SUBTRACT$static, Wy.copy(s)), []];
   };
}();
const main$MULTIPLIER$static = function() {
   return function(s) {
      return [main$push$IQ5State$Q5State(main$MULTIPLY$static, Wy.copy(s)), []];
   };
}();
const main$DIVIDER$static = function() {
   return function(s) {
      return [main$push$IQ5State$Q5State(main$DIVIDE$static, Wy.copy(s)), []];
   };
}();
const main$BUTTON_STYLE$static = "background-color: #4CAF50; color: white; border: none; padding: 15px 32px; display: inline-block; font-size: 16px;";
function main$button$Q6stringQ11Transformer$Q4Node(label, fn) {
   return web$html$button$aQ9AttributeQ4Node$Q4Node([web$html$style$Q6string$Q9Attribute(Wy.copy(main$BUTTON_STYLE$static)), web$html$click$Q7handler$Q9Attribute(function(fn) {
      return function(e, s) {
         return fn(Wy.copy(s));
      };
   }(fn))], Wy.copy(label));
}
function main$numeric$I$Q4Node(value) {
   let label = Wy.fromString(std$ascii$to_string$I$Q6string(value));
   return main$button$Q6stringQ11Transformer$Q4Node(Wy.copy(label), function(value) {
      return function(s) {
         return [main$enter$IQ5State$Q5State(value, Wy.copy(s)), []];
      };
   }(value));
}
function main$view$Q5State$Q4Node(s) {
   let current;
   if(s.current === null)  {
      current = s.accumulator;
   } else  {
      current = s.current;
   }
   return web$html$div$aQ4Node$Q4Node([web$html$h1$Q4Node$Q4Node(Wy.fromString(std$ascii$to_string$I$Q6string(current))), web$html$div$aQ4Node$Q4Node([main$numeric$I$Q4Node(7), main$numeric$I$Q4Node(8), main$numeric$I$Q4Node(9), main$button$Q6stringQ11Transformer$Q4Node("/", main$DIVIDER$static)]), web$html$div$aQ4Node$Q4Node([main$numeric$I$Q4Node(4), main$numeric$I$Q4Node(5), main$numeric$I$Q4Node(6), main$button$Q6stringQ11Transformer$Q4Node("*", main$MULTIPLIER$static)]), web$html$div$aQ4Node$Q4Node([main$numeric$I$Q4Node(1), main$numeric$I$Q4Node(2), main$numeric$I$Q4Node(3), main$button$Q6stringQ11Transformer$Q4Node("+", main$ADDER$static)]), web$html$div$aQ4Node$Q4Node([main$button$Q6stringQ11Transformer$Q4Node("C", function(p0) {
      return main$clear$Q5State$Q5StateaQ2io6Action(p0);
   }), main$numeric$I$Q4Node(0), main$button$Q6stringQ11Transformer$Q4Node("=", function(p0) {
      return main$execute$Q5State$Q5StateaQ2io6Action(p0);
   }), main$button$Q6stringQ11Transformer$Q4Node("-", main$SUBTRACTER$static)])]);
}
function main$main() {
   let state = new Wy.Record({current: null, accumulator: 0, mode: main$ADD$static});
   return new Wy.Record({model: Wy.copy(state), view: function(p0) {
      return main$view$Q5State$Q4Node(p0);
   }, process: function(p0, p1) {
      return main$dummy_processor$qQ2io5StateQ2io6Action$V(p0, p1);
   }});
}
function main$dummy_processor$qQ2io5StateQ2io6Action$V(st, as) {
    {
   }
}
