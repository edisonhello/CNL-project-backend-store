
function Information({ store }) {
  const {
    name,
    phone,
    address,
    qrcode,
  } = store;

  const qrcodeApiString = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcode}`;

  return (
    <div class="container">
      <div class="py-5 text-center">
        <div class="row py-2">
          <div class="col-4"> Name </div>
          <div class="col-8">{name}</div>
        </div>
        <div class="row py-2">
          <div class="col-4"> Phone </div>
          <div class="col-8">{phone}</div>
        </div>
        <div class="row py-2">
          <div class="col-4"> Address </div>
          <div class="col-8">{address}</div>
        </div>
        <div class="row py-2">
          <div class="col-4"> QRCode </div>
          <div class="col-8">{qrcode}</div>
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