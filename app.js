function generatePassword() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-_"
  const passwordLength = 8
  let password = ""

  for (let i = 0; i <= passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomIndex, randomIndex + 1)
  }
  document.getElementById("password").value = password
}

function copyPassword() {
  const copyText = document.getElementById("password")
  copyText.select()
  copyText.setSelectionRange(0, 999)
  document.execCommand("copy")
}
