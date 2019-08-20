import React from 'react';

const customeAlert = () => ({
  render: (dialog) => {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const dialogoverlay = document.getElementById('dialogoverlay');
    const dialogbox = document.getElementById('dialogbox');
    console.log('-->: ', dialogoverlay);
    dialogoverlay.style.display = 'block';
    dialogoverlay.style.height = `${winH}px`;
    dialogbox.style.left = `${(winW / 2) - (550 * 0.5)}px`;
    dialogbox.style.top = '100px';
    dialogbox.style.display = 'block';

    document.getElementById('dialogboxhead').innerHTML = 'acknowledge this message';
    document.getElementById('dialogboxbody').innerHTML = dialog;
    document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
  },
  ok: () => {
    document.getElementById('dialogbox').style.display = 'none';
    document.getElementById('dialogoverlay').style.display = 'none';
  }
});

export const Alert = new customeAlert();

const AlertBox = (props) => {
  const { children } = props;
  return (
    <>
      <div id="dialogoverlay">meme</div>
      <div id="dialogbox">
        <div>
          <div id="dialogboxhead" />
          <div id="dialogboxbody" />
          <div id="dialogboxfoot" />
        </div>
      </div>
    </>
  );
};

export default AlertBox;
