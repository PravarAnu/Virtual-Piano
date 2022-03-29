document.addEventListener('keydown', function(event){
    if(event.code == "KeyA"){
        console.log("The 'A' key is pressed.");
        let audio = new Audio('./sound/A.mp3');
        audio.load();
        audio.play();
    } else if(event.code == "KeyS"){
        console.log("The 'S' key is pressed.");
        let audio = new Audio('./sound/S.mp3');
        audio.load();
        audio.play();
    } else if(event.code == "KeyD"){
        console.log("The 'D' key is pressed.");
        let audio = new Audio('./sound/D.mp3');
        audio.load();
        audio.play();
    }else if(event.code == "KeyF"){
        console.log("The 'F' key is pressed.");
        let audio = new Audio('./sound/F.mp3');
        audio.load();
        audio.play();
    }else if(event.code == "KeyG"){
        console.log("The 'G' key is pressed.");
        let audio = new Audio('./sound/G.mp3');
        audio.load();
        audio.play();
    } else if(event.code == "KeyH"){
        console.log("The 'H' key is pressed.");
        let audio = new Audio('./sound/H.mp3');
        audio.load();
        audio.play();
    }else if(event.code == "KeyJ"){
        console.log("The 'J' key is pressed.");
        let audio = new Audio('./sound/J.mp3');
        audio.load();
        audio.play();
    }else if(event.code == "KeyW"){
        console.log("The 'J' key is pressed.");
        let audio = new Audio('./sound/W.mp3');
        audio.load();
        audio.play();
    }else if(event.code == "KeyE"){
        console.log("The 'J' key is pressed.");
        let audio = new Audio('./sound/E.mp3');
        audio.load();
        audio.play();
    }else if(event.code == "KeyT"){
        console.log("The 'J' key is pressed.");
        let audio = new Audio('./sound/T.mp3');
        audio.load();
        audio.play();
    }else if(event.code == "KeyY"){
        console.log("The 'J' key is pressed.");
        let audio = new Audio('./sound/Y.mp3');
        audio.load();
        audio.play();
    }else if(event.code == "KeyU"){
        console.log("The 'J' key is pressed.");
        let audio = new Audio('./sound/U.mp3');
        audio.load();
        audio.play();
    }else{
        console.warn("Warning");
    }
});

