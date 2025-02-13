function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DgLQxQtNSs":
        Script1();
        break;
      case "6apYSkDpYLA":
        Script2();
        break;
      case "5mOuqYDs3bz":
        Script3();
        break;
      case "6gK43Gq9kJg":
        Script4();
        break;
      case "6kKbQ4t69Hv":
        Script5();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";

audio.load();

audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');

audio.src="musik.mp3";

audio.load();

audio.play();
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";

audio.load();

audio.play();
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";

audio.load();

audio.pause();
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";

audio.load();

audio.pause();
}

