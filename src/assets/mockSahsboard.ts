interface DashboardData {
    totalQuestions: number;
    totalCorrectAnswers: number;
    totalParticipants: number;
    averageScore: number;
}

export const dashboardData: DashboardData = {
    totalQuestions: 40,
    totalCorrectAnswers: 30,
    totalParticipants: 10,
    averageScore: 75,
};

interface RecentResult {
    subject: string;
    score: number;
}

export const recentResults: RecentResult[] = [
    { subject: "TypeScript", score: 75 },
    { subject: "GitHub", score: 80 },
    { subject: "Python", score: 60 },
];
