import request from "../api";

const API_NAME = "Pyglot API"

export const getAllStories = async () => {
    try {
        const response = await fetch(`http://localhost:8000/stories/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response
    } catch (error) {
        if (error.response) {
            throw new Error(`${API_NAME}: ${error.response.data.message}`)
        }
        throw new Error(`${API_NAME}: ${error.message}`)        
    }
}

export const getStoryById = async (storyId) => {
    try {
        const response = await fetch(`http://localhost:8000/story/${storyId}`, {
            method: "GET",
        });
        return response
    } catch (error) {
        if (error.response) {
            throw new Error(`${API_NAME}: ${error.response.data.message}`)
        }
        throw new Error(`${API_NAME}: ${error.message}`)        
    }
}

export const createStory = async (data) => {
    try {
        // Set content type to multipart/form-data
        data.headers = {
            "Content-Type": "multipart/form-data"
        }
        const response = await request("post", `/stories`, data);
        return response
    } catch (error) {
        if (error.response) {
            throw new Error(`${API_NAME}: ${error.response.data.message}`)
        }
        throw new Error(`${API_NAME}: ${error.message}`)        
    }
}

export const updateStory = async (storyId, data) => {
    try {
        const response = await request("put", `/stories/${storyId}`, data);
        return response
    } catch (error) {
        if (error.response) {
            throw new Error(`${API_NAME}: ${error.response.data.message}`)
        }
        throw new Error(`${API_NAME}: ${error.message}`)        
    }
}

export const deleteStory = async (storyId) => {
    try {
        const response = await request("delete", `/stories/${storyId}`);
        return response
    } catch (error) {
        if (error.response) {
            throw new Error(`${API_NAME}: ${error.response.data.message}`)
        }
        throw new Error(`${API_NAME}: ${error.message}`)        
    }
}

export const getFile = async (fileId) => {
    try {
        const response = await fetch(`http://localhost:8000/file/${fileId}`, {
            method: "GET",
        });
        return response
    } catch (error) {
        if (error.response) {
            throw new Error(`${API_NAME}: ${error.response.data.message}`)
        }
        throw new Error(`${API_NAME}: ${error.message}`)
    }
}

export const getImage = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/resource/${id}`, {
            method: "GET",
        });
        return response
    } catch (error) {
        if (error.response) {
            throw new Error(`${API_NAME}: ${error.response.data.message}`)
        }
        throw new Error(`${API_NAME}: ${error.message}`)
    }
}