const encodedData = "W3siY29kZSI6ICJFRUxCWktRVU1RIiwgIm5hbWUiOiAiU2FtIiwgInByZWZlcmVuY2UiOiAiZGlkIG5vdCBhbnN3ZXIifSwgeyJjb2RlIjogIjlOUVQxNVQzVUYiLCAibmFtZSI6ICJZdWVzaWYiLCAicHJlZmVyZW5jZSI6ICJzb21ldGhpbmcgbm90IGd5bSByZWxhdGVkLiBJIG5lZWQgY3JlYXRpdml0eSJ9LCB7ImNvZGUiOiAiSE5SVlA0WEpDQiIsICJuYW1lIjogIkF5aGFtIiwgInByZWZlcmVuY2UiOiAiZGlkIG5vdCBhbnN3ZXIifSwgeyJjb2RlIjogIjQ3MllKWjVJU1ciLCAibmFtZSI6ICJTYW1paCIsICJwcmVmZXJlbmNlIjogImRpZCBub3QgYW5zd2VyIn0sIHsiY29kZSI6ICJaMFExRzJFTlJLIiwgIm5hbWUiOiAiRXJpYyIsICJwcmVmZXJlbmNlIjogImp1c3QgZG9udCBiZSBib3JpbmcgYW5kIGdldCBhIGdpZnQgY2FyZCBvciBzb21lIHNoaXQifSwgeyJjb2RlIjogIlpWVzFOSUJKUjMiLCAibmFtZSI6ICJBbGV4IiwgInByZWZlcmVuY2UiOiAiIGRpZCBub3QgYW5zd2VyIn0sIHsiY29kZSI6ICI1QUM1RkpON0RNIiwgIm5hbWUiOiAiU2VpeWYiLCAicHJlZmVyZW5jZSI6ICJzb21ldGhpbmcgdXNlZnVsIHRvIG15IGxpZmUifSwgeyJjb2RlIjogIlNKVUJRUjQzQk0iLCAibmFtZSI6ICJCb2dkYW4iLCAicHJlZmVyZW5jZSI6ICJqcGcifV0=";
const decodedData = atob(encodedData);
const participants = JSON.parse(decodedData);

function checkCode() {
    const code = document.getElementById('code').value;
    const participant = participants.find(p => p.code === code);

    if (participant) {
        document.getElementById('result').innerHTML = `
            <div class="success">
                <h3>🎄 Match Found! 🎄</h3>
                <p><strong>Your Secret Santa Match:</strong> ${participant.name}</p>
                <p><strong>Their Gift Preference:</strong> ${participant.preference}</p>
                <p><strong>Details:</strong> Gift exchange on Dec 13th. $50 Limit. Don't be boring and get a gift card or some shit.</p>
            </div>
        `;
    } else {
        document.getElementById('result').innerHTML = `
            <div class="error">
                <p>❌ Invalid code. Please check your code and try again.</p>
            </div>
        `;
    }
}
