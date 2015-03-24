json.id @document.id
json.title @document.title
json.body @document.body
json.bodyHtml markdown(@document.body)
json.created_at @document.created_at
json.updated_at @document.updated_at
json.user @document.user


