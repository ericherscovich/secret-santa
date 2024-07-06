const encodedData = "W3siY29kZSI6ICJBN0QwVUUxVDhPIiwgIm5hbWUiOiAiQW5uYSBNYW5vbGFjaGUiLCAic2l6ZSI6ICJTL00iLCAiZml0X2NvbW1lbnQiOiAiSWRrIHlldCBiZWNhdXNlIGl0IGRlcGVuZHMgd2hhdCBwYW50cyBJIHdlYXIgIn0sIHsiY29kZSI6ICJEVUJNNFk0UzE2IiwgIm5hbWUiOiAiS3VzaCAoZmF0aGVyKSIsICJzaXplIjogIkxhcmdlICIsICJmaXRfY29tbWVudCI6ICJObyJ9LCB7ImNvZGUiOiAiRTM5VEZITDhZQSIsICJuYW1lIjogIkVyaWMiLCAic2l6ZSI6ICJNZWRpdW0iLCAiZml0X2NvbW1lbnQiOiAiaWRrIGxvb3NlIn0sIHsiY29kZSI6ICJPWjdUVUxES09FIiwgIm5hbWUiOiAiTWFnZ2llIiwgInNpemUiOiAiTWVkaXVtL2xhcmdlIiwgImZpdF9jb21tZW50IjogIkxvb3NlIn0sIHsiY29kZSI6ICJOUDhSTjFZNzdBIiwgIm5hbWUiOiAiRHVuY2FuIEJhcnRlciIsICJzaXplIjogIk1lZGl1bS9sYXJnZSIsICJmaXRfY29tbWVudCI6ICJFaXRoZXIgb25lIGJhYnkifSwgeyJjb2RlIjogIlJNNVkwNlhSVU8iLCAibmFtZSI6ICJNYWhkeSIsICJzaXplIjogImxhcmdlICIsICJmaXRfY29tbWVudCI6ICJMb29zZSBhbmQgYmFnZ3kifSwgeyJjb2RlIjogIjA3MTRZQzdKMEkiLCAibmFtZSI6ICJhbmRyZXciLCAic2l6ZSI6ICJtIiwgImZpdF9jb21tZW50IjogIm5hdXIgIn0sIHsiY29kZSI6ICJDMk9IUldTQUFJIiwgIm5hbWUiOiAiU2ViIiwgInNpemUiOiAiTGFyZ2UgIiwgImZpdF9jb21tZW50IjogIk5vcGUifSwgeyJjb2RlIjogIjZGQjBQRkJMWEMiLCAibmFtZSI6ICJKYWNpbnRoYSIsICJzaXplIjogIlNtYWxsL21lZGl1bSIsICJmaXRfY29tbWVudCI6ICJiYWJ5IHRlZSAifSwgeyJjb2RlIjogIllWMUIwNlM4NjkiLCAibmFtZSI6ICJOYW9taSIsICJzaXplIjogIk1lbidzIG1lZGl1bSBvciB3b21lbnMgc21hbGwiLCAiZml0X2NvbW1lbnQiOiAiYmFieSB0ZWUgb3IgYmFnZ3kifSwgeyJjb2RlIjogIlQzSVAyT1U3REwiLCAibmFtZSI6ICJXaWxsaWFtIChCbGFrZSkgTWFza2VsbCB8fHwiLCAic2l6ZSI6ICJNZWRpdW0iLCAiZml0X2NvbW1lbnQiOiAiUmVndWxhciBvciBzbGlnaHRseSBiYWdneSwgYXMgbG9uZyBhcyBpdFx1MjAxOXMgY29tZm9ydGFibGUifSwgeyJjb2RlIjogIlA1VUVYUkYxOVUiLCAibmFtZSI6ICJLdXNoIChmYXRoZXIpIiwgInNpemUiOiAiTGFyZ2UgIiwgImZpdF9jb21tZW50IjogIk5vIn1d";
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