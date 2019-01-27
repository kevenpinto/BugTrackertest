require('babel-polyfill')
const m = require('mithril')
const {IssuesList, ViewIssue, CreateIssue, EditIssue, ToolbarContainer, CreateUser,UserEditor,AboutPage,DashboardList} = require('./views')
const {IssuesModel,UserModel, DashboardModel} = require('./viewmodels')

const issuesModel = new IssuesModel()
const userModel   = new UserModel()
const dashboardModel = new DashboardModel()

m.route(document.body, '/issues', {
  '/issues': {
    render(vnode) {
      return m(ToolbarContainer, m(IssuesList, {model: issuesModel}))
    }
  },
  '/issues/create': {
    render(vnode) {
      return m(ToolbarContainer, m(CreateIssue, {model: issuesModel}))
    }
  },
  '/issues/:issueId': {
    render(vnode) {
      return m(
        ToolbarContainer,
        (vnode.attrs.issueId === 'new')
        ? m(CreateIssue, {model: issuesModel})
        : m(ViewIssue, {model: issuesModel, issueId: vnode.attrs.issueId}))
    }
  },
  '/issues/:issueId/edit': {
    render(vnode) {
      return m(ToolbarContainer, m(EditIssue, {model: issuesModel, issueId: vnode.attrs.issueId}))
    }
  },
  '/Login': {
    render(vnode) {
      return m(ToolbarContainer, m(EditIssue, {model: issuesModel, issueId: vnode.attrs.issueId}))
    }
  },
  '/Register': {
    render(vnode) {
      return m(ToolbarContainer, m(CreateUser, {model: userModel}))
    }
  },
  '/About': {
    render(vnode) {
      return m(ToolbarContainer, m(AboutPage))
    }
  },
  '/Dashboard': {
    render(vnode) {
      return m(ToolbarContainer, m(DashboardList, {model: dashboardModel}))
   }
  }
})
