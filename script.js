const encodedData = "W3siY29kZSI6ICIyR0JMUzY4MjVQIiwgIm5hbWUiOiAiQW5uYSBNYW5vbGFjaGUiLCAic2l6ZSI6ICJTL00iLCAiZml0X2NvbW1lbnQiOiAiSWRrIHlldCBiZWNhdXNlIGl0IGRlcGVuZHMgd2hhdCBwYW50cyBJIHdlYXIgIn0sIHsiY29kZSI6ICJPVk5MVFowQ1hVIiwgIm5hbWUiOiAiU2FicmluYSIsICJzaXplIjogIlVuaXNleCBMYXJnZS9NZW5zIE1lZGl1bSIsICJmaXRfY29tbWVudCI6ICJTaXplIHNtYWxsIGJhYnkgdGVlIG9yIHVuaXNleCBMYXJnZS9NZW5zIE1lZGl1bSJ9LCB7ImNvZGUiOiAiWjZGTEc5SVQ5OCIsICJuYW1lIjogIkVyaWMiLCAic2l6ZSI6ICJNZWRpdW0iLCAiZml0X2NvbW1lbnQiOiAiaWRrIGxvb3NlIn0sIHsiY29kZSI6ICIyQU9LVkZKS1BMIiwgIm5hbWUiOiAiYW5kcmV3IiwgInNpemUiOiAibSIsICJmaXRfY29tbWVudCI6ICJuYXVyICJ9LCB7ImNvZGUiOiAiR1RDNVJYNUc1TSIsICJuYW1lIjogIkt1c2ggKGZhdGhlcikiLCAic2l6ZSI6ICJMYXJnZSAiLCAiZml0X2NvbW1lbnQiOiAiTm8ifSwgeyJjb2RlIjogIlY1RTVFWDNWWDQiLCAibmFtZSI6ICJNYWhkeSIsICJzaXplIjogImxhcmdlICIsICJmaXRfY29tbWVudCI6ICJMb29zZSBhbmQgYmFnZ3kifSwgeyJjb2RlIjogIkU3RDNFS1NXNDUiLCAibmFtZSI6ICJNYWdnaWUiLCAic2l6ZSI6ICJNZWRpdW0vbGFyZ2UiLCAiZml0X2NvbW1lbnQiOiAiTG9vc2UifSwgeyJjb2RlIjogIlhOTjZYMlIwMk8iLCAibmFtZSI6ICJXaWxsaWFtIChCbGFrZSkgTWFza2VsbCB8fHwiLCAic2l6ZSI6ICJNZWRpdW0iLCAiZml0X2NvbW1lbnQiOiAiUmVndWxhciBvciBzbGlnaHRseSBiYWdneSwgYXMgbG9uZyBhcyBpdFx1MjAxOXMgY29tZm9ydGFibGUifSwgeyJjb2RlIjogIjlEQUQwSlZJUkYiLCAibmFtZSI6ICJTZWIiLCAic2l6ZSI6ICJMYXJnZSAiLCAiZml0X2NvbW1lbnQiOiAiTm9wZSJ9LCB7ImNvZGUiOiAiWkgyUUdSNFFPQyIsICJuYW1lIjogIk5hb21pIiwgInNpemUiOiAiTWVuJ3MgbWVkaXVtIG9yIHdvbWVucyBzbWFsbCIsICJmaXRfY29tbWVudCI6ICJiYWJ5IHRlZSBvciBiYWdneSJ9LCB7ImNvZGUiOiAiNlpTUEo4STlDUCIsICJuYW1lIjogIkR1bmNhbiBCYXJ0ZXIiLCAic2l6ZSI6ICJNZWRpdW0vbGFyZ2UiLCAiZml0X2NvbW1lbnQiOiAiRWl0aGVyIG9uZSBiYWJ5In0sIHsiY29kZSI6ICJFV09OQUNQSThMIiwgIm5hbWUiOiAiSmFjaW50aGEiLCAic2l6ZSI6ICJTbWFsbC9tZWRpdW0iLCAiZml0X2NvbW1lbnQiOiAiYmFieSB0ZWUgIn1d";
const decodedData = atob(encodedData);
const participants = JSON.parse(decodedData);

function checkCode() {
    const code = document.getElementById('code').value;
    const participant = participants.find(p => p.code === code);

    if (participant) {
        document.getElementById('result').innerHTML = `
            <p><strong>Name:</strong> ${participant.name}</p>
            <p><strong>Size:</strong> ${participant.size}</p>
            <p><strong>Fit Comment:</strong> ${participant.fit_comment}</p>
        `;
    } else {
        document.getElementById('result').innerText = 'Invalid code.';
    }
}
