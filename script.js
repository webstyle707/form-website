function url() {
    fbq("track", "Purchase");
    fbq("track", "SubmitApplication");
    location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
  }


  function handleSubmit() {
    const selectedOption = document.querySelector('input[name="market-info"]:checked');
    if (selectedOption) {
      window.location.href = selectedOption.value;
    }
  }

  let showform = document.getElementById("showform").style
  const handleShowform = ()=>{
    showform.display="block";
  }

  const handleHideform = ()=>{
    showform.display="none";
  }
