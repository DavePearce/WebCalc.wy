'use strict';
function std$array$equals$av1Tav1TII(lhs, rhs, start, end) {
   return ((lhs.length >= end) && (rhs.length >= end)) && function() {
      for(let i = start;i < end;i = i + 1) {
         if(!Wy.equals(lhs[i], rhs[i]))  {
            return false;
         }
      }
      return true;
   }();
}
function std$array$equals$av1TIav1TII(l, l_start, r, r_start, length) {
   return ((l.length >= (l_start + length)) && (r.length >= (r_start + length))) && function() {
      for(let i = 0;i < length;i = i + 1) {
         if(!Wy.equals(l[l_start + i], r[r_start + i]))  {
            return false;
         }
      }
      return true;
   }();
}
function std$array$contains$av1Tv1TII(lhs, item, start, end) {
   return function() {
      for(let i = start;i < end;i = i + 1) {
         if(Wy.equals(lhs[i], item))  {
            return true;
         }
      }
      return false;
   }();
}
function std$array$matches$av1Tav1T(arr, subseq) {
   return std$array$matches$av1Tav1TII(Wy.copy(arr), Wy.copy(subseq), 0, arr.length);
}
function std$array$matches$av1Tav1TII(arr, subseq, start, end) {
   return function() {
      for(let i = start;i < end;i = i + 1) {
         if(std$array$equals$av1TIav1TII(Wy.copy(arr), i, Wy.copy(subseq), 0, subseq.length))  {
            return true;
         }
      }
      return false;
   }();
}
function std$array$first_match$av1Tav1TI(arr, subseq, index) {
   return std$array$equals$av1TIav1TII(Wy.copy(arr), index, Wy.copy(subseq), 0, subseq.length) && (!std$array$matches$av1Tav1TII(Wy.copy(arr), Wy.copy(subseq), 0, index));
}
function std$array$unique_elements$av1TI(items, end) {
   return function() {
      for(let i = 0;i < end;i = i + 1) {
         for(let j = i + 1;j < end;j = j + 1) {
            if(!(!Wy.equals(items[i], items[j])))  {
               return false;
            }
         }
      }
      return true;
   }();
}
function std$array$first_index_of$av1Tv1T(items, item) {
   let index;
   return std$array$first_index_of$av1Tv1TI(Wy.copy(items), Wy.copy(item), 0);
}
function std$array$first_index_of$av1Tv1TI(items, item, start) {
   let index;
   for(let i = start;i < items.length;i = i + 1) {
      if(Wy.equals(items[i], item))  {
         return i;
      }
   }
   return null;
}
function std$array$first_index_of$av1Tav1T(items, item) {
   let index;
   return std$array$first_index_of$av1Tav1TI(Wy.copy(items), Wy.copy(item), 0);
}
function std$array$first_index_of$av1Tav1TI(items, item, start) {
   let index;
   let i = start;
   while(i <= (items.length - item.length))  {
      let j = 0;
      while(j < item.length)  {
         if(!Wy.equals(items[i + j], item[j]))  {
            break;
         }
          {
            const $0 = j + 1;
            j = $0;
         }
      }
      if(j === item.length)  {
         return i;
      }
       {
         const $1 = i + 1;
         i = $1;
      }
   }
   return null;
}
function std$array$last_index_of$av1Tv1T(items, item) {
   let index;
   let i = items.length;
   while(i > 0)  {
       {
         const $2 = i - 1;
         i = $2;
      }
      if(Wy.equals(items[i], item))  {
         return i;
      }
   }
   return null;
}
function std$array$replace_all$av1Tv1Tv1T(items, old, n) {
   let r;
   let oldItems = Wy.copy(items);
   for(let i = 0;i < items.length;i = i + 1) {
      if(Wy.equals(oldItems[i], old))  {
         items[i] = Wy.copy(n);
      }
   }
   return Wy.copy(items);
}
function std$array$replace_first$av1Tv1Tv1T(items, old, n) {
   let r;
   let oldItems = Wy.copy(items);
   for(let i = 0;i < items.length;i = i + 1) {
      if(Wy.equals(oldItems[i], old))  {
         items[i] = Wy.copy(n);
         return Wy.copy(items);
      }
   }
   return Wy.copy(items);
}
function std$array$replace_first$av1Tav1Tav1T(items, old, n) {
   let r;
   let i = std$array$first_index_of$av1Tav1T(Wy.copy(items), Wy.copy(old));
   if(i === null)  {
      return Wy.copy(items);
   } else  {
      if(old.length === n.length)  {
         return std$array$copy$av1TQ4uintav1TQ4uintQ4uint(Wy.copy(n), 0, Wy.copy(items), i, old.length);
      } else  {
         let size = (items.length - old.length) + n.length;
         let nitems = std$array$resize$av1TI(Wy.copy(items), size);
          {
            const $3 = std$array$copy$av1TQ4uintav1TQ4uintQ4uint(Wy.copy(n), 0, Wy.copy(nitems), i, n.length);
            nitems = $3;
         }
         let remainder = (size - i) - n.length;
         return std$array$copy$av1TQ4uintav1TQ4uintQ4uint(Wy.copy(items), i + old.length, Wy.copy(nitems), i + n.length, remainder);
      }
   }
}
function std$array$replace_all$av1Tav1Tav1T(items, old, n) {
   let r;
   while(std$array$first_index_of$av1Tav1T(Wy.copy(items), Wy.copy(old)) !== null)  {
       {
         const $4 = std$array$replace_first$av1Tav1Tav1T(Wy.copy(items), Wy.copy(old), Wy.copy(n));
         items = $4;
      }
   }
   return Wy.copy(items);
}
function std$array$replace$av1Tav1Taav1T(items, old, nn) {
   let r;
   let i = 0;
   while((i < nn.length) && (std$array$first_index_of$av1Tav1T(Wy.copy(items), Wy.copy(old)) !== null))  {
       {
         const $5 = std$array$replace_first$av1Tav1Tav1T(Wy.copy(items), Wy.copy(old), Wy.copy(nn[i]));
         items = $5;
      }
       {
         const $6 = i + 1;
         i = $6;
      }
   }
   return Wy.copy(items);
}
function std$array$slice$av1TII(items, start, end) {
   let r;
   if(start === end)  {
      return [];
   } else  {
      let nitems = Wy.array(items[0], end - start);
      return std$array$copy$av1TQ4uintav1TQ4uintQ4uint(Wy.copy(items), start, Wy.copy(nitems), 0, nitems.length);
   }
}
function std$array$append$av1Tav1T(lhs, rhs) {
   let r;
   if(lhs.length === 0)  {
      return Wy.copy(rhs);
   } else  {
      let rs = std$array$resize$av1TIv1T(Wy.copy(lhs), lhs.length + rhs.length, Wy.copy(lhs[0]));
      return std$array$copy$av1TQ4uintav1TQ4uintQ4uint(Wy.copy(rhs), 0, Wy.copy(rs), lhs.length, rhs.length);
   }
}
function std$array$append$av1Tv1T(items, item) {
   let r;
   let nitems = Wy.array(item, items.length + 1);
   for(let i = 0;i < items.length;i = i + 1) {
      nitems[i] = Wy.copy(items[i]);
   }
   return Wy.copy(nitems);
}
function std$array$append$v1Tav1T(item, items) {
   let r;
   let nitems = Wy.array(item, items.length + 1);
   for(let i = 0;i < items.length;i = i + 1) {
      nitems[i + 1] = Wy.copy(items[i]);
   }
   return Wy.copy(nitems);
}
function std$array$resize$av1TI(src, size) {
   let result;
   if(src.length === 0)  {
      return Wy.copy(src);
   } else  {
      result = Wy.array(src[0], size);
      for(let i = 0;i < size;i = i + 1) {
         result[i] = Wy.copy(src[i]);
      }
      return Wy.copy(result);
   }
}
function std$array$resize$av1TIv1T(items, size, item) {
   let result;
   let nitems = Wy.array(item, size);
   let i = 0;
   while((i < size) && (i < items.length))  {
      nitems[i] = Wy.copy(items[i]);
       {
         const $7 = i + 1;
         i = $7;
      }
   }
   return Wy.copy(nitems);
}
function std$array$copy$av1TQ4uintav1TQ4uintQ4uint(src, srcStart, dest, destStart, length) {
   let result;
   let j = destStart;
   let srcEnd = srcStart + length;
   for(let i = srcStart;i < srcEnd;i = i + 1) {
      dest[j] = Wy.copy(src[i]);
       {
         const $8 = j + 1;
         j = $8;
      }
   }
   return Wy.copy(dest);
}
function std$array$remove$av1TQ4uint(src, ith) {
   let result;
   result = Wy.array(src[0], src.length - 1);
    {
      const $9 = std$array$copy$av1TQ4uintav1TQ4uintQ4uint(Wy.copy(src), 0, Wy.copy(result), 0, ith);
      result = $9;
   }
   return std$array$copy$av1TQ4uintav1TQ4uintQ4uint(Wy.copy(src), ith + 1, Wy.copy(result), ith, result.length - ith);
}
function std$array$swap$av1TQ4uintQ4uint(src, ith, jth) {
   let result;
   let tmp = Wy.copy(src[ith]);
    {
      const $10 = Wy.copy(src[jth]);
      src[ith] = $10;
   }
   src[jth] = Wy.copy(tmp);
   return Wy.copy(src);
}
function std$ascii$char$type(x) {
   return (0 <= x) && (x <= 127);
}
function std$ascii$letter$type(x) {
   return ((97 <= x) && (x <= 122)) || ((65 <= x) && (x <= 90));
}
function std$ascii$uppercase$type(x) {
   return (65 <= x) && (x <= 90);
}
function std$ascii$lowercase$type(x) {
   return (97 <= x) && (x <= 122);
}
function std$ascii$digit$type(x) {
   return (48 <= x) && (x <= 57);
}
let std$ascii$NUL$static = 0;
let std$ascii$SOH$static = 1;
let std$ascii$STX$static = 2;
let std$ascii$ETX$static = 3;
let std$ascii$EOT$static = 4;
let std$ascii$ENQ$static = 5;
let std$ascii$ACK$static = 6;
let std$ascii$BEL$static = 7;
let std$ascii$BS$static = 8;
let std$ascii$HT$static = 9;
let std$ascii$LF$static = 10;
let std$ascii$VT$static = 11;
let std$ascii$FF$static = 12;
let std$ascii$CR$static = 13;
let std$ascii$SO$static = 14;
let std$ascii$SI$static = 15;
let std$ascii$DLE$static = 16;
let std$ascii$DC1$static = 17;
let std$ascii$DC2$static = 18;
let std$ascii$DC3$static = 19;
let std$ascii$DC4$static = 20;
let std$ascii$NAK$static = 21;
let std$ascii$SYN$static = 22;
let std$ascii$ETB$static = 23;
let std$ascii$CAN$static = 24;
let std$ascii$EM$static = 25;
let std$ascii$SUB$static = 26;
let std$ascii$ESC$static = 27;
let std$ascii$FS$static = 28;
let std$ascii$GS$static = 29;
let std$ascii$RS$static = 30;
let std$ascii$US$static = 31;
let std$ascii$DEL$static = 127;
function std$ascii$to_byte$Q4char(v) {
   let mask = 0b1;
   let r = 0b0;
   for(let i = 0;i < 8;i = i + 1) {
      if((v % 2) === 1)  {
          {
            const $11 = r | mask;
            r = $11;
         }
      }
       {
         const $12 = Math.floor(v / 2);
         v = $12;
      }
       {
         const $13 = mask << 1;
         mask = $13;
      }
   }
   return r;
}
function std$ascii$to_bytes$Q6string(s) {
   let r = Wy.array(0b0, s.length);
   for(let i = 0;i < s.length;i = i + 1) {
      r[i] = std$ascii$to_byte$Q4char(s[i]);
   }
   return Wy.copy(r);
}
function std$ascii$from_bytes$aU(data) {
   let r = Wy.array(0, data.length);
   for(let i = 0;i < data.length;i = i + 1) {
      let v = std$integer$to_uint$U(data[i]);
      if(v >= 127)  {
         v = 63;
      }
      r[i] = v;
   }
   return Wy.copy(r);
}
function std$ascii$is_upper_case$Q4char(c) {
   return (65 <= c) && (c <= 90);
}
function std$ascii$is_lower_case$Q4char(c) {
   return (97 <= c) && (c <= 122);
}
function std$ascii$is_letter$Q4char(c) {
   return ((97 <= c) && (c <= 122)) || ((65 <= c) && (c <= 90));
}
function std$ascii$is_digit$Q4char(c) {
   return (48 <= c) && (c <= 57);
}
function std$ascii$is_whitespace$Q4char(c) {
   return (c === 32) || ((c === 9) || ((c === 10) || (c === 13)));
}
function std$ascii$to_string$I(item) {
   let sign;
   if(item < 0)  {
      sign = false;
       {
         const $14 = -item;
         item = $14;
      }
   } else  {
      sign = true;
   }
   let tmp = item;
   let digits = 0;
   do {
       {
         const $15 = Math.floor(tmp / 10);
         tmp = $15;
      }
       {
         const $16 = digits + 1;
         digits = $16;
      }
   } while(tmp !== 0);
   let r = Wy.array(48, digits);
   do {
      let remainder = item % 10;
       {
         const $17 = Math.floor(item / 10);
         item = $17;
      }
      let digit = 48 + remainder;
       {
         const $18 = digits - 1;
         digits = $18;
      }
      r[digits] = digit;
   } while(item !== 0);
   if(sign)  {
      return Wy.copy(r);
   } else  {
      return std$array$append$av1Tav1T(Wy.toString("-"), Wy.copy(r));
   }
}
function std$ascii$to_string$aI(items) {
   let r = Wy.toString("");
   for(let i = 0;i < items.length;i = i + 1) {
      if(i !== 0)  {
          {
            const $19 = std$array$append$av1Tav1T(Wy.copy(r), Wy.toString(","));
            r = $19;
         }
      }
       {
         const $20 = std$array$append$av1Tav1T(Wy.copy(r), std$ascii$to_string$I(items[i]));
         r = $20;
      }
   }
   return Wy.copy(r);
}
function std$ascii$parse_int$Q5ascii6string(input) {
   let start = 0;
   let negative;
   if(input[0] === 45)  {
      negative = true;
       {
         const $21 = start + 1;
         start = $21;
      }
   } else  {
      negative = false;
   }
   let r = 0;
   for(let i = start;i < input.length;i = i + 1) {
      let c = input[i];
       {
         const $22 = r * 10;
         r = $22;
      }
      if(!std$ascii$is_digit$Q4char(c))  {
         return null;
      }
       {
         const $23 = r + (c - 48);
         r = $23;
      }
   }
   if(negative)  {
      return -r;
   } else  {
      return r;
   }
}
function std$filesystem$uint$type(x) {
   return x >= 0;
}
let std$filesystem$READONLY$static = 0;
let std$filesystem$READWRITE$static = 1;
function std$filesystem$rwMode$type(x) {
   return (x === std$filesystem$READONLY$static) || (x === std$filesystem$READWRITE$static);
}
function std$integer$i8$type(x) {
   return (x >= (-128)) && (x <= 127);
}
function std$integer$i16$type(x) {
   return (x >= (-32768)) && (x <= 32768);
}
function std$integer$i32$type(x) {
   return (x >= (-2147483648)) && (x <= 2147483647);
}
function std$integer$u8$type(x) {
   return (x >= 0) && (x <= 255);
}
function std$integer$u16$type(x) {
   return (x >= 0) && (x <= 65535);
}
function std$integer$u32$type(x) {
   return (x >= 0) && (x <= 4294967295);
}
function std$integer$uint$type(x) {
   return x >= 0;
}
function std$integer$nat$type(x) {
   return x >= 0;
}
function std$integer$to_unsigned_byte$Q2u8(v) {
   let mask = 0b1;
   let r = 0b0;
   for(let i = 0;i < 8;i = i + 1) {
      if((v % 2) === 1)  {
          {
            const $24 = r | mask;
            r = $24;
         }
      }
       {
         const $25 = Math.floor(v / 2);
         v = $25;
      }
       {
         const $26 = mask << 1;
         mask = $26;
      }
   }
   return r;
}
function std$integer$to_signed_byte$Q2i8(v) {
   let u;
   if(v >= 0)  {
      u = v;
   } else  {
      u = v + 256;
   }
   return std$integer$to_unsigned_byte$Q2u8(u);
}
function std$integer$to_string$U(b) {
   let r = Wy.array(0, 98);
   for(let i = 0;i < 8;i = i + 1) {
      if((b & 0b1) === 0b1)  {
         r[7 - i] = 49;
      } else  {
         r[7 - i] = 48;
      }
       {
         const $27 = b >> 1;
         b = $27;
      }
   }
   return Wy.copy(r);
}
function std$integer$to_uint$U(b) {
   let r = 0;
   let base = 1;
   while(b !== 0b0)  {
      if((b & 0b1) === 0b1)  {
          {
            const $28 = r + base;
            r = $28;
         }
      }
       {
         const $29 = (b >> 1) & 0b1111111;
         b = $29;
      }
       {
         const $30 = base * 2;
         base = $30;
      }
   }
   return r;
}
function std$integer$to_uint$aU(bytes) {
   let val = 0;
   let base = 1;
   for(let i = 0;i < bytes.length;i = i + 1) {
      let v = std$integer$to_uint$U(bytes[i]) * base;
       {
         const $31 = val + v;
         val = $31;
      }
       {
         const $32 = base * 256;
         base = $32;
      }
   }
   return val;
}
function std$integer$to_int$U(b) {
   let r = 0;
   let base = 1;
   while(b !== 0b0)  {
      if((b & 0b1) === 0b1)  {
          {
            const $33 = r + base;
            r = $33;
         }
      }
       {
         const $34 = (b >> 1) & 0b1111111;
         b = $34;
      }
       {
         const $35 = base * 2;
         base = $35;
      }
   }
   if(r >= 128)  {
      return -(256 - r);
   } else  {
      return r;
   }
}
function std$integer$to_int$aU(bytes) {
   let val = 0;
   let base = 1;
   for(let i = 0;i < bytes.length;i = i + 1) {
      let v = std$integer$to_uint$U(bytes[i]) * base;
       {
         const $36 = val + v;
         val = $36;
      }
       {
         const $37 = base * 256;
         base = $37;
      }
   }
   if(val >= Math.floor(base / 2))  {
      return -(base - val);
   } else  {
      return val;
   }
}
function std$math$abs$I(x) {
   let r;
   if(x < 0)  {
      return -x;
   } else  {
      return x;
   }
}
function std$math$max$II(a, b) {
   let r;
   if(a < b)  {
      return b;
   } else  {
      return a;
   }
}
function std$math$min$II(a, b) {
   let r;
   if(a > b)  {
      return b;
   } else  {
      return a;
   }
}
function std$math$pow$II(base, exponent) {
   let r = 1;
   for(let i = 0;i < exponent;i = i + 1) {
       {
         const $38 = r * base;
         r = $38;
      }
   }
   return r;
}
function std$math$isqrt$I(x) {
   let r;
   let square = 1;
   let delta = 3;
   while(square <= x)  {
       {
         const $39 = square + delta;
         square = $39;
      }
       {
         const $40 = delta + 2;
         delta = $40;
      }
   }
   return Math.floor(delta / 2) - 1;
}
function std$set$ArraySet$type(v) {
   return std$array$unique_elements$av1TI(Wy.copy(v.items), v.length);
}
function std$set$insert$Q8ArraySetv1T(set, item) {
   let r;
   if(std$array$contains$av1Tv1TII(Wy.copy(set.items), Wy.copy(item), 0, set.length))  {
      return Wy.copy(set);
   } else  {
      return std$vector$push$Q6Vectorv1T(Wy.copy(set), Wy.copy(item));
   }
}
function std$utf8$uint$type(x) {
   return x >= 0;
}
function std$utf8$char$type(c) {
   return (0 <= c) && (c <= 1112064);
}
function std$utf8$is_internal$U(data) {
   return (data & std$utf8$TRAILING_BYTE_MASK$static) === data;
}
function std$utf8$is_start_one$U(data) {
   return (data & std$utf8$ONE_BYTE_MASK$static) === data;
}
function std$utf8$is_start_two$U(data) {
   return (data & std$utf8$TWO_BYTE_MASK$static) === data;
}
function std$utf8$is_start_three$U(data) {
   return (data & std$utf8$THREE_BYTE_MASK$static) === data;
}
function std$utf8$is_start_four$U(data) {
   return (data & std$utf8$THREE_BYTE_MASK$static) === data;
}
function std$utf8$is_start_n$UQ4uint(data, len) {
   return ((len !== 1) || (std$utf8$is_start_one$U(data) || (std$utf8$is_start_two$U(data) || (std$utf8$is_start_three$U(data) || std$utf8$is_start_four$U(data))))) && ((len !== 2) || (std$utf8$is_start_two$U(data) || (std$utf8$is_start_three$U(data) || std$utf8$is_start_four$U(data)))) && ((len !== 3) || (std$utf8$is_start_three$U(data) || std$utf8$is_start_four$U(data))) && ((len !== 4) || std$utf8$is_start_four$U(data));
}
function std$utf8$valid_2nd_byte$aUQ4uint(chars, i) {
   return ((i <= 0) || (!std$utf8$is_internal$U(chars[i]))) || std$utf8$is_start_n$UQ4uint(chars[i - 1], 2);
}
function std$utf8$valid_3rd_byte$aUQ4uint(chars, i) {
   return ((i <= 1) || (!std$utf8$is_internal$U(chars[i]))) || std$utf8$is_start_n$UQ4uint(chars[i - 2], 3);
}
function std$utf8$valid_4th_byte$aUQ4uint(chars, i) {
   return ((i <= 2) || (!std$utf8$is_internal$U(chars[i]))) || std$utf8$is_start_n$UQ4uint(chars[i - 2], 4);
}
function std$utf8$string$type(chars) {
   return function() {
      for(let i = 0;i < chars.length;i = i + 1) {
         if(!std$utf8$valid_2nd_byte$aUQ4uint(Wy.copy(chars), i))  {
            return false;
         }
      }
      return true;
   }() && function() {
      for(let i = 0;i < chars.length;i = i + 1) {
         if(!std$utf8$valid_3rd_byte$aUQ4uint(Wy.copy(chars), i))  {
            return false;
         }
      }
      return true;
   }() && function() {
      for(let i = 0;i < chars.length;i = i + 1) {
         if(!std$utf8$valid_4th_byte$aUQ4uint(Wy.copy(chars), i))  {
            return false;
         }
      }
      return true;
   }();
}
let std$utf8$ONE_BYTE_MASK$static = 0b1111111;
let std$utf8$TWO_BYTE_MASK$static = 0b11011111;
let std$utf8$THREE_BYTE_MASK$static = 0b11101111;
let std$utf8$FOUR_BYTE_MASK$static = 0b11110111;
let std$utf8$TRAILING_BYTE_MASK$static = 0b10111111;
function std$utf8$length$Q6string(str) {
   let x;
   let len = 0;
   for(let i = 0;i < str.length;i = i + 1) {
      let data = str[i];
      if((data & std$utf8$TRAILING_BYTE_MASK$static) !== data)  {
          {
            const $41 = len + 1;
            len = $41;
         }
      }
   }
   return len;
}
function std$vector$Vector$type($) {
   return $.length <= $.items.length;
}
function std$vector$Vector() {
   return new Wy.Record({items: [], length: 0});
}
function std$vector$Vector$av1T(items) {
   return new Wy.Record({items: Wy.copy(items), length: items.length});
}
function std$vector$top$Q6Vector(vec) {
   return Wy.copy(vec.items[vec.length - 1]);
}
function std$vector$size$Q6Vector(vec) {
   let r;
   return vec.length;
}
function std$vector$get$Q6VectorI(vec, ith) {
   let item;
   return Wy.copy(vec.items[ith]);
}
function std$vector$push$Q6Vectorv1T(vec, item) {
   let nvec;
   if(vec.length === vec.items.length)  {
      let nlen = (vec.length * 2) + 1;
       {
         const $42 = std$array$resize$av1TIv1T(Wy.copy(vec.items), nlen, Wy.copy(item));
         vec.items = $42;
      }
   } else  {
       {
         const $43 = Wy.copy(item);
         vec.items[vec.length] = $43;
      }
   }
    {
      const $44 = vec.length + 1;
      vec.length = $44;
   }
   return Wy.copy(vec);
}
function std$vector$push_all$Q6Vectorav1T(vec, items) {
   let nvec;
   let len = vec.length + items.length;
   if(items.length === 0)  {
      return Wy.copy(vec);
   } else  {
      if(len > vec.items.length)  {
         let nlen = (vec.length * 2) + items.length;
          {
            const $45 = std$array$resize$av1TIv1T(Wy.copy(vec.items), nlen, Wy.copy(items[0]));
            vec.items = $45;
         }
      }
   }
    {
      const $46 = std$array$copy$av1TQ4uintav1TQ4uintQ4uint(Wy.copy(items), 0, Wy.copy(vec.items), vec.length, items.length);
      vec.items = $46;
   }
    {
      const $47 = vec.length + items.length;
      vec.length = $47;
   }
   return Wy.copy(vec);
}
function std$vector$pop$Q6Vector(vec) {
   let nvec;
    {
      const $48 = vec.length - 1;
      vec.length = $48;
   }
   return Wy.copy(vec);
}
function std$vector$set$Q6VectorIv1T(vec, ith, item) {
   let result;
   vec.items[ith] = Wy.copy(item);
   return Wy.copy(vec);
}
function std$vector$remove$Q6VectorI(vec, ith) {
   let result;
   let items = std$array$remove$av1TQ4uint(Wy.copy(vec.items), ith);
   return new Wy.Record({items: Wy.copy(items), length: vec.length - 1});
}
function std$vector$swap$Q6VectorQ4uintQ4uint(vec, ith, jth) {
   let result;
    {
      const $49 = std$array$swap$av1TQ4uintQ4uint(Wy.copy(vec.items), ith, jth);
      vec.items = $49;
   }
   return Wy.copy(vec);
}
function std$vector$clear$Q6Vector(vec) {
   let r;
   vec.length = 0;
   return Wy.copy(vec);
}
function std$vector$equals$Q6VectorQ6Vector(lhs, rhs) {
   return (lhs.length === rhs.length) && std$array$equals$av1Tav1TII(Wy.copy(lhs.items), Wy.copy(rhs.items), 0, lhs.length);
}
