export default {
    data: () => ({
        voiceLoaded: false
    }),
    methods: {
        listen (text, lang = 'US') {
            if (!this.voiceLoaded) return
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
            this.voiceLoaded = true
        }
    }
}