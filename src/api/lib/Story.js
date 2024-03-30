import request from "../api";

const API_NAME = "Pyglot API"

export const getAllStories = async () => {
    try {
        const response = await request("get", "/stories");
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
        const response = await request("get", `/stories/${storyId}`);
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