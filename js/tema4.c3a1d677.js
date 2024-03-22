(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema4"],{"3eb5":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno"),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[e._m(0),e._m(1),t("p",[e._v("Los operadores son símbolos que sirven para manipular datos. Y en un algoritmo es necesario dejar un espacio en blanco a cada lado del signo aritmético. Los operadores y las funciones que realizan se clasifican como se indica a continuación:")]),t("div",{staticClass:"contenedor-listas my-5 mx-auto"},[t("ul",{staticClass:"lista-ul--separador"},[t("li",[t("i",{staticClass:"fas fa-circle"}),t("p",[t("b",[e._v(" Aritméticos: ")]),t("b-none",[e._v(" permiten realizar operaciones entre datos de tipo numérico y dan como resultado otro valor de tipo numérico. Ejemplo: producto o multiplicación (*); división (/); suma (+); resta (-); asignación (=).")])],1)]),t("li",[t("i",{staticClass:"fas fa-circle"}),t("p",[t("b",[e._v(" Alfanuméricos: ")]),t("b-none",[e._v(" permiten operar con datos de tipo carácter (letras) o cadenas de texto. La mayoría de los lenguajes de programación admiten el operador + para realizar la concatenación (unión) de caracteres o cadenas.")])],1)]),t("li",[t("i",{staticClass:"fas fa-circle"}),t("p",[t("b",[e._v("Relacionales:")]),t("b-none",[e._v(" permiten la comparación entre datos del mismo tipo de dato y dan como resultado dos valores posibles: verdadero o falso. Ejemplo: igual a (=); menor que (<); mayor que (>,) mayor e igual que (>=).")])],1)]),t("li",[t("i",{staticClass:"fas fa-circle"}),t("p",[t("b",[e._v(" Lógicos: ")]),t("b-none",[e._v(" posibilitan la evaluación lógica de dos expresiones de tipo lógico. Dan como resultado uno de dos valores posibles: verdadero o falso. Ejemplo: negación (no); conjunción (y); disyunción(o).")])],1)])])]),t("div",{staticClass:"h5"},[e._v("A. Jerarquía en los operadores")]),t("p",[e._v("Las computadoras ejecutan los operadores en un orden establecido y el siguiente es el orden (jerarquía) para ejecutar operadores:")]),e._m(2),t("P",[e._v("El siguiente ejemplo permite comprender mejor la jerarquía de operadores: ")]),t("div",{staticClass:"tabla-b my-5"},[t("table",[e._m(3),t("tbody",[t("tr",[t("th",[e._v("1")]),t("td",[e._v("7 + 8")]),t("td",[e._v("Primero que todo lo que más valor tiene en la jerarquía son los paréntesis de manera que y en particular los más interiores de esta forma el computador se interesará en resolver primero el contenido de "),t("b",[e._v("(7 + 8). ")]),t("b-none",[e._v("Y el resultado será ")]),t("b",[e._v("15.")]),t("b-none"),t("br"),t("br"),e._v("De esta forma, la expresión queda reducida a:"),t("br"),t("b",[e._v("(2 + 15 * 16 + 3^2) /4 +5")])],1)]),t("tr",[t("th",[e._v("2")]),t("td",[e._v("3^2")]),t("td",[e._v("De la expresión resultante luego de la operación "),t("b",[e._v("1, ")]),t("b-none",[e._v("se observa que nuevamente hay un paréntesis por reducir, de manera que la computadora intentará resolver su contenido primero, como dentro del paréntesis está la expresión de elevar al cuadrado el número ")]),t("b",[e._v("3 (3^2) ")]),t("b-none",[e._v("que tiene como resultado 9, la expresión resultante sería:")]),t("br"),t("b",[e._v("(2 + 15 * 16 + 9) /4 +5")])],1)]),t("tr",[t("th",[e._v("3")]),t("td",[e._v("15 * 16")]),t("td",[e._v("De los paréntesis de la expresión resultante la operación de más jerarquía es la multiplicación "),t("b",[e._v("15 * 16 ")]),t("b-none",[e._v("que tiene como resultado ")]),t("b",[e._v("240, ")]),t("b-none",[e._v("la expresión resultante sería:")]),t("br"),t("b",[e._v("(2 + 240 + 9) /4 +5")])],1)]),e._m(4),t("tr",[t("th",[e._v("5")]),t("td",[e._v("251/4")]),t("td",[e._v("De la expresión resultante el operador de mayor jerarquía es la división y da como resultado "),t("b",[e._v("62.75 ")]),t("b-none",[e._v("que en la siguiente operación se le sumará el valor de ")]),t("b",[e._v("5 ")]),t("b-none",[e._v("la expresión resultante será:"),t("br"),t("b",[e._v("62,75 +5")])])],1)]),e._m(5)]),t("caption",[e._v("Tabla 1 - Orden de ejecución de una expresión matemática")])])]),t("p",[e._v("A continuación, se revisan dos ejemplos:")]),t("TabsB",{staticClass:"my-5"},[t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Ejemplo 1",icono:s("c911")}},[t("p",[e._v("Una computadora debe ejecutar las siguientes operaciones, se debe escribir en el orden que la computadora ejecutará las operaciones de la siguiente expresión matemática: "),t("b",[e._v("(2 + (7 + 8) * 16 + 3^2) /4 +5.")]),t("br"),t("br"),e._v("Solución: primero que todo, lo que más valor tiene en la jerarquía son los paréntesis de manera que y en particular los más interiores, de esta forma la computadora se interesará en resolver primero el contenido de "),t("b",[e._v("(7 + 8).")])])]),t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Ejemplo 2",icono:s("808e")}},[t("p",[e._v("Escribir la siguiente ecuación como una expresión que la computadora pueda interpretar en el orden adecuado. ")]),t("div",{staticClass:"imagen-texto m-auto"},[t("img",{staticClass:"m-5",staticStyle:{width:"82px"},attrs:{src:s("86dc"),alt:"Texto que describa la imagen"}}),t("p",{staticClass:"my-auto d-block"},[e._v("sqrt (6^2/2 + 7) / 8^2")])])])])],1)],1)},i=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"titulo-principal"},[s("div",{staticClass:"titulo-principal__numero"},[s("div",{staticClass:"h3"},[e._v("4")])]),s("div",{staticClass:"h3"},[e._v("Operadores y jerarquía en los operadores")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("figure",{staticClass:"my-5"},[t("img",{attrs:{src:s("7012"),alt:"Texto que describa la imagen"}})])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"contenedor-listas my-5 mx-auto"},[s("ol",{staticClass:"lista-ol--cuadro lista-ol--separador"},[s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[e._v("1")])]),e._v("Paréntesis (se ejecutan primero los más internos).")]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[e._v("2")])]),e._v("Signo (-2), si un valor es positivo o negativo.")]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[e._v("3")])]),e._v("Potencias (^) y Raíces (sqrt); Productos y Divisiones (* y /), en este mismo orden.")]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[e._v("4")])]),e._v("Sumas y Restas (+ y -).")]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[e._v("5")])]),e._v("Concatenación (+).")]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[e._v("6")])]),e._v("Relaciónales (=, <, >).")]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[e._v("7")])]),e._v("Negación (no).")]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[e._v("8")])]),e._v("Conjunción (y).")]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[e._v("9")])]),e._v("Disyunción (o).")])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("thead",{staticClass:"encabezado-tabla"},[s("tr",[s("th",[e._v("Orden")]),s("th",[e._v("Operación")]),s("th",[e._v("Explicación y expresión resultante")])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("tr",[s("th",[e._v("4")]),s("td",[e._v("2+24+9")]),s("td",[e._v("De la expresión resultante el que tiene mayor precedencia es el paréntesis por lo tanto la suma aritmética de su contenido data como expresión resultante:"),s("br"),s("b",[e._v("251/4 +5")])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("tr",[s("th",[e._v("6")]),s("td",[e._v("62,75 +5")]),s("td",[e._v("67,75")])])}],o={name:"Tema4",data:function(){return{}}},r=o,n=s("2877"),l=Object(n["a"])(r,t,i,!1,null,"084b4bd3",null);a["default"]=l.exports},7012:function(e,a,s){e.exports=s.p+"img/img32.c608b3d6.jpg"},"808e":function(e,a,s){e.exports=s.p+"img/img34.4f55d143.svg"},"86dc":function(e,a,s){e.exports=s.p+"img/img35.5b1cf334.svg"},c911:function(e,a,s){e.exports=s.p+"img/img33.c31f027e.svg"}}]);
//# sourceMappingURL=tema4.c3a1d677.js.map