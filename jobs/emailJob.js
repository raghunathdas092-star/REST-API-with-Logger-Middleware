const sendEmail = (user) => {

setTimeout(() => {

console.log(
`Email sent successfully to ${user.email}`
);
}, 5000);
};

module.exports = sendEmail;
