export default {
    methods: {
        listen (text, lang = 'US') {
            if (!this.$store.getters.voiceLoaded) return
            const voices = speechSynthesis.getVoices()
            const utterance = new SpeechSynthesisUtterance()
            if (lang === 'RU') {
                utterance.voice = voices[18]
            } else {
                utterance.voice = voices[4]
            }
            utterance.text = text
            speechSynthesis.speak(utterance)
        }
    },
    mounted () {
        speechSynthesis.onvoiceschanged = () => {
            this.$store.commit('voiceLoaded')
        }
    }
}