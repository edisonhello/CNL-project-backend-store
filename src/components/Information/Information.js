
import { useEffect, useState } from "react";
import api from "../../utils/api.js";

function Information({ token }) {
  const [store, setStore] = useState({});

  useEffect(() => {
    api.getProfile(token).then(setStore);
  }, [token]);

  const qrcodeApiString = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${store.qrcode}`;

  return (
    <div class="container">
      <div class="py-5 text-center">
        <div class="row py-2">
          <div class="col-4"> Name </div>
          <div class="col-8">{store.name}</div>
        </div>
        <div class="row py-2">
          <div class="col-4"> Phone </div>
          <div class="col-8">{store.phone}</div>
        </div>
        <div class="row py-2">
          <div class="col-4"> Address </div>
          <div class="col-8">{store.address}</div>
        </div>
        <div class="row py-2">
          <div class="col-4"> QRCode </div>
          <div class="col-8">{store.qrcode}</div>
        </div>
        <div class="row py-2">
          <div class="col-4"> </div>
          <div class="col-8" style={{ maxHeight: "100%", maxWidth: "100%", }}>
            <img src={qrcodeApiString} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;