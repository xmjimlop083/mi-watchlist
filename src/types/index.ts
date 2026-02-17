export interface ContentItem {
    id?: string;
    title: string;
    type: 'Película' | 'Serie';
    platform: 'Netflix' | 'HBO Max' | 'Disney+' | 'Amazon Prime' | 'Cine' | 'Otro';
    rating: number;
    seen: boolean;
    imageURL: string;
}
