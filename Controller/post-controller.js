

import Post from "../Schema/postSchema.js";

export const createPost = async (req, res) => {
    console.log(req.body);
    try {
        const post = await new Post(req.body);
        post.save();

        res.status(200).json('Data Saved');
    } catch (error) {
        res.status(500).json(error);
    }

}

export const getAllPosts = async (req, res) => {
    let Username = req.query.Username;
    let category = req.query.category;
    let posts;
    try {
        if (Username)
            posts = await Post.find({ Username: Username });
        else if (category)
            posts = await Post.find({ categories: category });
        else
            posts = await Post.find({});

        res.status(200).json(posts);


    } catch (error) {

        res.status(500).json(error);
    }
}


export const getPost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {

        res.status(500).json(error);
    }
}

export const updatePost = async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).res('post updated successfully');
    } catch (error) {

        res.status(500).json(error);
    }

}


export const deletePost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        await post.delete();
        res.status(200).res('post deleted successfully');
    } catch (error) {

        res.status(500).json(error);
    }

}