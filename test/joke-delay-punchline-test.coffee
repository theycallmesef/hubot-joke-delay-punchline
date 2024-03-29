Helper = require('hubot-test-helper')
chai = require 'chai'

expect = chai.expect

helper = new Helper('../src/joke-delay-punchline.coffee')

describe 'joke-delay-punchline', ->
  beforeEach ->
    @room = helper.createRoom()

  afterEach ->
    @room.destroy()

  it 'responds to tell me a joke', ->
    @room.user.say('alice', '@hubot tell me a joke').then =>
      expect(@room.messages).to.eql [
        ['alice', '@hubot tell me a joke']
        ['hubot', '@alice hello!']
      ]

  it 'hears orly', ->
    @room.user.say('bob', 'just wanted to say orly').then =>
      expect(@room.messages).to.eql [
        ['bob', 'just wanted to say orly']
        ['hubot', 'yarly']
      ]
