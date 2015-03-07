ID=1d746ac6-6327-251f-5cbc-a1f8026104af

ID1=1d746ac6-6327-251f-5cbc-a1f8026104af
ID2=18c443ca-2472-09eb-a632-ec62022104e4

ID=1b1436ce-86aa-5588-29b0-522302810462

API_KEY=4217d623-66bd-4709-ae44-b3dadd3251b8 


# API_KEY=1b1436ce-86aa-5588-29b0-522302810462

# curl -X GET https://api.emotient.com/v1/media -H "Authorization: ${API_KEY}"
# curl -X GET https://api.emotient.com/v1/media/${ID1} -H "Authorization: ${API_KEY}"
# curl -X GET https://api.emotient.com/v1/media/${ID2} -H "Authorization: ${API_KEY}"

# curl -X GET https://api.emotient.com/v1/analytics/${ID1}?format=json -H "Authorization: ${API_KEY}"
# curl -X GET https://api.emotient.com/v1/analytics/${ID2}?format=json -H "Authorization: ${API_KEY}"

# curl -X GET https://api.emotient.com/v1/analytics/${ID1}?format=csv -H "Authorization: ${API_KEY}"

# curl -X GET  "https://api.emotient.com/v1/analytics/${ID}/aggregate?interval=quarter&report=standard&format=json"  -H "Authorization: ${API_KEY}"
curl -X GET  "https://api.emotient.com/v1/analytics/${ID}/aggregate?interval=quarter&report=standard&format=csv"  -H "Authorization: ${API_KEY}"
# curl -X GET https://api.emotient.com/v1/analytics/${ID2}?format=csv -H "Authorization: ${API_KEY}"


# curl -X GET https://api.emotient.com/v1/media/${ID2} -H "Authorization: ${API_KEY}"

# curl "https://api.emotient.com/v1/media/${ID}" -H "Autization: ${API_KEY}"
