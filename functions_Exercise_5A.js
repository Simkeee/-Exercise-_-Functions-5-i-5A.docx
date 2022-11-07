// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.
function citati(array) 
{
    const citat =array[Math.floor(Math.random() * array.length)];
    return citat;
}
console.log('1. ZADATAK:'+ citati(
['1 Ko ima sreće ne treba mu ništa drugo-Matija Bećković',
'2 Sreću određuje stanje našeg duha, a ne događaji-Dalaj Lama',
'3 Ljudi nisu zatočenici sudbine, nego zatočenici vlastitog uma-Frenklin Ruzvelt',
'4 Što manje ljudi znaju o lošim delima drugih ljudi, tim strožiji su prema samim sebi-Lav Tolstoj',
'5 Ima ljudi koji se više raduju tuđoj nesreći, nego svojoj sreći-Branislav Nušić',
'6 Malo je onih koji umeju da podnose sopstvene mane kod drugih ljudi-Baruh Spinoza']
))


// 2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
// nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
// godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
// prestupna).
function prestupna(a)
{
    var k=false;
  
    if(a%4==0 && a%100!=0) 
    {
        k=true;
    }
    if(a%400==0)
    {
        k=true;
    }
return k;
}
console.log('2. ZADATAK:Godina je prestupna '+ prestupna(400));

// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.
function samoglasniS(array) 
{
    var m=['a','e','i','o','u'];
    var n=["b","c","č","ć","d","q","đ","f","g","h","k","p","s","š","t","z","ž","j","l","w","m","n","y","r","v",];
    var k=0;
    var p=0;
    var g=array.toLowerCase().split('')

 for (let i = 0; i < m.length; i++) 
{
    if(g.includes(m[i]))
    {
        k++;
    }
}
for (let j = 0; j < n.length; j++) 
{
    if(g.includes(n[j]))
    {
        p++;
    }
}
    return [k,p];
}
 console.log('3. ZADATAK:Samoglasnicii suglasnici:'+ samoglasniS('RAFilo') )  


// 4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.
function tipEl(array) 
{
    var k=[];
    for (let i = 0; i < array.length; i++) 
    {
        k[i]=typeof array[i];
    }
    return k;
}
console.log('4. ZADATAK:'+tipEl([12,'pp',true, 'as23s','00sd']) )

// 5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
// “pp”, “as23s”, “00sd”] =&gt; rezultat [“pp”].
function stringBezBroja(str) 
{
    var m=[];
    var l=[];
    var h=0;
    for (let i = 0; i < str.length; i++) 
    {
        var m=str[i].split('');
        var k=0;
        for (let j = 0; j < m.length; j++) 
        {
            if(isNaN(m[j])== true)
            {
                k++;
            }
        }
        if(k==m.length)
        {
            l[h]=str[i];
            h++;
        }
    }
return l;
}
console.log('5. ZADATAK:'+ stringBezBroja(['12bb','pp','ppopl', 'as23s','00sd']))

// 6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
// dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
// string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
// broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
// ili “not found” ako nema ponavljanja.
// Primer 1: &quot;Computer&quot; =&gt; ["8", "C", "r", "pu", "not found"] ,
// Primer 2: “Science&quot; =&gt; [7, &quot;S&quot;, &quot;e&quot;, &quot;e&quot;, &quot;@ index 5&quot;]
function karakteristikeStringa(str) 
{
    var b=str.length;
    var i=str[0];
    var t=str[str.length-1];
    var a=[];
    var c="not found";
    var d=[];
    if(str.length%2==0)
    {
        a=[str[str.length/2-1],str[str.length/2]];
    }
    else
    {
        a=str[(str.length-3)/2+1];
    }
    for (let i = 2; i < str.length; i++) 
    {
        if(str[1]==str[i])
        {
            c='@ Index #'+ i;
            break;
        }
    }
d=[b,i,t,a,c];
return d;
}
console.log('6. ZADATAK:'+ karakteristikeStringa([8, "C", "r", "pu", "not found","C"]))

// 7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
// bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
// se ne ponavljaju.
function elementiBezPon(array)
{
    
    var h=0;
    var m=[];
    for (let i = 0; i < array.length; i++) 
    { k=0;
        for (let j = 0; j < array.length; j++) 
        {
            if(array[i]!=array[j])
            {
                k++;
                if(k==array.length-1)
                {
                    m[h]=array[i];
                    h++;
                }
            }
        }
        
    }
return m;
}
console.log('7. ZADATAK:'+elementiBezPon([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

// 8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5], N=2) =&gt; [[2, 3], [4, 5]]
// Primer 2: ([2, 3, 4, 5, 6], N=3) =&gt; [[2, 3, 4], [5, 6]]
function podelaNiza(array,a)
{   
    var n=[];
    var m=[];
    var h=0;
    for (let i = 0; i < a; i++) 
    {
    n[i]= array[i];
    }
    for (let j = a; j < array.length; j++) 
    {
    m[h]= array[j];
    h++;
    }
    return['[['+n+']','['+m+']]'];
}
console.log('8. ZADATAK:'+podelaNiza([2, 3, 4, 5], 2) );