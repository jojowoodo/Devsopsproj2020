# Devsopsproj2020
Grupp projekt DevOps. Ivan, Atte, Jonas, Rebecca.



Här finns äventuella tilläggs detaljer om vårt projekt.



User Stories nedan:

Som konsument vill Rebecca ha en fungerande knapp som känns responsiv och ger ett snabbt resultat.


Jonas är av samma åsikt från användarens perspektiv, sidan måste fungera bra och vara lätt användbar samt responsiv.
Det som användaren också skulle uppskatta är att sidan/appen känns som om den har en mening och att man lätt förstår vad den handlar om, vad man kan göra på den och konkret vilken nytta man har av den. 
Den ska också vara lätt navigerbar om man har mycket information tillgängligt.

Del 1 av projektet fungerar som så: Vi har en build project i AWS Codebuild som är kopplad till vår github repo, denna buildar vår projekt på varje push och på varje pull request, efter att man gör en pull
request så buildar kollar den om projektet hade en succcessful build före den låter en mergea med master. Man måste även ha någon som reviewar din pull request pre-merge.


Del 2 av projektet fungerar riktigt bra fast vi först hade lite problem med buildpec.yml filen och hur vi skulle få appen att deploya.
Vår pipeline bygger appen och kopierar allt innehåll till en S3 Bucket (vi valde S3 istället för EC2 för vi förstod oss bättre på det).  Vår S3 Bucket och appen är publika.
Då vi började på del 2 gjorde vi först en S3 Bucket som vi senare kopplade till vår pipeline, pipelinen i sin tur är kopplad till GitHub varifrån den får sin source. Appen byggs med hjälp av AWS CodeBuild och som sista steg deployas alla filer och appen till vår S3 Bucket.
