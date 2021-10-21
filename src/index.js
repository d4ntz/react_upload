import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' ;



// by react  jsx


const defination ="the real defination";
const fname="Purbashis";
const lname="Behera";
const curdate=new Date().toLocaleDateString();
const curtime=new Date().toLocaleTimeString();
const img1="   https://picsum.photos/400/400?grayscale "   ;
const img2="   https://picsum.photos/350/350?grayscale "   ;
const img3="   https://picsum.photos/500/500?grayscale "   ;
const img4="   https://picsum.photos/290/290?grayscale "   ;
const links="  https://www.youtube.com/channel/UC5C6SAqIHGdSYimsCB0dMhQ"

ReactDOM.render(

/*JSX expressions must have one parent element.  so we used  "div" tag   <div> </div>

                                                                        or
 we can use array elements
e.g ..

[
tag  , tag  ,tag

 ]          
 
 example:

 //by using array elements


[

<h1>Dantz</h1>  ,
  
  <p>
    lorem ipsum dolor sit amet, consectetur adip 
  </p>  ,
  <h2>
    welcome to React.
  </h2>

  
]

 if we use div tag no use of array elements so simply we can remove the coma " ," and use these tags 


*/

// by using div tag only
/*



<div>

<h1>Dantz</h1>
  
  <p>
    lorem ipsum dolor sit amet, consectetur adip 
  </p>
  <h2>
    welcome to React.
  </h2>

  
 </div>  */




//*******important**********//


/* above code we saw  we silmply use div and array of elements but there is extra 
div generated in browser so we use react fragment*/

/*      react fragment*/

/*  we can use <React.Fragment>   
                                         tag
                                         tag
                                         tag

                                        
                                  </React.Fragment>

ex:
<React.Fragment>

<h1>Dantz</h1>
  
  <p>
  A king is a man who rules a country, because of inheritance. 
  A king usually comes to power when the previous monarch dies, 
  who is usually a family member of his. Sometimes a person may become king due to the previous monarch's abdication, 
  for example George VI. For most of history, most countries were ruled in this way, especially in Europe. Some countries, 
  such as France, are no longer monarchies. Some, such as the United Kingdom, still have a royal family. 
  In some countries, people chose a new king from other people to decide from.
  </p>
  <h2>
    welcome to React.
  </h2>

  </React.Fragment>

                                               or  syntactical form of <react.fragment>
                                               
                                   <>
                                  tag 
                                  tag
                                  tag 
                                </>
ex:
<>

<h1>Dantz</h1>
  
  <p>
  A king is a man who rules a country, because of inheritance. 
  A king usually comes to power when the previous monarch dies, 
  who is usually a family member of his. Sometimes a person may become king due to the previous monarch's abdication, 
  for example George VI. For most of history, most countries were ruled in this way, especially in Europe. Some countries, 
  such as France, are no longer monarchies. Some, such as the United Kingdom, still have a royal family. 
  In some countries, people chose a new king from other people to decide from.
  </p>
  <h2>
    welcome to React.
  </h2>

  </>
 

*/

/*  
//***********************important***********************

****************javascript expressions in jsx :**************

so in react we use 
1- js  which is index.js
2- with the help of react we can use html elemets as jsx
3-so inside html elements we can use javascript by using  =" {  }  "

eg in h3  , h2 tag i use javascript expressions 



*we can use only javascript expressions not statements
*/


/****************important************ 
 * ES6 Template Literals in JSX in ReactJS
 * 
 * we can simply use backtik(left side of  top 1 in keybord ) in expressions          `      `
 * it is use full for writing a mail  so no need of /n for the new line 
 * 
 * 
 * 
 * 
*/

<>
<h1>{fname} Dantz {lname}</h1>
<h4>
  Name: {fname +" "+lname}
</h4>
  <h3>
    King : { defination }
  </h3>
  <p>
  A king is a man who rules a country, because of inheritance. 
  A king usually comes to power when the previous monarch dies, 
  who is usually a family member of his. Sometimes a person may become king due to the previous monarch's abdication, 
  for example George VI. For most of history, most countries were ruled in this way, especially in Europe. Some countries, 
  such as France, are no longer monarchies. Some, such as the United Kingdom, still have a royal family. 
  In some countries, people chose a new king from other people to decide from.
  </p>
  <h2>
    my favorite {3+2} books
  </h2>
  <ol type = "i">
  <li >
  Five on a Treasure Island
  </li>
  <li>
  Five Go Adventuring Again
  </li>
  <li>
  Five on Kirrin Island Again
  </li>
  <li>
  Five Go to Smuggler's Top
  </li>
  <li>
  Five Get into Trouble
  </li>

  </ol>
  <h3>
    my favorite number is :  {Math.random() + 2}
  </h3>

  <pre>{
    `hi ${fname}  
    thank you for joining my mailing list.

    Regards , 
    Dantz
    
    `}

  </pre>
  <div>
    <h2>Today's Date : {curdate} </h2>


  </div>

  <div>
    <h2>Time: {curtime}</h2>
  </div>

<h1 contentEditable = "true"> my name is {fname}</h1>


<h1  className="heading">  Using CSS</h1>

<div className="img_div">
<img  src={img1}
alt="random_images" />
<img  src={img2}
alt="random_images" />
<img  src={img3}
alt="random_images" />
<a  href={links}  target="_blank">
<img  src={img4}
alt="random_images" />
</a>
</div>


  </>
 
 
  ,

   document.getElementById('root'));

//ReactDOM.render(what to show , where to show );
//root is an id of public index.html




// by js 

/*
   var h1=document.createElement('h1');
   h1.innerHTML ="dantz 1st react";
   document.getElementById('root').appendChild(h1);

  */
  
/*JSX Attributes in ReactJS 
contentEditable = "true"


*/

  
  