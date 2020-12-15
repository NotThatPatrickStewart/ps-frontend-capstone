








//For adding click to user to add rating to db.json
const tryButtonClicked = (event) => {
    let userId = localStorage.getItem("app_user_id");

        console.log("userId", userId, "comparableId", event.target.id, "checked status", event.target.checked)

        if (event.target.checked) {
            addUserComparableId({
                comparableId: parseInt(event.target.id),
                userId: parseInt(userId)
            })
        } 
}