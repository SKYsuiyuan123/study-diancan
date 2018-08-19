const state = {
	currentUser: null,	// 用户名
	_id: null
}

const getters = {
	currentUser (state) {
		return state.currentUser
	}
}

const mutations = {
	userStatus (state, user) {
		// 更改用户信息
		if (user) {
			state.currentUser = user
			state.isLogin = true
		} else {
			state.currentUser = null
			state.isLogin = false
		}
	},
	idStatus (state, userId) {
		if (userId) {
			state._id = userId
		} else {
			state._id = null
		}
	}
}

// 应用 mutations
const actions = {
	setUser ({commit}, user) {
		commit('userStatus', user)
	},
	setUserId ({commit}, userId) {
		commit('idStatus', userId)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}