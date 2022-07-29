var Arrposts = [
    {
        id: '1',
        title: "what to do?",
        date: "2022",
        summary: "have some rest",
      }
];
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

    newpostarr.title = cleanHTML`${document.getElementById('titlepost').value}`;
    newpostarr.date = cleanHTML`${document.getElementById('datepost').value}`;
    newpostarr.summary = cleanHTML`${document.getElementById('summarypost').value}`;
    newpostarr.id=numpost++;

    let arr = Arrposts;
    arr.push(newpostarr);

    htmlwritten();
    document.getElementById("titlpost").value = '';

    document.getElementById("datepost").value = '';

    document.getElementById("summarypost").value = '';
    document.getElementById("dialogpost").close();


}


function updatePost(id) {

    postdeleted(id);
    let upPost = {
      title: '',
      date: '',
      summary: '',
      id: '',
    };



    upPost.title = cleanHTML`${document.getElementById("titleupdate").value}`;
    upPost.date = cleanHTML`${document.getElementById("dateupdate").value}`;
    upPost.summary = cleanHTML`${document.getElementById("summaryupdate").value}`;
    upPost.id=id;
    console.log(id);
    let uparr = Arrposts;
    uparr.push(upPost);
    htmlwritten();
    document.getElementById("titleupdate").value = '';
    document.getElementById("dateupdate").value = '';
    document.getElementById("summaryupdate").value = '';
    document.getElementById("dialogupdate").close();

}

let mytemp = document.getElementById("postedtemp");
var uptoU;
function postHtml(post, mytemp){
    let pclon = mytemp.content.cloneNode(true);

    pclon.getElementById("title").textContent=cleanHTML`${post.title}`;
    pclon.getElementById("date").textContent=cleanHTML`${post.date}`;
    pclon.getElementById("body").textContent=cleanHTML`${post.summary}`;

    
    pclon.getElementById("edited").addEventListener('click', () => {

      document.getElementById("titleupdate").value = Arrposts.filter(item => item.id === post.id)[0].title;
      document.getElementById("dateupdate").value = Arrposts.filter(item => item.id === post.id)[0].date;
      document.getElementById("summaryupdate").value = Arrposts.filter(item => item.id === post.id)[0].summary;
      uptoU = post.id;
      document.getElementById("dialogupdate").showModal();
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
      if (typeof document.getElementById("dialogpost").showModal === "function") {
        document.getElementById("dialogpost").showModal();
      } 
      else {
        alert("not supported");
      }
    });
  
    document.getElementById("dialogpost").addEventListener('close', () => {
      if (document.getElementById("dialogpost").returnValue === 'default') {
        newpost();
      }
    });
  
    document.getElementById("dialogupdate").addEventListener('close', () => {
      if (document.getElementById("dialogupdate").returnValue === 'default') {
        updatePost(uptoU);
      }
    });
  });
  

