const authUser = ((req, res => {
    res.status(200).json({ message: "Auth User ting" })
}))

export { authUser }