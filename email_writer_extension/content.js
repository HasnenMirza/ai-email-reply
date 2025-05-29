console.log("E-mail writer Extension- Content script loaded")

function createAIbutton(){
  const button=document.createElement('div');
  button.className='T-I J-J5-Ji aoO v7 T-I-atl L3';
  button.style.marginRight='8px';
  button.innerHTML='AI Reply';
  button.setAttribute('role','button');
  button.setAttribute('data-tooltip','Generate AI Reply');

  return button;
}

function findComposeToolbar(){
  const selectors=[
    '.btC',
    '.aDh',
    '[role="toolbar"]',
    '.gU.Up'
  ];
  for (const selector of selectors) {
    const toolbar=document.querySelector(selector);
    if(toolbar){
      return toolbar;
    }
  }
  return null;
}

function getEmailContent(){
  const selectors=[
    '.d7',
    '.a3s.aiL',
    '[role="presentation"]',
    'gmail_quote'
  ];
  console.log("getemail content function mai dakhil ho gya hun");
  for (const selector of selectors) {
    const content=document.querySelector(selector);
    if(content){
      return content.innerText.trim();
    }
  }
  return '';
}

function injectButton(){
  const existingButton=document.querySelector('.ai-reply-button');
  if(existingButton) existingButton.remove();

  const toolbar=findComposeToolbar();
  console.log("findComposeToolbar");
  if(!toolbar){
    console.log("Toolbar not found");
    return;
  }

  console.log("Tool-bar found, creating AI button");
  const button=createAIbutton();
  button.classList.add('ai-reply-button');

  button.addEventListener('click',async()=>{
    try{
      button.innerHTML='Generating.....';
      button.disabled=true;
      console.log("email content mil gaya h API bheji h");
      const emailcontent=getEmailContent();
      console.log(" dubara email content mil gaya h API bheji h");
      const response=await fetch('http://localhost:8080/Email/predict/',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailcontent: emailcontent,
          tone: "professional"
        })
      });
      if(!response.ok){
        throw new Error('API request failed');
      }
      const generatedReply=await response.text();
      const composeBox=document.querySelector('[role="textbox"][g_editable="true"]');
      if(composeBox){
        composeBox.focus();
        document.execCommand('insertText',false,generatedReply);
      }
    }
    catch(error){
      console.error(error);
      alert("failed to generate reply");
    }
    finally{
      button.innerHTML='AI Reply';
      button.disabled=false;
    }
  });
  
  toolbar.insertBefore(button,toolbar.firstChild);
}

const observer=new MutationObserver((mutations)=>{
  for(const mutation of mutations){
    const addedNodes=Array.from(mutation.addedNodes);
    const hasComposeElements=addedNodes.some(node=>
      node.nodeType===Node.ELEMENT_NODE&&
      (node.matches('.Am.aiL.Al.editable.LW-avf.tS-tW,[role="textbox"]')|| 
       node.querySelector('.Am.aiL.Al.editable.LW-avf.tS-tW,[role="textbox"]'))
    );
    if(hasComposeElements){
      console.log("Compose window Detected");
      setTimeout(injectButton,500);
    }
  }
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });

