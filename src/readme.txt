Kurulum:
1) Önce JSON Server'ı kurup, çalıştırmalısınız. 
+ npm install -g json-server 
+ json-server --watch db.json

2) Daha sonra ayrı bir terminalde "npm run dev" komutu ile projeyi çalıştırabilirsiniz.

Ufak bir not :
Tasarımsal olarak ufak bir bug var, çok fazla todo girince liste yukarı doğru uzuyor, aslında overflow scroll ile çözebilirdim ancak bu sefer todo'ların üzerine gelince scale eden efekt kesiliyordu. O efekti bozmak istemedim, açıkçası ufak tasarımsal bir hataya çok fazla takılacağınızı düşünmediğim için üzerinde çok kafa yormak istemedim.
