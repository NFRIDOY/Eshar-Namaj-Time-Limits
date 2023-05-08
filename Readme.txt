Eshar-Namaj-Time-Limits

Algo:

eshaTimeHDiff = 11-eshaTimeH;
eshaTimeMDiff = 60-eshaTimeM;

FazarTimeH input
FazarTimeM input

DiffH = eshaTimeH + FazarTimeH;
DiffM = eshaTimeM + FazarTimeM;

DiffTTimeM = DiffH*60 + DiffM;

OneOf3 = DiffTTimeM/3; // 189/3 = 3.15

splitH = 3h;
splitM = .15 * 60;

firstOneOf3H = eshaTimeH + splitH;
firstOneOf3M = eshaTimeM + splitM;


