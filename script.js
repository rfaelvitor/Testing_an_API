const url = "https://api.unsplash.com/search/photos/?query=office&client_id=U9R-HdUu6FSNTGcPcJF84CewCUSMrZsALLKCQx-AkLM";
async function call_api() {
    const response = await fetch(url);
    const transformed = await response.json();
    document.getElementById("button").src = transformed;
    console.log(transformed)
}
call_api()