function addNewWork(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3)
    
    let weOb=document.getElementById("we");
    let weaddbuttonOb=document.getElementById("addbtn");
    weOb.insertBefore(newNode,weaddbuttonOb);
}
function addAcadmic(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3)
    
    let weOb=document.getElementById("aq");
    let weaddbuttonOb=document.getElementById("addbtn2");
    weOb.insertBefore(newNode,weaddbuttonOb);
}
function CVgenerator(){
    let Namefield=document.getElementById("nameField").value;
    let NameT=document.getElementById("NameT");
    NameT.innerHTML=Namefield;
  
    let NameT2=document.getElementById("NameT2");
    NameT2.innerHTML=Namefield;
 //contact number

    let NumberT=document.getElementById("NumberT");
    let contactField=document.getElementById("contactField").value;
    NumberT.innerHTML=contactField;

    let addressT=document.getElementById("addressT");
    let addressField=document.getElementById("addressField").value;
    addressT.innerHTML=addressField;

    //facebook
    let facebookField=document.getElementById("facebookField").value;
    let fbt=document.getElementById("fbt");
    fbt.innerHTML=facebookField;
    let InstagramField=document.getElementById("InstagramField").value;
    let inst=document.getElementById("inst");
    inst.innerHTML=facebookField;
    let LinkdenField=document.getElementById("LinkdenField").value;
    let linkdt=document.getElementById("linkdt");
    linkdt.innerHTML=facebookField;
    let objectiveT=document.getElementById("objectiveT");
    let ObjectiveField=document.getElementById("ObjectiveField").value;
    objectiveT.innerHTML=ObjectiveField ;
    let  weField=document.getElementsByClassName("weField");
    let str=''
    for(let e of weField){
        str=str+ ` <li> ${e.value} </li>`
    }
    let weT=document.getElementById("weT");
    weT.innerHTML=str;


    let eqField =document.getElementsByClassName("eqField ");
    let str2=''
    for(let e of weField){
        str2=str2+ ` <li> ${e.value} </li>`
    }
    let AcadmicT=document.getElementById("AcadmicT");
    AcadmicT.innerHTML=str;
}
window.onload = function () {
    document.getElementById("cvggnbtn")
    .addEventListener("click", () => {
            const invoice = this.document.getElementById("cv-template");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: -1,
              filename:'myfile.pdf',
                image: { type: 'pdf', quality: 0.98 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set({
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
              });
            html2pdf().from(invoice).save();
        })
}
