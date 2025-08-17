import { create } from 'zustand'

interface PortfolioState {
  theme: 'light' | 'dark' | 'colorful'
  currentSection: string
  isLoading: boolean
  skillsProgress: Record<string, number>
  setTheme: (theme: 'light' | 'dark' | 'colorful') => void
  setCurrentSection: (section: string) => void
  setLoading: (loading: boolean) => void
  updateSkillProgress: (skill: string, progress: number) => void
  animateSkills: () => void
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  theme: 'dark',
  currentSection: 'hero',
  isLoading: false,
  skillsProgress: {
    'React': 0,
    'Next.js': 0,
    'TypeScript': 0,
    'Python': 0,
    'AWS': 0,
    'Node.js': 0,
    'Prisma': 0,
    'PostgreSQL': 0,
  },
  setTheme: (theme) => set({ theme }),
  setCurrentSection: (section) => set({ currentSection: section }),
  setLoading: (loading) => set({ isLoading: loading }),
  updateSkillProgress: (skill, progress) => 
    set((state) => ({
      skillsProgress: { ...state.skillsProgress, [skill]: progress }
    })),
  animateSkills: () => {
    const skills = Object.keys(get().skillsProgress)
    const targetValues = {
      'React': 90,
      'Next.js': 85,
      'TypeScript': 80,
      'Python': 88,
      'AWS': 75,
      'Node.js': 82,
      'Prisma': 78,
      'PostgreSQL': 80,
    }
    
    skills.forEach((skill, index) => {
      setTimeout(() => {
        let progress = 0
        const target = targetValues[skill as keyof typeof targetValues] || 75
        const interval = setInterval(() => {
          progress += 2
          get().updateSkillProgress(skill, Math.min(progress, target))
          if (progress >= target) {
            clearInterval(interval)
          }
        }, 30)
      }, index * 200)
    })
  }
}))
