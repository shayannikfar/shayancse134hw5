var Arrposts = [];
var numpost = Arrposts.length;

function cleanHTML(Arrposts, cleanup) {
    let clean = DOMPurify.sanitize(cleanup);
    return clean;
}

function postdeleted(id) {
    Arrposts = Arrposts.filter(post => post.id !== id);
    htmlwritten();
}

function newpost(){
    let newpostarr ={
        title: '',
        date: '',
        summary: '',
        id: '',
     };

    newpostarr.title = cleanHTML`${document.getElementById("title").value}`;
    newpostarr.date = cleanHTML`${document.getElementById("date").value}`;
    newpostarr.summary = cleanHTML`${document.getElementById("summary").value}`;
    newpostarr.id=numpost++;

    let arr =[];
    arr = Arrposts;
    arr.push(newpost);

    htmlwritten();


}


function updatePost(id) {

    postdeleted(id);
    let upPost = {
      title: '',
      date: '',
      summary: '',
      id: '',
    };



    upPost.title = cleanHTML`${document.getElementById("edtitle").value}`;
    upPost.date = cleanHTML`${document.getElementById("eddate").value}`;
    upPost.summary = cleanHTML`${document.getElementById("edsummary").value}`;
    upPost.id=id;
    console.log(id);

    let uparr =[];
    uparr = Arrposts;
    uparr.push(upPost);

    htmlwritten();

}

let mytemp = document.getElementById("posted");
var uptoU;
function postHtml(post, mytemp){
    let pclon = mytemp.content.cloneNode(true);

    pclon.getElementById("pname").textContent=cleanHTML`${post.title}`;
    pclon.getElementById("pdate").textContent=cleanHTML`${post.date}`;
    pclon.getElementById("psummary").textContent=cleanHTML`${post.summary}`;

    
    pclon.getElementById("edited").addEventListener('click', () => {

      document.getElementById("edtitle").value = Arrposts.filter(item => item.id === post.id)[0].title;
      document.getElementById("eddate").value = Arrposts.filter(item => item.id === post.id)[0].date;
      document.getElementById("edsummary").value = Arrposts.filter(item => item.id === post.id)[0].summary;
      uptoU = post.id;
      document.getElementById("editdialog").showModal();
    });
  
    pclon.getElementById("deleted").addEventListener('click', () => {
      postdeleted(post.id)
    });
  
    document.getElementById("myPosts").prepend(pclon);

}


function htmlwritten(){
    if(`content` in document.createElement('template')){
        document.getElementById("myPosts").innerHTML='';
        let array = Arrposts;
        array = array.sort((p1, p2) => {return p1.id - p2.id});
        array.forEach(post => {
            postHtml(post, mytemp)

        }
        );
    }
    else {
        alert("item not found");
    }

}

document.addEventListener('DOMContentLoaded', () => {
    htmlwritten(Arrposts);
  
    document.getElementById("postcreated").addEventListener('click', () => {
      if (typeof document.getElementById("newpost").showModal === "function") {
        document.getElementById("newpost").showModal();
      } 
      else {
        alert("not supported");
      }
    });
  
    document.getElementById("newpost").addEventListener('close', () => {
      if (document.getElementById("newpost").returnValue === 'default') {
        newpost();
      }
    });
  
    document.getElementById("editpost").addEventListener('close', () => {
      if (document.getElementById("editpost").returnValue === 'default') {
        updatePost(uptoU);
      }
    });
  });

